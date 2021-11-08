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
    Grid,
    Box,
    FormControl,
    InputLabel ,
    Select,
    MenuItem,
    FormControlLabel,
    Switch,

} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Navbar,Container, NavDropdown,Nav,Row,Col } from 'react-bootstrap'
import Paper from '@mui/material/Paper';
import Tabsignin from './Tabsign'


export default function SigninModal() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleMaxWidthChange = (event) => {
      setMaxWidth(
      
        event.target.value,
      );
    };
    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
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
             scroll='body'
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        className="sign-in-modal"
        sx={{'& .MuiDialog-paper':{
            backgroundColor:"#3771bb",
        },}}
      >
        
        <DialogContent>
            <Row>
                <Col lg={7} >
                <div data-v-71ad051a="" class="section-heading mb-5"><h2 data-v-71ad051a="">Register with flyin</h2> <span data-v-71ad051a="">  get following benefits</span></div>
        <div data-v-71ad051a="" class="list-group"><div data-v-71ad051a="" class="list-group-item"><svg data-v-71ad051a="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="check2 circle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-check2-circle mr-3 b-icon bi"><g data-v-71ad051a=""><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"></path></g></svg>
                        Special offers for Flights, Hotels, Flight+ Hotel &amp; Holidays
                    </div> <div data-v-71ad051a="" class="list-group-item"><svg data-v-71ad051a="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="credit card2 front" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-credit-card2-front mr-3 b-icon bi"><g data-v-71ad051a=""><path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path><path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"></path><path fill-rule="evenodd" d="M2 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"></path></g></svg>
                        Add and store traveller's information of family or friends
                    </div> <div data-v-71ad051a="" class="list-group-item"><svg data-v-71ad051a="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="bag check" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-bag-check mr-3 b-icon bi"><g data-v-71ad051a=""><path fill-rule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"></path><path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path></g></svg>
                        Easy and quick checkout
                    </div> <div data-v-71ad051a="" class="list-group-item"><svg data-v-71ad051a="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="card checklist" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-card-checklist mr-3 b-icon bi"><g data-v-71ad051a=""><path fill-rule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path><path fill-rule="evenodd" d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path></g></svg>
                        Manage Your Booking
                    </div> <div data-v-71ad051a="" class="list-group-item"><svg data-v-71ad051a="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="gift" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-gift mr-3 b-icon bi"><g data-v-71ad051a=""><path fill-rule="evenodd" d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"></path></g></svg>
                        Earn reward points for each booking
                    </div> <div data-v-71ad051a="" class="list-group-item"><svg data-v-71ad051a="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="credit card2 back" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-credit-card2-back mr-3 b-icon bi"><g data-v-71ad051a=""><path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path><path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zM1 9h14v2H1V9z"></path></g></svg>
                        Get immediate refund to wallet
                    </div></div>
                </Col>
                <Col lg={5} >
                <Paper elevation={3} sx={{padding:"20px"}} width="100%" >
                <Tabsignin/>
                </Paper>
                </Col>
            </Row>
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
        </>
    )
}
