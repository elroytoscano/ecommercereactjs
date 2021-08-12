import styled from 'styled-components/macro'

const Nav = styled.nav`
  padding: 2rem 1.328125rem;
  @media screen and (min-width: 768px) {
    padding: 2rem 3.2001875rem;
  }
  @media screen and (min-width: 1088px) {
    padding: 2rem 4.875rem;
  }
  @media screen and (min-width: 1400px) {
    padding: 2rem 8.4375rem;
  }
  transition: var(--transition);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  z-index: 0;
`

export default Nav
