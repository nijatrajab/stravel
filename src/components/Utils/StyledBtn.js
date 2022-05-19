import Button from "../../UI/Button";

import classes from "./StyledBtn.module.css"

const StyledBtn = ({ children, onEvent, className }) => {
  return (
    <Button buttonClass={`${className} ${classes["styled-btn"]}`} onClick={onEvent}>
      {children}
    </Button>
  );
};

export default StyledBtn;
