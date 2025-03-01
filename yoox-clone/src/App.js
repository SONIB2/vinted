import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Woman from './components/Woman';  // Removed the duplicate import of 'Woman'
import './App.css';

// Import images
import womanImage from "./components/images/1.jpg";
import menImage from "./components/images/2.jpg";
import kidsImage from "./components/images/3.jpg";
import designImage from "./components/images/4.jpg";

// Create a simple Home component to render
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

      {/* Category Cards - Horizontal Layout */}
      <div className="main-content">
        <div className="categories">
          <CategoryCard title="Woman" image={womanImage} />
          <CategoryCard title="Men" image={menImage} />
          <CategoryCard title="Kids" image={kidsImage} />
          <CategoryCard title="Design+Art" image={designImage} />
        </div>

        {/* Newsletter Section */}
        <Newsletter />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home component that renders the cards */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/women" element={<Woman />} /> {/* Path for Women */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
