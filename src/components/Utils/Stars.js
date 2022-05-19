import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import classes from "./Stars.module.css";

const Stars = (props) => {
  const outlineStar = 5 - +props.starCount;

  return (
    <p className={`${classes["card-star"]} ${props.starClass ? props.starClass : ""}`}>
      {[...Array(+props.starCount)].map((_) => (
        <AiFillStar key={Math.random()} />
      ))}
      {[...Array(outlineStar)].map((_) => (
        <AiOutlineStar key={Math.random()} />
      ))}
    </p>
  );
};

export default Stars;
