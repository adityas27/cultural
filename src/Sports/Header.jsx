import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/logo.ico"
import "./Header.css";
import DropdownMenu from "./Profile";

import { Link } from "react-router-dom";

const images = [
  { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699274/OJUSPHOTOS/gftwej7iyf5d5eq64oqj.jpg", title: "Cricket", subtitle: "Sportsmanship" },
  { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699275/OJUSPHOTOS/qirhfbnkzjxfzaktkqf8.jpg", title: "Volleyball", subtitle: "Design" },
  
  { src: "https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699271/OJUSPHOTOS/upw4qeu1z02da72p41gn.jpg", title: "Football", subtitle: "Design" },
  
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handlers for navigation
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const currentSlide = (index) => {
    setActiveIndex(index);
  };


  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
    <div id="home">
      <header>
        <Image src={logo} width={90} height={90} style={{ marginTop: "50px" }} />
        
       
        <div
        className={`hamburger1 ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Full-Screen Sliding Menu */}
      <ul className={`menu1 ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      </header>

      {/* Slider Section */}
      <div className="slider">
        <div className="list">
          {images.map((image, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
            >
              <img src={image.src} alt={image.title} />
             
            </div>
          ))}
        </div>
<div className="Trophy">
  <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1734699280/OJUSPHOTOS/plsv5rvxqvjltqtslsvl.png"></img>
</div>
        <div className="arrows">
          <button onClick={handlePrev} className="prev">
            {"<"}
          </button>
          <button onClick={handleNext} className="next">
            {">"}
          </button>
        </div>

        <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>

        
      </div>
      </div>
    </>
  );
};

export default HeroSection;
