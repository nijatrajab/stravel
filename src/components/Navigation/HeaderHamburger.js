import { Link } from "react-router-dom";

import classes from "./HeaderHamburger.module.css";

const HeaderHamburger = ({children, onClose}) => {
  return (
    <div className={classes["header-hamburger"]}>
      <Link to="/">
        <p className={`${classes["nav-hamburger"]}`} onClick={onClose}>Home</p>
      </Link>

      <Link to="/tours">
        <p className={`${classes["nav-hamburger"]}`} onClick={onClose}>Tours</p>
      </Link>

      <Link to="/about">
        <p className={`${classes["nav-hamburger"]}`} onClick={onClose}>About us</p>
      </Link>
    </div>
  );
};

export default HeaderHamburger;
