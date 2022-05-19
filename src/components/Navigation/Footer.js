import {
  RiFacebookLine,
  RiInstagramLine,
  RiMailLine,
  RiTelegramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import Card from "../../UI/Card";
import classes from "./Footer.module.css";
import Instagram from "./Footer/Instagram";

const Footer = () => {
  let dy = new Date();
  console.log(dy.getFullYear());
  return (
    <footer>
      <Card>
        <Instagram />
        <div className={classes.footer}>
          <div className={classes["footer-outer"]}>
            <div className={classes["footer-base"]}>
              <div className={classes["footer-logo"]}>
                <p>STravel</p>
              </div>
              <div className={classes["footer-line"]}>|</div>

                <div className={classes["footer-map"]}>
                  <p>Home</p>
                  <p>Tours</p>
                  <p>About us</p>
                </div>

            </div>

              <div className={classes["social"]}>
                <RiFacebookLine className={classes["social-icons"]} />
                <RiInstagramLine className={classes["social-icons"]} />
                <a
                  href="mailto:someone@stravel.com"
                  className={classes["social-icons"]}
                >
                  <RiMailLine />
                </a>
                <RiTelegramLine className={classes["social-icons"]} />
                <RiWhatsappLine className={classes["social-icons"]} />
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
