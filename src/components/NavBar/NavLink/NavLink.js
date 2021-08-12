import styled from 'styled-components'
import { connect } from 'react-redux'
import { FaBars } from 'react-icons/fa'

import { HOME_PAGE } from '../../../data-management/actions'
import StyledLink from '../../Buttons/StyledLink'
import Wrapper from './Wrapper'
import BackButton from '../../Buttons/BackButton'
import { useLocation } from 'react-router'
import locationExtractor from '../../../actions/locationExtractor'
import LinksData from '../../../data-management/linksData'
import { OpenModal } from '../../../actions/toggleMenus'

const NavLink = ({ props, openModal }) => {
  BackButton(props, locationExtractor(useLocation().pathname))
  return (
    <Wrapper>
      <div className='links-container'>
        {LinksData.map(({ id, path, textContent, clickPage }) => {
          return (
            <StyledLink
              key={id}
              to={path}
              currentpage={props.currentPage}
              onClick={props[clickPage]}
            >
              {textContent}
            </StyledLink>
          )
        })}
      </div>
      <div className='menu-toggle'>
        <StyledFaBars page={props.currentPage} onClick={openModal} />
        <div className='show-menu'></div>
      </div>
    </Wrapper>
  )
}

const StyledFaBars = styled(FaBars)`
  transition: var(--transition);
  cursor: pointer;
  color: ${({ page }) => {
    return page.currentPage === HOME_PAGE ? 'white' : `var(--clr-grey-1)`
  }};
  :hover {
    color: var(--clr-primary-5);
  }
`

const mapStateToProps = (state) => {
  return { page: state.currentPage }
}

const mapDispatchToProps = (dispatch) => {
  return { openModal: () => dispatch(OpenModal()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLink)
