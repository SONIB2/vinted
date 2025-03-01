import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="language-currency">
          <span>ALBANA</span>
          <span>Customer Care</span>
        </div>
        <div className="auth-links">
          <button>Register</button>
          <button>Login</button>
        </div>
      </header>

      <div className="main-content">
        <div className="categories">
          <div className="category">
            <img src="woman.jpg" alt="Woman" />
            <p>Women</p>
            <button>[ View More ]</button>
          </div>
          <div className="category">
            <img src="man.jpg" alt="Men" />
            <p>Men</p>
            <button>[ View More ]</button>
          </div>
          <div className="category">
            <img src="kids.jpg" alt="Kids" />
            <p>Kids</p>
            <button>[ View More ]</button>
          </div>
          <div className="category">
            <img src="design-art.jpg" alt="Design & Art" />
            <p>Design & Art</p>
            <button>[ View More ]</button>
          </div>
        </div>

        <div className="newsletter">
          <h3>YOOX NEWS</h3>
          <p>Sign up for the newsletter and discover the latest arrivals and promotions</p>
          <input type="email" placeholder="INSERT YOUR E-MAIL ADDRESS" />
          <div className="gender-selection">
            <label>
              <input type="radio" name="gender" /> Woman
            </label>
            <label>
              <input type="radio" name="gender" /> Man
            </label>
          </div>
          <button>Sign Up</button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <div>
            <h5>NEW TO YOOX</h5>
            <ul>
              <li>Shopping Guide</li>
              <li>iPhone/iPad/Android</li>
              <li>Browse All Designers</li>
              <li>Browse All Categories</li>
            </ul>
          </div>
          <div>
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
          <div>
            <h5>MYOOX</h5>
            <ul>
              <li>Login</li>
              <li>My Orders</li>
              <li>My Details</li>
              <li>Dream Box</li>
              <li>Premiere</li>
            </ul>
          </div>
          <div>
            <h5>ABOUT US</h5>
            <ul>
              <li>Company Info</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        <div className="connect">
          <p>CONNECT WITH US</p>
          <div className="social-media-icons">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Pinterest</span>
            <span>TikTok</span>
          </div>
        </div>

        <div className="app-download">
          <p>DOWNLOAD THE APP FOR iOS / ANDROID</p>
        </div>

        <div className="legal">
          <p>
            POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2024 YOOX NET-A-PORTER GROUP S.P.A.
            ALL RIGHTS RESERVED - SALE LICENSE # 469/1526
          </p>
          <p>
            LEGAL AREA | PRIVACY POLICY
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
