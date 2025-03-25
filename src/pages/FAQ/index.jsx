import React from "react";
import "./styles.css";

export const Faq = () => {
  return (
    <div className="faq-page">
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-card">
          <summary>Price</summary>
          <div className="faq-content">
            <p>Our prices vary based on the rental option you choose:</p>
            <ul>
              <li>Kitchen: $250 per day</li>
              <li>Hall: $150 per day</li>
              <li>Entire Facility: $350 per day</li>
            </ul>
          </div>
        </details>

        <details className="faq-card">
          <summary>Area / Footage</summary>
          <div className="faq-content">
            <p>Here are the details about the area and footage of our rentals:</p>
            <ul>
              <li>Kitchen: 1,000 sqft</li>
              <li>Hall: 500 sqft</li>
              <li>Entire Facility: 1,500 sqft</li>
            </ul>
          </div>
        </details>

        <details className="faq-card">
          <summary>Henderson Info</summary>
          <div className="faq-content">
            <p>Henderson, NE, is a charming town with a rich history and community events.</p>
            <p>For more information about Henderson, you can visit the official town website.</p>
          </div>
        </details>

        <details className="faq-card">
          <summary>Other</summary>
          <div className="faq-content">
            <p>Here are some additional details you might find helpful:</p>
            <ul style={{listStyle: "none"}}>
              <li>Payment Terms: Payment is due upon booking.</li>
              <li>Cancellation Policy: Please contact us for details.</li>
              <li>Facilities: Our facilities include tables, chairs, and basic amenities.</li>
            </ul>
          </div>
        </details>
      </section>
    </div>
  );
};
