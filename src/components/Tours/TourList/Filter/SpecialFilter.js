import { useContext } from "react";
import TourContext from "../../../../store/tour-context";

import SwitchUtil from "./Utils/Switch";


const SpecialFilter = ({children, mediaQuery}) => {
  const tourCtx = useContext(TourContext);

  return (
    <SwitchUtil
      tourCtxFn={tourCtx.specialFilter}
      switchData={tourCtx.filterConfigs.special}
      switchTitle="View special tours only"
      mediaQuery={mediaQuery}
    />
  );
};

export default SpecialFilter;
