import React, {
  Suspense,
  useCallback,
  useContext,
  useDeferredValue,
  useEffect,
  useMemo,
} from "react";
import { LayoutGroup, motion, useAnimation } from "framer-motion";

import Tour from "./Tour";
import classes from "./TourList.module.css";
import TourContext from "../../../store/tour-context";
import SortingFilter from "./Filter/SortingFilter";
import StyledBtn from "../../Utils/StyledBtn";

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
      flexBasis: device ? "72%" : "100%",
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    };
  },
};

const TourList = ({ children, filterState, filterStateFn, isNotDesktop }) => {
  const { mainTours: tours } = useContext(TourContext);
  const deferredTours = useDeferredValue(tours);
  const tourListAnimate = useAnimation();

  const tourList = useMemo(() => {
    return deferredTours.map((mainTour, idx) => (
      <Tour
        mainTour={mainTour}
        key={`Tour-${Math.random().toString()}-${idx}`}
      />
    ));
  }, [deferredTours]);

  useEffect(() => {
    if (filterState === "notDesktop") {
    } else if (filterState) {
      tourListAnimate.start("visible");
    } else {
      tourListAnimate.start("hidden");
    }
  }, [filterState, tourListAnimate]);

  const filterStateHandler = () => {
    filterStateFn((prevState) => !prevState);
  };

  console.log("Rendering tours");

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
        <motion.p>Total founded tours: {deferredTours.length}</motion.p>
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
        </div>
      </motion.div>
      <motion.div
        className={classes["tour-list"]}
        data-filteractive={filterState}
      >
        <LayoutGroup id="tours">
          <Suspense fallback="Loading tours...">{tourList}</Suspense>
        </LayoutGroup>
      </motion.div>
    </motion.div>
  );
};

export default React.memo(TourList);
