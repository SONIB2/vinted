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
        <div className="footer-content">
          <div className="footer-section">
            <h3>NEW TO YOOX</h3>
            <ul>
              <li><a href="#">Shopping guide</a></li>
              <li><a href="#">iPhone/iPad/Android</a></li>
              <li><a href="#">Browse all Designers</a></li>
              <li><a href="#">Browse all Categories</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>HELP</h3>
            <ul>
              <li><a href="#">Delivery times & costs</a></li>
              <li><a href="#">Payments and web security</a></li>
              <li><a href="#">Product quality</a></li>
              <li><a href="#">View your order</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>MYOOX</h3>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">My Orders</a></li>
              <li><a href="#">My Details</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>ABOUT US</h3>
            <ul>
              <li><a href="#">Company Info</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Affiliation</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <img src={footerLogo} alt="Footer Logo" />
          <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Woman;