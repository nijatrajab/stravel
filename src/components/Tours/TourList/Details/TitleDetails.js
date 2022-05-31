import { motion } from "framer-motion";
import classes from "./TitleDetails.module.css";
import TourTypes from "./TourTypes";

const TitleDetails = ({
  children,
  price,
  discount,
  special,
  discountPercent,
  discountPrice,
  days,
  type,
  toCountry,
  toCity,
}) => {
  return (
    <>
      <div className={classes["content-title"]}>
        <p className={classes["content-text"]}>
          {toCity}, {toCountry}
        </p>
      </div>
      <div className={classes["content-detail"]}>
        <p className={classes["content-price"]}>
          {discount ? discountPrice : price}$
        </p>
        <p>|</p>
        <p className={classes["content-days"]}>
          {days} day{`${+days > 0 ? "s" : ""}`}
        </p>
      </div>
      <TourTypes
        discount={discount}
        special={special}
        discountPercent={discountPercent}
        type={type}
      />
    </>
  );
};

export default TitleDetails;
