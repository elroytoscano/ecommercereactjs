import React from 'react'
import styled from 'styled-components/macro'
import { connect } from 'react-redux'

import { ItemHolderWrapper } from '../../ItemHolder/ItemHolder'
import Item from '../../ItemHolder/Item'
import Filters from './Filters'
import { getProduct } from '../../../data-management/utils'
import { changeToProducts } from '../../../actions/changePage'

const ProductsContainer = (props) => {
  React.useEffect(() => {
    props.setProductPage()
  }, [])

  return (
    <Wrapper>
      <Filters />
      <ItemHolderWrapper
        css={`
          @media screen and (min-width: 992px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          @media screen and (min-width: 1170px) {
            grid-template-columns: repeat(3, 1fr);
          }
          margin: 0 0 2rem 0;
        `}
      >
        {props.products.map((productItem) => {
          const product = getProduct(productItem)
          return <Item item={product} key={product.id} />
        })}
      </ItemHolderWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 0 1.328125rem 2rem 1.328125rem;
  @media screen and (min-width: 768px) {
    padding: 2rem 3.2001875rem;
  }
  @media screen and (min-width: 1088px) {
    padding: 2rem 4.875rem;
  }
  @media screen and (min-width: 1400px) {
    padding: 2rem 8.4375rem;
  }
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.4fr 1.6fr;
  }
`

const mapStateToProps = (state) => {
  return { products: state.filterData.products }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProductPage: () => dispatch(changeToProducts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
