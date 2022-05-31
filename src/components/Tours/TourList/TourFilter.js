import PriceFilter from "./Filter/PriceFilter";
import TitleFilter from "./Filter/TitleFilter";
import DaysFilter from "./Filter/DaysFilter";
import DiscountFilter from "./Filter/DiscountFilter";
import SpecialFilter from "./Filter/SpecialFilter";
import TypeFilter from "./Filter/TypeFilter";
import ClearFilter from "./Filter/ClearFilter";
import ApplyFilter from "./Filter/ApplyFilter";

import { motion } from "framer-motion";
import classes from "./TourFilter.module.css";
import { VscChromeClose } from "react-icons/vsc";
import StyledBtn from "../../Utils/StyledBtn";
import React from "react";

const filtersVariants = {
  exit: {
    opacity: 0,
    flexBasis: "0%",
    width: "0px",
    marginLeft: "0rem",
    transition: {
      duration: 0.3,
      type: "easeIn",
    },
  },
  hidden: {
    opacity: 0,
    flexBasis: "0%",
    width: "0px",
    marginLeft: "0rem",
    transition: {
      duration: 0.3,
      type: "easeIn",
    },
  },
  visible: {
    flexBasis: "24%",
    opacity: 1,
    width: "340px",
    marginLeft: "3rem",
    transition: {
      duration: 0.3,
      delay: 0.1,
      type: "easeOut",
    },
  },
};

const TourFilter = ({ children, mediaQuery, onClose }) => {
  console.log("Rendering filters")
  const filterComp = (
    <>
      <div className={classes["filter-buttons"]}>
        {mediaQuery && <StyledBtn onEvent={onClose}>
            <VscChromeClose />
          </StyledBtn>}
        <div className={classes["filter-action-buttons"]}>
          <ClearFilter onClose={onClose} mediaQuery={mediaQuery}/>
          {mediaQuery && <ApplyFilter mediaQuery={mediaQuery} onClose={onClose} />}
        </div>
      </div>
      <div className={classes["filter"]}>
        <p>FILTER BY TITLE</p>
        <TitleFilter mediaQuery={mediaQuery} />
      </div>
      <div className={classes["filter"]}>
        <p>FILTER BY PRICE</p>
        <PriceFilter mediaQuery={mediaQuery} />
      </div>
      <div className={classes["filter"]}>
        <p>FILTER BY DAYS</p>
        <DaysFilter mediaQuery={mediaQuery} />
      </div>
      <div className={classes["filter"]}>
        <p>FILTER BY DISCOUNT</p>
        <DiscountFilter mediaQuery={mediaQuery} />
      </div>
      <div className={classes["filter"]}>
        <p>FILTER BY SPECIAL</p>
        <SpecialFilter mediaQuery={mediaQuery} />
      </div>
      <div className={classes["filter"]}>
        <p>FILTER BY TYPE</p>
        <TypeFilter mediaQuery={mediaQuery} />
      </div>
    </>
  );

  const filterHolder = !mediaQuery ? (
    <motion.div
      layout
      key="TourFilterInside"
      variants={filtersVariants}
      exit="exit"
      initial="hidden"
      animate="visible"
      className={classes["filters"]}
    >
      {filterComp}
    </motion.div>
  ) : (
    <div className={classes["filters"]}>{filterComp}</div>
  );

  return filterHolder;
};
export default React.memo(TourFilter);
