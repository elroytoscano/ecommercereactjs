import {
  HOME_PAGE,
  ABOUT_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_PAGE,
  ERROR_PAGE,
} from './actions'
import { initState } from '../reducers/initState'

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case HOME_PAGE:
      return { ...state, currentPage: HOME_PAGE }
    case ABOUT_PAGE:
      return { ...state, currentPage: ABOUT_PAGE }
    case PRODUCTS_PAGE:
      return { ...state, currentPage: PRODUCTS_PAGE }
    case PRODUCT_PAGE:
      return { ...state, currentPage: PRODUCT_PAGE }
    case ERROR_PAGE:
      return { ...state, currentPage: ERROR_PAGE }
  }
  return state
}

export default pageReducer
