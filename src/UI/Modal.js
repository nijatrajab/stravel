import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import classes from './Modal.module.css';

const modalVariants = {
  hidden: {
    x: "100%"
  },
  visible: {
    x: "0%",
  },
  exit: {
    x: "100%",
  }
}


const backdropVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
}

const Backdrop = (props) => {
  return <motion.div variants={backdropVariants} initial="hidden" animate="visible" exit="exit" className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className={`${classes.modal} ${props.className}`}>
      <div style={{height: "80px"}}></div>
      <div className={classes.content}>{props.children}</div>
    </motion.div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;