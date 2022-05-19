import Footer from "./Footer";
import Header from "./Header";
import HeaderHamburger from "./HeaderHamburger";
import Modal from "../../UI/Modal";
import classes from "./Navigation.module.css";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";

const Navigation = (props) => {
  const [showModal, setShowModal] = useState(false);
  const mobileDevice = useMediaQuery("(max-width: 768px)");

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
          <Modal onClose={onCloseHandler}>
            <HeaderHamburger onClose={onCloseHandler} />
          </Modal>
        )}
      </AnimatePresence>
      <Header onOpen={onEventHandler} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Navigation;
