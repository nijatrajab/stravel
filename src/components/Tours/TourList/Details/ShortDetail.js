import { motion } from "framer-motion";
import Stars from "../../../Utils/Stars";
import classes from "./ShortDetail.module.css"

const detailVariants = {
  hidden: { y: 500, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.05 },
  }),
};

const ShortDetail = ({ children, delay, className, isType, valueProp }) => {
  let returnValue;
  if (isType === "star") {
    returnValue = (
      <Stars starCount={valueProp} starClass={classes["detail-star"]} />
    );
  } else if (isType === "description") {
    returnValue = (
      <motion.p className={classes["detail-description"]}>{valueProp}</motion.p>
    );
  } else if (isType === "special") {
    returnValue = (
      <motion.p className={classes["detail-special"]}>{valueProp}</motion.p>
    );
  }
  return (
    <motion.div
      variants={detailVariants}
      custom={delay}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {returnValue}
    </motion.div>
  );
};

export default ShortDetail;
