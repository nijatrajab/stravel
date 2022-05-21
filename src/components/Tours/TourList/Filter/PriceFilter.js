import { useContext } from "react";
import TourContext from "../../../../store/tour-context";
import RangeSlider from "./Utils/RangeSlide";

import classes from "./PriceFilter.module.css";

const PriceFilter = ({ children, mediaQuery }) => {
  const tourCtx = useContext(TourContext);

  return (
    <RangeSlider
      tourCtxMinFn={tourCtx.priceMinFilter}
      tourCtxMaxFn={tourCtx.priceMaxFilter}
      tourCtxMin={tourCtx.filterConfigs.priceMin}
      tourCtxMax={tourCtx.filterConfigs.priceMax}
      tourCtxMinDef={tourCtx.filterDefaults.priceMinLimit}
      tourCtxMaxDef={tourCtx.filterDefaults.priceMaxLimit}
      sliderClass={classes["price-slider"]}
      sliderId="price"
      mediaQuery={mediaQuery}
    />
  );
};

export default PriceFilter;
