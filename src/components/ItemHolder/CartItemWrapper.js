import styled from 'styled-components'

const CartWrapper = styled.div`
  article {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 1.5rem;
    align-items: center;
    img {
      width: 75px;
      height: 50px;
      object-fit: cover;
      border-radius: 0.25rem;
    }
    .item-info {
      h4 {
        margin-bottom: 0.15rem;
        font-size: 0.875rem;
      }
      p {
        margin-bottom: 0;
        font-size: 0.75rem;
        color: var(--clr-grey-3);
      }
      .remove-btn {
        background: transparent;
        border-color: transparent;
        color: var(--clr-grey-5);
        letter-spacing: var(--spacing);
        cursor: pointer;
      }
    }
    .item-count {
      p {
        margin-bottom: 0;
        text-align: center;
        color: var(--clr-grey-3);
        line-height: 1;
      }
      button {
        padding: 0;
      }
    }
  }
`

export default CartWrapper
