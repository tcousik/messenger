import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="loginOuterContainer">
      <div className="loginInnerContainer">
        <h1 className="heading">Log In</h1>
        <div>
          <input
            placeholder="Name"
            className="loginInput"
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
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
      </div>
    </div>
  );
}
