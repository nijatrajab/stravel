import Button from "../../../UI/Button";
import { motion } from "framer-motion";

import { bestItems, bestPlaces } from "../../../store/constant-images";
import classes from "./Head.module.css";

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const arrayStartEnd = (a) => {
  a.push(0);
  a.unshift(0);
  return a;
};

const placesVariants = {
  hidden: { opacity: 0, x: -10, y: -10 },
  visible: (i) => {
    const delay = 0.1 + i * 0.2;
    return {
      opacity: 1,
      x: arrayStartEnd(shuffle([35, 8, 25, 13, 18, 3, 9])),
      y: arrayStartEnd(shuffle([33, 7, 24, 15, 9, 18, 4])),
      transition: {
        delay: delay,
        x: { repeat: Infinity, duration: 9, ease: "linear" },
        y: { repeat: Infinity, duration: 9, ease: "linear" },
        opacity: { duration: 1 },
      },
    };
  },
};

const bitemHidden = [
  {
    opacity: 0,
    x: -100,
    y: 100,
    rotate: 70,
  },
  {
    opacity: 0,
    x: 100,
    y: -100,
    rotate: -70,
  },
  {
    opacity: 0,
    x: -50,
    y: -150,
    rotate: 70,
  },
];

const bitemVariants = {
  hidden: (i) => {
    return {
      ...bitemHidden[i],
    };
  },
  visible: (i) => {
    const delay = 0.1 + i * 0.2;
    return {
      opacity: 0.5,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        delay: delay,
        x: { duration: 2, ease: "linear" },
        y: { duration: 2, ease: "linear" },
        rotate: { duration: 2, ease: "linear" },
        opacity: { duration: 1 },

      },
    };
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => {
    const delay = 0.1 + i * 0.2;
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        type: "spring",
      },
    };
  },
};

const Head = () => {
  return (
    <div className={classes["head-title"]}>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom="1"
        className={classes["head-text"]}
      >
        STRAVEL
      </motion.p>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom="3"
        className={classes["desc-text"]}
      >
        WALK WITH US
      </motion.p>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom="4"
        className={classes["buttons"]}
      >
        <Button buttonClass={classes["btns"]}>TOURS</Button>
        <Button buttonClass={classes["btns"]}>ABOUT US</Button>
      </motion.div>
      <div className={classes["scroll"]}></div>
      {bestItems.map((item, idx) => (
        <motion.img
          key={`bitem-${idx}`}
          src={item}
          alt="bitem"
          className={`${classes.places} ${classes[`bitem-${idx}`]}`}
          variants={bitemVariants}
          initial="hidden"
          animate="visible"
          custom={idx}
        />
      ))}
      {bestPlaces.map((place, idx) => (
        <motion.img
          key={`bplace-${idx}`}
          variants={placesVariants}
          initial="hidden"
          animate="visible"
          src={place}
          alt="bplace"
          custom={idx}
          className={`${classes.places} ${classes[`places-${idx}`]}`}
        />
      ))}
    </div>
  );
};

export default Head;
