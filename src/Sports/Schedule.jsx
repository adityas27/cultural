import React, { useState } from 'react';
import './Schedule.css';
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import running from "../assets/running.png";
import cricket from "../assets/cricket.png";
import Tugofwar from "../assets/Tugofwar.png";
import foot from "../assets/Foot.png";
import ball from "../assets/ball.png";
import volley from "../assets/volley.png";
import kabaddi from "../assets/kabaddi.png";
import cock from "../assets/cock.png";
import ping from "../assets/ping.png";
import chess from "../assets/chess.png";
import dodgeball from "../assets/dodgeball.png";
 // Make sure to create a corresponding CSS file

const Schedule = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [activeTab, setActiveTab] = useState(null); // Track the active tab

  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  };
  const eventData = [
    // Events for Tab 1 (e.g., Football)
    [
      { name: 'Overarm cricket(Boys)',image:cricket },
      { name: 'Tug-of-War(Boys)',image:Tugofwar },
   
    ],
    // Events for Tab 2 (e.g., Volleyball)
    [
      { name: 'Football', image:foot },
      { name: 'Throwball(Girls)',image:
        ball
       },
      { name: 'Volleyball(Boys)',image:volley },
      { name: 'Tug-Of-War', image:Tugofwar },
    ],
    // Events for Tab 3 (e.g., Basketball)
    [
      { name: 'Kabaddi',image:kabaddi },
      { name: 'Box Cricket(Girls)', image:cricket },
     
    ],
    // Events for Tab 4 (e.g., Cricket)
    [
      { name: 'Badminton(Boys & Girls)',image:cock },
      { name: 'Table Tennis(Boys & Girls)', image:ping },
      { name: 'Chess(Boys & Girls)',image:chess },
    
    ],
    // Events for Tab 5 (e.g., Tennis)
    [
      { name: 'Box Cricket(Boys)',image:cricket },
      { name: 'Dodgeball',image:dodgeball },
      
    ],
  ];
  const handleTabClick = (index) => {
    setActiveTab(index); // Set the clicked tab as active
  };
  const activeEvents = eventData[activeTab] || [];
  return (
    <div className='parent'>
      <div className='header'>
      
      <div className="schedule-text">
        <h1>SCHEDULE 2k25</h1>
      </div>
      
    </div>
   
      <div className="tabs-container">
        {['30 Dec', '31 Dec', '2 Jan', '3 Jan', '4 Jan'].map((tab, index) => (
          <div
            key={index}
            className={`tab1 ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
         {/* Event Cards for the Active Tab */}
         <div className="event-cards-container">
        {activeEvents.length > 0 ? (
          activeEvents.map((event, index) => (
            <div key={index} className="event-card">
            <img src={event.image} alt={event.name} />
              <h3>{event.name}</h3>
         
            </div>
          ))
        ) : (
          <p>No events available for this tab.</p>
        )}
      </div>
      

    </div>
    
  );
};

export default Schedule;
