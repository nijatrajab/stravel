import { useMediaQuery } from "@mui/material";
import { useState, useRef, Fragment, useEffect } from "react";
import { mainTours } from "../../../store/constant-images";
import Content from "../../../UI/Content";
import BackgroundSlide from "./BackgroundSlide";
import CardSlide from "./CardSlide";
import DescriptionSlide from "./DescriptionSlide";
import TitleSlide from "./TitleSlide";

import classes from "./HeaderSlide.module.css"

const HeaderSlide = () => {
  const [nav, setNav] = useState(0);

  const mobileTabletDevice = useMediaQuery(
    "(max-width: 1024px)"
  );

  console.log("movile rendering cycle")

  const filteredTours = mainTours.filter((mainTour) => {
    return mainTour.special === true && mainTour.discount === true;
  });

  const sliderRef1 = useRef();
  const sliderRef3 = useRef();
  const sliderRef4 = useRef();

  const gotoNext = (goTo) => {
    sliderRef1.current.slickGoTo(goTo);
    sliderRef3.current.slickGoTo(goTo);
    sliderRef4.current.slickGoTo(goTo);
  };

  useEffect(() => {
    if(mobileTabletDevice) {
      const interval = setInterval(() => {
        if(nav === filteredTours.length - 1){
          setNav(0)
        } else if (nav <= filteredTours.length - 1) {
          setNav(prevNav => prevNav + 1)
        }
        gotoNext(nav)
      }, 3000);
      return () => clearInterval(interval);
    }

  }, [mobileTabletDevice, filteredTours.length, nav]);

  return (
    <Fragment>
      <BackgroundSlide ref={sliderRef1} data={filteredTours} />

      <Content contentClass={classes["content-slider"]}>
        {!mobileTabletDevice && (
          <CardSlide
            setNav={setNav}
            goToNext={gotoNext}
            navState={nav}
            data={filteredTours}
          />
        )}
        <TitleSlide ref={sliderRef3} data={filteredTours} />
        <DescriptionSlide ref={sliderRef4} data={filteredTours} />
      </Content>
    </Fragment>
  );
};

export default HeaderSlide;
