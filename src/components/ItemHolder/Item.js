import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ItemWrapper from './ItemWrapper'
import { formatPrice, setItem } from '../../data-management/utils'
import { changeToProduct } from '../../actions/changePage'
import changeProductName from '../../actions/changeProductName'
import { OpenCart } from '../../actions/toggleMenus'
import { AddToCart } from '../../actions/modifyCart'

const Item = (props) => {
  const { image, name, id, price } = props.item
  return (
    <ItemWrapper>
      <div className='img-container'>
        <img src={image} alt={name} />
        <div className='icons-holder'>
          <Link
            className='link-holder'
            data-id={id}
            to={`/product/${id}`}
            onClick={() => {
              props.productPage()
              props.productName(name)
              setItem('product', name)
            }}
          >
            <FaSearch className='fade-left' />
          </Link>
          <button
            className='link-holder'
            onClick={() => {
              props.openCart()
              props.addToCart(props.item, props.cart)
            }}
          >
            <FaShoppingCart className='fade-right' />
          </button>
        </div>
      </div>
      <div className='item-info'>
        <p>{name}</p>
        <h4>{formatPrice(price)}</h4>
      </div>
    </ItemWrapper>
  )
}

const mapStateToProps = (state) => {
  return { cart: state.cartData.cart }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productPage: () => dispatch(changeToProduct()),
    productName: (name) => dispatch(changeProductName(name)),
    openCart: () => dispatch(OpenCart()),
    addToCart: (item, cart) => dispatch(AddToCart(item, cart)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
