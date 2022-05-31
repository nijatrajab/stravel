import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiMailLine,
  RiTelegramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import Card from "../UI/Card";
import classes from "./Footer.module.css";
import Instagram from "./Footer/Instagram";

const Footer = () => {
  let dy = new Date();
  const miniDesktopDeviceOrLess = useMediaQuery("(max-width: 1200px)");

  const logo = (
    <div className={classes["footer-logo"]}>
      <p>STravel</p>
    </div>
  );

  const siteMap = (
    <div className={classes["footer-map"]}>
      <Link to="/" >
        <p>Home</p>
      </Link>

      <Link to="tours">
        <p>Tours</p>
      </Link>

      <Link to="about">
        <p>About us</p>
      </Link>
    </div>
  );

  const socialIcons = (
    <div className={classes["social"]}>
      <a
        href="https://fb.com"
        target="_blank"
        rel="noreferrer"
        className={classes["social-icons"]}
      >
        <RiFacebookLine />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className={classes["social-icons"]}
      >
        <RiInstagramLine />
      </a>
      <a href="mailto:someone@stravel.com" className={classes["social-icons"]}>
        <RiMailLine />
      </a>
      <a
        href="https://t.me"
        target="_blank"
        rel="noreferrer"
        className={classes["social-icons"]}
      >
        <RiTelegramLine />
      </a>
      <a
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noreferrer"
        className={classes["social-icons"]}
      >
        <RiWhatsappLine />
      </a>
    </div>
  );

  return (
    <footer>
      <Card>
        <Instagram />
        <div className={classes.footer}>
          <div className={classes["footer-outer"]}>
            <div className={classes["footer-base"]}>
              {logo}
              <div className={classes["footer-line"]}></div>
              {!miniDesktopDeviceOrLess && siteMap}
            </div>
            <div className={classes["footer-others"]}>
              {miniDesktopDeviceOrLess && siteMap}
              {socialIcons}
            </div>
          </div>
        </div>
        <div className={classes["footer-footnote"]}>
          <p>© {dy.getFullYear()} Stravel. All rights reserved.</p>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
