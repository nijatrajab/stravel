import { useContext, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";

import Tour from "./Tour";
import classes from "./TourList.module.css";
import TourContext from "../../../store/tour-context";
import SortingFilter from "./Filter/SortingFilter";
import StyledBtn from "../../Utils/StyledBtn";
import Button from "../../../UI/Button";

const tourListVariants = {
  hidden: {
    flexBasis: "100%",
    transition: {
      duration: 0.3,
      type: "easeIn",
      delay: 0.2,
    },
  },
  visible: (device) => {
    return {
      flexBasis: device ? "72%" : "100",
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    };
  },
};

const TourList = ({ children, filterState, filterStateFn, isNotDesktop }) => {
  const tourCtx = useContext(TourContext);
  const tourListAnimate = useAnimation();

  console.log("Checking changing", tourCtx.isChanged);

  const tourList = useMemo(() => {
    return tourCtx.mainTours.map((mainTour, idx) => (
      <Tour
        mainTour={mainTour}
        key={`Tour-${Math.random().toString()}-${idx}`}
      />
    ));
  }, [tourCtx.mainTours]);

  useEffect(() => {
    filterState
      ? tourListAnimate.start("visible")
      : tourListAnimate.start("hidden");
  }, [filterState, tourListAnimate]);

  const filterStateHandler = () => {
    filterStateFn((prevState) => !prevState)
  }

  return (
    <motion.div
      layout
      key="TourListInside"
      variants={tourListVariants}
      initial="hidden"
      animate={tourListAnimate}
      custom={!isNotDesktop}
      className={classes["tour-head"]}
    >
      <motion.div layout key="tourSort" className={classes["tour-sort"]}>
        <motion.p>Total founded tours: {tourCtx.mainTours.length}</motion.p>
        <div className={classes["tourlist-btns"]}>
          <SortingFilter />
          <StyledBtn
            className={`${classes["advanced-filter"]} ${
              filterState ? classes["advanced-filter-active"] : ""
            }`}
            onEvent={filterStateHandler}
          >
            Advanced filter
          </StyledBtn>
          {/* <Button
            buttonClass={`${classes["advanced-filter"]} ${
              filterState ? classes["advanced-filter-active"] : ""
            }`}
            onClick={() => filterStateFn((prevState) => !prevState)}
          >
            Advanced filter
          </Button> */}
        </div>
      </motion.div>
      <motion.div
        className={classes["tour-list"]}
        data-filteractive={filterState}
      >
        {tourList}
      </motion.div>
    </motion.div>
  );
};

export default TourList;
