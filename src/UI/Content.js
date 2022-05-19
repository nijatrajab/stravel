import classes from "./Content.module.css"

const Content = ({ children, contentClass }) => {
  return <div className={`${classes["content"]} ${contentClass ? contentClass : ""}`}>{children}</div>;
};

export default Content;
