import React, { useState } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';

const Events = () => {
  const [selectedDay, setSelectedDay] = useState('day1');

  return (
    <div className="event-tabs">
      <div className="tabs">
        {['day1', 'day2', 'day3', 'day4', 'day5'].map((day) => (
          <button
            key={day}
            className={`tab ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="image-container">
        {selectedDay === 'day1' && (
          <div>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735193837/a8jeesmnhdycou6bhpmu.svg" alt="Cricket" />
            </Link>
            
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146420/Sports%20Cards/lldkmjsutrbia6yrq7pn.png" alt="Tug of War" />
            </Link>
          </div>
        )}
        {selectedDay === 'day2' && (
          <div>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146420/Sports%20Cards/ovq0bges1np1dnca897p.png" alt="Football(Boys)" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146453/Sports%20Cards/ytdxxgtwlkwefw8sxcto.png" alt="Dodgeball(Girls)" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146447/Sports%20Cards/nvoqitpvxgv7ix9zsrgp.png" alt="Volleyball(Boys)" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146451/Sports%20Cards/l5z7ffh94kp6ag9estzq.png" alt="Tug of War(Girls)" />
            </Link>
          </div>
        )}
        {selectedDay === 'day3' && (
          <div>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146456/Sports%20Cards/t1rh4f3nvfo4fbrcuotf.png" alt="Kabbadi" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146427/Sports%20Cards/o1kme3ejcdfedhnkyjfx.png" alt="Box-Cricket(Girls)" />
            </Link>
          </div>
        )}
        {selectedDay === 'day4' && (
          <div>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146411/Sports%20Cards/n56tjenpoane6i52u2vk.png" alt="Badminton" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146430/Sports%20Cards/ha7skdj9mrrfh1gujwei.png" alt="Table Tennis" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146427/Sports%20Cards/drwfi7s3dmhjwyypgz3w.png" alt="Chess" />
            </Link>
          </div>
        )}
        {selectedDay === 'day5' && (
          <div>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146430/Sports%20Cards/duztbixbj8tgdmnhxfw8.png" alt="Carrom" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146420/Sports%20Cards/lldkmjsutrbia6yrq7pn.png" alt="Box Cricket (boys)" />
            </Link>
            <Link to="/box-cricket">
              <img src="https://res.cloudinary.com/dyhby7bo9/image/upload/v1735146437/Sports%20Cards/jcxlnfqmtiq1tocx0pxz.png" alt="Throwball (girls)" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
