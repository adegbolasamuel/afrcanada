import React from 'react';
import logo from './assets/logo.png'; // Assuming your logo is in src/assets/logo.png
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src={logo} alt="AfriCanada Expo Logo" />
        </div>

        {/* Navigation and CTA button - no more wrappers or toggle */}
        <nav className="nav">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#exhibit">Exhibit</a>
          <a href="#visit">Visit</a>
          <a href="#contact">Contact</a>
                  <button className="cta-btn">Register Now</button>
        </nav>

      </div>
    </header>
  );
}