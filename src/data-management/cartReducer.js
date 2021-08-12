import { initialCart } from '../reducers/initState'
import {
  INITIALIZE_CART,
  ADD_TO_CART,
  CALCULATE_TOTAL_AMOUNT,
  DECREASE_CART_ITEM,
  INCREASE_CART_ITEM,
  REMOVE_CART_ITEM,
} from './actions'

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case INITIALIZE_CART:
      return { ...initialCart, cart: action.payload }
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      }
    case INCREASE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, amount: cartItem.amount + 1 }
          }
          return cartItem
        }),
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }
    case DECREASE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
          return cartItem
        }),
      }
    case CALCULATE_TOTAL_AMOUNT:
      let value = state.cart.reduce(
        (value, cartItem) => {
          value.amount += cartItem.amount
          value.total += cartItem.price * cartItem.amount
          return value
        },
        {
          total: 0,
          amount: 0,
        }
      )
      return { ...state, amount: value.amount, total: value.total }
  }
  return state
}

export default cartReducer
