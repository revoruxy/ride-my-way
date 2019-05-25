import React from "react";
import Profile from "../image/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <div className="back">
        <div className="logo">
          <img src={Profile} />
        </div>
        <h3>Signin</h3>
        <form>
          <div className="sign">
            <input type="text" placeholder="E-mail" />
          </div>
          <div className="sign">
            <input type="password" placeholder="Password" />
          </div>
          <div className="btnlogin">
            <input type="submit" value="Login" />
          </div>
          <div className="msg">
            <h5>
              Do have an account? No: <a href="signup.html">Signup here</a>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
