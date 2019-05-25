import React from "react";
import Profile from "../image/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="back">
      <div className="logo">
        <img src={Profile} />
      </div>
      <h3>SignUp</h3>

      <form>
        <div className="sign">
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="sign">
          <input type="text" placeholder="E-mail" />
        </div>
        <div className="sign">
          <input type="text" placeholder="Phone number" />
        </div>

        <div className="sign">
          <input type="password" placeholder="Password" />
        </div>
        <div className="btnlogin">
          <input type="submit" value="Signup" />
        </div>
        <div className="msg">
          <h5>
            Already have an Account <a href="index.html">Signin</a>
          </h5>
        </div>
      </form>
    </div>
  );
};
export default Signup;
