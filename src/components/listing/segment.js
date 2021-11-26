import React from "react";
import { Grid, } from "@mui/material";
import { useRouter } from "next/router";
import Detailsmodel from "./detailsmodel";
import List from "./list";

import { Box } from '@mui/material'
export default function Segment({
  listingArr
}) {
  const router = useRouter();
  return (
    <>
      {listingArr.map((listing, listingIndex) =>
        <div className="flight-wrapper">
          <Grid container>
            <Grid
              className="left-section"
              item
              xs={12}
              sm={12}
              md={12}
              lg={9}
              xl={9}
            >
              {listing.directions[0] !== undefined && listing.directions[0].map((direction, index) =>
                <List direction={direction} name="Departure" radioName="departure0" listingIndex={listingIndex} index={index} />
              )}
              {listing.directions[1] !== undefined && listing.directions[1].map((direction, index) =>
                <List direction={direction} name="Return" radioName="return0" listingIndex={listingIndex} index={index} />
              )}
            </Grid>
            <Grid
              className="right-section"
              item
              sm={12}
              xs={12}
              md={12}
              lg={3}
              xl={3}
            >
              <span className="price">
                {" "}
                SAR
                <strong>
                  <em>
                    {" "}
                    638<em className="decimal">.85</em>
                  </em>
                </strong>{" "}
                <small>
                  (For <em>1</em> Person )
                </small>
              </span>{" "}
              <a
                onClick={() => router.push("/details")}
                className="btn btn-primary"
              >
                Book Now
              </a>
              <div title="Tooltip directive content" className="reward ">
                <svg
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  focusable="false"
                  role="img"
                  aria-label="info circle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi-info-circle b-icon bi me-2"
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
                <span>Earn 42 Flyin Reward Points</span>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}
