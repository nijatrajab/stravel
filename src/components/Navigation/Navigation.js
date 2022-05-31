import Footer from "./Footer";
import Header from "./Header";
import HeaderHamburger from "./HeaderHamburger";
import Modal from "../UI/Modal";
import classes from "./Navigation.module.css";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";

const Navigation = (props) => {
  const [showModal, setShowModal] = useState(false);
  const mobileDevice = useMediaQuery("(max-width: 768px)");

  const navDetail = [
    {label: "Home", navigate: "/"},
    {label: "Tours", navigate: "tours"},
    {label: "About us", navigate: "about"},
  ]

  const onCloseHandler = () => {
    setShowModal(false);
  };

  const onEventHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (!mobileDevice) {
      setShowModal(false);
    }
  }, [mobileDevice]);

  return (
    <div className={classes.home}>
      <AnimatePresence>
        {showModal && (
          <Modal onClose={onCloseHandler} className={classes["modal-class"]}>
            <HeaderHamburger onClose={onCloseHandler} navDetail={navDetail} mobileDevice={mobileDevice}/>
          </Modal>
        )}
      </AnimatePresence>
      <Header onOpen={onEventHandler} navDetail={navDetail} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Navigation;
