import React from "react";
import Signin from "./account";
export default function Bookingprocess() {
  return (
    <div>
      <div className="content-wrapper" >
        <ul className="nav sign-in-section" >
          <li className="navbar-text right-side" >
            <div className="lock" >
              <span
                name="lock-alt"
                fill="#fff"
                className="unicon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M12,13a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V14A1,1,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path>
                </svg>
              </span>
            </div>
            <h4 >
              Sign in to speed up your booking process
              <span >You will earn 39 Rewards Points</span>
            </h4>
          </li>
          <li className="navbar-text signdetail " >
            <Signin />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
