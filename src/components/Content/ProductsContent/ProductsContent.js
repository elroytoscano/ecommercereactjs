import React from 'react'

import BaseWrapper from '../CommonContent/BaseWrapper'
import TitleElement from '../CommonContent/OtherBaseContent'
import ProductsContainer from './ProductsContainer'

const ProductsContent = () => {
  return (
    <>
      <BaseWrapper>
        <TitleElement />
        <ProductsContainer />
      </BaseWrapper>
    </>
  )
}

export default ProductsContent
