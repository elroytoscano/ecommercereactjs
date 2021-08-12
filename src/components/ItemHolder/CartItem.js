import React from 'react'
import { connect } from 'react-redux'

import CartWrapper from './CartItemWrapper'
import { StyledIncreaseBtn, StyledDecreaseBtn } from '../Buttons/ItemCountBtn'
import { formatPrice } from '../../data-management/utils'
import {
  IncreaseCartItemCount,
  DecreaseCartItemCount,
  RemoveCartItem,
} from '../../actions/modifyCart'

const CartItem = (props) => {
  const { id, price, name, amount, image } = props.cartItem
  const item = props.cart.find((cartItem) => cartItem.id === id)
  return (
    <CartWrapper>
      <article>
        <img src={image} alt='name' className='cart-item-img' />
        <div className='item-info'>
          <h4>{name}</h4>
          <p>{formatPrice(price)}</p>
          <button
            className='remove-btn'
            onClick={() => props.removeCartItem(item)}
          >
            remove
          </button>
        </div>

        <div className='item-count'>
          <button onClick={() => props.increaseCartItemCount(item)}>
            <StyledIncreaseBtn />
          </button>
          <p>{amount}</p>
          <button onClick={() => props.decreaseCartItemCount(item, props.cart)}>
            <StyledDecreaseBtn />
          </button>
        </div>
      </article>
    </CartWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartData.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCartItemCount: (item) => dispatch(IncreaseCartItemCount(item)),
    decreaseCartItemCount: (item, cart) =>
      dispatch(DecreaseCartItemCount(item, cart)),
    removeCartItem: (item) => dispatch(RemoveCartItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
