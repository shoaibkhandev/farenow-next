import { Box } from "@mui/material";
export default function FlightListItem({ item }) {
    return (
        <>
            <div className="flight-more-detail active" >
                <div className="review-flight-header" >
                    <ul className="nav align-items-center" >
                        <li
                            className="navbar-text depart col-md-5"

                        >
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
                            {item.fromLocations?.name}
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
                                <g >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    ></path>
                                </g>
                            </svg>
                            {item.toLocations?.name}
                            {/* <small className="text-muted ml-2" >

                      Thu, 22 Oct 2020
                    </small> */}
                        </li>
                        <li
                            className="navbar-text depart col-md-3"

                        >
                            <span className="non-stop" >
                                {/* Non Stop */}
                            </span>
                        </li>
                        <li
                            className="navbar-text depart col-md-3"

                        >
                            <span className="trip-dur" >
                                Trip Duration: {(item.segments[0].duration[0] / 60).toFixed(2)} hours
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="review-fligth-content" >
                    <div className="row" >
                        <div className="col-md-2" >
                            <span className="top-heading" >
                                Flight No
                            </span>
                            <Box component="img" src={item?.airlines?.thumbnail} className="img-fluid" />
                            <div className="airline-name" >
                                {item?.airlines?.name}
                            </div>
                            <span className="flight-no" >
                                {item?.segments[0].flightNumber}
                            </span>
                        </div>
                        <div className="col-md-3" >
                            <span className="top-heading" >
                                Departing
                            </span>
                            <span className="placeName" >
                                {item.fromLocations?.name}
                                <label >({item.fromLocations?.name})</label>
                            </span>
                            <span className="time" >
                                {item.segments[0].departure.substring(11, 16)}
                            </span>
                            ,
                            <span className="date" >
                                {item.segments[0].departure.substring(0,10)}
                            </span>
                            <span className="airport-name" >
                                {item?.airlines?.name}
                            </span>
                        </div>
                        <div className="col-md-3" >
                            <span className="top-heading" >
                                Arriving
                            </span>
                            <span className="placeName" >
                                {item.toLocations?.name}
                                <label >({item.toLocations?.code})</label>
                            </span>
                            <span className="time" >
                                {item.segments[item.segments.length - 1].departure.substring(11, 16)}
                            </span>
                            ,
                            <span className="date" >
                                {item.segments[item.segments.length - 1].departure.substring(0,10)}
                            </span>
                            <span className="airport-name" >
                                {item?.airlines?.name}
                            </span>
                        </div>
                        <div className="col-md-4" >
                            <span className="top-heading" >
                                Class/Baggage
                            </span>
                            <span className="seat-type pb-2" >
                                {item?.serviceClass}
                            </span>
                            <span className="cabin" >
                                Cabin:
                                {item.segments[0].baggage.map(bag =>
                                    <label >{bag.amount} {bag.units}</label>
                                )}
                            </span>
                            {/* <span className="checkin" >
                                Check In: <em > 0 Pieces</em>
                                <label >(Per Person)</label>
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}