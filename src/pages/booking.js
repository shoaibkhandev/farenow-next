import React from "react";
import {Toolbar, } from "@mui/material";
import Bookingprocess from "@components/common/speedupsign";
import Review from "@components/common/reviewFlight";
import Provide from "@components/common/provide";
import Tripsummery from "@components/common/tripsummery";
import Coupon from "@components/booking/coupon";
import Points from "@components/booking/points";
import Pay from "@components/booking/pay";
import Reviewdata from "@components/booking/review";
export default function Booking() {
  return (
    <>
      <Toolbar />
      <div className="detail-wrapper">
        <div className="bookingsteps">
          <div className="container">
            <div className="row">
              <div className="step done col">
                <span>
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-check b-icon bi"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                      ></path>
                    </g>
                  </svg>
                </span>
                <em> Review Flight</em>
              </div>
              <div className="step done col">
                <span>
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="check"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-check b-icon bi"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                      ></path>
                    </g>
                  </svg>
                </span>
                <em>Traveller Details</em>
              </div>
              <div className="step active col">
                <span>3</span> <em>Traveller Details</em>
              </div>
              <div className="step col">
                <span>4</span> <em>Confirmation</em>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="right-side col-md-9">
              <Bookingprocess />
              <Review />
              <Provide />
              <Coupon />
              <Points />
              <Pay />
              <Reviewdata />
              {/* .................................................. */}

              <div className="form-group completing-bookinginfo">
                <div
                  role="alert"
                  aria-live="polite"
                  aria-atomic="true"
                  className="alert alert-info"
                >
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="info circle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-info-circle me-2 b-icon bi"
                    style={{ fontSize: "120%" }}
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
                  By Completing this booking, You have reviewed and accepted the
                  conditions for above rules and restrictions.
                </div>
              </div>
              <div className="form-group text-end">
                <button
                  type="button"
                  className="btn btn-payment btn-success btn-lg"
                >
                  PAY SAR 665.85
                </button>
              </div>
            </div>
            <div className="left-side col-md-3">
              {/* trip summery started */}
              <Tripsummery />
              {/* trip summery ended */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
