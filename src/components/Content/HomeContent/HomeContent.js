import styled from 'styled-components/macro'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { BaseContent } from '../BaseContent'
import Item from '../../ItemHolder/Item'
import { ItemHolder } from '../../ItemHolder/ItemHolder'
import { ProductButtonsWrapper } from '../../Buttons/LinkButtons'
import { changeToProduct, changeToProducts } from '../../../actions/changePage'
import products from '../../../data-management/data'
import { getProduct } from '../../../data-management/utils'

const HomeContent = (props) => {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    setFeatured([
      ...new Set(products.filter((product) => product.fields.featured)),
    ])
  }, [])

  return (
    <BaseContent>
      <HomeContentWrapper
        css={`
          text-align: center;
        `}
      >
        <h2>featured</h2>
        <ItemHolder>
          {featured.map((item) => {
            const product = getProduct(item)
            return <Item item={product} key={product.id} />
          })}
        </ItemHolder>
        <ProductButtonsWrapper
          css={`
            margin-top: 0.75rem;
          `}
          to='/products'
          onClick={props.productsPage}
        >
          all products
        </ProductButtonsWrapper>
      </HomeContentWrapper>
    </BaseContent>
  )
}

const HomeContentWrapper = styled.section`
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.125rem;
  }
`

const mapDispatchToProps = (dispatch) => {
  return {
    productsPage: () => dispatch(changeToProducts()),
    productPage: () => dispatch(changeToProduct()),
  }
}

export default connect(null, mapDispatchToProps)(HomeContent)
