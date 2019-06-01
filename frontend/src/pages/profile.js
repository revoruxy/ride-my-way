import React from "react";
import { Link } from "react-router-dom";
import "../css/profile.css";
import Avatar from "../image/img_avatar.jpg";
import Heading from "../components/heading";

const Profile = () => {
  return (
    <div>
      <div className="nuluz">
        <Heading />
        <div className="barh" />
        <div className="pict">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="mainj">
          <div>Ride History</div>
          <div>50</div>
          <div>
            <Link to="/ridehistory">View Ride History</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
