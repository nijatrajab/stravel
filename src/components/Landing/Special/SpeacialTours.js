import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import SliderArrowButton from "../../Slider/SliderArrow";
import { headerSlide } from "../../../store/constant-images";
import SliderModel from "../../../UI/SliderModel";

import classes from "./SpecialTours.module.css";
import SpecialTour from "./SpeacialTour";

const SpecialTours = () => {
  const settings = {
    className: classes.slider5nav,
    slidesToShow: 3,
    autoplay: true,
    prevArrow: (
      <SliderArrowButton arrowClass={classes["content-card-prev-btn"]}>
        <MdNavigateBefore />
      </SliderArrowButton>
    ),
    nextArrow: (
      <SliderArrowButton arrowClass={classes["content-card-next-btn"]}>
        <MdNavigateNext />
      </SliderArrowButton>
    ),
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <SliderModel settings={settings}>
      {headerSlide.map((img) => (
        <div key={Math.random()} className={classes["content-card-hold"]}>
          <SpecialTour
            image={img.image}
            title={img.title}
            price={img.price}
            days={img.days}
            star={img.star}
          />
        </div>
      ))}
    </SliderModel>
  );
};

export default SpecialTours;
