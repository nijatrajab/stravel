import React from "react";
import { motion } from "framer-motion";

import classes from "./TextAnim.module.css"

const titleVariants = {
  hidden: {
    y: "100%"
  },
  visible: (i) => ({
    y: 0,
    transition: {
      delay: 0.6 + i * 0.1,
    },
  }),
};

const TextList = ({ children, className, animControl }) => {
  let wordList = children.split(" ");

  return (
    <div className={classes["team-title-holder"]}
    >
      {wordList.map((word, i) => (
      <motion.span
        key={children + i}
        className={className}
        animate={animControl}
        style={{ display: "inline-block", willChange: "transform" }}
        initial="hidden"
        variants={titleVariants}
        custom={i}
      >
        {word + (i !== wordList.length - 1 ? "\u00A0" : "")}
      </motion.span>
      ))}
    </div>
  );
};

export default TextList;
