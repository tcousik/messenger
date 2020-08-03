import React from "react";
import { Link } from "react-router-dom";
import "./infoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftContainer">
      <div className="room">
        Room: {room}
        <span className="hoverText">
          Share the room name to chat with friends
        </span>
      </div>
    </div>
    <div className="rightContainer">
      <Link to="/">
        <button id="close">Leave Room</button>
      </Link>
    </div>
  </div>
);

export default InfoBar;
