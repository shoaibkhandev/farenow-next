import React from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    ListItemButton,
    Typography,
    ListItemIcon,
    Button,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function SigninModal() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <ListItemButton onClick={handleClickOpen}>
                <Typography variant="body2" sx={{ color: theme.palette.common.white }}>Sign In</Typography>
                <ListItemIcon sx={{ minWidth: 0, ml: -.5, '& svg': { width: '20px', height: '20px', fill: theme.palette.common.white } }}>
                    <ArrowDropDownIcon />
                </ListItemIcon>
            </ListItemButton>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll='body'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Sign In</DialogTitle>
                <DialogContent>
                    fasdfsa
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
