import TourList from "./TourList/TourList";
import TourFilter from "./TourList/TourFilter";
import TourProvider from "../../store/TourProvider";
import { StyledEngineProvider } from "@mui/material";

import { useCallback, useContext, useState } from "react";
import HeaderSlide from "./Header/HeaderSlide";
import ContentSection from "../UI/ContentSection";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import Modal from "../UI/Modal";

import classes from "./Tours.module.css";
import Content from "../UI/Content";
import HeadingText from "../Utils/HeadingText";
import TourContext from "../../store/tour-context";

const Tours = () => {
  const [filterActive, setFilterActive] = useState(false);
  console.log("on Main Tours");

  const notDesktopDevice = useMediaQuery("(max-width: 1600px)");

  const onCloseHandler = useCallback(() => {
    setFilterActive(false);
  }, []);

  let filterComp;

  if (filterActive && !notDesktopDevice) {
    filterComp = (
      <StyledEngineProvider injectFirst>
        <TourFilter key={`TourFilter`} mediaQuery={notDesktopDevice} />
      </StyledEngineProvider>
    );
  } else if (filterActive && notDesktopDevice) {
    filterComp = (
      <Modal onClose={onCloseHandler}>
        <StyledEngineProvider injectFirst>
          <TourFilter
            key={`TourFilter`}
            mediaQuery={notDesktopDevice}
            onClose={onCloseHandler}
          />
        </StyledEngineProvider>
      </Modal>
    );
  }

  return (
    <>
      <div className={classes["tour-header"]}>
        <HeaderSlide />
      </div>

      <Content>
        <ContentSection sectionClass={classes["tour-holder"]}>
          <HeadingText
            title="OUR TOURS!"
            desc="Lorem ipsum dolor sit amet, his convenire similique efficiendi et."
          />
          <div className={classes["tour-page"]}>
            <TourList
              key={`TourFilter1`}
              filterState={notDesktopDevice ? "notDesktop" : filterActive}
              filterStateFn={setFilterActive}
              isNotDesktop={notDesktopDevice}
              // tours={mainTours}
            />
            <AnimatePresence>{filterComp}</AnimatePresence>
          </div>
        </ContentSection>
      </Content>
    </>
  );
};

export default Tours;
