import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
const Heading = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/profile" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/ridehistory">View History</Link>
        </li>
        <li>
          <Link to="rideoffer">Offer Ride</Link>
        </li>
        <li style={{ float: "right" }}>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
    </div>
  );
};
export default Heading;
