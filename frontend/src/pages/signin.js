import React from "react";
import Profile from "../image/logo.png";
import { Link } from "react-router-dom";
import "../css/style.css";

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
            <Link to="/profile">
              <input type="submit" value="Login" />
            </Link>
          </div>
          <div className="msg">
            <h5>
              Do have an account? No: <Link to="/signup">Signup here</Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
