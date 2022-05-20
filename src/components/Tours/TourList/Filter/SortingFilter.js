import { useContext } from "react";
import TourContext from "../../../../store/tour-context";
import SelectUtil from "./Utils/Select";

import classes from "./SortingFilter.module.css";

const labelHelper = (byV, byL) => {
  const labelValue = [
    {
      value: `${byV}__asc`,
      label: `${byL}: ${byL !== "Price" ? "A-Z" : "low-high"}`,
    },
    {
      value: `${byV}__desc`,
      label: `${byL}: ${byL !== "Price" ? "Z-A" : "high-low"}`,
    },
  ];
  return labelValue;
};

const SortingFilter = () => {
  const tourCtx = useContext(TourContext);

  const options = [
    { value: "Default", label: "Default sort" },
    ...labelHelper("title", "Title"),
    ...labelHelper("price", "Price"),
  ];

  return (
    <SelectUtil
      tourCtxFn={tourCtx.tourSortFilter}
      tourCtxDefault={options[0].value}
      selectData={options}
      selectName={"sort"}
    />
  );
};

export default SortingFilter;
