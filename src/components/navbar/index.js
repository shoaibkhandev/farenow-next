import * as React from 'react';
// utils
import Link from '@utils/Link';
// Material UI
import {
    MenuIcon,
    IconButton,
    Button,
    Typography,
    Toolbar,
    Box,
    AppBar,
    Hidden,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Badge,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
} from '@mui/material';
import Logo from '../../../public/static/img/flyinLogo-white.png'
//Icons
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//theme
import { useTheme } from '@mui/material/styles';
// config
import navconfig from './config';
import SigninModal from './signinModal';
import BookingModal from './bookingModal';
import Image from 'next/image';
// drawer 
import Drawerpage from './drawer'


export default function ButtonAppBar() {
    const theme = useTheme();
    const { leftside } = navconfig;
    const [state, setstate] = React.useState({
        open: false,
    });
    const anchorRef = React.useRef();
    const handleToggle = () => {
        setstate((state) => ({ ...state, open: !state.open }));
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setstate((state) => ({ ...state, open: false }));
    };
    return (
        <React.Fragment>
            <AppBar position="absolute" color="transparent">
                <Toolbar>
                <Image  src={Logo} width={70} height={30}  />
                <Hidden mdDown >
                    <List sx={{ display: 'flex', alignItems: 'center' }}>
                        {leftside?.map((item, index) => (
                            <ListItem disablePadding key={`navleft-${index}`} sx={{ width: 'auto' }}>
                                <ListItemButton component={Link} href={item.href} >
                                    <Badge sx={{ '& .MuiBadge-badge': { borderRadius: '1px', fontSize: '9px', fontWeight: 400, p: '0 4px', height: '14px', '&:before': { content: "''", position: 'absolute', left: "3px", bottom: "-3px", width: 0, height: 0, borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderTop: "3px solid #F4675F" } } }} color="error" badgeContent={item.label !== undefined ? item.label : null}>
                                        <ListItemText sx={{ color: theme.palette.common.white }} primary={item.text} />
                                    </Badge>
                                </ListItemButton>
                            </ListItem>

                        ))}

                    </List>
                    <List sx={{ display: 'flex', alignItems: 'center', ml: "auto" }}>
                        <ListItem disablePadding sx={{ width: 'auto' }}>
                            <ListItemButton
                                onClick={handleToggle}
                                ref={anchorRef}
                                id="composition-button"
                                aria-controls={state.open ? "composition-menu" : undefined}
                                aria-expanded={state.open ? "true" : undefined}
                                aria-haspopup="true"
                            >
                                <ListItemIcon sx={{ minWidth: 0, transform: 'rotate(90deg)', mr: .2, '& svg': { width: '16px', height: '16px', fill: theme.palette.common.white } }}>
                                    <LocalOfferIcon />
                                </ListItemIcon>
                                <Badge sx={{ '& .MuiBadge-badge': { fontSize: '9px', fontWeight: 400, minWidth: '2px', height: '14px', p: '0 4px', top: -3 } }} color="error" badgeContent={1}>
                                    <Typography variant="body2" sx={{ color: theme.palette.common.white }}>Deals</Typography>
                                </Badge>
                            </ListItemButton>
                            <Popper
                                open={state.open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                                className="profile-menu-container"
                            >
                                {({ TransitionProps }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin: "right top",
                                            marginTop: 10,
                                            marginRight: -10,
                                            zIndex: 1000,
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <div>fdsfasdf</div>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </ListItem>
                        <ListItem disablePadding sx={{ width: 'auto' }}>
                            <SigninModal />
                            <BookingModal />
                        </ListItem>
                    </List>
                    </Hidden>
                    <Hidden mdUp >
                        <Box sx={{marginLeft:"auto"}} >
                    <Drawerpage/>
                    </Box>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
