import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

import { BaseWrapper, SubWrapper } from '../BaseContent'
import ProductContentWrapper from './ProductContentWrapper'
import { ProductButtonsWrapper } from '../../Buttons/LinkButtons'
import { changeToProduct, changeToProducts } from '../../../actions/changePage'
import { useParams } from 'react-router'
import products from '../../../data-management/data'
import { getProduct, formatPrice } from '../../../data-management/utils'
import { AddToCart } from '../../../actions/modifyCart'
import { OpenCart } from '../../../actions/toggleMenus'

const ProductContainer = (props) => {
  const { id } = useParams()
  React.useEffect(() => {
    props.product()
  }, [])

  let product = getProduct(
    products.find((productItem) => productItem.id === id)
  )

  const { image, name, price, company, colors } = product
  return (
    <BaseWrapper>
      <SubWrapper
        css={`
          @media screen and (min-width: 1088px) {
            margin: 0;
            padding: 2rem 4.875rem;
          }
        `}
      >
        <ProductContentWrapper
          css={`
            @media screen and (max-width: 768px) {
              padding: 2rem 0.7998125rem;
            }
            @media screen and (max-width: 425px) {
              padding: 2rem 0rem;
            }
          `}
        >
          <div className='single-product-center'>
            <img
              src={image}
              alt={`${name}`}
              className='single-product-img img'
            />
            <article className='single-product-info'>
              <div>
                <h2 className='single-product-title'>{name}</h2>
                <p className='single-product-company text-slanted'>{company}</p>
                <p className='single-product-price'>{formatPrice(price)}</p>
                <div className='single-product-colors'>
                  {colors.map((color, index) => {
                    return (
                      <span
                        key={index}
                        className='product-color'
                        css={`
                          background-color: ${color};
                        `}
                      ></span>
                    )
                  })}
                </div>
                <p className='single-product-desc'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum, eveniet adipisci. Vero, facere vel quisquam dolore
                  quidem sunt pariatur magnam?
                </p>
                <div className='button-container'>
                  <button
                    css={`
                    cursor:poin
                      margin-right: 2rem;
                      display: inline-block;
                      text-align: center;
                      transition: var(--transition);
                      text-transform: uppercase;
                      letter-spacing: 0.125rem;
                      background-color: transparent;
                      color: white;
                      border: 1px solid white;
                      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
                      box-sizing: border-box;
                      padding: 0.5rem 1rem;
                      border-radius: 0.25rem;
                      &:hover {
                        color: var(--clr-primary-5);
                        background-color: white;
                        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
                      }
                      background-color: var(--clr-primary-5);
                      color: white;
                      border: none;
                      padding-top: 9px;
                      :hover {
                        color: var(--clr-primary-5);
                        background-color: white;
                        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
                      }
                    `}
                    onClick={() => {
                      props.openCart()
                      props.addToCart(product, props.cart)
                    }}
                  >
                    add to cart
                  </button>
                  <ProductButtonsWrapper
                    to={`/products`}
                    onClick={props.products}
                  >
                    back to products
                  </ProductButtonsWrapper>
                </div>
              </div>
            </article>
          </div>
        </ProductContentWrapper>
      </SubWrapper>
    </BaseWrapper>
  )
}

const mapStateToProps = (state) => {
  return { currentpage: state.currentPage, cart: state.cartData.cart }
}

const mapDispatchToProps = (dispatch) => {
  return {
    products: () => dispatch(changeToProducts()),
    product: () => dispatch(changeToProduct()),
    openCart: () => dispatch(OpenCart()),
    addToCart: (item, cart) => dispatch(AddToCart(item, cart)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
