import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: "#C8FACD",
  light: "#5BE584",
  main: "#edb20e",
  dark: "#04618B",
  darker: "#005249",
};
const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#15427a",
  dark: "#1939B7",
  darker: "#091A7A",
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#F0F7FA",
  dark: "#0C53B7",
  darker: "#04297A",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#1BC47D",
  dark: "#1BC47D",
  darker: "#138958",
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFD400",
  dark: "#B78103",
  darker: "#B49602",
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#e44f4f",
  dark: "#B72136",
  darker: "#E83B68",
};

export const GREY = {
  0: "#FFFFFF",
  100: "#F2F2F2",
  200: "#DDDDDD",
  300: "#C9C8C8",
  400: "#7C878E",
  500: "#3C3C3B",
  600: "#1B2746",
  700: "#00234B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};


const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#000" },
  success: { ...SUCCESS, contrastText: "#fff" },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
  gradients: GRADIENTS,
  divider: "#DDDDDD",
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  ...COMMON,
  mode: "light",
  text: {
    primary: "#1B2746",
    secondary: "#7C878E",
    disabled: GREY[500],
  },
  background: {
    default: "#ffffff",
    paper: "#ffffff",
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    ...COMMON.action,
  },
};
export default palette;
