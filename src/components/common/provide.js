import React from 'react'
import Collapse from '@mui/material/Collapse';

export default function Provide() {
    const [special, setspecial] = React.useState(false);
    return (
        <>
              <div className="content-wrapper traveller-details" >
   <div className="content-wrapper-header" >
      <span >2</span> 
      <h4 >Provide Traveller Details
         <em >Sign in to your <a href="#" target="_self"  className="">Flyin Account</a> or connect using <a href="#" target="_self"  className="">Facebook</a> to book faster!</em>
      </h4>
   </div>
   <div role="alert" aria-live="polite" aria-atomic="true" className="alert alert-warning" >
    Note: Please ensure the name you enter is matching to your national ID / passport
   </div>
   <div className="traveller-form" >
      <span className="travlrTit" > Traveller 1 <small >( Adult ) </small></span> 
      <form  className="">
         <div className="row" >
            <div className="col-md-2" >
               <div className="form-group" >
                  <label >Title <span className="text-danger" >*</span></label> 
                  <select className="form-select"  id="__BVID__42">
                     <option defaultValue>Select</option>
                     <option defaultValue="a">Mr</option>
                     <option defaultValue="b">Miss</option>
                     <option defaultValue="c">Mrs</option>
                  </select>
               </div>
            </div>
            <div className="col-md-3" >
               <div className="form-group" ><label >First Name <span className="text-danger" >*</span></label> <input type="text" placeholder="Please provide first name" defaultValue="" className="form-control"  id="__BVID__43"/></div>
            </div>
            <div className="col-md-3" >
               <div className="form-group" ><label >Middle Name <span className="text-danger" >*</span></label> <input type="text" placeholder="Please provide middle name" defaultValue="" className="form-control"  id="__BVID__44"/></div>
            </div>
            <div className="col-md-3" >
               <div className="form-group" ><label >Last Name <span className="text-danger" >*</span></label> <input type="text" placeholder="Please provide last name" defaultValue="" className="form-control"  id="__BVID__45"/></div>
            </div>
         </div>
         <div className="row mt-3 " >
            <div className="col-md-4" >
               <div className="form-group" ><label >E-mail ID<span className="text-danger" >*</span></label> <input type="email" placeholder="Please provide Email-ID" defaultValue="" className="form-control"  id="__BVID__46"/></div>
            </div>
            <div className="col-md-4" >
               <div className="form-group" ><label >Confirm Email ID<span className="text-danger" >*</span></label> <input type="text" placeholder="Please provide Email-ID" defaultValue="" className="form-control"  id="__BVID__47"/></div>
            </div>
            <div className="col-md-4" >
               <div className="form-group" ><label >Phone Number<span className="text-danger" >*</span></label> <input type="text" placeholder="Please provide mobile number" defaultValue="" className="form-control"  id="__BVID__48"/></div>
            </div>
         </div>
      </form>
   </div>
   <div className="special-req" >
      <button  onClick={()=>setspecial(!special)} type="button" className="btn btn-link "  aria-expanded="false" aria-controls="collapse-special-req" style={{overflowAnchor:"none"}}>
         <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-plus b-icon bi me-2" style={{fontSize:"90%",}} >
            <g >
               <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
            </g>
         </svg>
         Special Request
      </button>
      <Collapse in={special} timeout="auto" unmountOnExit>
      <div  className="mt-3 "  >
         <div className="card" >
           
            <div className="card-body" >
              
               <h4 >Special Request</h4>
               <div className="row" >
                  <div className="col-md-4" >
                     <div className="form-group" >
                        <label >E-mail ID<span className="text-danger" >*</span></label> 
                        <select className="form-select "  id="__BVID__51">
                           <option   defaultValue>Select</option>
                           <option defaultValue="a">Mr</option>
                           <option defaultValue="b">Miss</option>
                           <option defaultValue="c">Mrs</option>
                        </select>
                     </div>
                  </div>
                  <div className="col-md-4" >
                     <div className="form-group" >
                        <label >Confirm Email ID<span className="text-danger" >*</span></label> 
                        <select className="form-select"  id="__BVID__52">
                           <option  defaultValue>Select</option>
                           <option defaultValue="a">Mr</option>
                           <option defaultValue="b">Miss</option>
                           <option defaultValue="c">Mrs</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
           
         </div>
      </div>
      </Collapse>
   </div>
</div>
        </>
    )
}
