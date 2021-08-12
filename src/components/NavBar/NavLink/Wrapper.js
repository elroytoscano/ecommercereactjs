import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 2rem;
  transition: var(--transition);
  .menu-toggle {
    transition: var(--transition);
    color: white;
    display: inline-block;
    @media (min-width: 900px) {
      display: none;
    }
  }
  .links-container {
    transition: var(--transition);
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
      display: none;
    }
  }
`

export default Wrapper
