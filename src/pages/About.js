import React from 'react'

import StyledHeader from '../components/Content/CommonContent/OtherBaseContent'
import AboutContent from '../components/Content/AboutContent'
import BaseWrapper from '../components/Content/CommonContent/BaseWrapper'

const About = () => {
  return (
    <>
      <BaseWrapper>
        <StyledHeader />
        <AboutContent />
      </BaseWrapper>
    </>
  )
}

export default About
