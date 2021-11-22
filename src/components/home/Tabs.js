import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Datedata from "./Date";
import Returningdate from "./Returningdate";
export default function Tabs() {
  const [oneway, setoneway] = useState("roundtrip");

  const [travel, settravel] = useState(false);
  const router = useRouter();
  return (
    <div>
      <Container>
        <div className="inner-wrapper">
          <Form onChange={(e) => setoneway(e.target.value)}>
            <div className="mb-3 radio-setting ">
              <Form.Check
                type="radio"
                id={`default-name1`}
                label="Round Trip"
                name="tourtype"
                className={`me-3 ${
                  router.pathname === "/listing" ? "listing-blue" : "text-white"
                }   `}
                value="roundtrip"
                defaultChecked
              />
              <Form.Check
                type="radio"
                id={`default-name2`}
                label="One Way"
                className={`me-3 ${
                  router.pathname === "/listing" ? "listing-blue" : "text-white"
                }   `}
                name="tourtype"
                value="oneway"
              />
              <Form.Check
                type="radio"
                id={`default-name3`}
                label="Multi City"
                className={`me-3 ${
                  router.pathname === "/listing" ? "listing-blue" : "text-white"
                }   `}
                name="tourtype"
                value="city"
              />
            </div>
          </Form>

          {/* ............................................................ */}

          <ul className="nav align-items-end">
            <li className="navbar-text search-items px-1 leaving">
              <label>Leaving from</label>{" "}
              <input
                type="text"
                placeholder="City or Airport"
                className="form-control"
                id="__BVID__41"
              />{" "}
              <unicon
                name="map-marker"
                fill="#7799BE"
                width="20"
                className="unicon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#7799BE"
                >
                  <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path>
                </svg>
              </unicon>{" "}
              <unicon name="exchange" width="20" className="unicon exchange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="inherit"
                >
                  <path d="M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z"></path>
                </svg>
              </unicon>
            </li>
            <li className="navbar-text search-items px-1">
              <label>Going to</label>{" "}
              <input
                type="text"
                placeholder="City or Airport"
                className="form-control"
                id="__BVID__44"
              />{" "}
              <unicon
                name="map-marker"
                fill="#7799BE"
                width="20"
                className="unicon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#7799BE"
                >
                  <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path>
                </svg>
              </unicon>
            </li>
            <li className="navbar-text search-items px-1 pick-date">
              <label>Departing</label> <Datedata />
            </li>
            {oneway === "roundtrip" && (
              <li className="navbar-text search-items px-1 pick-date">
                <label>Returing</label>
                <Returningdate />
              </li>
            )}

            <li className="navbar-text search-items px-1">
              <label>Travellers &amp; Class</label>{" "}
              <input
                type="text"
                readOnly="readOnly"
                value="1 Traveler, Business"
                className="bg-white form-control"
                id="__BVID__50"
                onClick={() => {
                  settravel(!travel);
                }}
              />{" "}
              <unicon name="user" fill="#7799BE" width="20" className="unicon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#7799BE"
                >
                  <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path>
                </svg>
              </unicon>{" "}
              <unicon
                name="angle-down"
                fill="#7799BE"
                width="24"
                className="unicon angle-down"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#7799BE"
                >
                  <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
                </svg>
              </unicon>
              {/*  button dropdown started   */}
              {travel && (
                <div className="traveller-dropdown">
                  <div className="select-traveller p-3">
                    <div className="row no-gutters align-items-center">
                      <div className="col-md-4 col-4">
                        <h1 className="adult-text"> Adults </h1>
                      </div>{" "}
                      <div className="col-md-3 col-3">
                        <select
                          className="form-select adult-setting "
                          id="__BVID__54"
                        >
                          <option selected="selected" value="1">
                            1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>{" "}
                      <div className="col-md-5 col-5">
                        <span className="ml-2">(12+ yrs)</span>
                      </div>
                    </div>{" "}
                    <div className="row mt-3 no-gutters align-items-center">
                      <div className="col-md-4 col-4">
                        <h1 className="adult-text"> Children </h1>
                      </div>{" "}
                      <div className="col-md-3 col-3">
                        <select
                          className="form-select adult-setting "
                          id="__BVID__55"
                        >
                          <option selected="selected" value="1">
                            1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>{" "}
                      <div className="col-md-5 col-5">
                        <span className="ml-2">(2-12 yrs)</span>
                      </div>
                    </div>{" "}
                    <div className="row mt-3 no-gutters align-items-center">
                      <div className="col-md-4 col-4">
                        <h1 className="adult-text">Infant </h1>
                      </div>{" "}
                      <div className="col-md-3 col-3">
                        <select
                          className="form-select adult-setting "
                          id="__BVID__56"
                        >
                          <option selected="selected" value="1">
                            1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>{" "}
                      <div className="col-md-5 col-5">
                        <span className="ml-2">(under 2yrs)</span>
                      </div>
                    </div>{" "}
                    <hr className="mb-0" />
                  </div>{" "}
                  <div className="select-className px-3">
                    <div className="row no-gutters align-items-center">
                      <div className="col-md-4 col-4">
                        <span>Class</span>
                      </div>{" "}
                      <div className="col-md-8 col-8">
                        <select
                          className="form-select economny-text "
                          id="__BVID__57"
                        >
                          <option selected="selected" value="Economy">
                            Economy
                          </option>
                          <option value="Business">Business</option>
                          <option value="First">First</option>
                        </select>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="traveller-bottom p-2 mt-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {
                        settravel(false);
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        width="1em"
                        height="1em"
                        focusable="false"
                        role="img"
                        aria-label="check2 circle"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi-check2-circle mr-1 b-icon bi"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
                          ></path>
                        </g>
                      </svg>
                      Done
                    </button>
                  </div>
                </div>
              )}
              {/*  button dropdown ended   */}
            </li>
            <li className="navbar-text search-items px-1 search-button">
              <label>&nbsp;</label>{" "}
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => router.push("/listing")}
              >
                Search
              </button>
            </li>
          </ul>

          {/* ......................................... city setting */}
          {oneway === "city" && (
            <>
              <ul className="nav align-items-end">
                <li className="navbar-text search-items px-1 leaving">
                  <label>Leaving from</label>
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="form-control"
                    id="__BVID__41"
                  />
                  <unicon
                    name="map-marker"
                    fill="#7799BE"
                    width="20"
                    className="unicon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#7799BE"
                    >
                      <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path>
                    </svg>
                  </unicon>
                  <unicon
                    name="exchange"
                    width="20"
                    className="unicon exchange"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="inherit"
                    >
                      <path d="M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z"></path>
                    </svg>
                  </unicon>
                </li>
                <li className="navbar-text search-items px-1">
                  <label>Going to</label>
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="form-control"
                    id="__BVID__44"
                  />
                  <unicon
                    name="map-marker"
                    fill="#7799BE"
                    width="20"
                    className="unicon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#7799BE"
                    >
                      <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path>
                    </svg>
                  </unicon>
                </li>
                <li className="navbar-text search-items px-1 pick-date">
                  <label>Departing</label>
                  <Datedata />
                </li>
              </ul>

              <ul className="nav align-items-end">
                <li className="navbar-text search-items px-1 leaving">
                  <label>Leaving from</label>
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="form-control"
                    id="__BVID__41"
                  />
                  <unicon
                    name="map-marker"
                    fill="#7799BE"
                    width="20"
                    className="unicon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#7799BE"
                    >
                      <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path>
                    </svg>
                  </unicon>
                  <unicon
                    name="exchange"
                    width="20"
                    className="unicon exchange"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="inherit"
                    >
                      <path d="M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z"></path>
                    </svg>
                  </unicon>
                </li>
                <li className="navbar-text search-items px-1">
                  <label>Going to</label>
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="form-control"
                    id="__BVID__44"
                  />
                  <unicon
                    name="map-marker"
                    fill="#7799BE"
                    width="20"
                    className="unicon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#7799BE"
                    >
                      <path d="M12,2a8,8,0,0,0-8,8c0,5.4,7.05,11.5,7.35,11.76a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,17.65c-2.13-2-6-6.31-6-9.65a6,6,0,0,1,12,0C18,13.34,14.13,17.66,12,19.65ZM12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"></path>
                    </svg>
                  </unicon>
                </li>
                <li className="navbar-text search-items px-1 pick-date">
                  <label>Departing</label>
                  <Datedata />
                </li>
              </ul>
            </>
          )}

          {/* ..........................city ended */}

          {oneway === "city" ? (
            <>
              <div className="multi-city-wrapper  inner-wrapper ">
                <div className="nav  align-items-center mt-3">
                  <button
                    type="button"
                    style={{ marginRight: "10px" }}
                    className={`btn  ${
                      router.pathname === "/listing"
                        ? "btn-checked"
                        : "btn-outline-primary"
                    }   `}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      focusable="false"
                      role="img"
                      aria-label="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi-plus mr-2 b-icon bi"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        ></path>
                      </g>
                    </svg>
                    Add More
                  </button>{" "}
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="info circle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-info-circle ml-2 b-icon bi text-secondary "
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
              </div>
              <div className="form-group nav mt-3" style={{ display: "flex" }}>
                <div className="mr-3 custom-control custom-checkbox">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    name="checkbox-1"
                    value="accepted"
                    className="custom-control-input"
                  />
                  <label htmlFor="checkbox-1" className="custom-control-label">
                    Non stop flight
                  </label>
                </div>{" "}
              </div>
            </>
          ) : (
            <>
              <div className="form-group nav mt-3" style={{ display: "flex" }}>
                <div className="mr-3 custom-control custom-checkbox">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    name="checkbox-1"
                    value="accepted"
                    className="custom-control-input"
                  />
                  <label htmlFor="checkbox-1" className="custom-control-label">
                    Non stop flight
                  </label>
                </div>{" "}
                <div className="custom-control custom-checkbox">
                  <input
                    id="checkbox-2"
                    type="checkbox"
                    name="checkbox-2"
                    value="accepted"
                    className="custom-control-input  "
                    style={{ marginLeft: "15px" }}
                  />
                  <label htmlFor="checkbox-2" className="custom-control-label ">
                    Flexible dates <span>± 3</span> days
                  </label>
                </div>
              </div>
            </>
          )}

          {/* ............................................................... */}
        </div>
      </Container>
    </div>
  );
}
