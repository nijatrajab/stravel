import NavItem from "./NavItem";

import classes from "./HeaderHamburger.module.css";

const HeaderHamburger = ({ children, onClose, navDetail, mobileDevice }) => {
  return (
    <ul className={classes["header-hamburger"]}>
      {navDetail.map((nav, idx) => {
        return (
          <NavItem
            key={`mobile-nav-${nav.navigate}-${idx}`}
            label={nav.label}
            navigate={nav.navigate}
            navClass={classes["nav-hamburger"]}
            onClose={onClose}
            idx={idx}
            mobileDevice={mobileDevice}
          />
        );
      })}
    </ul>
  );
};

export default HeaderHamburger;
