import React from 'react';
import { motion } from 'framer-motion';
import hells from '../assets/hell.mp4';
import heaven1 from '../assets/hell.mp4';
import earth from '../assets/hell.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';

const Day2Events = () => {
  const events = [
    {
      id: 1,
      title: 'Murder Mystery',
      description: 'Step into a realm of divine beauty and serenity.',
      background: hells,
      theme: 'heaven',
      details: ['Live performances by celestial choirs', 'Interactive light displays'],
      subEvents: [
        { title: 'Murder Mystery', description: 'Solve puzzles and uncover secrets.', venue: 'Room 308', contact: '63940563', head: 'Lucky' },
      ],
    },
    {
      id: 2,
      title: 'Infernal Inferno',
      description: 'Descend into the fiery depths of hell.',
      background: earth,
      theme: 'hell',
      details: ['Live heavy metal performances', 'Fire dancers and pyrotechnics'],
      subEvents: [
        { title: 'Demon’s Symphony', description: 'A dark symphony.', venue: 'Hellfire Hall', contact: '66666666', head: 'Lucifer' },
      ],
    },
  ];

  return (
    <div className="container-fluid px-0">
      {events.map((event) => (
        <motion.div
          key={event.id}
          className="position-relative py-5 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Video */}
          <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
            <video autoPlay loop muted className="w-100 h-100 object-fit-cover">
              <source src={event.background} type="video/mp4" />
            </video>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          </div>

          {/* Content */}
          <div className="position-relative container py-5">
            <h2 className="display-4 fw-bold mb-3">{event.title}</h2>
            <p className="lead mb-4">{event.description}</p>

            <ul className="list-unstyled mb-4">
              {event.details.map((detail, i) => (
                <li key={i} className="d-flex align-items-center justify-content-center">
                  <span className="me-2">✔️</span>{detail}
                </li>
              ))}
            </ul>
            <button className="btn btn-light px-4 py-2 fw-bold">Register</button>

            {/* Sub Events */}
            <div className="row mt-5">
              {event.subEvents.map((sub, index) => (
                <motion.div
                  key={index}
                  className="col-md-4 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card text-dark bg-light shadow-sm p-3 h-100">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{sub.title}</h5>
                      <p className="card-text">{sub.description}</p>
                      <ul className="list-unstyled">
                        <li><strong>Venue:</strong> {sub.venue}</li>
                        <li><strong>Contact:</strong> {sub.contact}</li>
                        <li><strong>Head:</strong> {sub.head}</li>
                      </ul>
                    </div>
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

export default Day2Events;
