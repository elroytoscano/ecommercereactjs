import { initialFilter } from '../reducers/initState'
import { SEARCH_FILTER, BUTTON_FILTER, SLIDER_FILTER } from './actions'
import products from './data'
import { getProduct } from './utils'

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case SEARCH_FILTER:
      if (action.payload === '') return { ...initialFilter }
      else {
        return {
          ...initialFilter,
          products: products.filter(
            (product) =>
              getProduct(product).name.startsWith(action.payload) && product
          ),
        }
      }
    case BUTTON_FILTER:
      if (action.payload === 'all') return { ...initialFilter }
      else {
        return {
          ...initialFilter,
          products: products.filter(
            (product) => getProduct(product).company === action.payload
          ),
        }
      }
    case SLIDER_FILTER:
      if (action.payload === 0) return { ...initialFilter }
      else
        return {
          ...initialFilter,
          products: products.filter(
            (product) => getProduct(product).price < action.payload
          ),
        }
  }
  return state
}

export default filterReducer
