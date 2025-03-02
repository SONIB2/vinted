import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext';  // Saktësimi i importit të CartProvider
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import Newsletter from './components/Newsletter';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Cart from './components/cart';
import Woman from './components/Woman';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure FontAwesomeIcon is imported
import { faPersonPregnant, faPersonRays, faPersonRifle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Updated imports for social icons

// Import images
import womanImage from "./components/images/1.jpg";
import menImage from "./components/images/2.jpg";
import kidsImage from "./components/images/3.jpg";
import designImage from "./components/images/4.jpg";

// Komponenti Kryesor - Home Page
const Home = () => {
  return (
    <div className="home"> 
      <header className="header">
        {/* Header Content */}
      </header>

      {/* Kategoritë */}
      <div className="main-content">
        <div className="categories">
          <CategoryCard title="WOMEN" image={womanImage} viewMore={true} />
          <CategoryCard title="MEN" image={menImage} viewMore={true} />
          <CategoryCard title="KIDS" image={kidsImage} viewMore={true} />
          <CategoryCard title="DESIGN+ART" image={designImage} viewMore={true} />
        </div>

        {/* Newsletter */}
        <Newsletter />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-columns">
            <div className="footer-column">
              <h5>NEW TO YOOX</h5>
              <ul>
                <li>Shopping guide</li>
                <li>iPhone/iPad/Android</li>
                <li>Browse all Designers</li>
                <li>Browse all Categories</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>HELP</h5>
              <ul>
                <li>Shipping times & costs</li>
                <li>Payments and web security</li>
                <li>Product quality</li>
                <li>Track your order</li>
                <li>Returns & refunds</li>
                <li>FAQs</li>
                <li>Size Guide</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>MYOOX</h5>
              <ul>
                <li>Login</li>
                <li>My Orders</li>
                <li>My Details</li>
                <li>Dream Box</li>
                <li>Premiere</li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>ABOUT US</h5>
              <ul>
                <li>Company Info</li>
                <li>Press</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="connect-us">
            <p>CONNECT WITH US</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="#" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
              <a href="#" aria-label="TikTok"><FontAwesomeIcon icon={faTiktok} /></a>
            </div>
          </div>

          <div className="download-app">
            <p><FontAwesomeIcon icon={faMobileAlt} /> DOWNLOAD THE APP FOR iOS / ANDROID</p>
          </div>

          <div className="legal">
            <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT &copy; 2000-2024 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/1/526</p>
            <p><a href="#">LEGAL AREA</a> / <a href="#">PRIVACY POLICY</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Komponenti kryesor i aplikacionit
const App = () => {
  return (
    <CartProvider>  {/* ✅ Mbështjellje e të gjithë aplikacionit me kontekstin e karrocës */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/women" element={<Woman />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
