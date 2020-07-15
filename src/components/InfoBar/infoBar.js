import React from "react";
import { Link } from "react-router-dom";
import "./infoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3 className="room">Room: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <Link to="/">
        <button id="close">Leave Room</button>
      </Link>
    </div>
  </div>
);

export default InfoBar;
