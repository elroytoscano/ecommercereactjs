import {
  BUTTON_FILTER,
  SEARCH_FILTER,
  SLIDER_FILTER,
} from '../data-management/actions'

export const ButtonFilter = (companyName) => {
  return { type: BUTTON_FILTER, payload: companyName }
}

export const SearchFilter = (search) => {
  return { type: SEARCH_FILTER, payload: search }
}

export const SliderFilter = (sliderValue) => {
  return { type: SLIDER_FILTER, payload: sliderValue }
}
