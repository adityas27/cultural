import React, { useState, useEffect, useRef } from 'react';
import './Profile.css';
import profile from "../assets/profile.png"

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    console.log("Dropdown toggled:", !isOpen); // Check if the toggle is being triggered
    setIsOpen(!isOpen);
  };

  // Close the dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      {/* Profile Icon */}
      <div className="profile-icon" onClick={toggleDropdown}>
        <img src={profile} alt="Profile" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
