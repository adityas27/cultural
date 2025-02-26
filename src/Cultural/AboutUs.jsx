import React from "react";
import awtlogo from "../assets/atwlogo.png"; 
import "./AboutsUs.css";

const AboutOjus = () => {
  const highlights = [
    "🎭 Mesmerizing Drama Performances",
    "💃 Electrifying Dance Battles",
    "🎵 Soulful Music Concerts",
    "🎤 Stand-Up & Open Mic",
    "🎨 Art & Creativity Workshops",
    "🎯 Fun Games & Activities",
    "🎮 Gaming & Esports Challenges",
    "🎊 Carnival & Adventure Stalls",
  ];

  return (
    <div className="about-ojus">
      <div className="ojus-card">
        {/* OJUS Logo */}
        <img src={awtlogo} alt="OJUS Logo" className="ojus-logo" />

        {/* Title */}
        <h1 className="ojus-title">OJUS</h1>
        <h2 className="ojus-subtitle">A Celebration of Culture, Art & Fun!</h2>

        {/* Description */}
        <p className="ojus-description">
          OJUS is the <strong>ultimate cultural fest</strong> of A. P. Shah Institute of Technology, where the worlds of <strong>drama, dance, and music</strong> come alive. But that’s not all – <strong>thrilling games, fun activities, and interactive experiences</strong> make it an unforgettable event for all!
        </p>

        {/* Highlights Section */}
        <h2 className="ojus-highlights-title">Experience the Magic of OJUS</h2>

        <div className="ojus-highlights">
          {highlights.map((item, index) => (
            <div key={index} className="ojus-highlight-box">
              {item}
            </div>
          ))}
        </div>

        {/* Event Details */}
        <p className="ojus-event-details">
          📅 Date: [Event Date] | 📍 Venue: A. P. Shah Institute of Technology, Thane
        </p>
      </div>
    </div>
  );
};

export default AboutOjus;
