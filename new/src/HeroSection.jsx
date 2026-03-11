import React from 'react';
import './HeroSection.css'; // Don't forget to create this CSS file!
import backgroundImage from "/Users/samueladegbola/Desktop/the figma design/new/src/assets/background.png"; // Replace with your actual background image
import madeInAfricaLogo from '/Users/samueladegbola/Desktop/the figma design/new/src/assets/logo.png'; // The small logo above the title
import LiveCountdownDisplay from './LiveCountdownDisplay'; // Import the new countdown component

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <img src={madeInAfricaLogo} alt="Made In Africa" className="hero-logo-small" />
        <h1 className="hero-title">AfriCanada Expo 2026</h1>
        <p className="hero-subtitle">
          <span className="icon-calendar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V6" stroke="#FBBD23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V6" stroke="#FBBD23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#FBBD23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10H21" stroke="#FBBD23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> June 10-12, 2026 |
          <span className="icon-location"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#FBBD23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#FBBD23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span> Edmonton, Alberta, Canada
        </p>
        <h2 className="hero-tagline">PREMIER GLOBAL PLATFORM FOR SHARED PROSPERITY</h2>
        <p className="hero-description">Connecting African Excellence with Global Opportunities Through World-Class Exhibitions</p>

        {/* This is where we replace the static countdown with our live one! */}
        <LiveCountdownDisplay />

        <div className="hero-actions">
          <button className="btn btn-primary">Register as Exhibitor <span>&rarr;</span></button>
          <button className="btn btn-secondary">Register as Visitor</button>
          <button className="btn btn-tertiary">Become a Sponsor</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Exhibitors Expected</p>
          </div>
          <div className="stat-item">
            <h3>40+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Trade Visitors</p>
          </div>
          <div className="stat-item">
            <h3>$100M+</h3>
            <p>Business Deals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;