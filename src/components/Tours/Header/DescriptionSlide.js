import { forwardRef } from "react";
import SliderModel from "../../../UI/SliderModel";
import classes from "./DescriptionSlide.module.css";
import TextSlider from "./Utils/TextUtils";

const DescriptionSlide = forwardRef(({children, data}, ref) => {
  const settings = {
    className: classes.slider4nav,
    dots: false,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <SliderModel ref={ref} settings={settings}>
      {data.map((img, idx) => (
        <div key={`sliderDesc-${Math.random()}-${idx}`}>
          <TextSlider imgTitle={img.title} imgDesc={img.desc} text="" />
        </div>
      ))}
    </SliderModel>
  );
});

export default DescriptionSlide;
