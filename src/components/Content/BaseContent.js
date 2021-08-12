import styled from 'styled-components'
import React from 'react'

export const BaseContent = ({ children }) => {
  return (
    <BaseWrapper>
      <SubWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </SubWrapper>
    </BaseWrapper>
  )
}

export const BaseWrapper = styled.div`
  height: 100%;
`

export const SubWrapper = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  height: 100%;
`

const ContentWrapper = styled.div`
  padding: 4rem 0;
`
