import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HOME_PAGE } from '../../data-management/actions'

const StyledLink = styled(Link)`
  transition: var(--transition);
  font-family: var(--ff-secondary);
  letter-spacing: 0.125rem;
  text-transform: capitalize;
  display: inline-block;
  font-weight: 400;
  font-size: 1.25rem;
  color: ${({ currentpage }) => {
    return currentpage.currentPage === HOME_PAGE ? 'white' : `var(--clr-grey-1)`
  }};
  :hover {
    color: var(--clr-primary-5);
  }  
`

export default StyledLink
