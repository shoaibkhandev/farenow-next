import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import AppThemeProvider from "../theme";
import CssBaseline from "@mui/material/CssBaseline";
import "@styles/globals.scss";
import { GlobleStyles } from "../theme/globleStyles";
import Noop from '@components/layout/Layout'



function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}
function MyApp(props) {
  const { Component, pageProps, router } = props;
  const Layout = Component.Layout || Noop;
  return (
    <>
      <Head>
        <title>FlyIn</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppThemeProvider>
        <Layout>
          <GlobleStyles>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </GlobleStyles>
        </Layout>
      </AppThemeProvider>

    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
