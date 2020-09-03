import React from 'react';
import loading from '../../assets/images/loading.gif';
import './style.scss';
import {connect} from 'react-redux';

function GlobalLoading(props) {
  let {isShowing} = props
  let xhtml = null
  if (isShowing) {
    xhtml = <div className="global-screen">
              <img src={loading} alt="loading" className="global-screen__loading" />
            </div>
  }
  return xhtml
}

const mapStateToProps = state => {
  return {
    isShowing: state.front.isShowing
  }
}

export default connect(mapStateToProps, null)(GlobalLoading);
