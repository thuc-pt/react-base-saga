import * as modalTypes from '../constants/modal';

var initialState = {
  isOpen: false
}

const modal = (state = initialState, action) => {
  switch (action.type) {
    case modalTypes.SHOW_MODAL:
      return {
        ...state,
        isOpen: true
      }
    case modalTypes.HIDE_MODAL:
      return {
        ...state,
        isOpen: false
      }
    case modalTypes.CHANGE_TITLE_MODAL:
      let {title} = action.payload
      return {
        ...state,
        title
      }
    case modalTypes.CHANGE_CONTENT_MODAL:
      let {component} = action.payload
      return {
        ...state,
        component
      }
    default:
      return state;
  }
}

export default modal;
