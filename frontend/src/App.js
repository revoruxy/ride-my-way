import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signin from "./components/signin";

import "./App.css";

function App() {
  return (
    <div>
      <Signin />
    </div>
  );
}

export default App;
