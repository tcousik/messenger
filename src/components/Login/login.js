import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="loginOuterContainer">
      <div className="loginInnerContainer">
        <h1 className="heading">
          Welcome to Messenger. Create a username and a room to use the
          application.
        </h1>
        <div>
          <input
            placeholder="Create a username..."
            className="loginInput"
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Create/join a room..."
            className="loginInput mt-20"
            required
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            SUBMIT
          </button>
        </Link>
        <p className="footer">Created by Tejas Cousik</p>
      </div>
    </div>
  );
}
