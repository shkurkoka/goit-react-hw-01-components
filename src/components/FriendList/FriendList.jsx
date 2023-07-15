import React from "react";
import "./Friends.css"

const FriendList = ({friendsData}) => {
  return (
    <ul className="friend-list">
      {friendsData.map((friend) => (
        <li className="friend-item" key={friend.id}>
          <span className={`status ${friend.isOnline ? 'online' : 'offline'}`}></span>
          <img className="friend-avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="friend-name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;