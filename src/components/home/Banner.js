import React from 'react'
import { Toolbar, Box, Typography } from '@mui/material'
export default function Banner() {
    return (
        <Box component="section">
            <Toolbar />
            <Typography variant="h5" color="white" fontSize={34} textAlign="center" sx={{ py: 8 }}>
                Your journey begins here with the best offers and prices
                <Typography fontSize={32} color="white">Enjoy, compare and choose..</Typography>
            </Typography>
        </Box>
    )
}
