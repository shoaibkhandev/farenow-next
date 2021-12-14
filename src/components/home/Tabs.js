import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Datedata from "./Date";
import Returningdate from "./Returningdate";
import { position } from "stylis";
import { func } from "prop-types";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function Tabs() {
  const [adults, setAdults] = useState(1)
  const [childs, setChilds] = useState(0)
  const [infants, setInfants] = useState(0)
  const [type, setType] = useState("roundtrip");
  const [classType, setClassType] = useState("Economy");
  const [travel, settravel] = useState(false);
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")
  const [from, setFrom] = useState({})
  const [fromSugggestionList, setfromSugggestionList] = useState([])
  const [suggestionsfrom, setsuggestionsfrom] = useState(false)
  const [to, setTo] = useState("")
  const [toSugggestionList, settoSugggestionList] = useState([])
  const [suggestionsTo, setsuggestionsTo] = useState(false)
  const [showToast, setShowToast] = React.useState(false);
  const [flightErrorMsg, setFlightErrorMsg] = React.useState([]);
  const router = useRouter();

  const roundTrip = [
    {
      from: {
        name: "",
        code: "",
        city_name: ""
      },
      fromDate: "",
      suggestionsfrom: false,
      fromSugggestionList: [],
      to: {
        name: "",
        code: "",
        city_name: ""
      },
      suggestionsto: false,
      toSugggestionList: [],
    },
  ]

  const multiCity = [
    {
      from: {
        name: "",
        code: "",
        city_name: ""
      },
      fromDate: "",
      suggestionsfrom: false,
      fromSugggestionList: [],
      to: {
        name: "",
        code: "",
        city_name: ""
      },
      suggestionsto: false,
      toSugggestionList: [],
    },
    {
      from: {
        name: "",
        code: "",
        city_name: ""
      },
      fromDate: "",
      suggestionsfrom: false,
      fromSugggestionList: [],
      to: {
        name: "",
        code: "",
        city_name: ""
      },
      suggestionsto: false,
      toSugggestionList: [],
    },
    {
      from: {
        name: "",
        code: "",
        city_name: ""
      },
      fromDate: "",
      suggestionsfrom: false,
      fromSugggestionList: [],
      to: {
        name: "",
        code: "",
        city_name: ""
      },
      suggestionsto: false,
      toSugggestionList: [],
    },
  ]

  const [formsArr, setFormsArr] = useState(roundTrip)

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setShowToast(false)
  };

  useEffect(() => {
    if (type == 'multicity') {
      setFormsArr(multiCity)
    } else {
      setFormsArr(roundTrip)
    }
  }, [type])

  function addNewForm() {
    setFormsArr([...formsArr,
    {
      from: {
        name: "",
        code: "",
        city_name: ""
      },
      fromDate: "",
      suggestionsfrom: false,
      fromSugggestionList: [],
      to: {
        name: "",
        code: "",
        city_name: ""
      },
      suggestionsto: false,
      toSugggestionList: [],
    }])
  }

  function removeForm(index) {
    const arr = formsArr.slice(0, index)
    setFormsArr(arr)
  }

  async function fromAutocomplete(key, index) {
    let forms = [...formsArr]
    forms[index].from.name = key

    if (!key) {
      forms[index].suggestionsfrom = false
      return setFormsArr(forms)
    }

    forms[index].suggestionsfrom = true

    try {
      const { data } = await axios.get(`http://localhost:3001/v1/flights/autoComplete?q=${key}`);
      console.log(data.result.airports)
      forms[index].fromSugggestionList = data.result.airports.length > 20 ? data.result.airports.slice(0, 20) : data.result.airports
      setFormsArr(forms)
    } catch (error) {
      console.error(error);
    }
  }

  async function toAutocomplete(key, index) {
    let forms = [...formsArr]
    forms[index].to.name = key

    if (!key) {
      forms[index].suggestionsto = false
      return setFormsArr(forms)
    }

    forms[index].suggestionsto = true

    try {
      const { data } = await axios.get(`http://localhost:3001/v1/flights/autoComplete?q=${key}`);
      console.log(data.result.airports)
      forms[index].toSugggestionList = data.result.airports.length > 20 ? data.result.airports.slice(0, 20) : data.result.airports
      setFormsArr(forms)
    } catch (error) {
      console.error(error);
    }
  }

  function selectFromSuggestion(item, index) {
    let forms = [...formsArr]

    forms[index].from = item
    forms[index].suggestionsfrom = false

    setFormsArr(forms)
  }

  function selectToSuggestion(item, index) {
    let forms = [...formsArr]

    forms[index].to = item
    forms[index].suggestionsto = false

    setFormsArr(forms)
  }

  function totalTraveler() {
    return Number(adults) + Number(childs) + Number(infants)
  }

  function submit() {
    setFlightErrorMsg("")
    console.log(formsArr)
    // if (!from.code) {
    //   setFlightErrorMsg("Please enter from location")
    //   return setShowToast(true)
    // }
    // if (!to.code) {
    //   setFlightErrorMsg("Please enter to location")
    //   return setShowToast(true)
    // }
    // if (!fromDate) {
    //   setFlightErrorMsg("Please enter departure date")
    //   return setShowToast(true)
    // }
    // if (!toDate && type === "roundtrip") {
    //   setFlightErrorMsg("Please enter arrival date")
    //   return setShowToast(true)
    // }
    const constFields = `adults=${adults}&childs=${childs}&infants=${infants}&type=${type}&classType=${classType}&totalPersons=${totalTraveler()}&return_date=${toDate ? toDate.toISOString().substring(0, 10) : ''}`
    let dynamicFields = ''
    if (type == 'multicity') {
      const form = formsArr.map((item, index) => `from${index + 1}=${encodeURIComponent(item.from.code)}&to${index + 1}=${encodeURIComponent(item.to.code)}&from_city${index + 1}=${encodeURIComponent(item.from.city_name)}&to_city${index + 1}=${encodeURIComponent(item.to.city_name)}&depart_date${index + 1}=${item.fromDate ? item.fromDate.toISOString().substring(0, 10) : ''}`).join('&')
      dynamicFields = `&cities_length=${formsArr.length}&${form}`
    } else {
      dynamicFields = `&depart_date=${formsArr[0].fromDate ? formsArr[0].fromDate.toISOString().substring(0, 10) : ''}&from=${formsArr[0].from.code}&to=${formsArr[0].to.code}&from_city=${formsArr[0].from.city_name}&to_city=${formsArr[0].to.city_name}`
    }
    router.push(`/listing?${constFields}${dynamicFields}`)
  }

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Container>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={showToast}
          autoHideDuration={2000}
          onClose={handleClose}
          message={flightErrorMsg}
          action={action}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {flightErrorMsg}
          </Alert>
        </Snackbar>
        <div className="inner-wrapper">
          <Form onChange={(e) => setType(e.target.value)}>
            <div className="mb-3 radio-setting ">
              <Form.Check
                type="radio"
                id={`default-name1`}
                label="Round Trip"
                name="tourtype"
                className={`me-3 ${router.pathname === "/listing" ? "listing-blue" : "text-white"
                  }   `}
                value="roundtrip"
                defaultChecked
              />
              <Form.Check
                type="radio"
                id={`default-name2`}
                label="One Way"
                className={`me-3 ${router.pathname === "/listing" ? "listing-blue" : "text-white"
                  }   `}
                name="tourtype"
                value="oneway"
              />
              <Form.Check
                type="radio"
                id={`default-name3`}
                label="Multi City"
                className={`me-3 ${router.pathname === "/listing" ? "listing-blue" : "text-white"
                  }   `}
                name="tourtype"
                value="multicity"
              />
            </div>
          </Form>

          {/* ............................................................ */}

          {formsArr.map((form, index) =>
            <ul className={`search-section nav align-items-end ${index > 0 ? 'dynamic-forms' : ''}`}>
              <div style={{ width: "100%", position: "relative" }}>
                <li className="navbar-text navbar-inputs search-items px-1 leaving">
                  <label>Leaving from</label>{" "}
                  <input
                    type="text"
                    placeholder="City or Airport"
                    value={form.from.name}
                    onChange={(e) => fromAutocomplete(e.target.value, index)}
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
                {form.suggestionsfrom &&
                  <ul className="suggestion-list">
                    {form.fromSugggestionList.map((item) =>
                      <li onClick={(e) => { selectFromSuggestion(item, index) }}>
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
                        <span>{item.name} - {item.code}</span>
                      </li>
                    )}
                  </ul>
                }
              </div>
              <div style={{ width: "100%", position: "relative" }}>
                <li className="navbar-text navbar-inputs search-items px-1">
                  <label>Going to</label>{" "}
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="form-control"
                    value={form.to.name}
                    onChange={(e) => toAutocomplete(e.target.value, index)}
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

                {form.suggestionsto &&

                  <ul className="suggestion-list">
                    {form.toSugggestionList.map((item) =>
                      <li onClick={(e) => { selectToSuggestion(item, index) }}>
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
                        <span>{item.name} - {item.code}</span>
                      </li>
                    )}
                  </ul>
                }
              </div>

              <li className="navbar-text search-items px-1 pick-date">
                <label>Departing</label>

                {/* <Datedata fromDate={form.fromDate} setFromDate={setFromDate} /> */}

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={form.fromDate}
                    onChange={(newValue) => {
                      [
                        form.fromDate = newValue,
                        setFormsArr([...formsArr])
                      ]
                    }}
                    renderInput={(params) =>
                      <TextField {...params}
                        placeholder="Select departure date"
                        size="small"
                        fullWidth sx={{
                          "& .MuiOutlinedInput-input": {
                            height: "27px",
                          },
                          "& .MuiOutlinedInput-root": {
                            color: "#4D6F93 !important",
                            background: "white",
                          },
                          "& .MuiSvgIcon-root": {
                            color: "#4D6F93 !important",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            top: "0px"
                          },

                        }} />}
                  />
                </LocalizationProvider>
              </li>

              {type === "roundtrip" && index === 0 && (
                <li className="navbar-text search-items px-1 pick-date">
                  <label>Returing</label>
                  <Returningdate toDate={toDate} setToDate={setToDate} />
                </li>
              )}
              {index === 0 && (
                <li className="navbar-text search-items px-1">
                  <label>Travellers &amp; Class</label>{" "}
                  <input
                    type="text"
                    readOnly="readOnly"
                    value={`${totalTraveler()} Traveler, Business`}
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
                              onChange={(event) => setAdults(event.target.value)}
                              value={adults}
                            >
                              <option value="1">
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
                              onChange={(event) => setChilds(event.target.value)}
                              value={childs}
                            >
                              <option value="0">
                                0
                              </option>
                              <option value="1">
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
                              onChange={(event) => setInfants(event.target.value)}
                              value={infants}
                            >
                              <option value="0">
                                0
                              </option>
                              <option value="1">
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
                              onChange={(event) => setClassType(event.target.value)}
                              value={classType}
                            >
                              <option value="Economy">
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
                </li>
              )}
              {index === 0 && (
                <li className="navbar-text search-items px-1 search-button">
                  <label>&nbsp;</label>{" "}
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => submit()}
                  >
                    Search
                  </button>
                </li>
              )}


              {index > 2 && index === (formsArr.length - 1) && (
                <div onClick={() => removeForm(index)} className="close-more">X</div>
              )}

            </ul>
          )}
          {type === "multicity" && formsArr.length <= 5 && (
            <div onClick={() => addNewForm()} className="add-more">+ add more</div>
          )}
        </div>
      </Container>
    </div>
  );
}
