import React from "react";

export default function Tripsummery({ flight }) {
  function formatName(key) {
    switch (key) {
      case 'ADT':
        return 'Adult'
      case 'CNN':
        return 'Childern'
      case 'INF':
        return 'Infant'
    }
  }
  return (
    <>
      <aside>
        <div>
          <h4>Trip Summary</h4>
        </div>
        {/* <div className="onwords">

          <div className="dest">
            <span className="from">
              {" "}
              <FlightTakeoffIcon sx={{ color: "#4D6F93" }} /> Lahore
            </span>{" "}
            - <span>Dubai</span>
          </div>
          <div>
            <span className="date">Sat, 24 Oct 2020</span>{" "}
            <span className="time">12:20</span>
          </div>
          <div className="ticket">1 Ticket : One Way</div>
        </div> */}
        <ul className="nav aside-table">

          {Object.keys(flight.passengerCounts).map(key =>
            <li className="navbar-text travellerFare">
              <span
                role="button"
                tabIndex="0"
                aria-expanded="false"
                style={{ overflowAnchor: "none" }}
              >
                Traveller {flight.passengerCounts[key]}: <span className="me-1">{formatName(key)}</span>
              </span>
              <span>
                {flight.passengerFares[key].totalPrice}
              </span>
            </li>
          )}

          <ul className="nav totalFare w-100">
            {/* <li className="navbar-text">
              <span>Other Fee</span>{" "}
              <span>
                SAR{" "}
                <label className="priceTag">
                  <em>638</em> <em className="decimel">.85</em>
                </label>
              </span>
            </li> */}
            <li className="navbar-text">
              <span style={{ display: "flex" }}>
                VAT
              </span>{" "}
              <span>
                {flight.taxes}
              </span>
            </li>
            <li className="navbar-text">
              <span>Total</span>{" "}
              <span>
                {flight.totalPrice}
              </span>
            </li>
            {/* <li className="navbar-text">
              <small>Taxes and fees included</small>
            </li> */}
          </ul>
        </ul>
      </aside>
    </>
  );
}
