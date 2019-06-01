import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Ridehistory from "./pages/ridehistory";
import Rideoffer from "./pages/rideoffer";
//import Profile from "./components/profile";

import "./App.css";
import Heading from "./components/heading";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={Signup} />
      <Route path="/ridehistory" component={Ridehistory} />
      <Route path="/rideoffer" component={Rideoffer} />
    </Switch>
  );
}

export default App;
