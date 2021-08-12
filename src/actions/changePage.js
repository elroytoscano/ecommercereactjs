import {
  HOME_PAGE,
  ABOUT_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_PAGE,
  ERROR_PAGE,
} from '../data-management/actions'

export const changeToProducts = () => {
  return { type: PRODUCTS_PAGE }
}
export const changeToAbout = () => {
  return { type: ABOUT_PAGE }
}
export const changeToHome = () => {
  return { type: HOME_PAGE }
}
export const changeToProduct = () => {
  return { type: PRODUCT_PAGE }
}
export const changeToError = () => {
  return { type: ERROR_PAGE }
}
