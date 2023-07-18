import Restaurants from "./Restaurants.js";
import Sidemenu from "./Sidemenu.js";
import Recp from "./Recp.js";
import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details.js";
import Signup from "./Signup.js";
import Login from "./Login.js";
//const express = require("express");
//var app = express();
export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Restaurants />
          </Route>
          <Route exact path="/">
            <Details />
          </Route>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
