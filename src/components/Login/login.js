import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import InfoIcon from "@material-ui/icons/Info";

export default function Login() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="loginOuterContainer">
      <div className="loginInnerContainer">
        <h1 className="heading">Messenger</h1>
        <div className="inputspace">
          <div className="tooltip">
            <InfoIcon />
            <span class="tooltiptext">
              Tooltip text Tooltip text Tooltip text Tooltip text Tooltip text
              Tooltip text Tooltip textTooltip textTooltip text
            </span>
          </div>
          <input
            placeholder="Create a username..."
            className="loginInput"
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputspace">
          <div className="tooltip">
            <InfoIcon />
            <span class="tooltiptext">
              Tooltip text Tooltip text Tooltip text Tooltip text Tooltip text
              Tooltip text Tooltip textTooltip textTooltip text
            </span>
          </div>
          <input
            placeholder="Create/join a room..."
            className="loginInput"
            required
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button"} type="submit">
            Chat Now
          </button>
        </Link>
        <p className="footer">Created by Tejas Cousik</p>
      </div>
    </div>
  );
}
