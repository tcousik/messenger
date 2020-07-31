import React from "react";
import { Link } from "react-router-dom";
import "./infoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <div className="room">
        Room: {room}
        <span className="hoverText">aaaa</span>
      </div>
    </div>
    <div className="rightInnerContainer">
      <Link to="/">
        <button id="close">Leave Room</button>
      </Link>
    </div>
  </div>
);

export default InfoBar;
