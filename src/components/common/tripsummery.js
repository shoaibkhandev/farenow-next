import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Divider, Box, Toolbar, Grid, Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Detailsdlog from "./detialsdlog";

export default function Tripsummery() {
  const [travel, settravel] = React.useState(false);
  return (
    <>
      <aside>
        <div className="aside-header">
          <h4>Trip Summary</h4>
        </div>
        <div className="onwords">
          {/* <div  className="unicon mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="#4D6F93">
               <path d="M22,5.08A3.08,3.08,0,0,0,16.74,2.9L13.93,5.71,7.44,3.55a1,1,0,0,0-1,.24L4.06,6.15a1,1,0,0,0,.29,1.61l5.18,2.35-2.6,2.6-1.71-.86A1,1,0,0,0,4.06,12L2.29,13.81a1,1,0,0,0,0,1.41l6.49,6.49a1,1,0,0,0,1.41,0L12,19.94a1,1,0,0,0,.19-1.16l-.86-1.71,2.6-2.6,2.35,5.18a1,1,0,0,0,1.61.29l2.36-2.36a1,1,0,0,0,.24-1l-2.16-6.49L21.1,7.26A3.05,3.05,0,0,0,22,5.08Zm-2.32.77L16.44,9.09a1,1,0,0,0-.24,1l2.16,6.48-.9.9-2.35-5.17a1,1,0,0,0-.73-.57,1,1,0,0,0-.89.28L9.37,16.17a1,1,0,0,0-.19,1.15L10,19l-.56.56L4.41,14.52,5,14l1.71.86a1,1,0,0,0,1.15-.19L12,10.51a1,1,0,0,0-.29-1.62L6.5,6.54l.9-.9L13.88,7.8a1,1,0,0,0,1-.24l3.24-3.24a1.07,1.07,0,0,1,1.53,0,1,1,0,0,1,.32.76A1.06,1.06,0,0,1,19.68,5.85Z"></path>
            </svg>
         </div> */}
          <div className="dest">
            <span className="from">
              {" "}
              <FlightTakeoffIcon sx={{ color: "#4D6F93" }} /> Lahore
            </span>{" "}
            - <span>Dubai</span>
          </div>
          <div>
            <span className="date">Sat, 24 Oct 2020</span>{" "}
            <span className="time">12:20</span>
          </div>
          <div className="ticket">1 Ticket : One Way</div>
        </div>
        <ul className="nav aside-table">
          <li className="navbar-text travellerFare">
            <span
              role="button"
              onClick={() => settravel(!travel)}
              tabIndex="0"
              aria-expanded="false"
              style={{ overflowAnchor: "none" }}
            >
              Traveller 1: <span className="me-1">Adult</span>
              <svg
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="chevron down"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi-chevron-down b-icon bi"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  ></path>
                </g>
              </svg>
            </span>
            <span>
              SAR{" "}
              <label className="priceTag">
                <em>638</em> <em className="decimel">.85</em>
              </label>
            </span>
          </li>

          <Collapse sx={{ width: '100%' }} in={travel} timeout="auto" unmountOnExit>
            <li
              className="navbar-text"
              style={{ border: "none", padding: "none" }}
            >
              <div className="w-100 ">
                <div className="list-group">
                  <div className="list-group-item">
                    <span>Base Fare</span>{" "}
                    <span>
                      SAR
                      <label className="priceTag">
                        <em>638</em> <em className="decimel">.85</em>
                      </label>
                    </span>
                  </div>
                  <div className="list-group-item">
                    <span>Taxes &amp; Fees</span>{" "}
                    <span>
                      SAR
                      <label className="priceTag">
                        <em>638</em> <em className="decimel">.85</em>
                      </label>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </Collapse>

          <ul className="nav totalFare w-100">
            <li className="navbar-text">
              <span>Other Fee</span>{" "}
              <span>
                SAR{" "}
                <label className="priceTag">
                  <em>638</em> <em className="decimel">.85</em>
                </label>
              </span>
            </li>
            <li className="navbar-text">
              <span>Total</span>{" "}
              <span>
                SAR{" "}
                <label className="priceTag">
                  <em>638</em> <em className="decimel">.85</em>
                </label>
              </span>
            </li>
            <li className="navbar-text">
              <span style={{ display: "flex" }}>
                VAT <Detailsdlog />{" "}
              </span>{" "}
              <span>
                SAR{" "}
                <label className="priceTag">
                  <em>638</em> <em className="decimel">.85</em>
                </label>
              </span>
            </li>
            <li className="navbar-text">
              <span>Total Payable Amount</span>{" "}
              <span>
                SAR{" "}
                <label className="priceTag">
                  <em>638</em> <em className="decimel">.85</em>
                </label>
              </span>
            </li>
            <li className="navbar-text">
              <small>Taxes and fees included</small>
            </li>
          </ul>
        </ul>
        <a href="" className="btn btn-block btn-itinerary">
          <svg
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            className="mr-3"
            focusable="false"
            role="img"
            aria-label="share fill"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi-share-fill mr-2 b-icon bi"
          >
            <g>
              <path
                fillRule="evenodd"
                d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
              ></path>
            </g>
          </svg>
          Share Itinerary
        </a>
      </aside>
    </>
  );
}
