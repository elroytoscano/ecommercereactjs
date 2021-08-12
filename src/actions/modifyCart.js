import {
  INITIALIZE_CART,
  ADD_TO_CART,
  DECREASE_CART_ITEM,
  INCREASE_CART_ITEM,
  REMOVE_CART_ITEM,
  CALCULATE_TOTAL_AMOUNT,
} from '../data-management/actions'

export const InitializeCart = (cart) => {
  return { type: INITIALIZE_CART, payload: cart }
}

export const AddToCart = (item, cart) => {
  let cartItem = cart.find((cartItem) => cartItem.id === item.id)
  if (cartItem) {
    return { type: INCREASE_CART_ITEM, payload: item }
  } else {
    return { type: ADD_TO_CART, payload: item }
  }
}

export const IncreaseCartItemCount = (item) => {
  return { type: INCREASE_CART_ITEM, payload: item }
}

export const DecreaseCartItemCount = (item, cart) => {
  const cartItem = cart.find((cartItem) => cartItem.id === item.id)
  if (cartItem.amount === 1) {
    return { type: REMOVE_CART_ITEM, payload: item }
  } else {
    return { type: DECREASE_CART_ITEM, payload: item }
  }
}

export const RemoveCartItem = (item) => {
  return { type: REMOVE_CART_ITEM, payload: item }
}

export const CalculateTotalAmount = () => {
  return { type: CALCULATE_TOTAL_AMOUNT }
}
