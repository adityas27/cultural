import React from "react";
import "./Ghanekar.css"; 

const ComingSoon = () => {
  return (
    <div className="schedule-container">
    <div className="waviy">
      {"COMING SOON".split("").map((char, index) => (
        <span key={index} style={{ "--i": index + 1 }}>
          {char}
        </span>
      ))}
    </div>
    </div>
  );
};

export default ComingSoon;
