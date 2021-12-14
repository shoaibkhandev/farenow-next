import React from 'react'
import Detailsmodel from "./detailsmodel";
import { Box } from '@mui/material';
import { setSegments, setFlight } from '@redux/slices/Reducer'
import { useDispatch } from 'react-redux'

export default function list({ selectDirection, direction, listing, name, listingIndex, index, radioName, date }) {

    const dispatch = useDispatch()

    function setDirection(direction) {
        dispatch(setFlight(listing))
        selectDirection(direction)
    }

    const [details, setdetails] = React.useState(null);
    return (
        <div>
            {index == 0 &&
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
                                <span>{name}</span>
                            </div>
                            <div className="date">{date}</div>
                        </li>
                        <li className="navbar-text deaprture-section">
                            {direction.fromLocations !== null &&
                                <div>
                                    <div className="depart">{direction.fromLocations.name}</div>
                                    <small className="airport">
                                        {direction.fromLocations.code}
                                    </small>
                                </div>
                            }
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
                            {direction.toLocations !== null && <div>
                                <div className="arrival">{direction.toLocations.name}</div>
                                <small className="airport">
                                    {direction.toLocations.code}
                                </small>
                            </div>}
                        </li>
                    </ul>
                </div>
            }

            <ul className="nav flight-result flex-nowrap">
                <li key={`${name}_${listingIndex}_${index}`} className="navbar-text result">
                    <input
                        type="radio"
                        name={radioName}
                        id={`${name}_${listingIndex}_${index}`}
                        style={{ marginTop: "-2rem" }}
                        onChange={e => setDirection(direction)}
                    />
                    <label htmlFor={`${name}_${listingIndex}_${index}`}>
                        <div className="row w-100 no-gutters align-items-center">
                            <div className="airline-detail col-md-12 col-lg-12 col-xl-3">
                                <div className="airline-info cleafix">
                                    <figure className="mb-0">
                                        <Box component="img" src={listing.airlines.thumbnail} />
                                    </figure>
                                    <div className="airline-name">
                                        <span>{listing.airlines.name}</span>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="flight-duration col-sm-9 col-md-9 col-lg-9 col-xl-6">
                                <div className="duration">
                                    <span
                                        title="Tooltip directive content"
                                        className="time"
                                    >
                                        {direction.segments[0].departure.substring(11, 16)}
                                    </span>
                                    <div className="info">
                                        <div className="top">
                                            <span className="text-danger">
                                                <em>{direction.segments.length}</em> Stop,
                                            </span>{" "}
                                            {/* <span>Layover</span>{" "}
                                            <em>19 hrs 35 mins (KHI,PEW)</em> */}
                                        </div>
                                        <div className="sagment-line">
                                            <div className="bottom">
                                                Duration {(direction.segments[0].duration[0] / 60).toFixed(2)} hours
                                            </div>
                                        </div>
                                    </div>
                                    <span
                                        title="Tooltip directive content"
                                        className="time text-right pr-2"
                                    >
                                        {direction.segments[direction.segments.length - 1].departure.substring(11, 16)}
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
                                    id={`${name}_details_${listingIndex}_${index}`}
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
                                            <span> {direction.segments[0].flightNumber} - {direction.segments[0].plane[0]}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </label>
                    {details === index && (
                        <Detailsmodel direction={direction} details={details} setdetails={setdetails} />
                    )}
                    {details === index && (
                        <div
                            className="details-dilog-dropshadow"
                            onClick={() => setdetails(false)}
                        ></div>
                    )}
                </li>
            </ul>
        </div>
    )
}