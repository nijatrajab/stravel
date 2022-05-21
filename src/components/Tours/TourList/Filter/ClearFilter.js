import { useContext } from "react";
import TourContext from "../../../../store/tour-context";
import StyledBtn from "../../../Utils/StyledBtn";

const ClearFilterBtn = ({children, onClose}) => {
    const tourCtx = useContext(TourContext)
    const clearFilterHandler = () => {
      tourCtx.clearFilter();
      onClose()
    };
    return <StyledBtn onEvent={clearFilterHandler}>Clear filter</StyledBtn>
}

export default ClearFilterBtn