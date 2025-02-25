import React, { useEffect } from 'react';
import './Heads.css'; // assuming heads.css is in your src folder

const Heads = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

    // IntersectionObserver to highlight the nav items based on section visibility
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('#nav h2');
    const navArray = Array.from(navItems);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = navArray.findIndex(
            navItem => navItem.textContent === entry.target.dataset.section
          );
          if (index !== -1) {
            navArray.forEach((navItem, i) => {
              navItem.classList.toggle('active', i === index);
            });
          }
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div>
      {/* Navigation */}
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>

      {/* Team Section */}
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>

      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>
      <div id="nav">
        <center>
          <h2>Event Management</h2>
        </center>
      </div>
      <section id="team">
        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/krish_vrpnwb.png"
              alt="Krish Jaswal"
            />
          </div>
          <div className="t-b-text">
            <strong>Krish Jaswal</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330584/heads/miheet_shah_z22bpc.png"
              alt="Miheet Shah"
            />
          </div>
          <div className="t-b-text">
            <strong>Miheet Shah</strong>
            <span>Head</span>
          </div>
        </div>

        <div className="team-box">
          <div className="t-b-img">
            <img
              src="https://res.cloudinary.com/dkx1049fl/image/upload/v1707330583/heads/dravesh_t2wcfu.png"
              alt="Dravesh Jain"
            />
          </div>
          <div className="t-b-text">
            <strong>Dravesh Jain</strong>
            <span>Co-Head</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="madeWithLove">
        <h5>
          Made with ❤️ by <a href="/team">Ojus Webdev</a>
        </h5>
      </section>

      {/* Scroll to top button */}
      <div onClick={scrollToTop} className="scrollTop">
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default Heads;
