import React from 'react';
import { motion } from 'framer-motion';
import hells from '../assets/hell.mp4';
import heaven1 from '../assets/hell.mp4';
import earth from '../assets/hell.mp4';

const Day1Events = () => {
  const events = [
    {
      id: 1,
      title: 'Heavenly Harmony',
      description:
        'Step into a realm of divine beauty and serenity. Experience the ethereal sounds of angelic choirs, glowing lights, and a peaceful atmosphere that will transport you to the heavens.',
      background: hells,
      theme: 'heaven',
      details: [
        'Live performances by celestial choirs',
        'Interactive light displays',
      ],
      subEvents: [
        {
          title: 'Murder Mystery',
          description: 'A thrilling murder mystery event where you solve puzzles and uncover secrets.',
          venue: 'Room 308',
          contact: '63940563',
          head: 'Lucky',
        },
        {
          title: 'Angel Melodies',
          description: 'A soft musical performance by angelic choirs.',
          venue: 'Main Hall',
          contact: '12345678',
          head: 'Angelina',
        },
      ],
    },
    {
      id: 2,
      title: 'Infernal Inferno',
      description:
        'Descend into the fiery depths of hell. Feel the heat, hear the roars, and witness the chaos of a night filled with dark energy, intense music, and unforgettable experiences.',
      background: earth,
      theme: 'hell',
      details: [
        'Live heavy metal performances',
        'Fire dancers and pyrotechnics',
      ],
      subEvents: [
        {
          title: 'Demon’s Symphony',
          description: 'A dark symphony with hellish tunes.',
          venue: 'Hellfire Hall',
          contact: '66666666',
          head: 'Lucifer',
        },
      ],
    },
  ];

  return (
    <div className="container py-5">
      {events.map((event) => (
        <motion.div
          key={event.id}
          className="position-relative py-5 text-center text-light"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
            <video autoPlay loop muted className="w-100 h-100 object-fit-cover">
              <source src={event.background} type="video/mp4" />
            </video>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          </div>

          <div className="position-relative z-1 container">
            <h2 className="display-4 fw-bold mb-4">{event.title}</h2>
            <p className="lead mb-4">{event.description}</p>

            <ul className="list-unstyled mb-4">
              {event.details.map((detail, i) => (
                <li key={i} className="d-flex align-items-center">
                  <span className="me-2">✔️</span>
                  {detail}
                </li>
              ))}
            </ul>
            <button className="btn btn-light fw-bold px-4 py-2">Register</button>

            <div className="row mt-4">
              {event.subEvents.map((sub, index) => (
                <motion.div
                  key={index}
                  className="col-md-6 col-lg-4 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="card bg-dark text-light border-light p-3">
                    <h3 className="h5">{sub.title}</h3>
                    <p>{sub.description}</p>
                    <p><strong>Venue:</strong> {sub.venue}</p>
                    <p><strong>Contact:</strong> {sub.contact}</p>
                    <p><strong>Head:</strong> {sub.head}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Day1Events;
