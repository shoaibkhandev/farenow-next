import React from "react";
import { Box } from "@mui/material";
import Banner from "@components/home/Banner";
import Trandingholiday from "@components/home/Trandingholiday";
import Planing from "@components/home/Planing";
import Ourapp from "@components/home/Ourapp";
import Essantial from "@components/home/Essantial";
import Topsection from "@components/home/Topsection";
import Flight from "@components/home/Flight";
export default function Home() {
  return (
    <>
      <Box component="main" className="home">
        <Banner />
        <Flight />
      </Box>
      <Trandingholiday />
      <Planing />
      <Ourapp />
      <Essantial />
      <Topsection />
    </>
  );
}


