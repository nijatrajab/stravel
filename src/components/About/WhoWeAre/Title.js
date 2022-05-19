import { motion } from "framer-motion";
import classes from "./Title.module.css";

const titleWordVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (i) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
          delay: 0.3 + i*0.2
      }
    };
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
        duration: 0.5
    }
  }
};

const Title = ({ children, title, index, animControl }) => {
  return (
    <motion.p
      variants={titleWordVariants}
      initial="hidden"
      animate={animControl}
      exit="exit"
      custom={index}
      className={classes["about-title"]}
    >
      {title}
    </motion.p>
  );
};

export default Title;
