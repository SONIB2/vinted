import React, { useState } from 'react';
import './RegisterPage.css';  // Make sure to link the custom CSS here

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [mobile, setMobile] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Handle registration logic
    console.log({
      fullName,
      surname,
      email,
      password,
      dateOfBirth,
      mobile,
      gender,
      acceptTerms
    });
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="register-heading">MYOOX REGISTRATION</h2>
        <p className="register-description">Take advantage of a faster checkout and enjoy promotions for registered customers only.</p>

        <h3 className="social-login-title">REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</h3>
        <div className="social-buttons">
          <button className="social-button facebook">Register with Facebook</button>
          <button className="social-button google">Register with Google</button>
        </div>

        <p className="or-text">OR WITH YOUR EMAIL</p>
        
        <form onSubmit={handleSubmit} className="email-form">
          <label htmlFor="fullName">NAME*</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="surname">SURNAME*</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Enter your surname"
            required
          />

          <label htmlFor="email">E-MAIL*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">PASSWORD*</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <label htmlFor="gender">Personalise your shopping experience</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
          </div>

          <label htmlFor="dob">DATE OF BIRTH</label>
          <input
            type="date"
            id="dob"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />

          <label htmlFor="mobile">Mobile - Optional</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Your mobile number"
          />

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="/terms" className="terms-link">Terms of Service</a> and <a href="/privacy" className="privacy-link">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="register-button">REGISTER</button>
        </form>

        <div className="footer-register">
          <p>Already have an account? <a href="/login" className="login-link">Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
