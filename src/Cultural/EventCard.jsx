import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

const EventCard = ({ eventName, venue, details, contact }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{eventName}</h5>
        <Button
          variant="link"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-controls="event-details"
          aria-expanded={isExpanded}
        >
          {isExpanded ? '▲' : '▼'}
        </Button>
      </Card.Header>
      <Collapse in={isExpanded}>
        <div id="event-details">
          <Card.Body>
            <p><strong>Venue:</strong> {venue}</p>
            <p><strong>Details:</strong> {details}</p>
            <p><strong>Contact:</strong> {contact}</p>
          </Card.Body>
        </div>
      </Collapse>
    </Card>
  );
};

export default EventCard;
