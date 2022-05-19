import classes from "./MapPoint.module.css";
import pointer from "../../../assets/images/map/pointer.webp";
import { motion } from "framer-motion";

const pointVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
        delay: 1.2,
        stiffness: 400,
        // damping: 40,
        type: "spring",
    },
  },
};

const MapPoint = () => {
  return (
    <div className={classes["point-holder"]}>
      <motion.img
        variants={pointVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-200px" }}
        src={pointer}
        alt="point"
      />
    </div>
  );
};

export default MapPoint;
