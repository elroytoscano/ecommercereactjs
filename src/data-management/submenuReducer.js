import { initialMenus } from '../reducers/initState'
import { close_cart, close_modal, open_cart, open_modal } from './actions'

const submenuReducer = (state = initialMenus, action) => {
  switch (action.type) {
    case open_modal:
      return { ...state, modalStatus: open_modal }
    case close_modal:
      return { ...state, modalStatus: close_modal }
    case open_cart:
      return {
        ...state,
        cartStatus: open_cart,
      }
    case close_cart:
      return {
        ...state,
        cartStatus: close_cart,
      }
    default:
      return state
  }
}

export default submenuReducer
