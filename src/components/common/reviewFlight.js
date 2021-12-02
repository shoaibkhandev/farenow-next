import React from "react";
import FlightListItem from "./flighListItem";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";

export default function Review({ departured, returned }) {
  const [open, setOpen] = React.useState(false);
  const [detail, setdetail] = React.useState(true);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-wrapper-header" >
          <span >1</span>
          <h4>Review your flight</h4>
        </div>
        <div className="review-flight" >
          {/* <Collapse in={detail} timeout="auto" unmountOnExit>
            <div className="review-flight-header" >
              <ul className="nav" >
                <li className="navbar-text depart" >
                  <unicon
                    name="plane-departure"
                    fill="#4D6F93"
                    width="18"
                    className="unicon mr-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#4D6F93"
                    >
                      <path d="M22,5.08A3.08,3.08,0,0,0,16.74,2.9L13.93,5.71,7.44,3.55a1,1,0,0,0-1,.24L4.06,6.15a1,1,0,0,0,.29,1.61l5.18,2.35-2.6,2.6-1.71-.86A1,1,0,0,0,4.06,12L2.29,13.81a1,1,0,0,0,0,1.41l6.49,6.49a1,1,0,0,0,1.41,0L12,19.94a1,1,0,0,0,.19-1.16l-.86-1.71,2.6-2.6,2.35,5.18a1,1,0,0,0,1.61.29l2.36-2.36a1,1,0,0,0,.24-1l-2.16-6.49L21.1,7.26A3.05,3.05,0,0,0,22,5.08Zm-2.32.77L16.44,9.09a1,1,0,0,0-.24,1l2.16,6.48-.9.9-2.35-5.17a1,1,0,0,0-.73-.57,1,1,0,0,0-.89.28L9.37,16.17a1,1,0,0,0-.19,1.15L10,19l-.56.56L4.41,14.52,5,14l1.71.86a1,1,0,0,0,1.15-.19L12,10.51a1,1,0,0,0-.29-1.62L6.5,6.54l.9-.9L13.88,7.8a1,1,0,0,0,1-.24l3.24-3.24a1.07,1.07,0,0,1,1.53,0,1,1,0,0,1,.32.76A1.06,1.06,0,0,1,19.68,5.85Z"></path>
                    </svg>
                  </unicon>
                  {departured.fromLocations.name}
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="arrow right"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-arrow-right mx-1 b-icon bi text-secondary"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </g>
                  </svg>
                  {departured.toLocations.name}
                  <small className="text-muted ml-2">
                    Thu, 22 Oct 2020
                  </small>
                </li>
              </ul>
            </div>
            <div className="review-fligth-content" >
              <div className="row" >
                <div className="col-md-2" >
                  <Box component="img" src={departured?.airlines?.thumbnail} className="img-fluid" />
                  <div className="airline-name" >
                    {departured?.airlines?.name}
                  </div>
                  <span className="className-type" >
                    {departured?.serviceClass}
                  </span>
                </div>
                <div className="col-md-3" >
                  <span className="time" >
                    {departured.segments[0].departure.substring(11, 16)}
                  </span>
                  <span className="date" >
                    22 Oct
                  </span>
                  <span className="placeName" >
                    {departured.fromLocations.name}
                    <label >(LHE)</label>
                  </span>
                </div>
                <div className="col-md-3" >
                  <span className="time" >
                    {departured.segments[departured.segments.length - 1].departure.substring(11, 16)}
                  </span>
                  <span className="date" >
                    22 Oct
                  </span>
                  <span className="placeName" >
                    {departured.toLocations.name}
                    <label >(DXB)</label>
                  </span>
                </div>
                <div className="col-md-4" >
                  <span className="non-stop" >
                    Non Stop
                  </span>
                  <span className="trip-dur" >
                    Trip Duration: {departured.segments[0].duration[0] / 60} hours
                  </span>
                </div>
              </div>
            </div>
          </Collapse> */}
          {departured && <FlightListItem item={departured} />}
          {returned && <FlightListItem item={returned} />}

        </div>
        <div className="important-info" >
          <svg
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="info circle"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi-info-circle b-icon bi"
            style={{ fontSize: "90%" }}

          >
            <g >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              ></path>
              <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"></path>
              <circle cx="8" cy="4.5" r="1"></circle>
            </g>
          </svg>
          <h5 className="d-inline-block" >
            Important flight information
          </h5>
          <ul className="nav" >
            <li className="navbar-text" >
              Tickets are refundable before departure and after departure. The
              cancellation penalty for the refund before departure is SAR 201.00
              and after departure is SAR 201.00
              <a href="#" target="_self" className="">
                Rules for cancellation and changes
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-buttons" >
          {/* <button
            onClick={() => {
              setOpen(!open);
              setdetail(!detail);
            }}
            type="button"
            className="btn btn-link"

          >

            {open ? "Show more details" : "Show less details"}
          </button> */}
          <a href="#" type="button" className="btn btn-link" >
            Change this Flight
          </a>
        </div>
      </div>
    </>
  );
}
