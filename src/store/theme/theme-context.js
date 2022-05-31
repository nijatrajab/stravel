import React from "react";
import { getLocalStorage } from "./theme-config";


const ThemeContext = React.createContext({
  theme: getLocalStorage("themeName", "light"),
  themeChange: () => {},
});

export default ThemeContext;
