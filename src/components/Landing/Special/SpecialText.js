import classes from "./SpecialText.module.css";

const SpecialText = () => {
  return (
    <>
      <div className={classes["special-text"]}>
        <p className={classes["special-title"]}>TODAY'S SPECIAL!</p>
        <p className={classes["special-desc"]}>
          Lorem ipsum dolor sit amet, his convenire similique efficiendi et.
        </p>
      </div>
    </>
  );
};

export default SpecialText;
