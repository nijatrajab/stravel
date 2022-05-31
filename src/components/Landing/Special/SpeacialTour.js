import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import Card from "../../UI/Card";
import MobileClick from "../../Utils/MobileClick";
import Stars from "../../Utils/Stars";

import classes from "./SpecialTour.module.css";

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

const imageVariants = {
  hidden: {
    scale: 1,
    transition: {
      ease: "easeIn",
      duration: 0,
    },
  },
  visible: {
    scale: 1.05,
    transition: {
      duration: 0,
      ease: "easeIn",
    },
  },
};

const detailVariants = {
  hidden: {
    height: "100px",
    marginTop: "0px",
    transition: {
      duration: 0,
      ease: "easeIn",
    },
  },
  visible: {
    height: "150px",
    marginTop: "-50px",
    transition: {
      delay: 0.1,
      duration: 0,
      ease: "easeIn",
    },
  },
};

const ptdVariants = {
  hidden: (i) => ({
    top: i[0],
    transition: {
      ease: "easeOut",
    },
  }),
  visible: (i) => ({
    top: i[1],
    transition: {
      delay: 0.1,
      duration: 0.1,
      ease: "easeIn",
    },
  }),
};

const SpecialTour = (props) => {
  const animControl = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const mobileOrTablet = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    isHovered ? animControl.start("visible") : animControl.start("hidden");
  }, [isHovered, animControl]);

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
    <div
      className={classes["content-card-holder"]}
      onMouseEnter={onMouseEnterHandlerIsHovered}
      onMouseLeave={onMouseLeaveHandlerIsHovered}
      onClick={mobileClickHandler}
    >
      <AnimatePresence exitBeforeEnter>
        {mobileOrTablet && !isHovered && (
          <MobileClick
            mobileVariants={mobileVariants}
            mobileClass={classes["mobile-click"]}
          />
        )}
      </AnimatePresence>

      <Card cardClass={classes["content-card"]}>
        <div className={classes["content-card-img"]}>
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate={animControl}
            src={props.image}
            alt={props.title}
          ></motion.img>
        </div>
        <motion.div
          variants={detailVariants}
          initial="hidden"
          animate={animControl}
          className={classes["content-card-detail"]}
        >
          <motion.div
            variants={ptdVariants}
            custom={["-20px", "40px"]}
            className={classes["content-card-price"]}
          >
            <p className={classes["content-card-price-title"]}>GUIDED TOURS</p>
            <div className={classes["content-card-price-tag"]}>
              <p
                className={classes["content-card-price-num"]}
              >{`$${props.price}`}</p>
              /day
            </div>
          </motion.div>
          <motion.p
            variants={ptdVariants}
            custom={["40px", "70px"]}
            className={classes["content-card-title"]}
          >
            {props.title}
          </motion.p>
          <motion.div
            variants={ptdVariants}
            custom={["110px", "115px"]}
            className={classes["content-card-days"]}
          >
            <Stars starCount={props.star} />
            <p>{props.days} days tour</p>
          </motion.div>
        </motion.div>
      </Card>
    </div>
  );
};

export default SpecialTour;
