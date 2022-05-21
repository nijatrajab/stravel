import { FormControl, Select, MenuItem } from "@mui/material";

import classes from "./Select.module.css";

const SelectUtil = ({
  children,
  tourCtxFn,
  tourCtxValue,
  selectData,
  selectName,
}) => {
  const onChangeHandler = (event) => {
    let args;
    console.log("sorting", event.target.value, tourCtxValue)
    if (selectName === "sort") {
      args = event.target.value.split("__");
      tourCtxFn(args[0], args[1], false);
    } else {
      args = event.target.value;
      tourCtxFn(args, false);
    }
  };

  return (
    <FormControl className={classes["form-control"]}>
      <Select
        className={classes["select-control"]}
        labelId={`${selectName}-${Math.random()}`}
        id={`${selectName}-${Math.random()}`}
        onChange={onChangeHandler}
        value={`${tourCtxValue.sortBy}${tourCtxValue.sortBy === "Default" ? "" : "__" + tourCtxValue.sortValue}`}
        MenuProps={{ disableScrollLock: true }}
      >
        {selectData.map((data, idx) => {
          return (
            <MenuItem
              key={`select-${data.value}-${idx}`}
              value={data.value}
              className={classes["menu-item"]}
            >
              {data.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectUtil;
