import React from "react";
import "./Profile.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="profile-avatar" />
        <p className="profile-name">{username}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="stats-list">
        <li className="profile-item">
          <span className="profile-label">Followers</span>
          <span className="profile-quantity">{stats.followers}</span>
        </li>
        <li className="profile-item">
          <span className="profile-label">Views</span>
          <span className="profile-quantity">{stats.views}</span>
        </li>
        <li className="profile-item">
          <span className="profile-label">Likes</span>
          <span className="profile-quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;