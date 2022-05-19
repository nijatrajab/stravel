import { motion } from "framer-motion";

import bakumap from "../../../assets/images/map/bakumap-1.webp";
import classes from "./Map.module.css";
import MapPoint from "./MapPoint";

const mapVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 0.7,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const Map = () => {
  return (
    <div className={classes["map-holder"]}>
      <motion.img
        variants={mapVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        src={bakumap}
        alt="Baku map"
      />
      {/* <MapPoint /> */}
    </div>
  );
};

export default Map;
