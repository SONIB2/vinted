import React from "react";
import "./Home.css"; // Ensure to link the updated CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="top-bar">
          <span>ALBANIA | CUSTOMER CARE</span>
          <div className="auth-buttons">
            <button className="btn">Register</button>
            <button className="btn btn-black">Login</button>
          </div>
        </div>

        <div className="nav-bar">
          <h1 className="logo">YOOX</h1>
          <p className="shop-fashion">SHOP FASHION / DESIGN+ART</p>
        </div>
      </header>

      <main className="main-content">
        <div className="categories">
          <div className="category">
            <img src="woman.jpg" alt="Woman" className="category-img" />
            <p className="category-name">WOMAN</p>
            <button className="btn btn-outline">[ VIEW MORE ]</button>
          </div>
          <div className="category">
            <img src="man.jpg" alt="Man" className="category-img" />
            <p className="category-name">MAN</p>
            <button className="btn btn-outline">[ VIEW MORE ]</button>
          </div>
          <div className="category">
            <img src="kids.jpg" alt="Kids" className="category-img" />
            <p className="category-name">KIDS</p>
            <button className="btn btn-outline">[ VIEW MORE ]</button>
          </div>
          <div className="category">
            <img src="design-art.jpg" alt="Design & Art" className="category-img" />
            <p className="category-name">DESIGN+ART</p>
            <button className="btn btn-outline">[ VIEW MORE ]</button>
          </div>
        </div>

        <section className="newsletter">
          <h3>YOOX NEWS</h3>
          <p>Sign up for the newsletter and discover the latest arrivals and promotions</p>
          <label htmlFor="email">Insert your e-mail address</label>
          <input type="email" id="email" placeholder="Insert your e-mail address" className="input" />
          <div className="gender-selection">
            <label htmlFor="gender-woman"><input type="radio" id="gender-woman" name="gender" value="woman" /> Woman</label>
            <label htmlFor="gender-man"><input type="radio" id="gender-man" name="gender" value="man" /> Man</label>
          </div>
          <label htmlFor="privacy" className="privacy-label">
            <input type="checkbox" id="privacy" name="privacy" value="consent" />
            I consent to receive YOOX newsletters via email. For further information, please consult the Privacy Policy.
          </label>
          <button className="btn btn-black">Sign Up</button>
        </section>
      </main>

      <footer className="footer">
        <nav className="footer-links">
          <div className="footer-column">
            <h5>NEW TO YOOX</h5>
            <ul>
              <li>Shopping Guide</li>
              <li>iPhone/iPad/Android</li>
              <li>Browse all Designers</li>
              <li>Browse all Categories</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>HELP</h5>
            <ul>
              <li>Shipping Times & Costs</li>
              <li>Payments and Web Security</li>
              <li>Product Quality</li>
              <li>Track Your Order</li>
              <li>Returns & Refunds</li>
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
        </nav>

        <div className="connect">
          <p>CONNECT WITH US</p>
          <div className="social-media-icons">
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
            <a href="#" aria-label="TikTok"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>

        <div className="app-download">
          <p>DOWNLOAD THE APP FOR iOS / ANDROID</p>
          <div className="app-icons">
            <a href="#" aria-label="Download on the App Store"><FontAwesomeIcon icon={faApple} /></a>
            <a href="#" aria-label="Get it on Google Play"><FontAwesomeIcon icon={faAndroid} /></a>
          </div>
        </div>

        <div className="legal">
          <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT &copy; 2000-2024 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/1/526</p>
          <p><a href="#">LEGAL AREA</a> / <a href="#">PRIVACY POLICY</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
