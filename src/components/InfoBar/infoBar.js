import React from "react";

import "./infoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>Room: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a id="close" href="/">
        X
      </a>
    </div>
  </div>
);

export default InfoBar;
