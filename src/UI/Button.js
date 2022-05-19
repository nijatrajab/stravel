import classes from "./Button.module.css";

const Button = (props) => {
  return <button onClick={props.onClick ? props.onClick : null} className={`${classes.button} ${props.buttonClass}`}>{props.children}</button>;
};

export default Button;
