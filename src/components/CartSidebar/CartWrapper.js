import styled from 'styled-components'

const CartWrapper = styled.div`
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    transition: var(--transition);
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    z-index: -99;
    display: flex;
    justify-content: flex-end;
    .cart {
      text-align: center;
      transition: var(--transition);
      position: relative;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      max-width: 400px;
      background-color: var(--clr-grey-10);
      padding: 3rem 2rem;
      display: grid;
      grid-template-rows: auto 1fr auto;
      transform: translateX(100%);
      overflow: scroll;
      footer {
        h3 {
          margin-bottom: 2rem;
        }
        button {
          width: 50%;
          color: white;
          background-color: var(--clr-primary-5);
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
          text-transform: uppercase;
          cursor: pointer;
          :hover {
            color: var(--clr-grey-1);
            background-color: var(--clr-primary-7);
          }
        }
      }
    }
  }
  .overlay.open-cart {
    opacity: 1;
    z-index: 99;
  }
  .open-cart .cart {
    transform: translateX(0);
  }
`
export default CartWrapper
