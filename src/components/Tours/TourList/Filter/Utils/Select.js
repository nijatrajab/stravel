import { FormControl, Select, MenuItem } from "@mui/material";

import classes from "./Select.module.css"

const SelectUtil = ({
  children,
  tourCtxFn,
  tourCtxDefault,
  selectData,
  selectName,
  selectClass,
}) => {
  const onChangeHandler = (event) => {
    let args;

    if (selectName === "sort") {
      args = event.target.value.split("__");
      tourCtxFn(args[0], args[1]);
    } else {
      args = event.target.value;
      tourCtxFn(args);
    }
  };

  return (
    <FormControl className={classes["form-control"]}>
      <Select
      className={classes["select-control"]}
        labelId={`${selectName}-${Math.random()}`}
        id={`${selectName}-${Math.random()}`}
        onChange={onChangeHandler}
        defaultValue={tourCtxDefault}
        MenuProps={{disableScrollLock: true}}
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
