import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={style.backdrop} onClick={props.onClose}></div>
    )
}
const ModalOverlay = (props) => {
    return (
        <div className={style.modal}>
            <div className={style.content}>{props.children}</div>
        </div>
    )
}

const portalEl = document.getElementById('overlays')

function Modal(props) {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalEl)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    </Fragment>
    
  )
  
}

export default Modal