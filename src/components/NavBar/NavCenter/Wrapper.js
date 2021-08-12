import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-container {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 5rem;
    transition: var(--transition);
  }
  .cart-count-container {
    position: relative;
    .cart-item-count {
      position: absolute;
      top: -0.85rem;
      right: -0.85rem;
      background: var(--clr-primary-5);
      width: 1.75rem;
      height: 1.75rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
      color: white;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`

export default Wrapper
