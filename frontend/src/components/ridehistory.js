import React from "react";
import Profile from "../image/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Ridehistory = () => {
  return (
    <div>
      <h2>My Ride History</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>From</th>
          <th>To</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>17-may-2019</td>
          <td>17:00</td>
          <td>Victory</td>
          <td>Tegeta</td>
          <td>10,000Tsh</td>
          <td>
            <a href="">Given Ride</a>
          </td>
        </tr>
        <tr>
          <td>12-may-2019</td>
          <td>11:00</td>
          <td>Victory</td>
          <td>Tegeta</td>
          <td>8,000Tsh</td>
          <td>
            <a href="">Offer Ride</a>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Ridehistory;
