import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import IndividualArticle from "./Components/IndividualArticle";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/signin">
      <Signin />
    </Route>
    <Route path="/signup">
    <Signup />
    </Route>
    <Route path="/article/:slug">
    <IndividualArticle />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
