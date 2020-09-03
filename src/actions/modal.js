import * as modalTypes from '../constants/modal';

export const showModal = () => {
  return {
    type: modalTypes.SHOW_MODAL,
  }
}

export const hideModal = () => {
  return {
    type: modalTypes.HIDE_MODAL,
  }
}

export const changeTitle = (title) => {
  return {
    type: modalTypes.CHANGE_TITLE_MODAL,
    payload: {
      title
    }
  }
}

export const changeContent = (component) => {
  return {
    type: modalTypes.CHANGE_CONTENT_MODAL,
    payload: {
      component
    }
  }
}
