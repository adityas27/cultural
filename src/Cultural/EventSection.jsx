import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const EventSection = () => {
  const navigate = useNavigate();

  const handleDayClick = (dayId) => {
    navigate(`/day/${dayId}`);
  };

  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button 
            variant="primary" 
            size="lg" 
            className="fw-bold px-4 py-2" 
            onClick={() => handleDayClick(1)}
          >
            Explore Day 1
          </Button>
        </Col>
        <Col xs="auto">
          <Button 
            variant="primary" 
            size="lg" 
            className="fw-bold px-4 py-2" 
            onClick={() => handleDayClick(2)}
          >
            Explore Day 2
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EventSection;
