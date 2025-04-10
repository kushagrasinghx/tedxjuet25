import React from 'react';
import '../styles/ProfileCard.css';

function ProfileCard({ image, name, occupation }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-occupation">{occupation}</p>
    </div>
  );
}

export default ProfileCard;
