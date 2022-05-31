import React from "react";
import { motion } from "framer-motion";

const animations = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: {duration: 0.3, ease: "easeInOut"} },
  exit: { opacity: 0, y: 100, transition: {duration: 0.1, ease: "easeInOut"} },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
