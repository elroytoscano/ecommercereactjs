import styled from 'styled-components'

const FilterWrapper = styled.div`
  .filters {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    .search-form {
      display: block;
      input {
        background-color: var(--clr-grey-10);
        border: none;
        padding: 0.5rem 0.75rem;
        border-radius: var(--radius);
        display: block;
        overflow: auto;
        display: block;
        text-transform: capitalize;
      }
      ::placeholder {
        letter-spacing: 0.125rem;
      }
    }
    h4 {
      letter-spacing: 0.25rem;
      font-weight: 600;
    }
    .btns-container {
      grid: flex;
      flex-direction: column;
      row-gap: 0.5rem;
      justify-content: flex-start;
      button {
        letter-spacing: var(--spacing);
        text-transform: capitalize;
        transition: var(--transition);
        border: none;
        background-color: transparent;
        display: block;
        padding: 0.5rem 0.5rem 0.5rem 0;
        color: var(--clr-grey-5);
        cursor: pointer;
        :hover {
          color: var(--clr-grey-1);
        }
      }
    }
    .range-form {
      margin-bottom: 1rem;
    }
    @media screen and (min-width: 768px) {
      position: sticky;
      top: 2rem;
    }
  }
`

export default FilterWrapper
