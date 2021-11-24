import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  ListItemButton,
  Typography,
  ListItemIcon,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/router";
export default function SigninModal() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xs");
  const [forgot, setforgot] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
    setforgot(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  return (
    <>
      <ListItemButton onClick={handleClickOpen}>
        <Typography
          variant="body2"
          sx={{
            color:
              router.pathname === "/"
                ? theme.palette.common.white
                : theme.palette.common.black,
          }}
        >
          My Bookings
        </Typography>
        <ListItemIcon
          sx={{
            minWidth: 0,
            ml: -0.5,
            "& svg": {
              width: "20px",
              height: "20px",
              fill: router.pathname === "/" ? theme.palette.common.white : theme.palette.common.black,
            },
          }}
        >
          <ArrowDropDownIcon />
        </ListItemIcon>
      </ListItemButton>
      <Dialog
        scroll="body"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        className="sign-in-modal"
      >
        {forgot ? (
          <DialogContent>
            <div className=" my-booking-modal">
              <Box padding={5}>
                <svg

                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  focusable="false"
                  role="img"
                  aria-label="x"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi-x b-icon bi"
                  onClick={handleClose}
                >
                  <g >
                    <path
                      fillRule="evenodd"
                      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </g>
                </svg>
                <div className="section-heading text-center">
                  <h3>Manage Your Booking</h3>
                  <p>View, Print, Email or Change your Itinerary</p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group email">
                      <label >Email-ID</label>{" "}
                      <input

                        type="email"
                        placeholder="Email address used while Booking"
                        className="form-control"
                        id="__BVID__155"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group email">
                      <label >Flyin trip ID</label>{" "}
                      <input

                        type="text"
                        placeholder="Flyin trip ID"
                        className="form-control"
                        id="__BVID__156"
                      />
                    </div>
                  </div>
                </div>
                <a

                  onClick={() => {
                    setforgot(false);
                  }}
                  href="#"
                  target="_self"
                  className="forget-id"
                >
                  Forgot Flyin Trip ID?
                </a>
                <div className="form-group text-center">
                  <button

                    type="button"
                    className="btn btn-ret btn-secondary"
                  >
                    Retrieve Booking
                  </button>
                </div>
              </Box>
            </div>
          </DialogContent>
        ) : (
          <DialogContent>
            <div className=" my-booking-modal">
              <svg

                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                focusable="false"
                role="img"
                aria-label="x"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi-x b-icon bi"
                onClick={handleClose}
              >
                <g >
                  <path
                    fillRule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </g>
              </svg>
              <Box padding={5}>
                <form >
                  <div className="section-heading">
                    <h3 >Forgot Flyin Trip ID?</h3>{" "}
                    <p >
                      We will send the latest reference number to the email
                      address that you have used while booking.
                    </p>
                  </div>{" "}
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group email">
                        <label >Email-ID</label>{" "}
                        <input

                          type="email"
                          placeholder="Please enter your Email-ID"
                          className="form-control"
                          id="__BVID__160"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <hr />{" "}
                  <div

                    className="form-group text-center mt-4"
                  >
                    <button

                      type="button"
                      className="btn btn-send btn-secondary"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </Box>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
