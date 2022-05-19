import classes from "./TextUtils.module.css";

const TextSlider = (props) => {
  return (
    <div
      className={
        props.text === "header"
          ? classes["slider-title"]
          : classes["slider-content"]
      }
    >
      <p 
            className={
              props.text === "header"
                ? classes["slider-title-p"]
                : classes["slider-content-p"]
            }
      >{props.text === "header" ? props.imgTitle : props.imgDesc}</p>
    </div>
  );
};

export default TextSlider;
