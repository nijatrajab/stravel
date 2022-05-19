import { gallery } from "../../../store/constant-images";
import SliderModel from "../../../UI/SliderModel";

import classes from "./Instagram.module.css";
import InstaPhoto from "./InstaPhoto";

const Instagram = () => {
  const settings = {
    className: classes["instagram-slider"],
    slidesToShow: 10,
    autoplay: true,
    infinite: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className={classes["instagram"]}>

      <SliderModel settings={settings}>
        {gallery.map((img) => (
          <div
            key={`instagram-${img._id}`}
            className={classes["instagram-card-hold"]}
          >
            <InstaPhoto photo={img.imageLink} text={img.imageText} />
          </div>
        ))}
      </SliderModel>
      <a href="https://instagram.com/random" target="_black" className={classes["instagram-button"]}>
        INSTAGRAM
      </a>
    </div>
  );
};

export default Instagram;
