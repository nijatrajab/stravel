import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useState } from "react";
import classes from "./AboutUs.module.css";
import Sign from "./Sign";
import Title from "./Title";

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
    backgroundColor: "rgba(245, 245, 220, 0)",
  },
  visible: {
    backgroundColor: "rgba(245, 245, 220, 0.4)",
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
  isHovered: {
    backgroundColor: "rgba(245, 245, 220, 0.7)",
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
  const isHoverControl = useAnimation();

  return (
    <motion.div
      className={classes["about-holder"]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        src={aboutUs.image}
        alt={aboutUs.title}
      />
      <motion.div
        className={classes["content-holder"]}
        variants={bgVariants}
        initial="hidden"
        whileInView={() => {
          isHoverControl.start("visible");
          return !isHovered ? "visible" : "isHovered";
        }}
        viewport={{ once: true, margin: "-200px" }}
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
                    animControl={isHoverControl}
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
  );
};

export default AboutUs;
