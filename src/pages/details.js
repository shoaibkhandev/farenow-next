import React, { useEffect } from 'react'
import axios from 'axios'
import Speedupsign from '@components/common/speedupsign';
import ReviewFlight from '@components/common/reviewFlight';
import Provide from '@components/common/provide';
import Tripsummery from '@components/common/tripsummery';
import { Toolbar, Modal, Box, IconButton, CloseIcon, Alert } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import Collapse from '@mui/material/Collapse';
import { number } from 'prop-types';
import Snackbar from '@mui/material/Snackbar';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function formatName(key) {
   switch (key) {
      case 'ADT':
         return 'Adult'
      case 'CNN':
         return 'Childern'
      case 'INF':
         return 'Infant'
   }
}


export default function Details() {
   const router = useRouter();

   const { state } = useSelector(state => state);

   const [segments, setSegments] = React.useState(state.segments)
   const [returned, setreturned] = React.useState(state.returned)
   const [flight, setflight] = React.useState(state.flight)
   const [showTicket, setShowTicket] = React.useState(false)
   const [showSnackbar, setShowSnackbar] = React.useState(false)
   const [ticketNumber, setTicketNumber] = React.useState("")
   const handleOpen = () => setShowTicket(true);
   const handleClose = () => setShowTicket(false);

   console.log(segments)
   console.log(flight)

   const handleSnackbarClose = () => {
      setShowSnackbar(false)
   };

   const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
   };

   const totalPassengers = Object.keys(flight.passengerCounts).map(key => {
      return {
         lastName: '',
         firstName: '',
         passCountry: 'UA',
         passNumber: Math.floor(Math.random() * 900000),
         birthDate: '',
         gender: '',
         ageCategory: key,
      }
   })

   const [passengers, setPassengers] = React.useState(totalPassengers)

   console.log(passengers)
   const [phone, setPhone] = React.useState({
      countryCode: '',
      location: 'IEV',
      number: '',
   })
   const [deliveryInformation, setDeliveryInformation] = React.useState({
      name: '',
      street: '',
      zip: '',
      country: '',
      city: '',
   })

   async function submit() {
      const params = {
         segments: [],
         rule: 'SIP',
         passengers,
         phone,
         deliveryInformation,
         allowWaitlist: true,
      };
      if (segments.length) {
         segments.map(segment => {
            params.segments.push(segment.segments)
         })
      }

      console.log(params)


      try {
         const { data } = await axios.post(`http://localhost:3001/v1/flights/book/`, params);
         getTicket(data[0].pnr)
         console.log(data)
      } catch (error) {
         console.error(error);
      }
   }


   async function getTicket(pnr) {
      try {
         const { data } = await axios.get(`http://localhost:3001/v1/flights/ticket?pnr=${pnr}`);
         console.log(data)
         setShowTicket(true)
         setTicketNumber(data[0].ticketNumber)
      } catch (error) {
         console.error(error);
      }
   }

   async function cancelTicket() {
      try {
         const { data } = await axios.get(`http://localhost:3001/v1/flights/cancelTicket?ticketNumber=${ticketNumber}`);
         setShowTicket(false)
         setShowSnackbar(true)
      } catch (error) {
         console.error(error);
      }
   }

   const action = (
      <React.Fragment>
         <IconButton
            size="small"
            aria-label="close"
            color="inherit"
         >
            <CloseIcon fontSize="small" />
         </IconButton>
      </React.Fragment>
   );

   return (
      <>
         <Toolbar />

         <Snackbar
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            open={showSnackbar}
            onClose={handleSnackbarClose}
            autoHideDuration={2000}
            action={action}
         >
            <Alert severity="error" sx={{ width: '100%' }}>
               Ticket has been successfully cancelled
            </Alert>
         </Snackbar>
         <div className="detail-wrapper" >
            <div className="bookingsteps" >
               <div className="container" >
                  <div className="row" >
                     <div className="step done col" >
                        <span >
                           <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="check" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-check b-icon bi" >
                              <g >
                                 <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path>
                              </g>
                           </svg>
                        </span>
                        <em > Review Flight</em>
                     </div>
                     <div className="step active col" ><span >
                        2
                     </span> <em >Traveller Details</em>
                     </div>
                     <div className="step col" ><span >
                        3
                     </span> <em >Traveller Details</em>
                     </div>
                     <div className="step col" ><span >
                        4
                     </span> <em >Confirmation</em>
                     </div>
                  </div>
               </div>
            </div>

            <div className="container" >
               <div className="row" >
                  <div className="right-side col-md-9" >
                     {/*  booking process started */}
                     {/* <Speedupsign /> */}
                     {/*  booking process ended */}
                     {/* review started */}
                     <ReviewFlight segments={segments} />
                     {/* review ended */}
                     {/* provide started */}
                     <div className="content-wrapper traveller-details" >
                        <div className="content-wrapper-header" >
                           <span >2</span>
                           <h4 >Provide Traveller Details
                              <em >Sign in to your <a href="#" target="_self" className="">Flyin Account</a> or connect using <a href="#" target="_self" className="">Facebook</a> to book faster!</em>
                           </h4>
                        </div>
                        <div role="alert" aria-live="polite" aria-atomic="true" className="alert alert-warning" >
                           Note: Please ensure the name you enter is matching to your national ID / passport
                        </div>

                        <div className="traveller-form" >
                           <span className="travlrTit" > Delivery information </span>
                           <form className="">
                              <div className="row" >
                                 <div className="col-md-4" >
                                    <div className="form-group" ><label >Name <span className="text-danger" >*</span></label> <input type="text" onChange={(e) => setDeliveryInformation({ ...deliveryInformation, name: e.target.value })} placeholder="Please provide name" defaultValue="" className="form-control" id="__BVID__43" /></div>
                                 </div>
                                 <div className="col-md-4" >
                                    <div className="form-group" ><label >Street <span className="text-danger" >*</span></label> <input type="text" onChange={(e) => setDeliveryInformation({ ...deliveryInformation, street: e.target.value })} placeholder="Please provide street" defaultValue="" className="form-control" id="__BVID__44" /></div>
                                 </div>
                                 <div className="col-md-4" >
                                    <div className="form-group" ><label >Zip <span className="text-danger" >*</span></label> <input type="text" onChange={(e) => setDeliveryInformation({ ...deliveryInformation, zip: e.target.value })} placeholder="12345" defaultValue="" className="form-control" id="__BVID__45" /></div>
                                 </div>
                              </div>
                              <div className="row mt-3 " >
                                 <div className="col-md-3" >
                                    <div className="form-group" >
                                       <label >Country <span className="text-danger" >*</span></label>
                                       <select onChange={e => setDeliveryInformation({ ...deliveryInformation, country: e.target.value })} className="form-control form-select" id="__BVID__42">
                                          <option value="">Select</option>
                                          <option value="us">United States</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-md-3" >
                                    <div className="form-group" >
                                       <label >City <span className="text-danger" >*</span></label>
                                       <select onChange={e => setDeliveryInformation({ ...deliveryInformation, city: e.target.value })} className="form-control form-select" id="__BVID__42">
                                          <option value="">Select</option>
                                          <option value="Mos Eisley">Mos Eisley</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-md-2" >
                                    <div className="form-group" >
                                       <label >Country code <span className="text-danger" >*</span></label>
                                       <select onChange={e => setPhone({ ...phone, countryCode: e.target.value })} className="form-control form-select" id="__BVID__42">
                                          <option value="">Select</option>
                                          <option value="38">38</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-md-4" >
                                    <div className="form-group" ><label >Phone Number <span className="text-danger" >*</span></label> <input type="text" onChange={(e) => setPhone({ ...phone, number: e.target.value })} placeholder="0660419905" defaultValue="" className="form-control" id="__BVID__45" /></div>
                                 </div>
                              </div>
                           </form>
                        </div>
                        {passengers.map((item, index) =>
                           <div className="traveller-form" >
                              <span className="travlrTit" > Traveller {flight.passengerCounts[item.ageCategory]} <small >( {formatName(item.ageCategory)} ) </small></span>
                              <form className="">
                                 <div className="row" >
                                    <div className="col-md-2" >
                                       <div className="form-group" >
                                          <label >Title <span className="text-danger" >*</span></label>
                                          <select
                                             onChange={(e) => {
                                                item.gender = e.target.value;
                                                setPassengers([...passengers])
                                             }}
                                             className="form-control form-select" id="__BVID__42">
                                             <option value="">Select</option>
                                             <option value="M">Mr</option>
                                             <option value="F">Miss</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-md-3" >
                                       <div className="form-group" ><label >First Name <span className="text-danger" >*</span></label> <input type="text"
                                          onChange={(e) => {
                                             item.firstName = e.target.value;
                                             setPassengers([...passengers])
                                          }} placeholder="Please provide first name" defaultValue="" className="form-control" id="__BVID__43" /></div>
                                    </div>
                                    <div className="col-md-3" >
                                       <div className="form-group" ><label >Last Name <span className="text-danger" >*</span></label> <input type="text" onChange={(e) => {
                                          item.lastName = e.target.value;
                                          setPassengers([...passengers])
                                       }} placeholder="Please provide last name" defaultValue="" className="form-control" id="__BVID__44" /></div>
                                    </div>
                                    <div className="col-md-4" >
                                       <div className="form-group" ><label >Birth Date <span className="text-danger" >*</span></label>
                                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                                             <DatePicker
                                                value={item.birthDate}
                                                onChange={(newValue) => {
                                                   [
                                                      item.birthDate = newValue,
                                                      setPassengers([...passengers])
                                                   ]
                                                }}
                                                renderInput={(params) =>
                                                   <TextField {...params}
                                                      views={['day', 'month', 'year']}
                                                      maxDate={new Date()}
                                                      placeholder="1990-01-30"
                                                      size="small"
                                                      fullWidth sx={{
                                                         "& .MuiOutlinedInput-input": {
                                                            height: "27px",
                                                         },
                                                         "& .MuiOutlinedInput-root": {
                                                            color: "#4D6F93 !important",
                                                            background: "white",
                                                         },
                                                         "& .MuiSvgIcon-root": {
                                                            color: "#4D6F93 !important",
                                                         },
                                                         "& .MuiOutlinedInput-notchedOutline": {
                                                            top: "0px"
                                                         },

                                                      }} />}
                                             />
                                          </LocalizationProvider>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        )}
                     </div>

                     <Modal
                        open={showTicket}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                     >
                        <Box sx={style}>
                           <p>Congrates your ticket has been successfully created</p>

                           <button type="button" className="btn btn-payment btn-danger btn-lg" onClick={() => cancelTicket()}  >Cancel Ticket</button>
                        </Box>
                     </Modal>

                     {/* provide ended */}
                     <div className="form-group text-end" ><button type="button" className="btn btn-payment btn-success btn-lg" onClick={() => submit()}  >Continue to Payment</button></div>
                  </div>
                  <div className="left-side col-md-3" >
                     {/* trip summery started */}
                     <Tripsummery flight={flight} />
                     {/* trip summery ended */}

                  </div>
               </div>

            </div>



         </div >




      </>
   )
}
