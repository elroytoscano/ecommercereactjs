import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinksWrapper = styled(Link)`
  display: inline-block;
  text-align: center;
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  &:hover {
    color: var(--clr-primary-5);
    background-color: white;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  }
`

export const ProductButtonsWrapper = styled(LinksWrapper)`
  background-color: var(--clr-primary-5);
  color: white;
  border: none;
  :hover {
    color: var(--clr-primary-5);
    background-color: white;
    border: 1px solid var(--clr-primary-5);
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  }
`
