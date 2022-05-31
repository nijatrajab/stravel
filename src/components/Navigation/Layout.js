import { Fragment, useContext, useEffect } from "react";
import {
  setCSSVariables,
  setLocalStorage,
  THEMES,
} from "../../store/theme/theme-config";
import ThemeContext from "../../store/theme/theme-context";
import Navigation from "./Navigation";

const Layout = (props) => {
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    setCSSVariables(THEMES[themeCtx.theme]);
    setLocalStorage("themeName", themeCtx.theme);
  });

  return (
    <Fragment>
      <Navigation>
        <main>{props.children}</main>
      </Navigation>
    </Fragment>
  );
};

export default Layout;
