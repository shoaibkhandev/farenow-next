import React from "react";
import Collapse from "@mui/material/Collapse";

export default function review() {
  const [complete, setcomplete] = React.useState(false);
  return (
    <>
      <div className="content-wrapper complete-booking">
        <ul className="nav">
          <li className="navbar-text w-100">
            <a
              className="btn btn-tab "
              onClick={() => setcomplete(!complete)}
              aria-expanded="false"
              aria-controls="collapse-complete-booking"
              style={{ overflowAnchor: "none" }}
            >
              <div className="right">
                <span>Review and complete your booking</span>
              </div>
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
            </a>
            <Collapse in={complete} timeout="auto" unmountOnExit>
              <div className="w-100 mt-3 ">
                <div className="complete-booking-wrapper">
                  <p className="des">
                    We care about you and we want your booking journey with us
                    to be exciting, so kindly take a final look at your trip
                    details.
                  </p>
                  <ol>
                    <li>
                      Review your trip details
                      <div>
                        Departing from Lahore at{" "}
                        <span className="time">12:20</span> on Tue, 20 Oct 2020
                        arrival in Dubai at <span className="time">14:30</span>{" "}
                        on Tue, 20 Oct 2020
                      </div>
                    </li>
                    <li>
                      Please ensure that the names of all passengers match with
                      their travel document/passport
                      <div>
                        <ul>
                          <li>
                            Traveller 1: ADT - Abce Acd <a href="">(Edit)</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      Review the terms of your booking:
                      <div>
                        <ul>
                          <li>
                            Please read the complete{" "}
                            <a href="">Rules for cancellation and changes</a>
                          </li>
                          <li>
                            Please read the <a href="">Terms and Conditions.</a>
                          </li>
                          <li>Fares are not guaranteed until ticketed.</li>
                          <li>
                            Flyin.com recommends that all customers check the
                            validity of their passport and obtain the visa and
                            the trips they intend to visit.
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </Collapse>
          </li>
        </ul>
      </div>
    </>
  );
}
