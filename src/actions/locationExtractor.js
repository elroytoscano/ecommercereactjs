import {
  ABOUT_PAGE,
  HOME_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_PAGE,
} from '../data-management/actions'

const locationExtractor = (str) => {
  if (str === '/') {
    return HOME_PAGE
  } else if (str === '/about') return ABOUT_PAGE
  else if (str === '/products') return PRODUCTS_PAGE
  else if (str.includes('/product?id')) return PRODUCT_PAGE
}

export default locationExtractor
