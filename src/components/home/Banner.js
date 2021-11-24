import React from 'react'
import { Toolbar, Box, Typography } from '@mui/material'


export default function Banner() {
    return (
        <>
        <Box component="section">
            <Toolbar />
            <Box  py={8} >
            <Typography variant="h5" color="white"  fontFamily="Roboto" fontSize={34} textAlign="center" >
                Your journey begins here with the best offers and prices
            </Typography>
            <Typography fontSize={32} variant="h5" fontFamily="Roboto"  textAlign="center"color="white">Enjoy, compare and choose..</Typography>
            </Box>
        </Box>
        </>
    )
}
