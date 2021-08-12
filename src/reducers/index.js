import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import pageReducer from '../data-management/pageReducer'
import submenuReducer from '../data-management/submenuReducer'
import productReducer from '../data-management/productReducer'
import cartReducer from '../data-management/cartReducer'
import filterReducer from '../data-management/filterReducer'

const rootReducer = (history) =>
  combineReducers({
    currentPage: pageReducer,
    menuStatus: submenuReducer,
    currentProduct: productReducer,
    cartData: cartReducer,
    filterData: filterReducer,
    router: connectRouter(history),
  })

export default rootReducer
