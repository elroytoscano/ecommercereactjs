import {
  HOME_PAGE,
  ABOUT_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_PAGE,
} from '../../../data-management/actions'

const PageName = (pageName) => {
  switch (pageName) {
    case HOME_PAGE:
      return 'home'
    case ABOUT_PAGE:
      return 'about'
    case PRODUCTS_PAGE:
      return 'products'
    case PRODUCT_PAGE:
      return 'product'
  }
}

export default PageName
