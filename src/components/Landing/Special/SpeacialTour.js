import Card from "../../../UI/Card";
import Stars from "../../Utils/Stars";
import classes from "./SpecialTour.module.css";

const SpecialTour = (props) => {
  return (
    <Card cardClass={classes["content-card"]}>
      <div className={classes["content-card-img"]}>
        <img src={props.image} alt={props.title}></img>
      </div>
      <div className={classes["content-card-detail"]}>
        <div className={classes["content-card-price"]}>
          <p className={classes["content-card-price-title"]}>GUIDED TOURS</p>
          <div className={classes["content-card-price-tag"]}>
            <p
              className={classes["content-card-price-num"]}
            >{`$${props.price}`}</p>
            /day
          </div>
        </div>
        <p className={classes["content-card-title"]}>{props.title}</p>
        <div className={classes["content-card-days"]}>
          <Stars starCount={props.star} />
          <p>{props.days} days tour</p>
        </div>
      </div>
    </Card>
  );
};

export default SpecialTour;
