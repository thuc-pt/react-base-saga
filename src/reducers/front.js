import * as uiTypes from '../constants/front';

var initialState = {
  isShowing: false
}

const front = (state = initialState, action) => {
  switch (action.type) {
    case uiTypes.SHOW_GLOBAL_LOADING:
      return state = {
        isShowing: true
      }
    case uiTypes.HIDE_GLOBAL_LOADING:
      return state = {
        isShowing: false
      }
    default:
      return state;
  }
}

export default front;
