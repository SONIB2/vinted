import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { IoBagHandleOutline } from 'react-icons/io5';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-top">
        <div className="locale-currency">
          <span>Malta</span>
          <span>Customer Care</span>
        </div>
        <div className="auth-links">
          <Link to="/register" className="register-link">Register</Link>
          <Link to="/login" className="login-link">Login</Link>
        </div>
      </div>
      
      <div className="main-header">
        <div className="logo-container">
          <h1 className="logo">
            <Link to="/">YOOX</Link>
          </h1>
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/women" className="nav-link">Women</Link></li>
            <li><Link to="/men" className="nav-link">Men</Link></li>
            <li><Link to="/kids" className="nav-link">Kids</Link></li>
            <li><Link to="/design" className="nav-link">Design+Art</Link></li>
          </ul>
        </nav>
        <div className="cart-container">
        <Link to="/search" className="search-icon">
            <IoMdSearch size={24} />
          </Link>
          <Link to="/wishlist" className="wishlist-icon">
            <FaRegHeart size={24} />
          </Link>
          <Link to="/cart" className="cart-icon">
            <IoBagHandleOutline size={24} />
          </Link>
        </div>
      </div>

      <div className="sale-banner">
        <p>SALE: NOW UP TO 60% OFF</p>
        <span>LOTS OF NEW ITEMS ADDED &gt;</span>
      </div>
    </header>
  );
};

export default Header;
