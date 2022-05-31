import { Fragment } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import classes from "./Modal.module.css";

const modalVariants = {
  hidden: {
    x: "100%",
    transition: {
      when: "beforeChildren",
    },
  },
  visible: {
    x: "0%",
  },
  exit: {
    x: "100%",
    transition: {
      delay: 0.1,
    },
  },
};

const modalGalleryVariants = {
  hidden: {
    scale: 0,
    x: "50%",
    y: "-50%",
    transition: {
      when: "beforeChildren",
    },
  },
  visible: {
    scale: 1,
    x: "50%",
    y: "-50%",
  },
  exit: {
    scale: 0,
    x: "50%",
    y: "-50%",
    transition: {
      delay: 0.1,
    },
  },
};

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Backdrop = (props) => {
  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.backdrop}
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <motion.div
      variants={props.isGallery ? modalGalleryVariants : modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`${props.modalClass ? props.modalClass : ""} ${classes.modal}`}
    >
      {!props.isGallery && <div style={{ height: "80px" }}></div>}
      <div className={`${props.contentClass ? props.contentClass : ""} ${classes.content}`}>{props.children}</div>
    </motion.div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay modalClass={props.modalClass} contentClass={props.contentClass} isGallery={props.isGallery}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
