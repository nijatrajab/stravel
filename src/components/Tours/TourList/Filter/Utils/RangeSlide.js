import { Slider, TextField } from "@mui/material";
import classes from "./RangeSlide.module.css";
import { useState } from "react";
import InputField from "./Input";

const valuetext = (value) => {
  return `${value}$`;
};

const RangeSlider = ({
  children,
  tourCtxMinFn,
  tourCtxMaxFn,
  tourCtxMin,
  tourCtxMax,
  tourCtxMinDef,
  tourCtxMaxDef,
  sliderClass,
  sliderId,
}) => {
  const [hasError, setHasError] = useState(false);

  const onSliderChange = (event) => {
    tourCtxMinFn(event.target.value[0]);
    tourCtxMaxFn(event.target.value[1]);
  };

  const onMinSliderChange = (event) => {
    if (+event.target.value < 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    tourCtxMinFn(event.target.value);
  };

  const onMaxSliderChange = (event) => {
    if (+event.target.value < 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    tourCtxMaxFn(event.target.value);
  };

  const onAfterChange = (value) => {};

  console.log([tourCtxMin, tourCtxMax]);

  return (
    <div className={sliderClass}>
      <Slider
        getAriaLabel={() => ""}
        value={[tourCtxMin, tourCtxMax]}
        onChange={onSliderChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={tourCtxMinDef}
        max={tourCtxMaxDef}
        className={classes["slider-range"]}
      />
      <div className={classes["slider-input"]}>
        <InputField
          sx={{ flex: 1 }}
          onChange={onMinSliderChange}
          id={`${sliderId}-min`}
          type="number"
          value={tourCtxMin}
          error={hasError}
          helperText={hasError ? "Incorrect entry!" : ""}
        />
        <InputField
          sx={{ flex: 1 }}
          onChange={onMaxSliderChange}
          id={`${sliderId}-max`}
          type="number"
          value={tourCtxMax}
          error={hasError}
          helperText={hasError ? "Incorrect entry!" : ""}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
