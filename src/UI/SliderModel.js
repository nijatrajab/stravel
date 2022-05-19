import { forwardRef } from "react";
import Slider from "react-slick";

const SliderModel = forwardRef((props, ref) => {
  const settings = {
    swipe: false,
    ...props.settings,
  };

  return (
    <Slider ref={ref ? ref : null} {...settings}>
      {props.children}
    </Slider>
  );
});

export default SliderModel;
