import { motion } from "framer-motion";

import classes from "./Button.module.css";

const buttonVariants = {
  hidden: {
  },
  visible: {
    scale: 0.9,
    transition: {
      type: "spring"
    }
  },
}

const Button = (props) => {
  return (
    <motion.button
      onClick={props.onClick ? props.onClick : null}
      className={`${classes.button} ${props.buttonClass}`}
      variants={buttonVariants}
      whileTap="visible"
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
