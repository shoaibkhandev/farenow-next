

// ----------------------------------------------------------------------

function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (max-width:900px)": {
      fontSize: sm,
    },
    "@media (min-width:900px)": {
      fontSize: md,
    },
    "@media (min-width:1200px)": {
      fontSize: lg,
    },
  };
}

const FONT_PRIMARY = ["Roboto"];
// const FONT_SECONDARY = ["Montserrat"];

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontFamily: "Roboto-Bold",
    lineHeight: 80 / 64,
    fontSize: 64,
    ...responsiveFontSizes({ sm: 40, md: 58, lg: 64 }),
  },
  h2: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: 56,
    ...responsiveFontSizes({ sm: 32, md: 44, lg: 56 }),
  },
  h3: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: 48,
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 48 }),
  },
  h4: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: 40,
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 40 }),
  },
  h5: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: 32,
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 32 }),
  },
  h6: {
    fontFamily: "Roboto-Medium",
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: 24,
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 24 }),
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: 16,
    lineHeight: 22 / 14,
    fontWeight: 400,
  },
  body1: {
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 400,
  },
  body2: {
    fontSize: 12,
    lineHeight: 22 / 14,
    fontWeight: 400,
  },
  caption: {
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 400,
  },
  overline: {
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  button: {
    textTransform: "normal",
    borderRadius: 6,
    fontWeight: 500,
    fontFamily: "Roboto",
  },
};

export default typography;
