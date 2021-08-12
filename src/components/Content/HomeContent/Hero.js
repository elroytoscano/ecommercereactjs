import React from 'react'
import { connect } from 'react-redux'

import HeroWrapper from './HeroWrapper'
import HeroInfo from './HeroInfo'
import { LinksWrapper } from '../../Buttons/LinkButtons'
import { changeToProducts } from '../../../actions/changePage'

const Hero = (props) => {
  return (
    <HeroWrapper>
      <HeroInfo>
        <h1>rest,relax and unwind</h1>
        <h3>embrace your choices, we do!</h3>
        <LinksWrapper onClick={props.productsPage} to='/products'>
          shop now
        </LinksWrapper>
      </HeroInfo>
    </HeroWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { productsPage: () => dispatch(changeToProducts()) }
}

export default connect(null, mapDispatchToProps)(Hero)
