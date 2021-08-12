import styled from 'styled-components/macro'
import React from 'react'
import { connect } from 'react-redux'

import { HOME_PAGE } from '../../../data-management/actions'
import NavLinks from '../NavLink/NavLinks'
import logoWhite from '../../../images/logo-white.svg'
import logoBlack from '../../../images/logo-black.svg'
import { FaShoppingCart } from 'react-icons/fa'
import Wrapper from './Wrapper'
import { OpenCart } from '../../../actions/toggleMenus'
import { changeToHome } from '../../../actions/changePage'
import StyledLink from '../../Buttons/StyledLink'
import { InitializeCart } from '../../../actions/modifyCart'
import { getItem } from '../../../data-management/utils'

const NavCenter = (props) => {
  React.useEffect(() => {
    props.initCart(getItem('cart'))
  }, [])

  return (
    <Wrapper>
      <NavLinks />
      <StyledLink
        to='/'
        currentpage={props.currentPage}
        onClick={props['homePage']}
      >
        <img
          src={
            props.currentPage.currentPage === HOME_PAGE ? logoWhite : logoBlack
          }
          alt='logo'
          className='logo-container'
        />
      </StyledLink>
      <div className='cart-count-container'>
        <StyledCart page={props.currentPage} onClick={props.openCart} />
        <span className='cart-item-count'>{props.amount}</span>
      </div>
    </Wrapper>
  )
}

const StyledCart = styled(FaShoppingCart)`
  transition: var(--transition);
  cursor: pointer;
  color: ${({ page }) => {
    return page.currentPage === HOME_PAGE ? 'white' : `var(--clr-grey-1)`
  }};
  :hover {
    color: var(--clr-primary-5);
  }
  font-size: 2.25rem;
`

const mapStateToProps = (store) => {
  return { currentPage: store.currentPage, amount: store.cartData.amount }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openCart: () => dispatch(OpenCart()),
    homePage: () => dispatch(changeToHome()),
    initCart: (cart) => dispatch(InitializeCart(cart)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavCenter)
