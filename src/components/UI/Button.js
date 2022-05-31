import { motion } from "framer-motion";

import classes from "./Button.module.css";

const buttonVariants = {
  click: {
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 600,
      duration: 0.1
    }
  },
}

const Button = (props) => {
  return (
    <motion.button
      onClick={props.onClick ? props.onClick : null}
      className={`${classes.button} ${props.buttonClass}`}
      variants={buttonVariants}
      whileTap="click"
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
