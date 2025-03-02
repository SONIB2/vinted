import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import video23 from '../components/images/23.mp4';
import video17 from '../components/images/17.mp4';
import image19 from '../components/images/19.jpg';
import imageart1 from '../components/images/art1.jpg';
import imageart2 from '../components/images/art2.jpg';
import imageart3 from '../components/images/art3.jpg';
import imageart4 from '../components/images/art4.jpg';
import './Woman.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    "Clothing", "Shoes", "Bags & Accessories", "VIEW ALL",
    "LATEST ARRIVALS", "THIS WEEK", "TOP DESIGNERS", "UNIQUE FINDS"
  ];

  const carouselItems = [
    { type: 'video', src: video23, text: "Discover Our Collection" },
    { type: 'image', src: image19 },
    { type: 'video', src: video17 }
  ];

  const footerSections = [
    { title: "NEW TO YOOX", links: ["Shopping Guide", "Browse All Designers"] },
    { title: "HELP", links: ["Delivery & Costs", "Returns & Refunds"] }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">YOOX</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}><a href="#">{item}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Carousel */}
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={4000} showArrows>
        {carouselItems.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {slide.type === 'image' ? (
              <img src={slide.src} alt={slide.text} />
            ) : (
              <video autoPlay loop muted playsInline>
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {slide.text && <p className="legend">{slide.text}</p>}
          </div>
        ))}
      </Carousel>

      {/* New Arrivals Section */}
     
    <div className="new-arrivals">
      <h2>NEW ARRIVALS</h2>
      <a href="#" className="view-all-arrow">VIEW ALL</a>
      <div className="products">
        <div className="product">
          <img src={imageart1} alt="Product 1" />
          <h3>VALENTINO GARAVANI</h3>
          <p>High-waist belt</p>
          <span>€ 443</span>
        </div>
        <div className="product">
          <img src={imageart2} alt="Product 2" />
          <h3>KARL LAGERFELD</h3>
          <p>Denim trousers</p>
          <span>€ 161</span>
        </div>
        <div className="product">
          <img src={imageart3} alt="Product 3" />
          <h3>MISSONI</h3>
          <p>Casual trousers</p>
          <span>€ 537</span>
        </div>
        <div className="product">
          <img src={imageart4} alt="Product 4" />
          <h3>GUCCI</h3>
          <p>Leather shoes</p>
          <span>€ 899</span>
        </div>
      </div>
      <button className="arrow-button">&rarr;</button>
    </div>
    
      {/* Footer */}
      <footer className="footer">
        <div className="footer-sections">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div className="footer-section">
            <h3>YOOX NEWS</h3>
            <input type="email" placeholder="Insert your e-mail address" />
            <button>SIGN UP</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;