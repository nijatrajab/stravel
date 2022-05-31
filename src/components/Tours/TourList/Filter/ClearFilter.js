import { useContext } from "react";
import TourContext from "../../../../store/tour-context";
import StyledBtn from "../../../Utils/StyledBtn";

const ClearFilterBtn = ({ children, onClose, mediaQuery }) => {
  const tourCtx = useContext(TourContext);
  const clearFilterHandler = () => {
    tourCtx.clearFilter();
    if (mediaQuery) {
      onClose();
    }
  };
  return <StyledBtn onEvent={clearFilterHandler}>Clear filter</StyledBtn>;
};

export default ClearFilterBtn;
