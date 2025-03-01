import React from "react";
import "./Home.css";

const footerLinks = {
  "NEW TO YOOX": ["Shopping Guide", "iPhone/iPad/Android", "Browse All Designers", "Browse All Categories"],
  "HELP": ["Shipping Times & Costs", "Payments and Web Security", "Product Quality", "Track Your Order", "Returns & Refunds", "FAQs", "Size Guide"],
  "MYOOX": ["Login", "My Orders", "My Details", "Dream Box", "Premiere"],
  "ABOUT US": ["Company Info", "Press", "Careers"]
};

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="top-bar">
          <span>Malta | Customer Care</span>
        </div>
        <div className="nav-bar">
          <h1 className="logo">YOOX</h1>
          <nav className="nav-links">
            <a href="#">Women</a>
            <a href="#">Men</a>
            <a href="#">Kids</a>
            <a href="#">Design & Art</a>
          </nav>
          <div className="auth-buttons">
            <button className="btn">Register</button>
            <button className="btn btn-black">Login</button>
          </div>
        </div>
        <div className="sale-banner">
          <p>SALE: NOW UP TO 60% OFF</p>
          <span>LOTS OF NEW ITEMS ADDED &gt;</span>
        </div>
      </header>

      <main className="main-content">
        <div className="categories">
          {["woman.jpg", "man.jpg", "kids.jpg", "design-art.jpg"].map((img, index) => (
            <div className="category" key={index}>
              <img src={img} alt={`Category - ${img.split(".")[0].replace("-", " & ")}`} className="category-img" />
              <p className="category-name">{img.split(".")[0].replace("-", " & ")}</p>
              <button className="btn btn-outline">[ VIEW MORE ]</button>
            </div>
          ))}
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
          <button className="btn btn-black">Sign Up</button>
        </section>
      </main>

      <footer className="footer">
        <nav className="footer-links">
          {Object.entries(footerLinks).map(([title, items], index) => (
            <div key={index}>
              <h5>{title}</h5>
              <ul>
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </nav>
        <div className="connect">
          <p>CONNECT WITH US</p>
          <div className="social-media-icons">
            {["instagram", "facebook", "twitter", "pinterest", "tiktok"].map(icon => (
              <span key={icon} aria-label={`Follow us on ${icon}`}><i className={`fab fa-${icon}`}></i></span>
            ))}
          </div>
        </div>
        <div className="app-download">
          <p>DOWNLOAD THE APP FOR iOS / ANDROID</p>
        </div>
        <div className="legal">
          <p>&copy; 2025 YOOX. All rights reserved.</p>
          <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Contact</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
