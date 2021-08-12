import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'

import { BaseWrapper } from '../BaseContent'
import PageName from './PageName'
import { PRODUCT_PAGE } from '../../../data-management/actions'
import { getItem } from '../../../data-management/utils'
import changeProductName from '../../../actions/changeProductName'

const TitleElement = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.page.currentPage])

  return (
    <BaseWrapper>
      <StyledHeader>
        {props.page.currentPage === PRODUCT_PAGE ? (
          props.current_product ? (
            <h3>{`home/${props.current_product}`}</h3>
          ) : (
            <h3>{`home/${getItem('product')}`}</h3>
          )
        ) : (
          <h3>{`home/${PageName(props.page.currentPage)}`}</h3>
        )}
      </StyledHeader>
    </BaseWrapper>
  )
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--clr-grey-10);
  height: 8rem;
  padding: 2rem 1.328125rem;
  @media screen and (min-width: 768px) {
    padding: 2rem 3.2001875rem;
  }
  @media screen and (min-width: 1088px) {
    padding: 2rem 4.875rem;
  }
  @media screen and (min-width: 1400px) {
    padding: 2rem 8.4375rem;
  }
  width: 100vw;
  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: 0.25rem;
    color: var(--clr-grey-);
  }
`

const mapStateToProps = (state) => {
  return {
    page: state.currentPage,
    current_product: state.currentProduct.productName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProductName: (name) => dispatch(changeProductName(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleElement)
