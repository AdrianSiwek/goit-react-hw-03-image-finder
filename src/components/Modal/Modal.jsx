import React, { Component } from "react";
import styles from './Modal.module.css';
import PropTypes from "prop-types";


class Modal extends Component {
  state = {  } 
  render() { 
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
 
export default Modal;