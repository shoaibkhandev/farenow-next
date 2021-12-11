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
import { Box, CircularProgress } from '@mui/material'
import { da } from 'date-fns/locale';

export async function getServerSideProps(context) {
  const { adults, childs, infants, depart_date, return_date, type, from, to, classType, totalPersons, from_city, to_city } = context.query

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
    },
    totalPersons: totalPersons,
    departureDate: depart_date,
    returnDate: return_date,
    fromCity: from_city,
    toCity: to_city,
    classType: classType
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

  return {
    props: {
      params
    },
  }
}

export default function Listing({ params }) {
  const router = useRouter()

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true)
  const [listing, setListing] = React.useState([])
  const [actualListing, setActualListing] = React.useState([])
  const [airline, setAirline] = React.useState("")

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const { data } = await axios.post(`http://localhost:3001/v1/flights/list`, params);
      await setListing(data.data)
      await setActualListing(data.data)
      await setLoading(false)
    } catch (error) {
      setLoading(false)
      setListing([])
      console.error(error);
    }
  }

  const changeAirline = (airline) => {
    setAirline(airline)
    setLoading(true)
    const result = actualListing.flights.filter(flight => {
      if (flight.airlines.name == airline) return flight
    })
    setListing({ ...actualListing, flights: result })
    setLoading(false)
  }

  const handleClick = () => {
    setOpen(!open);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 5.2,
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
                {params.fromCity} - {params.toCity}
              </h4>
              class: <span>{params.classType}</span> Traveller: <span>{params.totalPersons}</span> Date:{" "}
              <em>{!loading && listing.flights.length} Flights Found</em>
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
            {loading && <Col md={3}>
              <aside>
                <div className='aside-header'></div>
                <div className='filter-pannel'></div>
              </aside>
            </Col>}
            {!loading && <Col md={3}>
              <Filter airline={airline} setLoading={setLoading} loading={loading} listing={listing} setListing={setListing} actualListing={actualListing} />
            </Col>}
            <Col md={9}>
              <div className="flightResultsSortingPanel ">
                <div className="swipper-wrapper">
                  <Slider {...settings}>
                    {!loading && Object.keys(listing.airLines).map((key, index) => (
                      <div key={index} style={{ width: "163.667px" }}>
                        <div onClick={() => changeAirline(listing.airLines[key].name)} className={`item-airline ${airline == listing.airLines[key].name ? 'active' : ''}`}>
                          <a target="_self" className="pia-dcoration">
                            <figure>
                              <Box component="img"
                                src={listing.airLines[key].thumbnail}
                                width="25px"
                                height="20px"
                                className="img-fluid"
                              />
                            </figure>
                            <div className="item-airline-right">
                              <span className="txtEclipse d-block float-left">
                                {listing.airLines[key].name}
                              </span>{" "}
                              <span className="price">
                                <strong className="priceTag">
                                  <em>{listing.airLines[key].price}</em>
                                </strong>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* <div className="flightResultsSortingPanel">
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
                </div> */}
              </div>

              {loading && <div className='pannel'>
                <CircularProgress />
              </div>}

              {!loading && !listing.flights.length && <div className='pannel'>
                No hotels found
              </div>}

              {!loading && <Segment
                listing={listing}
                totalPersons={params.totalPersons}
                departureDate={params.departureDate}
                returnDate={params.returnDate}
              />}

            </Col>
          </Row>
        </div>
        <Topsection />
      </div>
    </div>
  );
}
