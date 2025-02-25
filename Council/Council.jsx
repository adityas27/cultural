import React, { useEffect, useState, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import './Council.css'; // assuming heads.css is in your src folder
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Council = () => {
    
  const [tab, setTab] = useState(0); // Tracks the active tab

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // ScrollReveal animations
    ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400
    });
    ScrollReveal().reveal('h2', { delay: 100, origin: 'top' });
    ScrollReveal().reveal('#team', { delay: 500, origin: 'bottom' });
  }, []);

  // Tab content for each year
  const tabsContent = [
    {
      year: '2024',
      members: [
        { name: 'Razzaq Shikalgar', role: 'President', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Ansh Chavan', role: 'General Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png' },
        
      ],
      members1: [
        { name: 'Dravesh Jain', role: 'Cultural Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Richa Thanekar', role: 'Ladies Representative', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Dhurv Sawant', role: 'Sports Representative', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
      ],
      members2: [
        { name: 'Harsh Borge', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Ankit Chavan', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Shlok Kute', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Yogini Yadav', role: 'Joint Cultural Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ],
      members3: [
        { name: 'Aditya Dandavate', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Saniya Dopavkar', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Nishigandha Sawant', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Hitesh Dubey', role: 'Joint Sports Secretary', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ]
    },
    {
      year: '2023',
      members: [
        { name: 'Aarav Gupta', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Ishita Sharma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        
      ],
      members1: [
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Rohan Mehta', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Rohan Mehta', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ],
      members2: [
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ],
      members3: [
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ]
    },
    {
      year: '2022',
      members: [
        { name: 'Samaira Khan', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Kabir Singh', role: 'Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        
      ],
      members1: [
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
        { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ],
      members2: [
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ],
      members3: [
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Dravesh Jain', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png' },
        { name: 'Ananya Verma', role: 'Co-Head', image: 'https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png' },
      ]
    },
  ];

  return (
    <div>
      {/* Navigation */}
      
      {/* Tabs Navigation */}
      <div className="tabs">
        {tabsContent.map((tabItem, index) => (
          <button
            key={index}
            className={`tab-button ${tab === index ? 'active' : ''}`}
            onClick={() => setTab(index)}
          >
            {tabItem.year}
          </button>
        ))}
      </div>

      {/* Team Section */}
      <section id="team">
        {tabsContent[tab].members.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      
      <section id="team">
        {tabsContent[tab].members1.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      <section id="team">
        {tabsContent[tab].members2.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      <section id="team">
        {tabsContent[tab].members3.map((member, index) => (
          <div className="team-box" key={index}>
            <div className="t-b-img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="t-b-text">
              <strong>{member.name}</strong>
              <strong>{member.role}</strong>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <section className="madeWithLove">
        <h5>
          Made with ❤️ by <a href="/team">Ojus Webdev</a>
        </h5>
      </section>

      {/* Scroll to top button */}
      <div onClick={scrollToTop} className="scrollTop">
        <i className="fa-solid fa-arrow-up"></i>
      </div>
      
    </div>
    
  );
};

export default Council;
