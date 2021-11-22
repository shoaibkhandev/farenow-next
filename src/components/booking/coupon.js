import React from "react";
import Collapse from "@mui/material/Collapse";

export default function Coupon() {
  const [aplly, setaplly] = React.useState(false);

  return (
    <>
      <div className="content-wrapper coupon">
        <ul className="nav">
          <li className="navbar-text">
            <a
              className="btn btn-tab "
              onClick={() => setaplly(!aplly)}
              aria-expanded="false"
              aria-controls="collapse-coupon"
              style={{ overflowAnchor: "none" }}
            >
              <div className="right">
                <span className="icon-wrapper">
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="tags"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-tags b-icon bi"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M5.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                      ></path>
                      <path d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"></path>
                    </g>
                  </svg>
                </span>
                <span>Do you have a coupon code ? </span>
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
            <Collapse in={aplly} timeout="auto" unmountOnExit>
              <div className="w-100 mt-3 ">
                <div className="fancy-wrapper">
                  <div className="right">
                    <svg
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      focusable="false"
                      role="img"
                      aria-label="tag"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi-tag b-icon bi"
                      style={{ fontSize: "130%" }}
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          d="M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                        ></path>
                      </g>
                    </svg>
                    <span className="text-primary">Apply Coupon</span>
                  </div>
                  <div className="left">
                    <form className="">
                      <label>Enter your Coupon code below</label>
                      <div className="input-group">
                        <input
                          type="text"
                          defaultValue=""
                          className="form-control"
                          id="__BVID__55"
                        />{" "}
                        <button type="button" className="btn btn-primary">
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Collapse>
          </li>
        </ul>
      </div>
    </>
  );
}
