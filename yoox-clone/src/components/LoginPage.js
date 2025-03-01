import React, { useState } from 'react';
import './LoginPage.css'; // Link the custom CSS

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login logic (validation, API call, etc.)
    console.log({
      email,
      password,
      rememberMe
    });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-heading">It’s great to see you again.</h2>

        <p className="login-description">Log in to your account</p>

        <div className="social-login">
          <button className="social-button facebook">Login with Facebook</button>
          <button className="social-button google">Login with Google</button>
        </div>

        <p className="or-text">or with your e-mail address</p>

        <form onSubmit={handleSubmit} className="email-form">
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <a href="/forgot-password" className="forgot-password-link">
            Forgot your password?
          </a>

          <button type="submit" className="login-button">LOG IN</button>
        </form>

        <p className="register-link">
          Are you new to YOOX? <a href="/register" className="register-link-text">Register now</a>
        </p>

        <p className="privacy-policy">
          For more information, please consult the <a href="/privacy" className="privacy-link">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
