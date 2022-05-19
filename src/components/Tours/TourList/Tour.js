import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Card from "../../../UI/Card";
import ShortDetails from "./Details/ShortDetails";
import TitleDetails from "./Details/TitleDetails";
import classes from "./Tour.module.css";

const tourCardVariants = {
  hidden: {
    // perspective: "0px",
    // rotateY: "0deg",
  },
  visible: {
    // perspective: "1000px",
    // rotateY: "15deg",
    // transition: {
    //   delay: 0.1,
    // },
  },
};
const tourVariants = {
  hidden: {
    top: "260px",
    height: "240px",
    transition: {
      top: {delay: 0},
      height: {delay: 0.2, duration: 0.1},
      when: "afterChildren",
    },
  },
  visible: {
    top: "0px",
    height: "600px",
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 1),90%, rgba(0, 0, 0, 0))",

    transition: {
      top: {delay: 0.2},
      height: {delay: 0, duration: 0.1},
      when: "beforeChildren",
    },
  },
};

const imageVariants = {
  hidden: {
    scale: 1.05,
  },
  visible: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
};

const Tour = ({ children, mainTour }) => {
  const [isHovered, setIsHovered] = useState(false);
  const overlay = useAnimation();
  const discountAnimate = useAnimation();

  useEffect(() => {
    isHovered ? overlay.start("visible") : overlay.start("hidden");
    isHovered
      ? discountAnimate.start("visible")
      : discountAnimate.start("hidden");
  }, [isHovered, overlay, discountAnimate]);

  return (
    <motion.div
      layout
      key={mainTour._id}
      className={classes["tour-card"]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <Card cardClass={classes["card-class"]}>
        <motion.img
          variants={imageVariants}
          animate={discountAnimate}
          src={require("../../../assets/images/tours/" +
            mainTour.toCity.toLowerCase() +
            ".jpg")}
          alt={mainTour.title}
        ></motion.img>
        <motion.div
          className={classes["content-holder"]}
          variants={tourVariants}
          animate={overlay}
          initial="hidden"
        >
          <TitleDetails
            className={{
              contentDetail: classes["content-detail"],
              contentPrice: classes["content-price"],
            }}
            isHovered={isHovered}
            price={mainTour.price}
            days={mainTour.days}
            discountPercent={mainTour.discountPercent}
            discount={mainTour.discount}
            special={mainTour.special}
            discountPrice={mainTour.discountPrice}
            type={mainTour.type}
            toCity={mainTour.toCity}
            toCountry={mainTour.toCountry}
          />
          <AnimatePresence exitBeforeEnter>
            {isHovered && (
              <ShortDetails
                mainTour={mainTour}
                className={classes["content-detail"]}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default Tour;
