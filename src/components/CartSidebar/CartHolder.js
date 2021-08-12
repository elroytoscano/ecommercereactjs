import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'

import StyledCloseBtn from '../Buttons/CloseBtn'
import CartWrapper from './CartWrapper'
import { CloseCart } from '../../actions/toggleMenus'
import { open_cart, close_cart } from '../../data-management/actions'
import CartItem from '../ItemHolder/CartItem'
import { CalculateTotalAmount } from '../../actions/modifyCart'
import { formatPrice } from '../../data-management/utils'
import { setItem } from '../../data-management/utils'

const CartHolder = (props) => {
  const sectionCart = useRef(null)
  useEffect(() => {
    switch (props.cartstatus) {
      case open_cart:
        OpenCart()
        break
      case close_cart:
        CloseCart()
        break
    }
  }, [props.cartstatus])

  useEffect(() => {
    props.calculateTotalAmount()
    setItem('cart', props.cart.cart)
  }, [props.cart.cart])

  function OpenCart() {
    sectionCart.current.classList.add('open-cart')
  }

  function CloseCart() {
    sectionCart.current.classList.remove('open-cart')
  }

  return (
    <CartWrapper>
      <aside ref={sectionCart} className='overlay'>
        <div className='cart'>
          <StyledCloseBtn
            css={`
              top: 0.75rem;
              left: 0.75rem;
              z-index: inherit;
            `}
            onClick={props.closeCart}
          />
          <header>
            <h3>your cart</h3>
          </header>
          <div className='cart-items'>
            {props.cart.cart.map((cartItem) => {
              return <CartItem key={cartItem.id} cartItem={cartItem} />
            })}
          </div>
          <footer>
            <h3>{`total amount:${formatPrice(props.cart.total)}`}</h3>
            <button>checkout</button>
          </footer>
        </div>
      </aside>
    </CartWrapper>
  )
}

const mapStateToProps = (state) => {
  return { cartstatus: state.menuStatus.cartStatus, cart: state.cartData }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeCart: () => dispatch(CloseCart()),
    calculateTotalAmount: () => dispatch(CalculateTotalAmount()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartHolder)
