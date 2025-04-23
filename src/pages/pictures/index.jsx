import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import download1 from "./download1.jpg";
import download from "./download.jpg";
import images from "./images.png";
import download4 from "./download4.jpg";
import download5 from "./download5.jpg";
import images4 from "./images4.jpg";

const myStyle = {
    bottom: "0",
    position: "relative"
  }

const imageData = [
  { src: download, alt: "Aerial view of Henderson" },
  { src: download1, alt: "Henderson Welcomes You" },
  { src: images, alt: "Henderson on a map" },
  { src: download4, alt: "Beautiful view of Henderson's outskirts" },
  { src: download5, alt: "Heritage Park" },
  { src: images4, alt: "City Hall & Water Tower" },
];

export const Pictures = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {imageData.map((img, idx) => (
          <div
            className="gallery-item"
            key={idx}
            tabIndex={0}
            aria-label={`Open image: ${img.alt}`}
            onClick={() => openLightbox(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openLightbox(idx);
            }}
          >
            <img src={img.src} alt={img.alt} className="gallery-img" />
            <div className="gallery-caption">{img.alt}</div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox} tabIndex={-1}>
          <button className="lightbox-close" aria-label="Close" onClick={closeLightbox}>
            &times;
          </button>
          <button className="lightbox-nav left" aria-label="Previous" onClick={prevImage}>
            &#8592;
          </button>
          <img
            src={imageData[lightboxIndex].src}
            alt={imageData[lightboxIndex].alt}
            className="lightbox-img"
          />
          <button className="lightbox-nav right" aria-label="Next" onClick={nextImage}>
            &#8594;
          </button>
          <div className="lightbox-caption">{imageData[lightboxIndex].alt}</div>
        </div>
      )}

    <footer className="footer" style={{position: "relative"}}>
        <div className="footer-content" style={myStyle}>
          <p>Contact Us</p>
          <p>
            <a href="https://x.com/wetjenkale/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>{" "}
            |{" "}
            <a href="https://instagram.com/2kale3/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a href="mailto:kdwetjen@icloud.com">kdwetjen@icloud.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};
