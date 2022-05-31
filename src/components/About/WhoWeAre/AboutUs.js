import { useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import classes from "./AboutUs.module.css";
import Sign from "./Sign";
import Title from "./Title";

const clipPathVariants = {
  hidden: {
    clipPath:
      "polygon(2% 1%, 80% 10%, 99% 1%, 95% 100%, 10% 98%, 2% 80%, 2% 20%)",
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    clipPath:
      "polygon(1% 30%, 4% 10%, 98% 1%, 100% 80%, 95% 98%, 0% 100%, 1% 30%)",
    transition: {
      duration: 0.1,
    },
  },
};
const imageVariants = {
  hidden: {
    filter: "sepia(0)",
  },
  visible: {
    filter: "sepia(1)",
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};

const bgVariants = {
  hidden: {
    backgroundColor: "rgba(var(--background), 0)",
  },
  visible: {
    backgroundColor: "rgba(var(--background), 0.4)",
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
  isHovered: {
    backgroundColor: "rgba(var(--background), 0.7)",
    transition: {
      duration: 1,
    },
  },
};
const descVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  exit: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.55,
      delayChildren: 0.3,
    },
  },
};

const AboutUs = ({ children, aboutUs }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mobileOrTablet = useMediaQuery("(max-width:768px)");

  const mobileClickHandler = () => {
    if (mobileOrTablet) {
      setIsHovered((prevState) => !prevState);
    }
  };

  const notMobileClickHandlerIsHovered = () => {
    if (!mobileOrTablet) {
      setIsHovered(true);
    }
  };

  const notMobileClickHandlerIsNotHovered = () => {
    if (!mobileOrTablet) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className={classes["about-top"]}
      onMouseEnter={notMobileClickHandlerIsHovered}
      onMouseLeave={notMobileClickHandlerIsNotHovered}
      onClick={mobileClickHandler}
    >
      <motion.div
        className={classes["about-holder"]}
        variants={clipPathVariants}
        initial="hidden"
        animate={!isHovered ? "hidden" : "visible"}
      >
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          // whileInView="visible"
          // viewport={{ once: true, margin: "-200px" }}
          src={aboutUs.image}
          alt={aboutUs.title}
        />
        <motion.div
          className={classes["content-holder"]}
          variants={bgVariants}
          initial="hidden"
          animate={!isHovered ? "visible" : "isHovered"}
          // whileInView={() => {
          //   isHoverControl.start("visible");
          //   return !isHovered ? "visible" : "isHovered";
          // }}
          // viewport={{ once: true, margin: "-200px" }}
        >
          <AnimatePresence exitBeforeEnter>
            <>
              {!isHovered &&
                aboutUs.title.split(" ").map((titleWord, idx) => {
                  return (
                    <Title
                      key={`titleWord-${idx}-${Math.random().toString()}`}
                      title={titleWord}
                      index={idx}
                      // animate={!isHovered ? "visible" : "isHovered"}
                    />
                  );
                })}
              {isHovered && (
                <div className={classes["sign-desc"]}>
                  <motion.p
                    className={classes["about-desc"]}
                    variants={descVariants}
                    exit="exit"
                    initial="hidden"
                    animate="visible"
                    key="desc-about"
                  >
                    {aboutUs.desc}
                  </motion.p>
                  <Sign />
                </div>
              )}
            </>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
