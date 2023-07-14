import React from "react";

const FriendList = ({friendsData}) => {
  return (
    <ul className="friend-list">
      {friendsData.map((friend) => (
        <li className="item" key={friend.id}>
          <span className={`status ${friend.isOnline ? 'online' : 'offline'}`}></span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;