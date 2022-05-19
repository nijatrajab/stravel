import classes from "./TourTypes.module.css"


const TourTypes = ({children, special, discount, type, discountPercent}) => {
  return (
    <div className={classes["content-types"]}>
      {type && <p className={classes["content-type"]}>{type.replace("_", " ")}</p>}
      {((discount || special) && type) && <p className={classes["content-line"]}>|</p>}
      {special && <p className={classes["content-special"]}>special</p>}
      {discount && special && <p className={classes["content-line"]}>|</p>}
      {discount && (
        <p className={classes["content-discount"]}>%{discountPercent} off</p>
      )}
    </div>
  );
};

export default TourTypes
