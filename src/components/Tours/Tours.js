import TourList from "./TourList/TourList";
import TourFilter from "./TourList/TourFilter";
import TourProvider from "../../store/TourProvider";
import { StyledEngineProvider } from "@mui/material";

import { useState } from "react";
import HeaderSlide from "./Header/HeaderSlide";
import ContentSection from "../../UI/ContentSection";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import Modal from "../../UI/Modal";

import classes from "./Tours.module.css";

const Tours = () => {
  const [filterActive, setFilterActive] = useState(false);

  const notDesktopDevice = useMediaQuery("(max-width: 1600px)");

  const onCloseHandler = () => {
    setFilterActive(false);
  };

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
          <TourFilter key={`TourFilter`} mediaQuery={notDesktopDevice} onClose={onCloseHandler}/>
        </StyledEngineProvider>
      </Modal>
    );
  }

  return (
    <TourProvider>
      <div
        style={{ position: "relative", height: "650px", overflow: "hidden" }}
      >
        <HeaderSlide />
      </div>

      <div style={{ margin: "auto 14%", textAlign: "center" }}>
        <ContentSection sectionClass={classes["tour-page"]}>
          <TourList
            key={`TourFilter1`}
            filterState={filterActive}
            filterStateFn={setFilterActive}
            isNotDesktop={notDesktopDevice}
          />
          <AnimatePresence>{filterComp}</AnimatePresence>
        </ContentSection>
      </div>
    </TourProvider>
  );
};

export default Tours;
