import styled from 'styled-components'

const ItemWrapper = styled.article`
  transition: var(--transition);
  cursor: pointer;
  .img-container {
    position: relative;
    .icons-holder {
      transition: var(--transition);
      opacity: 0;
      position: absolute;
      width: 30%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: space-between;
      .link-holder {
        transition: var(--transition);
        background-color: var(--clr-primary-5);
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        display: grid;
        place-items: center;
        cursor: pointer;
        border: none;
        :hover {
          background-color: var(--clr-primary-7);
        }
      }
      .fade-left,
      .fade-right {
        font-size: 1.25rem;
        color: white;
      }
      .fade-left {
        left: 35%;
      }
      .fade-right {
        left: 65%;
      }
    }
    :hover {
      .icons-holder {
        opacity: 100%;
        transition: var(--transition);
      }
    }
  }
  img {
    height: 256px;
    width: 100%;
    object-fit: cover;
    border-radius: var(--radius);
    @media screen and (min-width: 992px) {
      height: 10rem;
    }
    @media screen and (min-width: 1200px) {
      height: 15rem;
    }
  }
  .item-info {
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
    p,
    h4 {
      font-size: 1rem;
      letter-spacing: 0.25rem;
    }
    p {
      margin-bottom: 0.25rem;
    }
  }
`
export default ItemWrapper
