import { useEffect, useState } from "react";
import useHttpImage from "../../../hooks/use-http";
import { motion, AnimatePresence } from "framer-motion";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import classes from "./PhotoHolder.module.css";
import PhotoDetail from "./PhotoDetail";

const photoVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (i) => {
    return {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.02 * i,
      },
    };
  },
};

const photoDetailVariants = {
  hidden: {
    y: 90,
  },
  visible: {
    y: 0,
  },
  exit: {
    y: 90,
  },
};

const Photo = ({ children, photo, text, liClass, idx, onOpen }) => {
  const [galleryImage, setGalleryImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { isLoading, hasError, sendRequest } = useHttpImage();

  useEffect(() => {
    const getImage = (imgObj) => {
      setGalleryImage(imgObj);
    };
    sendRequest({ url: photo }, getImage);
  }, [sendRequest, photo]);

  const hoverStartHandler = () => {
    setIsHovered(true);
  };

  const hoverEndHandler = () => {
    setIsHovered(false);
  };

  return (
    <motion.li
      variants={photoVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={idx}
      className={liClass}
      onHoverStart={hoverStartHandler}
      onHoverEnd={hoverEndHandler}
      onClick={onOpen.bind(null, idx)}
    >
      <div className={classes["overlay"]}></div>
      <RemoveRedEyeOutlinedIcon className={classes["eye-icon"]} />
      <img
        src={galleryImage}
        alt={text}
        loading="lazy"
        className={classes["gallery-img"]}
      />
      <AnimatePresence exitBeforeEnter>
        {!isHovered && (
          <motion.div
            key={`photo-detail-${idx}`}
            variants={photoDetailVariants}
            exit="exit"
            animate="visible"
            initial="hidden"
            className={classes["photo-detail-holder"]}
          >
            <PhotoDetail title={"Some beauty"} author={"Abraham Maharba"} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default Photo;
