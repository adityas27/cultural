import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import hells from '../assets/hells.mp4';
import heaven1 from '../assets/heaven1.mp4';
import earth from '../assets/earth.mp4';

const EventPage = () => {
  const events = [
    {
      id: 1,
      title: 'Heavenly Harmony',
      description:
        'Step into a realm of divine beauty and serenity. Experience the ethereal sounds of angelic choirs, glowing lights, and a peaceful atmosphere that will transport you to the heavens.',
      background: hells,
      textColor: 'text-white',
      theme: 'heaven',
      details: [
        'Live performances by celestial choirs',
        'Interactive light displays',
      ],
      subEvents: [
        { title: 'Angel Melodies', description: 'A soft musical performance by angelic choirs.' },
        { title: 'Halo Glow', description: 'Interactive glowing light installations.' },
        { title: 'Divine Yoga', description: 'Relaxing guided yoga session in divine ambiance.' },
        { title: 'Stairway to Peace', description: 'A journey through ethereal stairways.' },
        { title: 'Celestial Feasts', description: 'Heavenly cuisine with divine flavors.' },
      ],
    },
    {
      id: 2,
      title: 'Infernal Inferno',
      description:
        'Descend into the fiery depths of hell. Feel the heat, hear the roars, and witness the chaos of a night filled with dark energy, intense music, and unforgettable experiences.',
      background: earth,
      textColor: 'text-white',
      theme: 'hell',
      details: [
        'Live heavy metal performances',
        'Fire dancers and pyrotechnics',
      ],
      subEvents: [
        { title: 'Demon’s Symphony', description: 'A dark symphony with hellish tunes.' },
        { title: 'Infernal Flames', description: 'Mesmerizing fire dance performances.' },
        { title: 'Labyrinth of Shadows', description: 'An eerie maze of lost souls.' },
        { title: 'The Devil’s Feast', description: 'Sinfully delicious gourmet food.' },
        { title: 'Echoes of the Damned', description: 'Horror storytelling session.' },
      ],
    },
    {
      id: 3,
      title: 'Infernal Inferno',
      description:
        'Descend into the fiery depths of hell. Feel the heat, hear the roars, and witness the chaos of a night filled with dark energy, intense music, and unforgettable experiences.',
      background: heaven1,
      textColor: 'text-white',
      theme: 'hell',
      details: [
        'Live heavy metal performances',
        'Fire dancers and pyrotechnics',
      ],
      subEvents: [
        { title: 'Demon’s Symphony', description: 'A dark symphony with hellish tunes.' },
        { title: 'Infernal Flames', description: 'Mesmerizing fire dance performances.' },
        { title: 'Labyrinth of Shadows', description: 'An eerie maze of lost souls.' },
        { title: 'The Devil’s Feast', description: 'Sinfully delicious gourmet food.' },
        { title: 'Echoes of the Damned', description: 'Horror storytelling session.' },
      ],
    },
  ];

  return (
    <Container fluid>
      {events.map((event) => (
        <motion.div
          key={event.id}
          className="position-relative py-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100">
            <video autoPlay loop muted className="w-100 h-100 object-fit-cover">
              <source src={event.background} type="video/mp4" />
            </video>
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          </div>
          <Container className="position-relative text-center text-white">
            <h2 className="display-4 fw-bold mb-4">{event.title}</h2>
            <p className="lead mb-4">{event.description}</p>
            <ul className="list-unstyled mb-4">
              {event.details.map((detail, i) => (
                <li key={i} className="mb-2">✔️ {detail}</li>
              ))}
            </ul>
            <Button variant="light" size="lg" className="fw-bold px-4 py-2">Register</Button>
            <Row className="mt-5 g-4">
              {event.subEvents.map((sub, index) => (
                <Col md={6} lg={4} key={index}>
                  <motion.div
                    className="p-4 bg-white bg-opacity-25 rounded shadow text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold mb-2">{sub.title}</h4>
                    <p>{sub.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </motion.div>
      ))}
    </Container>
  );
};

export default EventPage;
