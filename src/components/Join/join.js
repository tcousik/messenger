import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="joinInput"
            type="text"
          ></input>
        </div>
        <div>
          <input
            placeholder="Room"
            onChange={(e) => setRoom(e.target.value)}
            className="joinInput mt-20"
            type="text"
          ></input>
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Join;
