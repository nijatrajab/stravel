import SliderModel from "../../../UI/SliderModel";
import classes from "./BackgroundSlide.module.css";
import { forwardRef } from "react";
import CardUtils from "./Utils/CardUtils";

const BackgroundSlide = forwardRef(({children, data}, ref) => {
  const settings = {
    fade: true,
  };
  return (
    <SliderModel ref={ref} settings={settings}>
      {data.map((img, idx) => (
        <div key={`background-${Math.random()}-${idx}`}>
          <CardUtils
            img={img}
            clsName={{
              divStyle: classes.divStyle,
              fadeImgStyle: classes.imgHead,
            }}
            navIdx={null}
          />
        </div>
      ))}
    </SliderModel>
  );
});

export default BackgroundSlide;
