import React, { useEffect } from 'react'
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Collapse, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
export default function Filter({ loading, listing, setListing, actualListing, setLoading, airline, setAirline }) {
    const [stop, setstop] = React.useState(false);
    const [price, setPrice] = React.useState(false);
    const [flight, setflight] = React.useState(false);
    const [flight1, setflight1] = React.useState(false);
    const [near, setnear] = React.useState(false);
    const [stopover, setstopover] = React.useState(false);
    const maxPrice = listing.max_prices === undefined ? 0 : Math.round(listing.max_prices)
    const minPrice = listing.min_prices === undefined ? 0 : Math.round(listing.min_prices)

    // filtration values 
    const [priceRange, setPriceRange] = React.useState([minPrice, maxPrice]);
    const [stops, setStops] = React.useState([])
    const [fromLocation, setFromLocation] = React.useState([])
    const [toLocation, setToLocation] = React.useState([])

    useEffect(() => {
        filtration()
        console.log(airline)
    }, [stops, fromLocation, toLocation, setAirline])

    const handlePriceChange = (newValue) => {
        setPriceRange(newValue);
    };

    const filterPrice = () => {
        filtration()
    };

    const changeStop = (stop) => {
        if (stops.includes(stop)) {
            const result = stops.filter(val => val !== stop)
            return setStops(result)
        }
        setStops([...stops, stop]);
    }

    const changeFromLocation = (code) => {
        if (fromLocation.includes(code)) {
            const result = fromLocation.filter(val => val !== code)
            return setFromLocation(result)
        }
        setFromLocation([...fromLocation, code]);
    }

    const changeToLocation = (code) => {
        if (toLocation.includes(code)) {
            const result = toLocation.filter(val => val !== code)
            return setToLocation(result)
        }
        setToLocation([...toLocation, code]);
    }

    const resetFilters = () => {
        setPriceRange([minPrice, maxPrice]);
        setStops([])
        setFromLocation([])
        setToLocation([])
    }

    function filtration() {
        setLoading(true)
        const result = actualListing.flights.filter(flight => {
            let itemPass = true;

            if (fromLocation.length && itemPass) {
                if (flight.directions[0] !== undefined && fromLocation.includes(flight.directions[0][0].from)) {
                    itemPass = true
                } else {
                    itemPass = false
                }
            }

            if (toLocation.length && itemPass) {
                if (flight.directions[0] !== undefined && toLocation.includes(flight.directions[0][0].to)) {
                    itemPass = true
                } else {
                    itemPass = false
                }
            }

            if (airline !== "" && itemPass) {
                if (flight.airlines.name == airline) {
                    itemPass = true
                } else {
                    itemPass = false
                }
            }

            if (priceRange.length && itemPass) {
                if (flight.totalPrice.split(/(\d+)/)[1] >= priceRange[0] && flight.totalPrice.split(/(\d+)/)[1] <= priceRange[1]) {
                    itemPass = true;
                } else {
                    itemPass = false;
                }
            }

            if (stops.length && itemPass) {
                if (flight.directions[0] !== undefined && stops.includes(flight.directions[0].length)) {
                    itemPass = true
                } else {
                    itemPass = false
                }
            }

            if (itemPass) {
                return flight;
            }
        });
        setLoading(false)
        setListing({ ...actualListing, flights: result })
    }

    return (
        <aside>
            <div className="aside-header">
                <ul className="nav align-items-center justify-content-between">
                    <li className="navbar-text">
                        <h4>Filter Your Search</h4>
                        <span>to narrow down your search</span>
                    </li>
                    <li className="navbar-text right-side">
                        <button onClick={() => resetFilters()} type="button" className="btn btn-outline-info">
                            Reset
                        </button>
                    </li>
                </ul>
            </div>
            <div className="filter-pannel">
                <div className="section">
                    <ul className="nav align-items-center justify-content-between">
                        <li className="navbar-text left-side">
                            <a
                                href="#"
                                target="_self"
                                className="collapsed"
                                aria-expanded="false"
                                aria-controls="collapse-price"
                                onClick={() => setPrice(!price)}
                                style={{ overflowAnchor: "none" }}
                            >
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
                                Price
                            </a>
                        </li>
                        <li className="navbar-text right-side">
                            <a href="#" target="_self" className="">
                                Clear
                            </a>
                        </li>
                    </ul>

                    <Collapse in={price} timeout="auto" unmountOnExit>
                        <div className="py-2">
                            <div className='price-section'>
                                <p>{priceRange[0]}</p>
                                <p>{priceRange[1]}</p>
                            </div>
                            {!loading &&
                                <Range
                                    min={minPrice}
                                    max={maxPrice}
                                    value={priceRange}
                                    onAfterChange={filterPrice}
                                    onChange={handlePriceChange}
                                />
                            }
                        </div>
                    </Collapse>
                    <div
                        id="collapse-price"
                        className="py-2 collapse"
                        style={{ display: "none" }}
                    ></div>
                </div>
                <div className="section">
                    <ul className="nav align-items-center justify-content-between">
                        <li className="navbar-text left-side">
                            <a onClick={() => setstop(!stop)}>
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
                                Stops
                            </a>
                        </li>
                        <li className="navbar-text right-side">
                            <a href="#">Clear</a>
                        </li>
                    </ul>
                    <Collapse in={stop} timeout="auto" unmountOnExit>
                        <div className="py-2 ">
                            <ul className="nav align-items-center stops">
                                <li onClick={() => changeStop(1)} className="navbar-text col-4 px-1">
                                    <div className={`custom-control custom-radio custom-stops ${stops.includes(1) ? 'active' : ''}`}>
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__87"
                                        >
                                            Non Stop
                                        </label>
                                    </div>
                                </li>
                                <li onClick={() => changeStop(2)} className="navbar-text col-4 px-1">
                                    <div className={`custom-control custom-radio custom-stops ${stops.includes(2) ? 'active' : ''}`}>
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__88"
                                        >
                                            One Stop
                                        </label>
                                    </div>
                                </li>
                                <li onClick={() => changeStop(3)} className="navbar-text col-4 px-1">
                                    <div className={`custom-control custom-radio custom-stops ${stops.includes(3) ? 'active' : ''}`}>
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__89"
                                        >
                                            Two Stop
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                </div>
                <div className="section">
                    <ul className="nav align-items-center justify-content-between">
                        <li className="navbar-text left-side">
                            <a
                                onClick={() => setflight(!flight)}
                                target="_self"
                                aria-expanded="false"
                                aria-controls="collapse-myFlights"
                                style={{ overflowAnchor: "none" }}
                            >
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
                                From Locations
                            </a>
                        </li>
                        <li className="navbar-text right-side">
                            <a href="#" target="_self" className="">
                                Clear
                            </a>
                        </li>
                    </ul>
                    <Collapse in={flight} timeout="auto" unmountOnExit>
                        <ul className="nav align-items-center stops">
                            {!loading && Object.keys(listing.fromLocations).map((key, index) => (
                                <li onClick={() => changeFromLocation(key)} className="navbar-text col-4 px-1">
                                    <div className={`custom-control custom-radio custom-stops ${fromLocation.includes(key) ? 'active' : ''}`}>
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__87"
                                        >
                                            {key} - {listing.fromLocations[key].name}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
                <div className="section">
                    <ul className="nav align-items-center justify-content-between">
                        <li className="navbar-text left-side">
                            <a
                                onClick={() => setflight1(!flight1)}
                                target="_self"
                                aria-expanded="false"
                                aria-controls="collapse-myFlights"
                                style={{ overflowAnchor: "none" }}
                            >
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
                                To Locations
                            </a>
                        </li>
                        <li className="navbar-text right-side">
                            <a href="#" target="_self" className="">
                                Clear
                            </a>
                        </li>
                    </ul>
                    <Collapse in={flight1} timeout="auto" unmountOnExit>
                        <ul className="nav align-items-center stops">
                            {!loading && Object.keys(listing.toLocations).map((key, index) => (
                                <li onClick={() => changeToLocation(key)} className="navbar-text col-4 px-1">
                                    <div className={`custom-control custom-radio custom-stops ${toLocation.includes(key) ? 'active' : ''}`}>
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__87"
                                        >
                                            {key} - {listing.toLocations[key].name}
                                        </label>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
                {/* <div className="section">
                    <ul className="nav align-items-center justify-content-between">
                        <li className="navbar-text left-side">
                            <a
                                href="#"
                                target="_self"
                                className="collapsed"
                                aria-expanded="false"
                                aria-controls="collapse-onward"
                                style={{ overflowAnchor: "none" }}
                            >
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
                                Onward Timings
                            </a>
                        </li>{" "}
                        <li className="navbar-text right-side">
                            <a href="#" target="_self" className="">
                                Clear
                            </a>
                        </li>
                    </ul>{" "}
                    <div
                        id="collapse-onward"
                        className="py-2 collapse"
                        style={{ display: "none" }}
                    ></div>
                </div>
                <div className="section">
                    <ul className="nav align-items-center justify-content-between">
                        <li className="navbar-text left-side">
                            <a
                                onClick={() => setnear(!near)}
                                target="_self"
                                className="collapsed"
                                aria-expanded="false"
                                aria-controls="collapse-nearby"
                                style={{ overflowAnchor: "none" }}
                            >
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
                                Near By Airports
                            </a>
                        </li>
                        <li className="navbar-text right-side">
                            <a href="#" target="_self" className="">
                                Clear
                            </a>
                        </li>
                    </ul>
                    <Collapse in={near} timeout="auto" unmountOnExit>
                        <div className="py-2">
                            <ul className="nav nearby flex-column">
                                <li className="navbar-text w-100">
                                    <div className="custom-control custom-radio">
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__106"
                                        >
                                            <div className="txtEclipse">
                                                <strong>XNB</strong>-
                                                <span>Dubai Bus Station</span>
                                            </div>
                                            <span className="prTag">
                                                <span>SAR</span> 1043
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="navbar-text w-100">
                                    <div className="custom-control custom-radio">
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__107"
                                        >
                                            <div className="txtEclipse">
                                                <strong>XNB</strong>-
                                                <span>Dubai Bus Station</span>
                                            </div>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                </div>

                <div className="section">
                    <ul className="nav align-items-center justify-content-between">
                        <li className="navbar-text left-side">
                            <a
                                onClick={() => setairline(!airline)}
                                target="_self"
                                className="not-collapsed"
                                aria-expanded="true"
                                aria-controls="collapse-airlines"
                                style={{ overflowAnchor: "none" }}
                            >
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
                                Airlines
                            </a>
                        </li>
                        <li className="navbar-text right-side">
                            <a href="#" target="_self" className="">
                                Clear
                            </a>
                        </li>
                    </ul>
                    <Collapse in={airline} timeout="auto" unmountOnExit>
                        <div
                            id="collapse-airlines"
                            className="py-2 collapse show"
                        >
                            <ul className="nav align-items-center airlines">
                                <li className="navbar-text col-4">
                                    <div className="custom-control custom-radio">
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__113"
                                        >
                                            <Box component="img" src='static/img/skyteam_logo_alliance.de63944.png' className="img-fluid" />
                                        </label>
                                    </div>
                                </li>
                                <li className="navbar-text col-4">
                                    <div className="custom-control custom-radio">
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__114"
                                        >
                                            <Box component="img" src='static/img/star_alliance_logo.48b4392.png' className="img-fluid" />
                                        </label>
                                    </div>
                                </li>
                                <li className="navbar-text col-4">
                                    <div className="custom-control custom-radio">
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__115"
                                        >
                                            <Box component="img" src='static/img/oneworld_logo.0f887b6.png' className="img-fluid" />
                                        </label>
                                    </div>
                                </li>
                            </ul>
                            <ul className="nav airline-tag flex-column">
                                <li className="navbar-text w-100">
                                    <div className="custom-control custom-radio">
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__116"
                                        >
                                            <div className="txtEclipse">
                                                <span className="airline-img">
                                                    <Box component="img" src='static/img/BA.76faad2.png' className="img-fluid" />
                                                </span>{" "}
                                                <span>Britsh Airways</span>
                                            </div>
                                            <span className="prTag">
                                                <span>SAR</span> 1043
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li className="navbar-text w-100">
                                    <div className="custom-control custom-radio">
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__117"
                                        >
                                            <div className="txtEclipse">
                                                <span className="airline-img">
                                                    <Box component="img" src='static/img/PK.8288519.png' className="img-fluid" />
                                                </span>{" "}
                                                <span>Pakistan International Airlines</span>
                                            </div>
                                            <span className="prTag">
                                                <span>SAR</span> 1043
                                            </span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                </div>
                <div className="section">
                    <ul className="nav align-items-center justify-content-between">
                        <li className="navbar-text left-side">
                            <a
                                onClick={() => setstopover(!stopover)}
                                target="_self"
                                className="collapsed"
                                aria-expanded="false"
                                aria-controls="collapse-nearby"
                                style={{ overflowAnchor: "none" }}
                            >
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
                                Stopover Airports
                            </a>
                        </li>
                        <li className="navbar-text right-side">
                            <a href="#" target="_self" className="">
                                Clear
                            </a>
                        </li>
                    </ul>
                    <Collapse in={stopover} timeout="auto" unmountOnExit>
                        <div id="collapse-stopover" className="py-2 ">
                            <ul className="nav nearby flex-column">
                                <li className="navbar-text w-100">
                                    <div className="custom-control custom-radio">
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__123"
                                        >
                                            <div className="txtEclipse">
                                                Jinnah International Airport
                                            </div>
                                            <span className="Tag">(KHI)</span>
                                        </label>
                                    </div>
                                </li>
                                <li className="navbar-text w-100">
                                    <div className="custom-control custom-radio">
                                        <label
                                            className="custom-control-label"
                                            htmlFor="__BVID__124"
                                        >
                                            <div className="txtEclipse">
                                                Hamad International Airport
                                            </div>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Collapse>
                </div> */}
            </div>
        </aside>
    )
}
