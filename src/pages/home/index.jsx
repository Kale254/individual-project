import React from "react";
import "./styles.css";
import henderson from "./henderson.jpg";
import { Link } from 'react-router-dom';

const myStyle = {
  bottom: "0"
}

export const Home = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Henderson's Community Center!</h1>
          <h5>"Some bigger, none better!"</h5>
        </div>
        <div className="hero-image">
          <img src={henderson} alt="Loading" />
        </div>
      </section>

      <section id="rentals" className="rentals">
        <h2>Rental Options</h2>
        <div className="rental-overview">
          <div className="rental-card">
            <h3>Kitchen & Meeting Area</h3>
            <p>$150 / day</p>
          </div>
          <div className="rental-card">
            <h3>Great Hall</h3>
            <p>$250 / day</p>
          </div>
          <div className="rental-card">
            <h3>Entire Rental</h3>
            <p>$350 / day</p>
          </div>
        </div>
      </section>

      <section id="policies" className="policies">
        <h2>Policies and FAQ?</h2>
        <p>Go to our FAQ page by clicking <Link to="/faq">FAQ</Link></p>
        
      </section>

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
