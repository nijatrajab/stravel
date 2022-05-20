import classes from "./HeadingText.module.css";

const HeadingText = ({children, title, desc}) => {
  return (
    <div className={classes["special-text"]}>
      <p className={classes["special-title"]}>{title}</p>
      <p className={classes["special-desc"]}>
        {desc}
      </p>
    </div>
  );
};

export default HeadingText;
