export const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
export const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
}

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key) => {
  let obj = localStorage.getItem(key)
  return obj ? JSON.parse(obj) : []
}

export const getProduct = (product) => {
  const {
    id,
    fields: { price, name, image, company, colors },
  } = product

  const {
    thumbnails: {
      large: { url },
    },
  } = image[0]
  return {
    id,
    price,
    name,
    image: url,
    company,
    colors,
    amount: 1,
  }
}
