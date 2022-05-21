import { Switch } from "@mui/material";

import classes from "./Switch.module.css";

const SwitchUtil = ({
  children,
  tourCtxFn,
  switchData,
  switchTitle,
  mediaQuery
}) => {
  const onChangeHandler = (event) => {
    tourCtxFn(event.target.checked, mediaQuery);
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
