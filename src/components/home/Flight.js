import React from 'react'
import {Button,Navbar,Container, NavDropdown,Nav,Row,Col } from 'react-bootstrap'
import landon from '../../../public/static/img/landon-horz.ef01ad4.jpg'
import Image from 'next/image';
import { Divider, Box } from '@mui/material';
export default function Trandingholiday() {
    return (
        <div>
             <div class="search-wrapper mt-auto">
        <div class="section-header">
          <Container>
          <ul class="nav" data-v-f8c8af3e=""><li class="nav-item" data-v-f8c8af3e=""><a href="#" target="_self" class="nav-link active" data-v-f8c8af3e=""><unicon name="plane-departure" fill="white" width="24" class="unicon mr-1" data-v-f8c8af3e=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M22,5.08A3.08,3.08,0,0,0,16.74,2.9L13.93,5.71,7.44,3.55a1,1,0,0,0-1,.24L4.06,6.15a1,1,0,0,0,.29,1.61l5.18,2.35-2.6,2.6-1.71-.86A1,1,0,0,0,4.06,12L2.29,13.81a1,1,0,0,0,0,1.41l6.49,6.49a1,1,0,0,0,1.41,0L12,19.94a1,1,0,0,0,.19-1.16l-.86-1.71,2.6-2.6,2.35,5.18a1,1,0,0,0,1.61.29l2.36-2.36a1,1,0,0,0,.24-1l-2.16-6.49L21.1,7.26A3.05,3.05,0,0,0,22,5.08Zm-2.32.77L16.44,9.09a1,1,0,0,0-.24,1l2.16,6.48-.9.9-2.35-5.17a1,1,0,0,0-.73-.57,1,1,0,0,0-.89.28L9.37,16.17a1,1,0,0,0-.19,1.15L10,19l-.56.56L4.41,14.52,5,14l1.71.86a1,1,0,0,0,1.15-.19L12,10.51a1,1,0,0,0-.29-1.62L6.5,6.54l.9-.9L13.88,7.8a1,1,0,0,0,1-.24l3.24-3.24a1.07,1.07,0,0,1,1.53,0,1,1,0,0,1,.32.76A1.06,1.06,0,0,1,19.68,5.85Z"></path></svg></unicon>
              Flights
            </a></li></ul>
          </Container>
        </div>
        <Container>
          <div class="inner-wrapper">
          <fieldset class="form-group select-flight" data-v-8c06de66="" id="__BVID__37"><div tabindex="-1" role="group" class="bv-no-focus-ring"><div class="custom-control custom-radio" data-v-8c06de66=""><input type="radio" name="some-radios" value="A" checked="checked" class="custom-control-input" id="__BVID__38"/><label class="custom-control-label" for="__BVID__38">Round Trip</label></div> <div class="mx-3 custom-control custom-radio" data-v-8c06de66=""><input type="radio" name="some-radios" value="B" class="custom-control-input" id="__BVID__39"/><label class="custom-control-label" for="__BVID__39">One Way</label></div> <div class="custom-control custom-radio" data-v-8c06de66=""><input type="radio" name="some-radios" value="C" class="custom-control-input" id="__BVID__40"/><label class="custom-control-label" for="__BVID__40">Multi City</label></div></div></fieldset>
        <ul class="nav align-items-end" >
        <li class="navbar-text search-items px-1 leaving" data-v-8c06de66=""><label data-v-8c06de66="">Leaving from</label> <input type="text" placeholder="City or Airport" value="" class="form-control" data-v-8c06de66="" id="__BVID__41"/> <unicon name="map-marker" fill="#7799BE" width="20" data-v-8c06de66="" class="unicon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="#7799BE"><path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path></svg></unicon> <unicon name="exchange" width="20" class="unicon exchange" data-v-8c06de66=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="inherit"><path d="M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z"></path></svg></unicon></li>
        <li class="navbar-text search-items px-1" data-v-8c06de66=""><label data-v-8c06de66="">Going to</label> <input type="text" placeholder="City or Airport" value="" class="form-control" data-v-8c06de66="" id="__BVID__44"/> <unicon name="map-marker" fill="#7799BE" width="20" data-v-8c06de66="" class="unicon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="#7799BE"><path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path></svg></unicon></li>
        <li class="navbar-text search-items px-1 pick-date" data-v-8c06de66=""><label data-v-8c06de66="">Departing</label> <input type="text" placeholder="Pick a date" value="" class="form-control" data-v-8c06de66="" id="__BVID__46"/> <unicon name="calendar-alt" fill="#7799BE" width="20" data-v-8c06de66="" class="unicon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="#7799BE"><path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"></path></svg></unicon></li>
        <li class="navbar-text search-items px-1 pick-date" data-v-8c06de66=""><label data-v-8c06de66="">Returing</label> <input type="text" placeholder="Pick a date" value="" class="form-control" data-v-8c06de66="" id="__BVID__48"/> <unicon name="calendar-alt" fill="#7799BE" width="20" data-v-8c06de66="" class="unicon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="#7799BE"><path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"></path></svg></unicon></li>
        <li class="navbar-text search-items px-1" data-v-8c06de66=""><label data-v-8c06de66="">Travellers &amp; Class</label> <input type="text" readonly="readonly" value="1 Traveler, Business" class="bg-white form-control" data-v-8c06de66="" id="__BVID__50"/> <unicon name="user" fill="#7799BE" width="20" data-v-8c06de66="" class="unicon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="#7799BE"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path></svg></unicon> <unicon name="angle-down" fill="#7799BE" width="24" class="unicon angle-down" data-v-8c06de66=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#7799BE"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path></svg></unicon> 
        
        {/* <div class="traveller-dropdown" data-v-8c06de66=""><div class="select-traveller p-3" data-v-8c06de66="">
            <div class="row no-gutters align-items-center" data-v-8c06de66=""><div class="col-md-4 col-4" data-v-8c06de66="">
                                Adults
                            </div> <div class="col-md-3 col-3" data-v-8c06de66=""><select class="custom-select" data-v-8c06de66="" id="__BVID__54"><option selected="selected" value="1">1</option><option value="2">2</option><option value="3">3</option></select></div> <div class="col-md-5 col-5" data-v-8c06de66=""><span class="ml-2" data-v-8c06de66="">(12+ yrs)</span></div></div> <div class="row mt-3 no-gutters align-items-center" data-v-8c06de66=""><div class="col-md-4 col-4" data-v-8c06de66="">
                                Children
                            </div> <div class="col-md-3 col-3" data-v-8c06de66=""><select class="custom-select" data-v-8c06de66="" id="__BVID__55"><option selected="selected" value="1">1</option><option value="2">2</option><option value="3">3</option></select></div> <div class="col-md-5 col-5" data-v-8c06de66=""><span class="ml-2" data-v-8c06de66="">(2-12 yrs)</span></div></div> <div class="row mt-3 no-gutters align-items-center" data-v-8c06de66=""><div class="col-md-4 col-4" data-v-8c06de66="">
                                Infant
                            </div> <div class="col-md-3 col-3" data-v-8c06de66=""><select class="custom-select" data-v-8c06de66="" id="__BVID__56"><option selected="selected" value="1">1</option><option value="2">2</option><option value="3">3</option></select></div> <div class="col-md-5 col-5" data-v-8c06de66=""><span class="ml-2" data-v-8c06de66="">(under 2yrs)</span></div></div> <hr class="mb-0" data-v-8c06de66=""/></div> <div class="select-class px-3" data-v-8c06de66=""><div class="row no-gutters align-items-center" data-v-8c06de66=""><div class="col-md-4 col-4" data-v-8c06de66=""><span data-v-8c06de66="">Class</span></div> <div class="col-md-8 col-8" data-v-8c06de66=""><select class="custom-select" data-v-8c06de66="" id="__BVID__57"><option selected="selected" value="Economy">Economy</option><option value="Business">Business</option><option value="First">First</option></select></div></div></div> <div class="traveller-bottom p-2 mt-3" data-v-8c06de66=""><button type="button" class="btn btn-secondary" data-v-8c06de66=""><svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="check2 circle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-check2-circle mr-1 b-icon bi" data-v-8c06de66=""><g data-v-8c06de66=""><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path><path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"></path></g></svg>Done
                        </button></div></div> */}
                        </li>
                        <li class="navbar-text search-items px-1 search-button" data-v-8c06de66=""><label data-v-8c06de66="">&nbsp;</label> <button type="button" class="btn btn-warning" data-v-8c06de66="">Search</button></li>
        </ul>
          </div>
        </Container>
      </div>
        </div>
    )
}
