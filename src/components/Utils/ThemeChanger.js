import React, { useContext, useEffect } from "react";
import ThemeContext from "../../store/theme/theme-context";
import { motion, AnimatePresence } from "framer-motion";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";

import classes from "./ThemeChanger.module.css";

const themeVariants = {
  hidden: {
    x: -25,
    y: 25,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: [45, 0],
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: 25,
    y: 25,
    opacity: 0,
    rotate: [0, -45],
    transition: {
      duration: 0.5,
    },
  },
};

const ThemeChanger = () => {
  const themeCtx = useContext(ThemeContext);

  const onClickHandler = () => {
    themeCtx.themeChange();
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {themeCtx.theme === "dark" ? (
        <LightModeIcon
          key={`theme-light`}
          component={motion.svg}
          variants={themeVariants}
          initial="hidden"
          exit="exit"
          animate="visible"
          onClick={onClickHandler}
          className={classes["theme-button"]}
        />
      ) : (
        <NightlightIcon
          key={`theme-dark`}
          component={motion.svg}
          variants={themeVariants}
          onClick={onClickHandler}
          initial="hidden"
          exit="exit"
          animate="visible"
          className={classes["theme-button"]}
        />
      )}
    </AnimatePresence>
  );
};

export default React.memo(ThemeChanger);
