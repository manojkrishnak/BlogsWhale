import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import NoMatch from "./components/NoMatch";
import PrivateHomePage from "./components/PrivateHomePage";
import IndividualArticle from "./components/IndividualArticle";


ReactDOM.render(
  <BrowserRouter>
      <Header />
    <Switch>      
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
      <Route path="/private">
        <PrivateHomePage />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
