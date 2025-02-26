import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Sports.css';
const SportsCard = ({ title, image, description }) => {
  return (
    <Card className="sport-card">
      <Card.Img variant="top" src={image} alt={`${title} image`} className="sport-card-img" />
      <Card.Body className="sport-card-body">
        <Card.Title className="sport-card-title">{title}</Card.Title>
        <Card.Text className="sport-card-text">{description}</Card.Text>
        {/* <Button variant="primary" className="sport-card-button">Learn More</Button> */}
      </Card.Body>
    </Card>
  );
};

export default SportsCard;
