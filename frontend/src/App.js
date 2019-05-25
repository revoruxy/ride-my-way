import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Ridehistory from "./components/ridehistory";
import Rideoffer from "./components/rideoffer";

import "./App.css";

function App() {
  return (
    <Route>
      <div>
        <Rideoffer />
      </div>
    </Route>
  );
}

export default App;
