import React from "react";
import "./message.css";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="sentContainer">
      <div className="sentBox">
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="receivedContainer">
      <div></div>
      <div className="receivedBox">
        <p id="username">{user.charAt(0).toUpperCase() + user.slice(1)}</p>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;
