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
      <div>{user.charAt(0).toUpperCase() + user.slice(1)}</div>
      <div className="receivedBox">{ReactEmoji.emojify(text)}</div>
    </div>
  );
};

export default Message;
