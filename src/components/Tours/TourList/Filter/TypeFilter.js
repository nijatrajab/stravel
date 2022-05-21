import { useContext } from "react";
import TourContext from "../../../../store/tour-context";

import classes from "./TypeFilter.module.css";
import RadioButton from "./Utils/RadioButton";

const TypeFilter = ({children, mediaQuery}) => {
  const tourCtx = useContext(TourContext);
  const options = [];
  tourCtx.filterDefaults.tourTypeData.map((item) => {
    return options.push({
      value: item,
      label: (item.charAt(0).toUpperCase() + item.slice(1)).replace("_", " "),
    });
  });

  return (
    <>
      <div className={classes["radios"]}>
        {options.map((item, idx) => {
          return (
            <RadioButton
              key={`radio-${item.value} +${idx}`}
              tourCtxFn={tourCtx.tourTypeFilter}
              value={tourCtx.filterConfigs.tourType}
              label={item.label}
              defaultValue={item.value}
              mediaQuery={mediaQuery}
            />
          );
        })}
      </div>
    </>
  );
};

export default TypeFilter;
