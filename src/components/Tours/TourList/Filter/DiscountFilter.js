import { useContext } from "react";
import TourContext from "../../../../store/tour-context";

import SwitchUtil from "./Utils/Switch";


const DiscountFilter = () => {
  const tourCtx = useContext(TourContext);

  return (
    <SwitchUtil
      tourCtxFn={tourCtx.discountFilter}
      switchData={tourCtx.filterConfigs.discount}
      switchTitle="View discounted tours only"
    />
  );
};

export default DiscountFilter; 
