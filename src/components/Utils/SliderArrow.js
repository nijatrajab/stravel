import StyledBtn from "./StyledBtn";

const SliderArrowButton = (props) => {
  return (
    <StyledBtn
      onEvent={props.onClick}
      className={`${props.arrowClass ? props.arrowClass : ""}`}
    >
      {props.children}
    </StyledBtn>
  );
};

export default SliderArrowButton;
