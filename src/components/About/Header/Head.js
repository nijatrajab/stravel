import HeadCard from "./HeadCard";
import classes from "./Head.module.css";
import { aboutHead } from "../../../store/constant-images";

const Head = () => {
  return (
    <>
      <div className={classes["content-head"]}>
        <HeadCard
          gridIdx="1"
          xState="2"
          yState="1"
          headClass={classes["grid1-imgHolder"]}
        >
          <img
            src={aboutHead[0]}
            alt="grid1"
            className={classes["grid1-img"]}
          />
        </HeadCard>
        <HeadCard
          gridIdx="2"
          xState="2"
          yState="2"
          headClass={classes["grid2-imgHolder"]}
        >
          <img
            src={aboutHead[1]}
            alt="grid2"
            className={classes["grid2-img"]}
          />
        </HeadCard>
        <HeadCard
          gridIdx="3"
          xState="1"
          yState="1"
          headClass={classes["grid3-imgHolder"]}
        >
          <img
            src={aboutHead[2]}
            alt="grid3"
            className={classes["grid3-img"]}
          />
        </HeadCard>
        <HeadCard
          gridIdx="4"
          xState="1"
          yState="2"
          headClass={classes["grid4-imgHolder"]}
        >
          <img
            src={aboutHead[3]}
            alt="grid4"
            className={classes["grid4-img"]}
          />
        </HeadCard>
        <HeadCard
          gridIdx="5"
          xState="1"
          yState="2"
          headClass={classes["grid5-imgHolder"]}
        >
          <img
            src={aboutHead[4]}
            alt="grid5"
            className={classes["grid5-img"]}
          />
        </HeadCard>
        <HeadCard
          gridIdx="6"
          xState="1"
          yState="1"
          headClass={classes["grid6-imgHolder"]}
        >
          <img
            src={aboutHead[5]}
            alt="grid6"
            className={classes["grid6-img"]}
          />
        </HeadCard>
      </div>
    </>
  );
};

export default Head;
