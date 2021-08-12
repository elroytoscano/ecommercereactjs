import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import products from '../../../data-management/data'
import { getProduct, formatPrice } from '../../../data-management/utils'
import FilterWrapper from './FilterWrapper'
import {
  SearchFilter,
  ButtonFilter,
  SliderFilter,
} from '../../../actions/selectFilter.js'

const Filters = (props) => {
  const inputForm = useRef(null)
  const sliderFilter = useRef(null)
  const [filters, setFilters] = useState([])
  const [search, setSearch] = useState('')
  const [filterValue, setFilterValue] = useState(100)

  useEffect(() => {
    const maxValue = products.reduce((max, product) => {
      let newProduct = getProduct(product)
      if (newProduct.price > max) max = newProduct.price
      return max
    }, 0)
    const minValue = products.reduce((min, product) => {
      let newProduct = getProduct(product)
      if (newProduct.price < min) min = newProduct.price
      return min
    }, maxValue)
    sliderFilter.current.min = 0
    sliderFilter.current.max = maxValue + 1
    sliderFilter.current.value =
      (sliderFilter.current.min + sliderFilter.current.max) / 2
    setFilterValue((sliderFilter.current.min + sliderFilter.current.max) / 2)
    setFilters([
      'all',
      ...new Set(
        products.map((productItem) => getProduct(productItem).company)
      ),
    ])
  }, [])

  useEffect(() => {
    props.sliderFilter(filterValue)
  }, [filterValue])

  function handleSubmit(e) {
    e.preventDefault()
    setSearch(inputForm.current.value)
  }

  useEffect(() => {
    props.searchFilter(search)
  }, [search])

  return (
    <FilterWrapper>
      <div className='filters'>
        <form onSubmit={handleSubmit} className='search-form'>
          <input type='text' ref={inputForm} placeholder='search...' />
        </form>
        <div className='btns-container'>
          <h4>company</h4>
          {filters.length > 0 &&
            filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => {
                  props.buttonFilter(filter)
                  setSearch('')
                  inputForm.current.value = ''
                }}
              >
                {filter}
              </button>
            ))}
        </div>
        <div>
          <h4>price</h4>
          <form
            onSubmit={(e) => e.target.preventDefault()}
            className='range-form'
          >
            <input
              type='range'
              ref={sliderFilter}
              onInput={(e) => setFilterValue(e.target.value)}
            />
            <p>{`Value:$${parseInt(filterValue / 100)}`}</p>
          </form>
        </div>
      </div>
    </FilterWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchFilter: (str) => dispatch(SearchFilter(str)),
    buttonFilter: (str) => dispatch(ButtonFilter(str)),
    sliderFilter: (str) => dispatch(SliderFilter(str)),
  }
}

export default connect(null, mapDispatchToProps)(Filters)
