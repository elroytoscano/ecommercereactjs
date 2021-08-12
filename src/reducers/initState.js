import { close_cart, close_modal, HOME_PAGE } from '../data-management/actions'
import products from '../data-management/data'

export const initState = {
  currentPage: HOME_PAGE,
}

export const initialMenus = {
  modalStatus: close_modal,
  cartStatus: close_cart,
}

export const initialProduct = {
  productName: null,
}

export const initialCart = {
  cart: [],
  total: 0,
  amount: 0,
}

export const initialFilter = {
  products: products,
}
