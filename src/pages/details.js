import React from 'react'
import Speedupsign from '@components/common/speedupsign';
import ReviewFlight from '@components/common/reviewFlight';
import Provide from '@components/common/provide';
import Tripsummery from '@components/common/tripsummery';
import { Toolbar, } from '@mui/material';
import { useRouter } from 'next/router';

export default function Details() {
   const router = useRouter();
   return (
      <>
         <Toolbar />
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
                     <Speedupsign />
                     {/*  booking process ended */}
                     {/* review started */}
                     <ReviewFlight />
                     {/* review ended */}
                     {/* provide started */}
                     <Provide />
                     {/* provide ended */}
                     <div className="form-group text-end" ><button type="button" className="btn btn-payment btn-success btn-lg" onClick={() => router.push("/booking")}  >Continue to Payment</button></div>
                  </div>
                  <div className="left-side col-md-3" >
                     {/* trip summery started */}
                     <Tripsummery />
                     {/* trip summery ended */}

                  </div>
               </div>

            </div>



         </div>




      </>
   )
}
