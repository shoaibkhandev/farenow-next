import React from "react";
import FlightListItem from "./flighListItem";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";

export default function Review({ segments }) {
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
          {segments.length && segments.map(segment => (
            <FlightListItem item={segment} />
          ))}
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
          <a href="#" type="button" className="btn btn-link" >
            Change this Flight
          </a>
        </div>
      </div>
    </>
  );
}
