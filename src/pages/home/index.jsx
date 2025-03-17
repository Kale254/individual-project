import React from "react";
import "./styles.css";
import henderson from "./henderson.jpg";

export const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Henderson, NE!</h1>
          <button>Explore Our Rentals</button>
        </div>
        <div className="hero-image">
          <img src={henderson} alt="Loading" />
        </div>
      </section>

      {/* Rentals Section */}
      <section id="rentals" className="rentals">
        <h2>Rental Options</h2>
        <div className="rental-overview">
          <div className="rental-card">
            <h3>Kitchen</h3>
            <p>1,000 sqft, 10 tables, 50 chairs</p>
            <p>$250 / day</p>
          </div>
          <div className="rental-card">
            <h3>Hall</h3>
            <p>500 sqft, 5 tables, 20 chairs</p>
            <p>$150 / day</p>
          </div>
          <div className="rental-card">
            <h3>Both</h3>
            <p>1,500 sqft, 15 tables, 70 chairs</p>
            <p>$350 / day</p>
          </div>
        </div>
      </section>

      {/* Policies and FAQ Section */}
      <section id="policies" className="policies">
        <h2>Policies and FAQ</h2>
        <p>Brief overview of policies</p>
        <a href="/faq">View Full FAQ</a>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Contact Us</p>
        <p><a href="https://x.com/wetjenkale/">Twitter</a></p>
        <p><a href="https://instagram.com/2kale3/">Instagram</a></p>
        <p>Email: kdwetjen@icloud.com</p>
      </footer>
    </div>
  );
};
