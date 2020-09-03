import React from 'react';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux';
import * as modalActions from '../../actions/modal';

function ModalHelper(props) {
  let {classes, isOpen, title, component, closeModal} = props

  return (
    <Modal
      open={isOpen}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <div className={classes.header}>
          <div className={classes.title}>{title}</div>
          <div className={classes.iconHeader} onClick={closeModal}><CloseIcon /></div>
        </div>
        <div className={classes.body}>{component}</div>
      </div>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.isOpen,
    title: state.modal.title,
    component: state.modal.component
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(modalActions.hideModal())
    }
  }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ModalHelper));
