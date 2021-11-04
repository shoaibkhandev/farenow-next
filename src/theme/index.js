import React from "react";
import PropTypes from "prop-types";
// material
import { CssBaseline } from "@mui/material";
//emotions
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

// hooks
import palette from "./palette";
import typography from "./typography";
import componentsOverride from "./overrides";
import { shadows } from "./shadows";

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node,
};
const cache = createCache({
  key: 'css',
  prepend: true,
});
export default function ThemeConfig({ children }) {
  const themeOptions = {
    palette,
    typography,
    shadows: shadows,
    shape: {
      borderRadius: 6,
    }
  }

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        {children}
      </ThemeProvider >
    </CacheProvider>
  );
}
