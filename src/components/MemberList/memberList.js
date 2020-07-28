import React from "react";

import "./memberList.css";

const MemberList = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <div id="title">
          <h2>Members</h2>
        </div>
        <div className="memberSpace">
          <h3>
            {users.map(({ name }) => (
              <div key={name} className="member">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </div>
            ))}
          </h3>
        </div>
      </div>
    ) : null}
  </div>
);

export default MemberList;
