import { TextField } from "@mui/material";
import classes from "./Input.module.css"

const InputField = ( props ) => {
  return <TextField {...props} className={classes["input"]}/>;
};

export default InputField;
