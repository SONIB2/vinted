import React, { useState } from 'react';
import womanImage1 from '../components/images/16.jpg'; // Main image
import image11 from '../components/images/11.jpg'; // Product 1 image
import image14 from '../components/images/12.jpg'; // Product 2 image
import image15 from '../components/images/13.jpg'; // Product 3 image
import './Woman.css';

const Woman = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productImages = [image11, image14, image15];
  const productNames = ["VALENTINO GARAVANI", "KARL LAGERFELD", "MISSONI"];
  const productDescriptions = ["High-waist belt", "Denim trousers", "Casual trouser"];
  const productPrices = ["€ 443", "€ 161", "€ 537"];

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="woman-container">
      <div className="image-container">
        <img src={womanImage1} alt="New Arrival" />
      </div>
      <div className="text-container">
        <h1>NEW & NOW</h1>
        <p>Check out the latest arrivals</p>
        <a href="/discover-all" className="discover-link">DISCOVER ALL</a>
      </div>

      {/* New Arrivals Section */}
      <div className="new-arrivals">
        <h2>NEW ARRIVALS</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={productImages[currentIndex]} alt="Product" />
            <h3>{productNames[currentIndex]}</h3>
            <p>{productDescriptions[currentIndex]}</p>
            <p className="price">{productPrices[currentIndex]}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="carousel-controls">
          <button className="prev" onClick={prevProduct}>❮</button>
          <button className="next" onClick={nextProduct}>❯</button>
        </div>

        <a href="/view-all" className="view-all">VIEW ALL</a>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>NEW TO YOOX</h4>
            <ul>
              <li>Shopping guide</li>
              <li>iPhone/iPad/Android</li>
              <li>Browse all Designers</li>
              <li>Browse all Categories</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>HELP</h4>
            <ul>
              <li>Delivery times & costs</li>
              <li>Payments and web security</li>
              <li>Product quality</li>
              <li>View your order</li>
              <li>Returns & refunds</li>
              <li>FAQs</li>
              <li>Size Guide</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h4>YOOX NEWS</h4>
            <p>Sign up for the newsletter and discover the latest arrivals and promotions</p>
            <input type="email" placeholder="Insert your e-mail address" />
            <div className="gender-options">
              <label><input type="radio" name="gender" /> Woman</label>
              <label><input type="radio" name="gender" /> Man</label>
            </div>
            <div className="consent">
              <input type="checkbox" /> <span>I consent to receive YOOX newsletters via email.</span>
            </div>
            <button className="signup-btn">SIGN UP</button>
          </div>
          <div className="footer-section">
            <h4>MYOOX</h4>
            <ul>
              <li>Login</li>
              <li>My Orders</li>
              <li>My Details</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>ABOUT US</h4>
            <ul>
              <li>Company Info</li>
              <li>Press</li>
              <li>Affiliation</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Woman;
