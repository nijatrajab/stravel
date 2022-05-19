import { useEffect, useState } from "react";
import useHttpImage from "../../../hooks/use-http";
import { motion } from "framer-motion";

import classes from "./PhotoHolder.module.css";

const photoVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (i) => {
    return { opacity: 1, scale: 1,transition: {
        delay: 0.02 * i
    } };
  },
};

const Photo = ({ children, photo, text, liClass, idx }) => {
  const [galleryImage, setGalleryImage] = useState(null);
  const { isLoading, hasError, sendRequest } = useHttpImage();

  useEffect(() => {
    const getImage = (imgObj) => {
        setGalleryImage(imgObj);
    };
    sendRequest({ url: photo }, getImage);
  }, [sendRequest, photo]);

  return (
    <motion.li 
    variants={photoVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    custom={idx}
    className={liClass}>
      <img
        src={galleryImage}
        alt={text}
        loading="lazy"
        className={classes["gallery-img"]}
      />
    </motion.li>
  );
};

export default Photo;
