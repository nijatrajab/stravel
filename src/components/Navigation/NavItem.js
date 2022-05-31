import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./NavItem.module.css";

const navVariants = {
  hidden: {
    color: "rgb(var(--main-font-color))",
    // backgroundColor: "rgb(var(--background))",
  },
  visible: {
    color: "rgb(var(--main-highlighted))",
    // backgroundColor: "rgb(var(--main-component-bg))",
  },
};

const NavItem = ({
  children,
  label,
  navigate,
  navClass,
  onClose,
  idx,
  mobileDevice,
}) => {

  const layoutProps = !mobileDevice
    ? {
        layoutId: "background-color",
        transition: {
          layout: {
            duration: 0.3,
          },
        },
      }
    : null;

  return (
    <motion.li
      // layoutId={`nav-${idx}`}
      key={`nav-${idx}`}
    >
      <NavLink
        to={navigate}
        className={classes["nav-link"]}
        children={({ isActive }) => {
          return (
            <>
              {isActive && (
                <motion.div
                  className={classes["nav-background"]}
                  {...layoutProps}
                ></motion.div>
              )}
              <motion.p
                className={`${classes["nav-scroll"]} ${
                  navClass ? navClass : ""
                }`}
                variants={navVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
                onClick={onClose ? onClose : null}
              >
                {label}
              </motion.p>
            </>
          );
        }}
      ></NavLink>
    </motion.li>
  );
};

export default NavItem;
