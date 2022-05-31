import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../UI/Modal";
import { useRef } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import StyledBtn from "../../Utils/StyledBtn";

import classes from "./PhotoModal.module.css";

const PhotoModal = ({
  children,
  isActive,
  closeFn,
  nextFn,
  prevFn,
  zoomInFn,
  zoomOutFn,
  resetFn,
  photo,
  photoHW
}) => {
  const constraintsRef = useRef();
  return (
    <AnimatePresence>
      {isActive && (
        <Modal
          onClose={closeFn}
          modalClass={classes["photo-modal"]}
          contentClass={classes["photo-modal-content"]}
          isGallery={true}
        >
          <motion.div ref={constraintsRef} className={classes["photo-content"]}>
            <StyledBtn onEvent={closeFn} className={classes["close-btn"]}>
              <VscChromeClose />
            </StyledBtn>
            <StyledBtn onEvent={nextFn} className={classes["next-btn"]}>
              <MdNavigateNext />
            </StyledBtn>
            <StyledBtn onEvent={prevFn} className={classes["prev-btn"]}>
              <MdNavigateBefore />
            </StyledBtn>
            <div className={classes["photo-resize"]}>
              <StyledBtn onEvent={zoomInFn}>
                <AiOutlinePlus />
              </StyledBtn>
              <StyledBtn onEvent={zoomOutFn}>
                <AiOutlineMinus />
              </StyledBtn>
              <StyledBtn onEvent={resetFn}>
                <MdOutlineSettingsBackupRestore />
              </StyledBtn>
            </div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              className={classes["photo-holder"]}
              style={{
                width: `${photoHW}%`,
                height: `${photoHW}%`,
              }}
            >
              <img
                src={photo.imageLink}
                alt={photo.imageText}
              />
            </motion.div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default PhotoModal;
