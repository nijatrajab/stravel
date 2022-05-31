import { useMediaQuery } from "@mui/material";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Card from "../../UI/Card";
import MobileClick from "../../Utils/MobileClick";
import ShortDetails from "./Details/ShortDetails";
import TitleDetails from "./Details/TitleDetails";
import classes from "./Tour.module.css";

const mobileVariants = {
  hidden: {
    y: -50,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: -50,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
};

const tourVariants = {
  hidden: {
    top: "260px",
    height: "240px",
    transition: {
      top: { delay: 0 },
      height: { delay: 0.2, duration: 0.1 },
      when: "afterChildren",
    },
  },
  visible: {
    top: "0px",
    height: "600px",
    backgroundImage:
      "linear-gradient(to top, rgba(var(--secondary-component-bg), 1), 90%, rgba(var(--secondary-component-bg), 0))",

    transition: {
      top: { delay: 0.2 },
      height: { delay: 0, duration: 0.1 },
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
  const mobileOrTablet = useMediaQuery("(max-width:768px)");
  console.log("one tour")

  useEffect(() => {
    isHovered ? overlay.start("visible") : overlay.start("hidden");
    isHovered
      ? discountAnimate.start("visible")
      : discountAnimate.start("hidden");
  }, [isHovered, overlay, discountAnimate]);

  const mobileClickHandler = () => {
    if (mobileOrTablet) {
      setIsHovered((prevState) => !prevState);
    }
  };

  const onMouseEnterHandlerIsHovered = () => {
    if (!mobileOrTablet) {
      setIsHovered(true);
    }
  };

  const onMouseLeaveHandlerIsHovered = () => {
    if (!mobileOrTablet) {
      setIsHovered(false);
    }
  };

  return (
    <motion.div
      layout
      layoutId={`tour-layout-${mainTour._id}`}
      key={`tour-${mainTour._id}`}
      className={classes["tour-card"]}
      onMouseEnter={onMouseEnterHandlerIsHovered}
      onMouseLeave={onMouseLeaveHandlerIsHovered}
      onClick={mobileClickHandler}
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
        <AnimatePresence exitBeforeEnter>
          {(mobileOrTablet && !isHovered) && (
            <MobileClick
              mobileClass={classes["mobile-helper"]}
              mobileVariants={mobileVariants}
            />
          )}
        </AnimatePresence>

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
