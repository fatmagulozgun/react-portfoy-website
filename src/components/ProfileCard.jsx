import React from "react";
import './ProfileCard.css';

const ProfileCard = () => (
    <div className="profile-card">
        <img src="/profile.jpg" alt="Fatmagül Özgün" className="profile-img" />
        <h1 className="profile-name">Fatmagül Özgün</h1>
        <h2 className="profile-title">Yazılım Mühendisliği</h2>
        <div className="profile-socials">
            <a href="https://github.com/fatmagulozgun" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/fatmagul-ozgun/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="profile-contact">
            <span>+90 537-768-6747</span>
        </div>
    </div>
);

export default ProfileCard;
