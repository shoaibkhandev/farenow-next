import React from "react";
import { Box, } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import {Form } from "react-bootstrap";

export default function points() {
  const [qitaaf, setqitaaf] = React.useState(false);
  const [oneway, setoneway] = React.useState("redoom");
  return (
    <>
      <div className="content-wrapper reedem">
        <ul className="nav">
          <li className="navbar-text">
            <a
              onClick={() => setqitaaf(!qitaaf)}
              className="btn btn-tab  "
              aria-expanded="false"
              aria-controls="collapse-reedem"
              style={{ overflowAnchor: "none" }}
            >
              <div className="right">
                <span className="me-2">
                  {" "}
                  <span>
                    <Box
                      component="img"
                      src="/static/img/qitaf-promo.41b91d1.png"
                      width="78px"
                    ></Box>{" "}
                  </span>{" "}
                  Redeem or Earn Qitaf Points
                </span>
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
            <Collapse in={qitaaf} timeout="auto" unmountOnExit>
              <div className="w-100 mt-3 select-flight">
                <div className="reedem-wrapper">
                  <Form onChange={(e) => setoneway(e.target.value)}>
                    <div className="mb-3 radio-setting ">
                      <Form.Check
                        type="radio"
                        id={`default-name1`}
                        label="Redeem your Qitaf points  "
                        name="tourtype"
                        className={`ms-1  custom-control-label `}
                        defaultValue="redoom"
                        defaultChecked
                      />
                      <Form.Check
                        type="radio"
                        id={`default-name2`}
                        label="Earn Qitaf Reward Points"
                        className={`ms-3 custom-control-label  `}
                        name="tourtype"
                        defaultValue="oneway"
                      />
                    </div>
                  </Form>

                  {oneway === "redoom" ? (
                    <div className="reedem-wrapper-inner active">
                      <form className="">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <label htmlFor="">
                              Enter your STC mobile number
                            </label>{" "}
                            <input
                              type="text"
                              placeholder="+996"
                              defaultValue=""
                              className="form-control"
                              id="__BVID__62"
                            />{" "}
                            <small>E.g. 05XXXXXXXX</small>
                          </div>
                          <div className="col-md-6">
                            <button
                              type="button"
                              className="btn btn-primary request "
                            >
                              Request Passcode
                            </button>
                          </div>
                        </div>
                      </form>
                      <p>
                        Enter your Qitaf registered mobile number above and
                        click on Request Passcode. You will receive an SMS code
                        required to complete your payment.
                      </p>
                    </div>
                  ) : (
                    <div className="reedem-wrapper-inner active">
                      <form className="">
                        <p>
                          Enter your mobile number below and click on submit to
                          earn your reward points
                        </p>
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <label htmlFor="">
                              Enter your STC mobile number
                            </label>{" "}
                            <input
                              type="text"
                              placeholder="+996"
                              defaultValue=""
                              className="form-control"
                              id="__BVID__63"
                            />{" "}
                            <small>E.g. 05XXXXXXXX</small>
                          </div>
                          <div className="col-md-6">
                            <button
                              type="button"
                              className="btn btn-primary request"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                      <p>
                        Enter your Qitaf registered mobile number above and
                        click on Request Passcode. You will receive an SMS code
                        required to complete your payment.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Collapse>
          </li>
        </ul>
      </div>
    </>
  );
}
