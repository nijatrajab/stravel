import { useContext } from "react";
import TourContext from "../../../../store/tour-context";
import StyledBtn from "../../../Utils/StyledBtn";

const ApplyFilterBtn = ({children, mediaQuery, onClose}) => {
    const tourCtx = useContext(TourContext)
    const applyFilterHandler = () => {
        tourCtx.applyFilter(mediaQuery);
        onClose();
      };
    return <StyledBtn onEvent={applyFilterHandler}>Apply filter</StyledBtn>
}

export default ApplyFilterBtn