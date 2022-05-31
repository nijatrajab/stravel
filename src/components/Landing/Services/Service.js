import { useContext } from "react";
import ThemeContext from "../../../store/theme/theme-context";
import classes from "./Service.module.css";

const Service = ({ children, image, title, desc }) => {

  return (
    <div className={classes["service-holder"]}>
      <div className={classes["service-image-holder"]}>
        {image}
      </div>
      <p className={classes["service-title"]}>{title}</p>
      <p className={classes["service-description"]}>{desc}</p>
    </div>
  );
};

export default Service;
