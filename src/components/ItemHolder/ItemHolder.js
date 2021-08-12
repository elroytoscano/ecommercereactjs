import React from 'react'
import styled from 'styled-components'

export const ItemHolder = ({ children }) => {
  return <ItemHolderWrapper>{children}</ItemHolderWrapper>
}

export const ItemHolderWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 2.5rem;
  margin: 2rem 0;
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`
