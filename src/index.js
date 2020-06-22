import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join/join";
import Chat from "./components/Chat/chat";

const App = () => (
  <Router>
    <Route path="/" exact component={Join}></Route>
    <Route path="/chat" component={Chat}></Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
