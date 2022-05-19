import { forwardRef } from "react";
import SliderModel from "../../../UI/SliderModel";
import TextSlider from "./Utils/TextUtils";

import classes from "./TitleSlide.module.css";

const TitleSlide = forwardRef(({children, data}, ref) => {
  const settings = {
    className: classes.slider3nav,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <SliderModel ref={ref} settings={settings}>
      {data.map((img, idx) => (
        <div key={`sliderTitle-${Math.random()}-${idx}`}>
          <TextSlider imgTitle={img.title} imgDesc={img.desc} text="header" />
        </div>
      ))}
    </SliderModel>
  );
});

export default TitleSlide;
