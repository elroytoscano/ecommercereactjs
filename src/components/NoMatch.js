import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

import { changeToHome, changeToError } from '../actions/changePage'
import { ProductButtonsWrapper } from './Buttons/LinkButtons'

const NoMatch = (props) => {
  React.useEffect(() => {
    props.error()
  }, [])

  return (
    <div
      css={`
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
      `}
    >
      <ProductButtonsWrapper to={'/'} onClick={props.home()}>
        back home
      </ProductButtonsWrapper>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { currentpage: state.currentPage }
}

const mapDispatchToProps = (dispatch) => {
  return {
    home: () => dispatch(changeToHome()),
    error: () => dispatch(changeToError()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoMatch)
