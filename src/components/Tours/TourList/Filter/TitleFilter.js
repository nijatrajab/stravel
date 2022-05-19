import { useContext } from "react";
import TourContext from "../../../../store/tour-context";
import classes from "./TitleFilter.module.css";
import InputField from "./Utils/Input";

const TitleFilter = () => {
  const tourCtx = useContext(TourContext);

  const onTitleChange = (event) => {
    tourCtx.titleFilter(event.target.value);
  };

  return (
    <div className={classes["title-filter"]}>
      <InputField
        id="title"
        placeholder="Title"
        onChange={onTitleChange}
      />
    </div>
  );
};

export default TitleFilter;
