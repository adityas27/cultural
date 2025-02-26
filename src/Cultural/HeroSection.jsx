import React from 'react';
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-primary text-white py-5">
    <Navbar />
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold">
              Before they sold out
              <br className="d-none d-lg-block" /> readymade gluten
            </h1>
            <p className="lead">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. 
              Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <button className="btn btn-primary btn-lg">Button</button>
              <button className="btn btn-light btn-lg text-dark">Button</button>
            </div>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img 
              src="https://dummyimage.com/720x600" 
              alt="hero" 
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
