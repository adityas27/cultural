import React, { useState } from "react";
import { Tabs, Tab, Modal, Button, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1739779441/DSC00807_efbecr.jpg",
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1739779443/IMG_0035_w25ehi.jpg",
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1739779455/PPV06764_qblmyb.jpg",
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1739779461/IMG_20240226_204227_cpgii6.jpg",
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1739779459/IMG_0008_ebh1ii.jpg",
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1739779468/IMG_20240226_135545_lbml3o.jpg",
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1739779461/IMG_20240226_204227_cpgii6.jpg",
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1739779474/PPV06583_osumag.jpg",
  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1739779468/IMG_20240226_135545_lbml3o.jpg"
];

export default function App() {
  const [key, setKey] = useState("Day 1");
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <Container fluid className="gallery-container">
      <h2 className="text-center mb-4">Masonry Gallery</h2>

      {/* Tabs */}
      <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" fill>
        {["Day 1", "Day 2", "Day 3", "Ghanekar"].map((tab) => (
          <Tab eventKey={tab} title={tab.toUpperCase()} key={tab}>
            <div className="masonry-grid">
              {images.map((img, index) => (
                <div key={index} className={`grid-item item-${index % 4 + 1}`}>
                  <Image src={img} fluid onClick={() => handleShow(img)} className="gallery-thumbnail" />
                </div>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>

      {/* Lightbox Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="d-flex justify-content-center">
          <Image src={selectedImage} fluid className="modal-image" />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* CSS Styles */}
      <style>
        {`
          .gallery-container {
            height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }

          .masonry-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            grid-auto-rows: 100px;
            gap: 10px;
            width: 90%;
            height: 100%;
          }

          .grid-item {
            overflow: hidden;
            border-radius: 10px;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .gallery-thumbnail {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
          }

          .grid-item:hover {
            transform: scale(1.05);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          }

          .item-1 { grid-row: span 2; }
          .item-2 { grid-row: span 1; }
          .item-3 { grid-row: span 3; }
          .item-4 { grid-row: span 2; }

          @media (max-width: 768px) {
            .masonry-grid {
              grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            }
          }
        `}
      </style>
    </Container>
  );
}
