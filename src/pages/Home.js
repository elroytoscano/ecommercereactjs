import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Hero from '../components/Content/HomeContent/Hero'
import HomeContent from '../components/Content/HomeContent/HomeContent'

const Home = () => {
  return (
    <>
      <Holder>
        <Hero />
        <HomeContent />
      </Holder>
    </>
  )
}

const Holder = styled.section`
  min-width: 100vw;
  min-height: 100vh;
`

const mapStateToProps = (state) => {
  return { currentPage: state.currentPage }
}

export default connect(mapStateToProps, null)(Home)
