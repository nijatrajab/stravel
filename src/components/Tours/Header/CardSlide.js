import SliderModel from "../../UI/SliderModel";
import classes from "./CardSlide.module.css";
import CardUtils from "./Utils/CardUtils";

const CardSlide = (props) => {
  const settings = {
    className: classes.slider2nav,
    autoplay: true,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: -70,
    beforeChange: (_, next) => {
        props.setNav(next);
        props.goToNext(props.navState + 1);
    },
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderModel settings={settings}>
      {props.data.map((img, idx) => (
        <div
        key={`cardSlide-${Math.random()}-${idx}`}
        className={`${classes.cardImg ? classes.cardImg : ""} ${
            (props.navState !== null || undefined) && +props.navState === idx
            ? classes["cardImg-active"]
            : ""
        } ${
            (props.navState !== null || undefined) &&
            ((+props.navState === 0 ? props.data.length - 1 === idx : +props.navState - 1 === idx) ||
            (+props.navState === 0 ? props.data.length - 2 === idx : +props.navState - 2 === idx) ||
            (+props.navState === 0 ? props.data.length - 3 === idx : +props.navState - 3 === idx) ||
            (+props.navState === 1 ? props.data.length - 1 === idx : false) ||
            (+props.navState === 1 ? props.data.length - 2 === idx : false) ||
            (+props.navState === 2 ? props.data.length - 1 === idx : false))
            ? classes["cardImg-last-active"]
            : ""
        }`}
        >
            <CardUtils img={img} clsName={{
            divStyle: classes.divStyle1,
            cardImg: classes.cardImg,
            imgStyle: classes.imgCours,
            cardFooter: classes["card-footer"],
            }} navIdx={props.navState}/>
        </div>
    ))}
    </SliderModel>
  );
};

export default CardSlide;
