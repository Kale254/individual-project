import React from "react";
import "./styles.css";

const myStyle ={
 
    bottom: "0",
    width: "100%",
}
export const Faq = () => {
  return (
    <div className="faq-page">
      <section className="faq-section">
        <h1 className="page-title">Frequently Asked Questions</h1>

        <details className="faq-card">
          <summary>Price</summary>
          <div className="faq-content">
            <p>Our prices vary based on the rental option you choose:</p>
            <ul>
              <li>Kitchen + Small Meeting Area: $150 per day</li>
              <li>Hall: $250 per day</li>
              <li>Entire Facility: $350 per day</li>
            </ul>
          </div>
        </details>

        <details className="faq-card">
          <summary>Area / Footage</summary>
          <div className="faq-content">
            <p>Here are the details about the area and footage of our rentals:</p>
            <ul>
              <li>Kitchen + Small Meeting Area: 300 sqft</li>
              <li>Great Hall: 1200 sqft</li>
              <li>Entire Facility: 1,500 sqft</li>
              <li>The community center can be rented in 2 becuase of divider between the kitchen/hall.</li>
            </ul>
          </div>
        </details>

        <details className="faq-card">
          <summary>Henderson Info</summary>
          <div className="faq-content">
            <p>Henderson, NE, is a charming town with about 1,000 people!</p>
            <p>Henderson is known for its strong Mennonite heritage!</p>
            <p>There is currently only 1 restaurant open Fridays and Saturdays.</p>
            <p>
              For more information about Henderson, you can visit the official{" "}
              <a href="https://www.cityofhenderson.org" target="_blank" rel="noopener noreferrer">
                town website.
              </a>.
            </p>
          </div>
        </details>

        <details className="faq-card">
          <summary>Warnings & Policies</summary>
          <div className="faq-content">
            <p>We are not liable for any injuries that may happen on our property due to negligence.</p>
            <p>After reservation is submitted, please give us at least 24 hours to respond to completely.</p>
            <p>Smoking/drinking is not allowed on or near the premises.</p>
            <p>Please don't bring any animals to the community center. Service animals are allowed.</p>
            <p>
              Please clean the community center. We love our community center and want it to be in the same shape as when you arrived.
            </p>
          </div>
        </details>

        <details className="faq-card">
          <summary>Other</summary>
          <div className="faq-content">
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>Payment Terms: Payment is due in person via check or cash.</li>
              <li>Cancellation Policy: Please contact us for details.</li>
              <li>Hall Includes: 5 large tables, 40 Folding chairs, 2 TVs and restrooms.</li>
              <li>
                Kitchen Includes: 1 large table, 8 Folding chairs, sink, dishwasher, fridge, plethora of utensils and restrooms.
              </li>
              <li>Time is for reservation is all day (we allow you to get there at 6 am until 11:59 pm).</li>
            </ul>
          </div>
        </details>
      </section>

      <footer className="footer" style={{marginTop: "330px", position: "relative"}}>
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
