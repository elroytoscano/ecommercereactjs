import {
  ABOUT_PAGE,
  HOME_PAGE,
  PRODUCTS_PAGE,
  PRODUCT_PAGE,
} from '../../data-management/actions'

function BackButton(props, location) {
  return (window.onpopstate = () => {
    switch (location) {
      case HOME_PAGE:
        return props.homePage()
      case ABOUT_PAGE:
        return props.aboutPage()
      case PRODUCTS_PAGE:
        return props.productsPage()
      case PRODUCT_PAGE:
        return props.productPage()
    }
  })
}

export default BackButton
