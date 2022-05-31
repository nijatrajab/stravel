import { motion } from "framer-motion";
import classes from "./MobileClick.module.css";

const MobileClick = ({ children, mobileClass, mobileVariants, idx }) => {
  return (
    <motion.p
      key={`mobile-click-${idx}`}
      className={`${classes["click-helper"]} ${mobileClass}`}
      variants={mobileVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      click for details
    </motion.p>
  );
};

export default MobileClick;
