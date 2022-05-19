import { Fragment } from "react";
import { IoLocationOutline } from "react-icons/io5";
import TourTypes from "../../../Tours/TourList/Details/TourTypes";

import classes from "./CardInsideUtils.module.css";

const CardInside = ({
  toCity,
  imgTitle,
  imgSpecial,
  imgDiscount,
  imgDiscountPercent,
  clsNameDivStyle,
  clsNameImgStyle,
  clsNameFooter,
  navIdx,
}) => {
  return (
    <Fragment>
      <div className={clsNameDivStyle}>
        <img
          src={require("../../../../assets/images/tours/" + toCity.toLowerCase() + ".jpg")}
          alt={imgTitle}
          className={clsNameImgStyle ? clsNameImgStyle : ""}
        />
      </div>
      <div className={clsNameFooter ? clsNameFooter : ""}>
        {navIdx !== null && navIdx !== undefined && (
          <Fragment>
            <p className={classes["card-head"]}>
              <IoLocationOutline /> {imgTitle}
            </p>
            <TourTypes discount={imgDiscount} special={imgSpecial} discountPercent={imgDiscountPercent} type={false} />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default CardInside;
