import styled from 'styled-components'

const ProductContentWrapper = styled.div`
  .single-product-center {
    margin: 2rem auto;
    display: grid;
    gap: 1rem 2rem;
    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
    .single-product-img {
      width: 100%;
      height: 25rem;
      border-radius: var(--radius);
      object-fit: cover;
    }
    .single-product-company {
      font-size: 1.2rem;
      color: var(--clr-grey-8);
      text-transform: uppercase;
      letter-spacing: var(--spacing);
      margin-bottom: 1.25rem;
    }
    .single-product-price {
      color: var(--clr-grey-3);
      font-size: 1.25rem;
      font-weight: 500;
    }

    .product-color {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin: 0.5rem 0.5rem 1.5rem 0;
    }

    .single-product-desc {
      max-width: 25em;
      line-height: 1.8;
    }
  }
`

export default ProductContentWrapper
