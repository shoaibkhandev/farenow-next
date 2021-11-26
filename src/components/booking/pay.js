import React from "react";
import {Box} from '@mui/material'

export default function pay() {
  return (
    <>
      <div className="content-wrapper bg-gray payment">
        <div className="content-wrapper-header">
          <span>3</span>
          <h4>How would you like to pay?</h4>
        </div>
        <div className="fancy-wrapper">
          <div className="right p-2">
            <Box  component="img" src="/static/img/card-img-vis-mas-mada-amx.v12346.171720a.png" width={300} className="img-fluid"   />
          </div>
          <div className="left">
            <div className="header">
              <h4>Card Payment</h4>
              <span>Enter your card details to continue payment process</span>
            </div>
            <form className="">
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="">Card Number</label>
                </div>
                <div className="col-md-8">
                  <div className="form-group input-cardNo">
                    <input
                      type="number"
                      max="16"
                      defaultValue=""
                      className="form-control"
                      id="__BVID__64"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4 ">
                <div className="col-md-4">
                  <label htmlFor="">Card Holder Name</label>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      defaultValue=""
                      className="form-control "
                      id="__BVID__65"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4 ">
                <div className="col-md-4">
                  <label htmlFor="">Expiry Date</label>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          className="form-select mt-2"
                          id="__BVID__66"
                        ></select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          className="form-select mt-2"
                          id="__BVID__67"
                        ></select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 ">
                <div className="col-md-4">
                  <label htmlFor="">CID / CVV No</label>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <input
                      type="text"
                      defaultValue=""
                      className="form-control"
                      id="__BVID__68"
                    />
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
                      style={{ fontSize: "75%" }}
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
                    <span className="cvv-info">
                      Please enter the 3-digits behind the Visa and MasterCard ,
                      or the 4-digits top of American Express cards.
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
