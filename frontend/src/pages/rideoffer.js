import React from "react";
import Profile from "../image/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/offer.css";
import Heading from "../components/heading";

const Rideoffer = () => {
  return (
    <div>
      <div className="map">
        <Heading />
        <br />
        <div className="map1">
          <input type="text" placeholder="where to" />
        </div>
      </div>
    </div>
  );
};
export default Rideoffer;
