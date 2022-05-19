import { Switch } from "@mui/material";

import classes from "./Switch.module.css";

const SwitchUtil = ({
  children,
  tourCtxFn,
  switchData,
  switchTitle,
}) => {
  const onChangeHandler = (event) => {
    console.log(event.target.checked);
    tourCtxFn(event.target.checked);
  };
  return (
    <div className={classes["switch"]}>
      <p className={classes["switch-text"]} data-switch={switchData}>{switchTitle}</p>
      <Switch
        checked={switchData}
        onChange={onChangeHandler}
        className={classes["switch-input"]}
      />
    </div>
  );
};

export default SwitchUtil;
