import {
  open_modal,
  close_modal,
  open_cart,
  close_cart,
} from '../data-management/actions'

export const OpenModal = () => {
  console.log('open modal')
  return {
    type: open_modal,
  }
}
export const CloseModal = () => {
  console.log('close')
  return {
    type: close_modal,
  }
}
export const OpenCart = () => {
  return {
    type: open_cart,
  }
}
export const CloseCart = () => {
  return {
    type: close_cart,
  }
}
