import React, { useEffect, useRef, useState } from 'react';
import './index.css'; // Add your styles in this file
import { Link } from "react-router-dom";
import OjusLogo from '../assets/logo.ico';
import drc from '../assets/dark_rider-character.webp';
import drtitle from '../assets/dark_rider-title.png';
import frcover from '../assets/force_mage-cover.jpg';
import frc from '../assets/force_mage-character.webp';
import frtitle from '../assets/force_mage-title.png';
import img from '../assets/img.jpg';
import video from '../assets/nfs2.mp4';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

const Index = () => {
  const [activeSlider, setActiveSlider] = useState(3);
  const page2Ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('https://res.cloudinary.com/dyhby7bo9/video/upload/v1735339641/u5sbqiadvdhqs4u34tey.mp4');

  const handleSliderClick = (index) => {
    setActiveSlider(index);
  };

  const sliderData = [
    { name: 'Mike', title: 'web3 Developer', img: img },
    { name: 'Samite', title: 'WordPress Developer', img: img },
    { name: 'Hashi', title: 'Java Developer', img: img },
    { name: 'Kaity', title: 'Web Developer', img: img },
    { name: 'Lauren', title: 'PHP Developer', img: img },
    { name: 'Ryan', title: 'SEO Developer', img: img },
    { name: 'Dakes', title: 'SQL Developer', img: img },
  ];

  const changeVideoSource = () => {
    setVideoSrc('anotherMovie.mp4'); // Change to another video source
  };

  return (
    <div id="main">
    <Link to="/cultural">Cultural</Link>
      <div id="nav1">
        <img src={OjusLogo} width="90" height="90" alt="Ojus Logo" />

        {/* Buttons for Larger Screens */}
        <div className="nav-buttons">
          <button className="button">
            <div className="dots_border" />
            <Link to="/council">
              <span className="text_button">Council</span>
            </Link>
          </button>
          <button className="button">
            <div className="dots_border" />
            <Link to="/heads">
              <span className="text_button">Heads</span>
            </Link>
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Full-Screen Sliding Menu for Mobile */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <button className="button">
            <div className="dots_border" />
            <Link to="/council">
              <span className="text_button">Council</span>
            </Link>
          </button>
          <button className="button">
            <div className="dots_border" />
            <Link to="/heads">
              <span className="text_button">Heads</span>
            </Link>
          </button>
        </div>
      </div>

      <div id="page1">
        <div className="container">
          <div className="image">
            <a href="/sports">
              <div className="card">
                <div className="wrapper">
                  <img
                    src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735038815/ehfckugkipz3tf8lrqmt.png"
                    className="cover-image"
                    alt="Dark Rider Cover"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div id="video-container" style={{ position: 'relative', width: '100%', height: 'auto' }}>
        <video
          width="100%" // Make video responsive
          height="auto"
          controls
          autoPlay
          loop
          muted
          style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} // Make sure the video stays in the background
        >
          <source src={videoSrc}/>
          Your browser does not support the video tag.
        </video>
      </div>

      <div id="page3">
        <MDBContainer fluid style={{ padding: '80px' }}>
          <MDBRow>
            {/* Column 1 */}
            <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046560/OJUSPHOTOS/og0pjwvdvxyexv1i7d6s.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
              <img
                src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046558/OJUSPHOTOS/xlnaenmf6qjww2kbekz8.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </MDBCol>

            {/* Column 2 */}
            <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046553/OJUSPHOTOS/mi3xvd1i9frvbna10rsk.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />
              <img
                src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735043375/OJUSPHOTOS/wp6ctwtgewbvwa3ntozw.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </MDBCol>

            {/* Column 3 */}
            <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
              <img
                src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046549/OJUSPHOTOS/djwmsxqi2syeykafoq8o.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />
              <img
                src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735046740/OJUSPHOTOS/o23zbmisbgyq92puzmj1.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <footer className="footer">
        <div className="text-center p-3">
          <h7 className="text-body">
            OJUS WebDev 2k25❤️
          </h7>
        </div>
      </footer>
    </div>
  );
};

export default Index;
