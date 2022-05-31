import { useContext } from "react";
import TourContext from "../../../../store/tour-context";
import classes from "./TitleFilter.module.css";
import InputField from "./Utils/Input";

const validatingText = (text) => {
  if (
    text.toString().trim().length === 0
  ) {
    return text.toString().trim();
  } else {
    return text.toString();
  }
};

const TitleFilter = ({ children, mediaQuery }) => {
  const tourCtx = useContext(TourContext);

  const onTitleChange = (event) => {

      tourCtx.titleFilter(validatingText(event.target.value), mediaQuery);
    
  };

  return (
    <div className={classes["title-filter"]}>
      <InputField
        id="title"
        placeholder="Title"
        onChange={onTitleChange}
        value={tourCtx.filterConfigs.title}
      />
    </div>
  );
};

export default TitleFilter;
