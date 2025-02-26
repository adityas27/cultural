import React, { useRef, useState, useEffect } from "react";
import Song from '../assets/calm.mp3'
import './Music.css';
import icon from '../assets/music.png'
import icon2 from '../assets/musicon.png'
const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Attempt to play music when the component mounts
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio playback started.");
          })
          .catch((error) => {
            console.warn("Autoplay prevented. User interaction required:", error);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} autoPlay loop>
        <source src={Song} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button class="rounded-square-button" onClick={togglePlay}>
        {isPlaying ? <img src={icon2} width={35}/> : <img src={icon} width={35}/> }
      </button>
    </div>
  );
};

export default Music;
