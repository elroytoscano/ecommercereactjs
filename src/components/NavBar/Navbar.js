import React from 'react'
import { connect } from 'react-redux'

import NavCenter from './NavCenter/NavCenter'
import Nav from './Nav'

const Navbar = (props) => {
  return (
    <Nav page={props.currentPage}>
      <NavCenter />
    </Nav>
  )
}

const mapPropsToState = (state) => {
  return { currentPage: state.currentPage.currentPage }
}

export default connect(mapPropsToState)(Navbar)
