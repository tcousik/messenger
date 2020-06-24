import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Chat from "./components/Chat/chat";

const App = () => (
  <Router>
    <Route path="/" exact component={Login}></Route>
    <Route path="/chat" component={Chat}></Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
