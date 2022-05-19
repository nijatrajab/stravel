import classes from "./FadeSlider.module.css";
import Blogs from "../components/Landing/BlogPost/Blogs";
import HeaderSlide from "../components/Landing/Sliders/Header/HeaderSlide";
import MainTours from "../components/Landing/Sliders/MainTours/MainTours";
import MainToursText from "../components/Landing/Sliders/MainTours/MainToursText";

const Home = () => {
  console.log("Rendering")

  return (
    <div className={classes.header}>
      <HeaderSlide />
      <div className={classes.content}>
        <div className={classes["content-section"]}>
          <MainToursText />
          <MainTours />
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
