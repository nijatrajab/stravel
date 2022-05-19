import { useContext } from "react";
import TourContext from "../../../../store/tour-context";
import RangeSlider from "./Utils/RangeSlide";

import classes from "./DaysFilter.module.css";

const DaysFilter = ({ children }) => {
  const tourCtx = useContext(TourContext);

  return (
    <RangeSlider
      tourCtxMinFn={tourCtx.daysMinFilter}
      tourCtxMaxFn={tourCtx.daysMaxFilter}
      tourCtxMin={tourCtx.filterConfigs.daysMin}
      tourCtxMax={tourCtx.filterConfigs.daysMax}
      tourCtxMinDef={tourCtx.filterDefaults.daysMinLimit}
      tourCtxMaxDef={tourCtx.filterDefaults.daysMaxLimit}
      sliderClass={classes["days-slider"]}
      sliderId="days"
    />
  );
};

export default DaysFilter;
