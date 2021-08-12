import React from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  changeToProducts,
  changeToHome,
  changeToAbout,
} from '../../../actions/changePage'
import locationExtractor from '../../../actions/locationExtractor'
import NavLinkWrapper from './NavLink'
import BackButton from '../../Buttons/BackButton'

const NavLinks = (props) => {
  BackButton(props, locationExtractor(useLocation().pathname))
  return <NavLinkWrapper props={props} />
}

const mapStateToProps = (store) => {
  return {
    currentPage: store.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productsPage: () => dispatch(changeToProducts()),
    homePage: () => dispatch(changeToHome()),
    aboutPage: () => dispatch(changeToAbout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks)
