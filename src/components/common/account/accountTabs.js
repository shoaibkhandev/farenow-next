import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: "20px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#4092fb!important",
          },
        }}
      >
        <Tab
          label="Sign In"
          color="secondary"
          className="btn-account"
          {...a11yProps(0)}
        />
        <Tab label="Sign Up " className="btn-account" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <>
          <div className="account">
            <div className="nav pb-4">
              <button type="button" className="btn btn-primary acntbnt ">
                <div className="unicon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
                  </svg>
                </div>
                Facebook
              </button>{" "}
              <button type="button" className="btn btn-danger">
                <div className="unicon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M22.60229,10.00391a1.00005,1.00005,0,0,0-.98388-.82227H12.2a.99974.99974,0,0,0-1,1V14.0498a.99974.99974,0,0,0,1,1h3.9624a3.65162,3.65162,0,0,1-1.13183,1.1875A5.0604,5.0604,0,0,1,12.2,17.02246a4.93525,4.93525,0,0,1-4.64624-3.4378L7.55347,13.583a4.90382,4.90382,0,0,1,0-3.167l.00024-.00165A4.9356,4.9356,0,0,1,12.2,6.97754,4.37756,4.37756,0,0,1,15.3313,8.19531a1.00053,1.00053,0,0,0,1.39844-.01562L19.5979,5.31152a.99918.99918,0,0,0-.02539-1.43847A10.62342,10.62342,0,0,0,12.2,1,10.949,10.949,0,0,0,2.37134,7.05878l-.00147.00177A10.92175,10.92175,0,0,0,1.2,12a11.07862,11.07862,0,0,0,1.16992,4.93945l.00147.00177A10.949,10.949,0,0,0,12.2,23a10.5255,10.5255,0,0,0,7.29468-2.687l.00073-.00049.00079-.00085.00019-.00013.00006-.00012a10.78575,10.78575,0,0,0,3.30365-8.08386A12.51533,12.51533,0,0,0,22.60229,10.00391ZM12.2,3a8.68219,8.68219,0,0,1,5.2085,1.67285L15.95483,6.126A6.46322,6.46322,0,0,0,12.2,4.97754,6.88648,6.88648,0,0,0,6.21069,8.52832L5.14148,7.69958l-.585-.45367A8.95257,8.95257,0,0,1,12.2,3ZM3.67944,14.90332a9.02957,9.02957,0,0,1,0-5.80664l1.78223,1.38184a6.85381,6.85381,0,0,0,0,3.042ZM12.2,21A8.9528,8.9528,0,0,1,4.5564,16.75391l.37841-.29352,1.27588-.98969A6.88482,6.88482,0,0,0,12.2,19.02246a7.27662,7.27662,0,0,0,3.30573-.75079L17.19739,19.585A8.88989,8.88989,0,0,1,12.2,21Zm6.52588-2.76074-.183-.142L17.16553,17.028a5.60626,5.60626,0,0,0,1.39966-2.79553.9998.9998,0,0,0-.9834-1.18262H13.2V11.18164h7.54883c.03418.3457.05127.69531.05127,1.0459A9.05156,9.05156,0,0,1,18.72583,18.23926Z"></path>
                  </svg>
                </div>
                Google+
              </button>
            </div>
            <div className="or-line mb-4">
              <div className="or">OR</div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-group email">
                  <input
                    type="email"
                    placeholder="Enter your Email-ID"
                    className="form-control"
                    id="__BVID__161"
                  />{" "}
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="envelope"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-envelope b-icon bi"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-group password">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="form-control mt-3 "
                    id="__BVID__162"
                  />{" "}
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="lock"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-lock b-icon bi"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                      ></path>
                    </g>
                  </svg>{" "}
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="eye"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-eye b-icon bi"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="d-flex mt-3 justify-content-between">
                  <div className="mb-3 kmsi custom-control custom-checkbox">
                    <input
                      id="checkbox-1"
                      type="checkbox"
                      name="checkbox-1"
                      className="custom-control-input  "
                      value="true"
                    />
                    <label
                      htmlFor="checkbox-1"
                      className="custom-control-label keep "
                    >
                      Keep me signed in{" "}
                    </label>
                  </div>{" "}
                  <a href="#" target="_self" className="forget-pass">
                    Forget Password?
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="form-group  d-grid">
                  <button
                    type="button"
                    className="btn btn btn-login btn-block btn-secondary btn-lg  "
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <>
          <div className="account">
            <div className="nav pb-4">
              <button type="button" className="btn btn-primary acntbnt ">
                <div className="unicon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
                  </svg>
                </div>
                Facebook
              </button>{" "}
              <button type="button" className="btn btn-danger">
                <div className="unicon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M22.60229,10.00391a1.00005,1.00005,0,0,0-.98388-.82227H12.2a.99974.99974,0,0,0-1,1V14.0498a.99974.99974,0,0,0,1,1h3.9624a3.65162,3.65162,0,0,1-1.13183,1.1875A5.0604,5.0604,0,0,1,12.2,17.02246a4.93525,4.93525,0,0,1-4.64624-3.4378L7.55347,13.583a4.90382,4.90382,0,0,1,0-3.167l.00024-.00165A4.9356,4.9356,0,0,1,12.2,6.97754,4.37756,4.37756,0,0,1,15.3313,8.19531a1.00053,1.00053,0,0,0,1.39844-.01562L19.5979,5.31152a.99918.99918,0,0,0-.02539-1.43847A10.62342,10.62342,0,0,0,12.2,1,10.949,10.949,0,0,0,2.37134,7.05878l-.00147.00177A10.92175,10.92175,0,0,0,1.2,12a11.07862,11.07862,0,0,0,1.16992,4.93945l.00147.00177A10.949,10.949,0,0,0,12.2,23a10.5255,10.5255,0,0,0,7.29468-2.687l.00073-.00049.00079-.00085.00019-.00013.00006-.00012a10.78575,10.78575,0,0,0,3.30365-8.08386A12.51533,12.51533,0,0,0,22.60229,10.00391ZM12.2,3a8.68219,8.68219,0,0,1,5.2085,1.67285L15.95483,6.126A6.46322,6.46322,0,0,0,12.2,4.97754,6.88648,6.88648,0,0,0,6.21069,8.52832L5.14148,7.69958l-.585-.45367A8.95257,8.95257,0,0,1,12.2,3ZM3.67944,14.90332a9.02957,9.02957,0,0,1,0-5.80664l1.78223,1.38184a6.85381,6.85381,0,0,0,0,3.042ZM12.2,21A8.9528,8.9528,0,0,1,4.5564,16.75391l.37841-.29352,1.27588-.98969A6.88482,6.88482,0,0,0,12.2,19.02246a7.27662,7.27662,0,0,0,3.30573-.75079L17.19739,19.585A8.88989,8.88989,0,0,1,12.2,21Zm6.52588-2.76074-.183-.142L17.16553,17.028a5.60626,5.60626,0,0,0,1.39966-2.79553.9998.9998,0,0,0-.9834-1.18262H13.2V11.18164h7.54883c.03418.3457.05127.69531.05127,1.0459A9.05156,9.05156,0,0,1,18.72583,18.23926Z"></path>
                  </svg>
                </div>
                Google+
              </button>
            </div>
            <div className="or-line mb-4">
              <div className="or">OR</div>
            </div>
            <div data-v-4121c494="" className="personal-detail">
              <div data-v-4121c494="" className="row no-gutters">
                <div data-v-4121c494="" className="px-2 col-md-4 col-12">
                  <div data-v-4121c494="" className="form-group">
                    <select
                      data-v-4121c494=""
                      className="form-control custom-select mrs "
                      id="__BVID__109"
                    >
                      <option value="">Title</option>
                      <option value="a">Mr</option>
                      <option value="b">Mrs</option>
                      <option value="[object Object]">Miss</option>
                    </select>
                  </div>
                </div>{" "}
                <div data-v-4121c494="" className="px-2 col-md-4 col-12">
                  <div data-v-4121c494="" className="form-group">
                    <input
                      data-v-4121c494=""
                      type="text"
                      placeholder="First Name"
                      className="form-control mrs"
                      id="__BVID__110"
                    />
                  </div>
                </div>{" "}
                <div data-v-4121c494="" className="px-2 col-md-4 col-12">
                  <div data-v-4121c494="" className="form-group">
                    <input
                      data-v-4121c494=""
                      type="text"
                      placeholder="Last Name"
                      className="form-control mrs"
                      id="__BVID__111"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 ">
              <div className="col-12">
                <div className="form-group email">
                  <input
                    type="email"
                    placeholder="Enter your Email-ID"
                    className="form-control"
                    id="__BVID__161"
                  />{" "}
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="envelope"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-envelope b-icon bi"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-group password">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="form-control mt-3 "
                    id="__BVID__162"
                  />{" "}
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="lock"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-lock b-icon bi"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                      ></path>
                    </g>
                  </svg>{" "}
                  <svg
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="eye"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi-eye b-icon bi"
                  >
                    <g>
                      <path
                        fillRule="evenodd"
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="d-flex mt-3">
                  <div className=" kmsi custom-control custom-checkbox">
                    <input
                      id="checkbox-1"
                      type="checkbox"
                      name="checkbox-1"
                      className="custom-control-input  "
                      value="true"
                    />
                    <label
                      htmlFor="checkbox-1"
                      className="custom-control-label keep "
                    >
                      I have read and agree to the{" "}
                    </label>
                  </div>{" "}
                  <a href="#" target="_self" className="terms">
                    Terms and Conditions
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="d-flex  justify-content-between">
                  <div className="mb-3 kmsi custom-control custom-checkbox">
                    <input
                      id="checkbox-1"
                      type="checkbox"
                      name="checkbox-1"
                      className="custom-control-input  "
                      value="true"
                    />
                    <label
                      htmlFor="checkbox-1"
                      className="custom-control-label keep "
                    >
                      Enroll to Flyin Rewards{" "}
                    </label>{" "}
                    <a href="#" target="_self" className="terms">
                      Terms and Conditions
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-12">
                <div className="form-group  d-grid">
                  <button
                    type="button"
                    className="btn btn btn-login btn-block btn-secondary btn-lg  "
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </TabPanel>
    </Box>
  );
}
