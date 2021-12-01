import React from "react";
import { Box } from "@mui/material";
import Banner from "@components/home/Banner";
import Trandingholiday from "@components/home/Trandingholiday";
import Planing from "@components/home/Planing";
import Ourapp from "@components/home/Ourapp";
import Essantial from "@components/home/Essantial";
import Topsection from "@components/home/Topsection";
import Flight from "@components/home/Flight";
import { openSidebar } from '@redux/slices/Reducer'
import { useSelector, useDispatch } from 'react-redux'
export default function Home() {
  const { state } = useSelector(state => state);
  const dispatch = useDispatch();
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


