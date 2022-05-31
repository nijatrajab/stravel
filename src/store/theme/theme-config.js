import Color from "./color-model";

export const THEMES = {
  light: {
    "--main-font-color": Color.BEIGE_BLACK,
    "--secondary-font-color": Color.LIGHT_BEIGE_BLACK,
    "--inverse-font-color": Color.LIGHT_BEIGE,
    "--static-font-color": Color.LIGHT_BEIGE,
    "--background": Color.LIGHT_BEIGE,
    "--main-component-bg": Color.BEIGE,
    "--secondary-component-bg": Color.DARK_BEIGE,
    "--inverse-component-bg": Color.BEIGE_BLACK,
    "--static-component-bg": Color.BEIGE_BLACK,
    "--main-highlighted": Color.HIGHLIGHT,
  },
  dark: {
    "--main-font-color": Color.LIGHT_BEIGE,
    "--secondary-font-color": Color.BEIGE,
    "--inverse-font-color": Color.BEIGE_BLACK,
    "--static-font-color": Color.LIGHT_BEIGE,
    "--background": Color.BEIGE_BLACK,
    "--main-component-bg": Color.LIGHT_BEIGE_BLACK,
    "--secondary-component-bg": Color.DARK_BEIGE_BLACK,
    "--inverse-component-bg": Color.LIGHT_BEIGE,
    "--static-component-bg": Color.BEIGE_BLACK,
    "--main-highlighted": Color.HIGHLIGHT,
  },
};

export const setCSSVariables = (theme) => {
  for (const value in theme) {
    document.documentElement.style.setProperty(`${value}`, theme[value]);
  }
};

export const setLocalStorage = (keyProp, valueProp) => {
  try {
    window.localStorage.setItem(keyProp, JSON.stringify(valueProp));
  } catch (e) {
    throw new Error(e);
  }
};

export const getLocalStorage = (keyProp, initialProp) => {
  try {
    const valueProp = localStorage.getItem(keyProp);
    return valueProp ? JSON.parse(valueProp) : initialProp;
  } catch (e) {
    return initialProp;
  }
};
