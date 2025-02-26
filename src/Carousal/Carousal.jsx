import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import './Carousal.css'

const Carousel = ({ images, timer = 2000 }) => {
  const [active, setActive] = useState(0); // Active slide index
  const $root = useRef(); // Ref for the carousel root

  const nextItem = useCallback(() => {
    if (!images || images.length === 0) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".item");

      const activeItem = items[active];
      const nextItem = items[active < images.length - 1 ? active + 1 : 0];

      // Animating the active slide out
      gsap.set(activeItem, { zIndex: 10 });
      gsap.to(activeItem, {
        y: "-100%",
        ease: "power3.inOut",
        duration: 1.5,
        onComplete: () => {
          gsap.set(activeItem, {
            y: "100%",
            zIndex: 0,
          });
          setActive((prevActive) => {
            let newActive = prevActive + 1;
            if (newActive >= images.length) newActive = 0;
            return newActive;
          });
        },
      });

      // Animating the next slide in
      gsap.fromTo(
        nextItem,
        { y: "60%", scale: 1.2, zIndex: 9 },
        { y: "0%", scale: 1, ease: "power3.inOut", duration: 1.5 }
      );
    }, $root);

    return () => {
      ctx.revert();
    };
  }, [active, images]);

  useEffect(() => {
    const autoPlay = setInterval(nextItem, timer);
    return () => clearInterval(autoPlay);
  }, [nextItem, timer]);

  return (
    <div className="carousel" ref={$root}>
      {images.map((image, i) => (
        <div
          className="item"
          key={i}
          style={{
            zIndex: images.length - i,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: `url(${image}) center/cover no-repeat`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Carousel;
