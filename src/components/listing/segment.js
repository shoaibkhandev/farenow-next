import React from "react";
import { Grid, } from "@mui/material";
import { useRouter } from "next/router";
import Detailsmodel from "./detailsmodel";
import {Box} from '@mui/material'
export default function Segment({
  details,
  setdetails,

}) {
  const router = useRouter();
  return (
    <>
      <div className="flight-wrapper">
        <Grid container>
          <Grid
            className="left-section "
            item
            xs={12}
            sm={12}
            md={12}
            lg={9}
            xl={9}
          >
            <div className="flight-wrapper-header">
              <ul className="nav section-header">
                <li className="navbar-text destination-section">
                  <div className="destination">
                    <unicon
                      name="plane-fly"
                      fill="white"
                      width="18"
                      height="18"
                      className="unicon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M23,9.32a1.06,1.06,0,0,0-.1-.76,4.93,4.93,0,0,0-6.75-1.8L14,8,9,5.65a1,1,0,0,0-.92,0l-3,1.73a1,1,0,0,0-.5.84,1,1,0,0,0,.46.87l3.3,2.08-1.74,1-4.78.58a1,1,0,0,0-.53,1.75l3.54,3.06a3,3,0,0,0,3.55.44L22.5,9.93A1,1,0,0,0,23,9.32Zm-15.53,7a1,1,0,0,1-1.2-.18L4.37,14.51l2.73-.33a1,1,0,0,0,.38-.13l3.36-1.93a1,1,0,0,0,.5-.85,1,1,0,0,0-.47-.86L7.57,8.32l1.1-.63,5,2.32a1,1,0,0,0,.92,0l2.56-1.48a3,3,0,0,1,3.36.29Z"></path>
                      </svg>
                    </unicon>
                    <span>Departure</span>
                  </div>
                  <div className="date">Wed, 7 Oct 2020</div>
                </li>
                <li className="navbar-text deaprture-section">
                  <div>
                    <div className="depart">Lahore</div>
                    <small className="airport">
                      Allama Iqbal International Airport
                    </small>
                  </div>
                  <unicon
                    name="plane-fly"
                    fill="#203152"
                    width="22"
                    height="22"
                    className="unicon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="#203152"
                    >
                      <path d="M23,9.32a1.06,1.06,0,0,0-.1-.76,4.93,4.93,0,0,0-6.75-1.8L14,8,9,5.65a1,1,0,0,0-.92,0l-3,1.73a1,1,0,0,0-.5.84,1,1,0,0,0,.46.87l3.3,2.08-1.74,1-4.78.58a1,1,0,0,0-.53,1.75l3.54,3.06a3,3,0,0,0,3.55.44L22.5,9.93A1,1,0,0,0,23,9.32Zm-15.53,7a1,1,0,0,1-1.2-.18L4.37,14.51l2.73-.33a1,1,0,0,0,.38-.13l3.36-1.93a1,1,0,0,0,.5-.85,1,1,0,0,0-.47-.86L7.57,8.32l1.1-.63,5,2.32a1,1,0,0,0,.92,0l2.56-1.48a3,3,0,0,1,3.36.29Z"></path>
                    </svg>
                  </unicon>
                </li>
                <li className="navbar-text arrival-section">
                  <div>
                    <div className="arrival">Dubai</div>
                    <small className="airport">
                      Dubai International Airport
                    </small>
                  </div>
                </li>
              </ul>
            </div>

            <ul className="nav flight-result flex-nowrap">
              {/* ....................................................................... */}
              {Array.from({ length: 2 }).map((_, index) =>
                <li key={index} className="navbar-text result">
                  <input
                    type="radio"
                    name="select-flight"
                    id={index}
                    style={{ marginTop: "-2rem" }}
                  />
                  <label htmlFor={index}>
                    <div className="row w-100 no-gutters align-items-center">
                      <div className="airline-detail col-md-12 col-lg-12 col-xl-3">
                        <div className="airline-info cleafix">
                          <figure className="mb-0">
                            <Box component="img" src="/static/img/PK.8288519.png" />
                          </figure>
                          <div className="airline-name">
                            <span>Pakistan International Airlines</span>{" "}
                            <em>PK-303</em>
                          </div>
                        </div>
                      </div>
                      <div className="flight-duration col-sm-9 col-md-9 col-lg-9 col-xl-6">
                        <div className="duration">
                          <span
                            title="Tooltip directive content"
                            className="time"
                          >
                            11:00
                          </span>
                          <div className="info">
                            <div className="top">
                              <span className="text-danger">
                                <em>1</em>Stop,
                              </span>{" "}
                              <span>Layover</span>{" "}
                              <em>19 hrs 35 mins (KHI,PEW)</em>
                            </div>
                            <div className="sagment-line">
                              <div className="bottom">
                                Duration <span>45</span> hrs <span> 35 </span>{" "}
                                mins
                              </div>
                            </div>
                          </div>
                          <span
                            title="Tooltip directive content"
                            className="time text-right pr-2"
                          >
                            1:00
                          </span>
                        </div>
                      </div>
                      <div className="detail col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <span
                          title="Tooltip directive content"
                          className="plus1Date"
                        >
                          +2
                        </span>{" "}
                        <button
                          id="pk-1detail"
                          type="button"
                          className="btn btn-outline-info btn-detail"
                          onClick={() =>
                            setdetails(index)
                          }
                        >
                          Detail
                        </button>
                        <unicon
                          name="bookmark"
                          fill="#4d6f93"
                          width="22"
                          height="22"
                          title="Tooltip directive content"
                          className="unicon"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="#4d6f93"
                            title="Tooltip directive content"
                          >
                            <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
                          </svg>
                        </unicon>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-sm-9 col-md-9">
                        <ul className="nav aminates">
                          <li className="navbar-text">
                            <div title="Tooltip directive content">
                              <unicon
                                name="plane-fly"
                                fill="#02AE79"
                                width="18"
                                height="18"
                                className="unicon"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="#02AE79"
                                >
                                  <path d="M23,9.32a1.06,1.06,0,0,0-.1-.76,4.93,4.93,0,0,0-6.75-1.8L14,8,9,5.65a1,1,0,0,0-.92,0l-3,1.73a1,1,0,0,0-.5.84,1,1,0,0,0,.46.87l3.3,2.08-1.74,1-4.78.58a1,1,0,0,0-.53,1.75l3.54,3.06a3,3,0,0,0,3.55.44L22.5,9.93A1,1,0,0,0,23,9.32Zm-15.53,7a1,1,0,0,1-1.2-.18L4.37,14.51l2.73-.33a1,1,0,0,0,.38-.13l3.36-1.93a1,1,0,0,0,.5-.85,1,1,0,0,0-.47-.86L7.57,8.32l1.1-.63,5,2.32a1,1,0,0,0,.92,0l2.56-1.48a3,3,0,0,1,3.36.29Z"></path>
                                </svg>
                              </unicon>
                              <span>Boing-777-300</span>
                            </div>
                          </li>
                          <li className="navbar-text">
                            <div
                              title=""
                              data-original-title="Tooltip directive content"
                            >
                              <unicon
                                name="plug"
                                fill="#02AE79"
                                width="18"
                                height="18"
                                className="unicon"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="#02AE79"
                                >
                                  <path d="M19,6H16V3a1,1,0,0,0-2,0V6H10V3A1,1,0,0,0,8,3V6H5A1,1,0,0,0,5,8H6v5a1,1,0,0,0,.29.71L9,16.41V21a1,1,0,0,0,2,0V17h2v4a1,1,0,0,0,2,0V16.41l2.71-2.7A1,1,0,0,0,18,13V8h1a1,1,0,0,0,0-2Zm-3,6.59L13.59,15H10.41L8,12.59V8h8ZM11,13h2a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z"></path>
                                </svg>
                              </unicon>
                              <span>Power</span>
                            </div>
                          </li>
                          <li className="navbar-text">
                            <div title="Tooltip directive content">
                              <unicon
                                name="wifi"
                                fill="#02AE79"
                                width="18"
                                height="18"
                                className="unicon"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="#02AE79"
                                >
                                  <path d="M12,15a3,3,0,1,0,3,3A3,3,0,0,0,12,15Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,19Zm0-8a7.06,7.06,0,0,0-4.95,2.05,1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0,5,5,0,0,1,7.08,0,1,1,0,0,0,.7.3A1,1,0,0,0,17,13.05,7.06,7.06,0,0,0,12,11Zm0-4a11.08,11.08,0,0,0-7.78,3.22,1,1,0,0,0,1.42,1.42,9,9,0,0,1,12.72,0,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42A11.08,11.08,0,0,0,12,7Zm10.61.39a15,15,0,0,0-21.22,0A1,1,0,0,0,2.81,8.81a13,13,0,0,1,18.38,0,1,1,0,0,0,1.42,0A1,1,0,0,0,22.61,7.39Z"></path>
                                </svg>
                              </unicon>
                              <span>Wifi</span>
                            </div>
                          </li>
                          <li className="navbar-text">
                            <div title="Tooltip directive content">
                              <unicon
                                name="airplay"
                                fill="#02AE79"
                                width="18"
                                height="18"
                                className="unicon"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="#02AE79"
                                >
                                  <path d="M12.83,13.45a1,1,0,0,0-1.66,0l-4,6a1,1,0,0,0,0,1A1,1,0,0,0,8,21h8a1,1,0,0,0,.88-.53,1,1,0,0,0-.05-1ZM9.87,19,12,15.8,14.13,19ZM19,3H5A3,3,0,0,0,2,6v9a3,3,0,0,0,3,3h.85a1,1,0,1,0,0-2H5a1,1,0,0,1-1-1V6A1,1,0,0,1,5,5H19a1,1,0,0,1,1,1v9a1,1,0,0,1-1,1h-.85a1,1,0,0,0,0,2H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Z"></path>
                                </svg>
                              </unicon>
                              <span>Seatback TV</span>
                            </div>
                          </li>
                          <li className="navbar-text">
                            <div title="Tooltip directive content">
                              <unicon
                                name="mobile-android"
                                fill="#02AE79"
                                width="18"
                                height="18"
                                className="unicon"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="#02AE79"
                                >
                                  <path d="M12.71,16.29l-.15-.12a.76.76,0,0,0-.18-.09L12.2,16a1,1,0,0,0-.91.27,1.15,1.15,0,0,0-.21.33,1,1,0,0,0,1.3,1.31,1.46,1.46,0,0,0,.33-.22,1,1,0,0,0,.21-1.09A1,1,0,0,0,12.71,16.29ZM16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
                                </svg>
                              </unicon>
                              <span>Mobile</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-3 col-md-3">
                        <div className="text-center seats-avil">
                          <small className="text-danger">2 seats left</small>
                        </div>
                      </div>
                    </div>
                  </label>
                  {details === index && (
                    <Detailsmodel details={details} setdetails={setdetails} />
                  )}
                  {details === index && (
                    <div
                      className="details-dilog-dropshadow"
                      onClick={() => setdetails(false)}
                    ></div>
                  )}
                </li>
              )}
              {/* ........................................................................ */}
            </ul>

          </Grid>
          <Grid
            className="right-section"
            item
            sm={12}
            xs={12}
            md={12}
            lg={3}
            xl={3}
          >
            <span className="price">
              {" "}
              SAR
              <strong>
                <em>
                  {" "}
                  638<em className="decimal">.85</em>
                </em>
              </strong>{" "}
              <small>
                (For <em>1</em> Person )
              </small>
            </span>{" "}
            <a
              onClick={() => router.push("/details")}
              className="btn btn-primary"
            >
              Book Now
            </a>
            <div title="Tooltip directive content" className="reward ">
              <svg
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="info circle"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi-info-circle b-icon bi me-2"
              >
                <g>
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  ></path>
                  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"></path>
                  <circle cx="8" cy="4.5" r="1"></circle>
                </g>
              </svg>
              <span>Earn 42 Flyin Reward Points</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
