import { initialProduct } from '../reducers/initState'
import { GET_PRODUCT } from './actions'

const productReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, productName: action.payload }
  }
  return state
}

export default productReducer
