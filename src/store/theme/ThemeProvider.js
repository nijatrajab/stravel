import { useEffect, useReducer, useState } from "react";
import { getLocalStorage, setCSSVariables, setLocalStorage, THEMES } from "./theme-config";
import ThemeContext from "./theme-context";

export const CHANGE_THEME = "CHANGE_THEME";

const defaultThemeState = {
  themeName: getLocalStorage("themeName", "light"),
};

const themeReducer = (state, action) => {
  const themeChanger = (themeState) => {
    return themeState.themeName === "dark" ? {...themeState, themeName: "light"} : {...themeState, themeName: "dark"};
  };

  switch (action.type) {
    case CHANGE_THEME:
      return themeChanger(state);
    default:
      return defaultThemeState;
  }
};

const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    defaultThemeState
  );

  const themeChangeHandler = () => {
    dispatchTheme({ type: CHANGE_THEME });
  };

  const themeContext = {
    theme: themeState.themeName,
    themeChange: themeChangeHandler,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
