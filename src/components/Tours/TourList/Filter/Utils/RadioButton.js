import classes from "./RadioButton.module.css";

const RadioButton = ({ children, value, label, tourCtxFn, defaultValue }) => {
  const onChangeHandler = (event) => {
    tourCtxFn(defaultValue);
  };

  return (
    <div className={classes["radio"]}>
      <p
        className={classes["radio-text"]}
        data-radio={value === defaultValue}
      >{`View ${label} tours`}</p>
      <div className={classes["radio-button"]}>
        <input
          type="radio"
          id={`${defaultValue}-radio`}
          name={"tourType"}
          value={defaultValue}
          checked={value === defaultValue}
          onChange={onChangeHandler}
        />
        <label
          htmlFor={`${defaultValue}-radio`}
          data-radio={value === defaultValue}
        >
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
