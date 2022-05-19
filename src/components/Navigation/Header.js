import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Content from "../../UI/Content";
import StyledBtn from "../Utils/StyledBtn";
import { CgDetailsMore } from "react-icons/cg";
import classes from "./Header.module.css";

const Header = ({children, onOpen}) => {
  // const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 3) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // useEffect(() => {
  //   changeBackground();
  //   window.addEventListener("scroll", changeBackground);
  //   return window.removeEventListener("scroll", null)
  // });

  const mobileDevice = useMediaQuery("(max-width: 768px)");

  return (
    <header className={`${classes.header}`}>
      <Content contentClass={` ${classes["header-scroll"]}`}>
        <Link to="/" style={{ margin: 0 }}>
          <div className={`${classes.logo} ${classes["logo-scroll"]}`}>
            STravel
          </div>
        </Link>
        <nav style={{ margin: 0 }}>
          {mobileDevice ? (
            <StyledBtn className={classes["nav-btn"]} onEvent={onOpen}>
              <CgDetailsMore />
            </StyledBtn>
          ) : (
            <ul>
              <li>
                <Link to="/">
                  <p className={`${classes["nav-scroll"]}`}>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/tours">
                  <p className={`${classes["nav-scroll"]}`}>Tours</p>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <p className={`${classes["nav-scroll"]}`}>About us</p>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </Content>
    </header>
  );
};

export default Header;
