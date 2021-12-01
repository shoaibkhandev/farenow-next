import { useRouter } from 'next/router'
import axios from 'axios';
import React, { useEffect } from "react";
import { Toolbar, } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Tabs from "@components/home/Tabs";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Segment from "@components/listing/segment";
import Topsection from "@components/home/Topsection";
import Filter from "@components/listing/filter";
import { Box } from '@mui/material'
import { da } from 'date-fns/locale';

export async function getServerSideProps(context) {
  const { adults, childs, infants, depart_date, return_date, type, from, to, classType } = context.query

  const params = {
    legs: [
      {
        "from": from,
        "to": to,
        "departureDate": depart_date
      },
    ],
    "passengers": {
      "ADT": Number(adults),
      "CNN": Number(childs),
      "INF": Number(infants)
    },
    "cabins": [classType],
    "pricing": {
      "currency": "USD"
    }
  }

  if (type === "roundtrip") {
    params.legs.push(
      {
        "from": to,
        "to": from,
        "departureDate": return_date
      }
    )
  }

  console.log(params)

  let listingArr = []
  try {
    const { data } = await axios.post(`http://localhost:3001/v1/flights/list`, params);
    listingArr = data
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      listingArr
    }, 
  }
}

export default function Listing({ listingArr }) {
  const router = useRouter()

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Toolbar />
      <div className="modify-search">
        <div className="container-fluid">
          <ul className="nav align-items-center justify-content-between">
            <li className="navbar-text left-side">
              <h4>
                {" "}
                Lahore, Pakistan - Dubai, United Arab Emirates{" "}
                <small>(One Way)</small>
              </h4>
              class: <span>Economy</span> Traveller: <span>1</span> Date:{" "}
              <span>Fri,02 Oct 2020</span> <em>6 Flights Found</em>
            </li>
            <li className="navbar-text right-side">
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-outline-info collapsed"
                aria-expanded="false"
                aria-controls="collapse-1"
              >
                MODIFY SEARCH
                <unicon name="angle-down" className="unicon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="inherit"
                  >
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
                  </svg>
                </unicon>
              </button>
            </li>
          </ul>
        </div>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className="modify-wrapper">
            <Tabs />
          </div>
        </Collapse>
      </div>
      <div className="flights-wrapper pb-5">
        <div className="container-fluid">
          <Row>
            <Col md={3}>
              <Filter />
            </Col>
            <Col md={9}>
              <div className="flightResultsSortingPanel ">
                <div className="swipper-wrapper">
                  <Slider {...settings}>
                    {Array.from({ length: 12 }).map((_, idx) => (
                      <div key={idx} style={{ width: "163.667px" }}>
                        <div className="item-airline">
                          <a target="_self" className="pia-dcoration">
                            <figure>
                              <Box component="img"
                                src="/static/img/PK.8288519.png"
                                width="25px"
                                height="20px"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="item-airline-right">
                              <span className="txtEclipse d-block float-left">
                                Pakistan International Airlines
                              </span>{" "}
                              <span className="price">
                                {" "}
                                SAR{" "}
                                <strong className="priceTag">
                                  <em>668</em> <em className="decimel">.75</em>
                                </strong>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="flightResultsSortingPanel">
                  <div className="container-fluid ">
                    <ul className="nav sortby">
                      <li className="navbar-text">
                        <span>Sort By :</span>
                      </li>
                      <li className="navbar-text">
                        <select
                          className="custom-select"
                          id="__BVID__142"
                          style={{ WebkitAppearance: "none" }}
                        >
                          <option value="">Departure Time</option>
                          <option value="a">Earliest</option>
                          <option value="b">Latest</option>
                        </select>
                      </li>
                      <li className="navbar-text">
                        <select
                          className="custom-select"
                          style={{ WebkitAppearance: "none" }}
                          id="__BVID__143"
                        >
                          <option value="">Arrival Time</option>
                          <option value="a">Earliest</option>
                          <option value="b">Latest</option>
                        </select>
                      </li>
                      <li className="navbar-text">
                        <select
                          className="custom-select"
                          style={{ WebkitAppearance: "none" }}
                          id="__BVID__144"
                        >
                          <option value="">Trip Duration</option>
                          <option value="a">Shortest</option>
                          <option value="b">Longest</option>
                        </select>
                      </li>
                      <li className="navbar-text">
                        <select
                          className="custom-select"
                          style={{ WebkitAppearance: "none" }}
                          id="__BVID__145"
                        >
                          <option value="">Price</option>
                          <option value="a">Lowest</option>
                          <option value="b">Heighest</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ................................ */}
              <Segment
                listingArr={listingArr}
              />

              {/* ....................... */}
            </Col>
          </Row>
        </div>
        <Topsection />
      </div>



    </div>
  );
}
