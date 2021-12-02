import React, { useEffect } from "react";
import Collapse from "@mui/material/Collapse";
import { useRouter } from "next/router";
import { Box } from '@mui/material'

export default function Detailsmodel({ direction, details, setdetails }) {
  const [listingopen, setlistingopen] = React.useState(false);

  useEffect(() => {
    document.querySelector('.itemInfo').scrollIntoView();
  })

  const router = useRouter();
  return (
    <>
      <div className="fltDetails" style={{ display: "block" }}>
        <div className="itemInfo">
          <div className="detail-header mb-3">
            <h4>Flight Information</h4>
            <svg
              onClick={() => setdetails(false)}
              viewBox="0 0 16 16"
              width="1em"
              height="1em"
              focusable="false"
              role="img"
              aria-label="x circle"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi-x-circle b-icon bi"

            >
              <g>
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="info-tag">
            <ul className="nav dd">
              <li className="navbar-text">
                Departure : <span>{direction.fromLocations.name}</span> -{" "}
                <span>{direction.toLocations.name}</span>
              </li>
              <li className="navbar-text">
                Duration : {direction.segments[0].duration[0] / 60} hours
              </li>
            </ul>
          </div>
          <div className="section-info">
            <div className="section-info-header">
              <div className="row">
                <div className="col-3">
                  Flight details
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-6">
                      Departing
                    </div>
                    <div className="col-6">
                      Arriving
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {direction.segments.map(segment =>
              <div className="section-info-detail">
                <div className="row align-items-start">
                  <div className="col-3 airline-info">
                    <figure className="mb-0 px-2">
                      <Box
                        component="img"
                        src={segment?.airlines?.thumbnail}
                        className="img-fluid"

                        className="pia-dilog"
                      />{" "}
                      <span className="airline-name">
                        {segment?.airlines?.name}
                      </span>{" "}
                      <span>{segment?.serviceClass}</span>{" "}
                      <span>BA - 6187</span>{" "}
                      <span>351</span>
                    </figure>
                  </div>
                  <div className="col-9">
                    <div className="row">
                      <div className="col-6">
                        <div className="fltDepArv">
                          <span className="placeName">
                            {segment?.fromLocations?.name}  <em>({segment.from})</em>
                          </span>{" "}
                          <span className="date">
                            <span className="time">
                              03:10
                            </span>
                            , Thu, 29 Oct 2020
                          </span>{" "}
                          <span className="airport-name">
                            {" "}
                            Allama Iqbal International Airport, Lahore ,
                            <small>
                              Terminal<em> M</em>
                            </small>
                          </span>
                          <div className="flightOprBy">
                            <small>
                              <strong>Operated by</strong>: PIA
                              International
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="fltDepArv">
                          <span className="placeName">
                            {segment?.toLocations?.name} <em>({segment.to})</em>
                          </span>{" "}
                          <span className="date">
                            <span className="time">
                              05:10
                            </span>
                            , Thu, 29 Oct 2020
                          </span>{" "}
                          <span className="airport-name">
                            {" "}
                            Dubai International Airport, Dubai ,
                            <small>
                              Terminal<em> 1</em>
                            </small>
                          </span>
                          <div className="flightOprBy">
                            <small>
                              <strong>Operated by</strong>: PIA
                              International
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="baggage">
                  <unicon
                    name="moneybag"
                    fill="#4D6F93"
                    width="20"
                    height="20"
                    className="unicon mr-1"

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#4D6F93"
                    >
                      <path d="M12,11a3,3,0,1,0,3,3A3,3,0,0,0,12,11Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,15Zm7-9H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10ZM4,9A1,1,0,0,1,5,8H6a2,2,0,0,1-2,2ZM5,20a1,1,0,0,1-1-1V18a2,2,0,0,1,2,2Zm15-1a1,1,0,0,1-1,1H18a2,2,0,0,1,2-2Zm0-3a4,4,0,0,0-4,4H8a4,4,0,0,0-4-4V12A4,4,0,0,0,8,8h8a4,4,0,0,0,4,4Zm0-6a2,2,0,0,1-2-2h1a1,1,0,0,1,1,1Z"></path>
                    </svg>
                  </unicon>
                  <span>Baggage Info</span>:
                  {segment.baggage.map(bag =>
                    <span>
                      <span className="kgs">
                        {bag.amount}
                      </span>{" "}
                      {bag.units}
                    </span>

                  )}

                </div>
              </div>
            )}
          </div>
          <div className="flight-aminaties">
            <h4 className="aminaties-title">
              Flight Amenities{" "}
            </h4>
            <div className="row align-items-center">
              <div className="col-md-10">
                <ul className="nav aminates ml-0">
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
                      <span>{direction.segments[0].flightNumber} - {direction.segments[0].plane[0]}</span>
                    </div>
                  </li>
                  {/* <li className="navbar-text">
                    <div title="Tooltip directive content">
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
                  </li> */}
                </ul>
              </div>
              <div className="col-md-2">
                <ul className="nav plane-imgs">
                  <li className="navbar-text">
                    <button
                      type="button"
                      className="btn btn-secondary not-collapsed"

                      aria-expanded="true"
                      aria-controls="collapse-plane-images"
                      style={{ overflowAnchor: "none" }}
                    >
                      <Box component="img"
                        src="/static/img/emrates.jpg"
                        className="img-fluid img-flight "

                      />
                    </button>
                  </li>
                  <li className="navbar-text">
                    {" "}
                    <Box
                      component="img"
                      src="/static/img/seatspink.jpg"
                      className="img-fluid img-flight "

                    />{" "}
                    <button
                      type="button"
                      onClick={() => setlistingopen(!listingopen)}
                      className="btn btn-secondary twobtn "

                      aria-expanded="true"
                      aria-controls="collapse-plane-images"
                      style={{ overflowAnchor: "none" }}
                    >
                      2+
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* dilog colapse started */}
            <Collapse in={listingopen} timeout="auto" unmountOnExit>
              <div className="plane-images-collapse mt-2 ">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <figure className="mb-0">
                          <Box component="img"
                            src="/static/img/emrates.jpg"
                            className="img-fluid"

                          />{" "}
                          <span>Aircraft</span>
                        </figure>
                      </div>
                      <div className="col-md-3">
                        <figure className="mb-0">
                          <Box component="img"
                            src="/static/img/seats.jpg"
                            className="img-fluid"

                          />{" "}
                          <span>
                            className Overview
                          </span>
                        </figure>
                      </div>
                      <div className="col-md-3">
                        <figure className="mb-0">
                          <Box
                            component="img"
                            src="/static/img/seatspink.jpg"
                            className="img-fluid"

                          />{" "}
                          <span>Seat Image</span>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
            {/* dilog colapse ended */}
          </div>
        </div>
      </div>
    </>
  );
}
