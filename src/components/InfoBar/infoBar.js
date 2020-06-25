import React from "react";

import "./infoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>Room: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <button id="close">
        <a id="x" href="/">
          X
        </a>
      </button>
    </div>
  </div>
);

export default InfoBar;
