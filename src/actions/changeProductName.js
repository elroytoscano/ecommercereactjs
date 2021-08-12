import { GET_PRODUCT } from '../data-management/actions'

const changeProductName = (name) => {
  return { type: GET_PRODUCT, payload: name }
}

export default changeProductName
