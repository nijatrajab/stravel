import Button from "../../UI/Button"

const SliderArrowButton = (props) => {
    return (
        <Button  onClick={props.onClick} buttonClass={`${props.arrowClass ? props.arrowClass : ""} `}>
            {props.children}
        </Button>
    )
}

export default SliderArrowButton