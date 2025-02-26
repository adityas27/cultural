import React, { useState } from "react";
import heaven from "../assets/heaven1.mp4";
import earth from "../assets/earth.mp4";
import hell from "../assets/hell.mp4"; 
import HeroSection from "./HeroSection";

const events = ["Event 1", "Event 2", "Event 3", "Event 4", "Event 5"];

const EventCard = ({ title }) => (
  <div style={{
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '15px',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    // background: '#111',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer'
  }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <h5 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>{title}</h5>
    <button style={{
      marginRight: '10px',
      padding: '10px 15px',
      backgroundColor: '#ff5722',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }}>Register</button>
    <button style={{
      padding: '10px 15px',
      backgroundColor: '#2196f3',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      cursor: 'pointer'
    }}>View Details</button>
  </div>
);

const EventSection = ({ title, videoSrc }) => (
  <div style={{
    position: 'relative',
    padding: '40px 20px',
    marginBottom: '0',
    color: 'white'
  }}>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '-1'
    }}>
      <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
    <h3 style={{ textAlign: 'center', position: 'relative', zIndex: '1', fontSize: '2rem', fontWeight: 'bold' }}>{title}</h3>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      justifyContent: 'center',
      position: 'relative',
      zIndex: '1'
    }}>
      {events.map((event, idx) => (
        <div key={idx} style={{ flex: '1 1 calc(33.333% - 15px)', minWidth: '200px' }}>
          <EventCard title={event} />
        </div>
      ))}
    </div>
    <div style={{
      width: '100%',
      height: '80px',
    }}></div>
  </div>
);

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("day1");

  return (
    <div style={{ position: 'relative', padding: '20px' }}>
      <HeroSection />
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setActiveTab("day1")} style={{ padding: '10px', backgroundColor: activeTab === "day1" ? '#007bff' : '#6c757d', color: 'white', border: 'none', borderRadius: '5px' }}>Day 1</button>
        <button onClick={() => setActiveTab("day2")} style={{ padding: '10px', backgroundColor: activeTab === "day2" ? '#007bff' : '#6c757d', color: 'white', border: 'none', borderRadius: '5px' }}>Day 2</button>
      </div>
      {activeTab === "day1" && (
        <>
          <EventSection title="Heaven" videoSrc={heaven} />
          <EventSection title="Earth" videoSrc={earth} />
          <EventSection title="Hell" videoSrc={hell} />
        </>
      )}
      {activeTab === "day2" && (
        <>
          <EventSection title="Heaven" videoSrc={heaven} />
          <EventSection title="Earth" videoSrc={earth} />
          <EventSection title="Hell" videoSrc={hell} />
        </>
      )}
    </div>
  );
};

export default EventsPage;
