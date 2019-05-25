import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signin from "./components/signin";
import Signup from "./components/signup";

import "./App.css";

function App() {
  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;
