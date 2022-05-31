import { testimonials } from "../../../store/constant-images";
import SliderModel from "../../UI/SliderModel";
import Testimonial from "./Testimonial";

import classes from "./Testimonials.module.css";

const settings = {
  className: classes.slider,
  slidesToShow: 1,
  autoplay: true,
  dots: true,
  swipe: true,
};

const Testimonials = () => {
  return (
    <div className={classes["testimonials"]}>
      <SliderModel settings={settings}>
        {testimonials.map((testm, idx) => (
          <Testimonial
            key={`testimonial-${idx}`}
            name={testm.name}
            desc={testm.desc}
            star={testm.star}
          />
        ))}
      </SliderModel>
    </div>
  );
};

export default Testimonials;
