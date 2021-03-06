import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import style from './Modal.module.css';


const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {

    componentDidMount(){
       window.addEventListener('keydown',this.handleKeyDown );
    }

    componentWillUnmount(){
     window.removeEventListener('keydown',this.handleKeyDown);
    }

    handleKeyDown = e =>{
        if(e.code === 'Escape') {
            this.props.onClose();
        }
     };

     handeleBackdropClick =  e => {
         if (e.currentTarget === e.target){
            this.props.onClose();
         }
     };

    render(){
        return createPortal (
            <div className={style.Overlay} onClick = {this.handeleBackdropClick} >
            <div className={style.Modal}>
             {this.props.children}
            </div>
          </div>,
          modalRoot,
        );
    }
}

Modal.propTypes = {
  onClose: PropTypes.func,
}; 
export default Modal;