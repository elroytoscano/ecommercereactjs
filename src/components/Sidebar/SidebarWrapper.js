import styled from 'styled-components'

const SidebarWrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 1000%;
  width: 100vw;
  height: 100vh;
  transition: var(--transition);
  z-index: 99;
  background: transparent;
  .open-modal {
    transition: var(--transition);
    position: fixed;
    width: 100vw;
    height: 100vh;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: auto;
    background-attachment: scroll;
    display: grid;
    place-items: center;
    .inner-modal {
      transition: var(--transition);
      position: relative;
      background-color: var(--clr-grey-10);
      color: var(--clr-grey-1);
      border-radius: 1rem;
      width: calc(90vw - 1rem);
      max-width: 556px;
      height: calc(90vh - 1rem);
      display: grid;
      place-items: center;
      .holder {
        width: 100%;
        display: grid;
        place-items: center;
      }
    }
  }
`

export default SidebarWrapper
