import React from 'react';
import './PartnerNewsCTASection.css';

const PartnerNewsCTASection = () => {
  return (
    <section className="partner-news-cta-section">
      <div className="section-content-wrapper">

        {/* --- Supported by Leading Organizations --- */}
        <div className="leading-organizations-section">
          <p className="section-small-heading">OUR PARTNERS</p>
          <h2 className="section-main-heading">Supported by Leading Organizations</h2>

          <div className="partner-categories">
            {/* Government Partners */}
            <div className="partner-category">
              <h3 className="category-title">Government Partners</h3>
              <div className="partner-logos-grid">
                <div className="partner-logo-placeholder">Government of Canada</div>
                <div className="partner-logo-placeholder">Government of Alberta</div>
                <div className="partner-logo-placeholder">City of Edmonton</div>
                <div className="partner-logo-placeholder">Consulate General of Nigeria</div>
                <div className="partner-logo-placeholder">Embassy of Morocco</div>
              </div>
            </div>

            {/* International Organizations */}
            <div className="partner-category">
              <h3 className="category-title">International Organizations</h3>
              <div className="partner-logos-grid">
                <div className="partner-logo-placeholder">African Union</div>
                <div className="partner-logo-placeholder">AfCFTA Secretariat</div>
                <div className="partner-logo-placeholder">HECUA</div>
                <div className="partner-logo-placeholder">MELA Development Bank</div>
                <div className="partner-logo-placeholder">International Finance Corp.</div>
              </div>
            </div>

            {/* Trade & Investment */}
            <div className="partner-category">
              <h3 className="category-title">Trade & Investment</h3>
              <div className="partner-logos-grid">
                <div className="partner-logo-placeholder">Chamber of Commerce</div>
                <div className="partner-logo-placeholder">Trade Edmonton</div>
                <div className="partner-logo-placeholder">Impact Partners</div>
              </div>
            </div>

            {/* Media Partners */}
            <div className="partner-category">
              <h3 className="category-title">Media Partners</h3>
              <div className="partner-logos-grid">
                <div className="partner-logo-placeholder">CBC News</div>
                <div className="partner-logo-placeholder">Global News</div>
                <div className="partner-logo-placeholder">Nigerian TV</div>
                <div className="partner-logo-placeholder">African Business Magazine</div>
              </div>
            </div>
          </div>
          <p className="become-partner-link">Interested in partnering with Made in Africa Expo Canada? <a href="#become-partner">Become a Partner &rarr;</a></p>
        </div>

        {/* --- News & Announcements --- */}
        <div className="news-announcements-section">
          <p className="section-small-heading">LATEST UPDATES</p>
          <h2 className="section-main-heading">News & Announcements</h2>

          <div className="news-cards-grid">
            {/* News Card 1 */}
            <div className="news-card">
              <div className="news-image-placeholder"></div> {/* Placeholder for image */}
              <p className="news-date">📰 27 November 2025</p>
              <h3 className="news-title">AfriCanada Expo 2026 Officially Announced for Edmonton</h3>
              <p className="news-excerpt">
                As a Canada-based initiative, Made in Africa Expo Canada 2026
                recognizes that our gathering takes place...
              </p>
              <a href="#read-more" className="read-more-link">Read More &rarr;</a>
            </div>

            {/* News Card 2 */}
            <div className="news-card">
              <div className="news-image-placeholder"></div> {/* Placeholder for image */}
              <p className="news-date">📰 27 November 2025</p>
              <h3 className="news-title">Ghana, Nigeria Government Officials Endorse Expo</h3>
              <p className="news-excerpt">
                As a Canada-based initiative, Made in Africa Expo Canada 2026
                recognizes that our gathering takes place...
              </p>
              <a href="#read-more" className="read-more-link">Read More &rarr;</a>
            </div>

            {/* News Card 3 */}
            <div className="news-card">
              <div className="news-image-placeholder"></div> {/* Placeholder for image */}
              <p className="news-date">📰 27 November 2025</p>
              <h3 className="news-title">Early Bird Exhibitor Registration Opens with 20% Discount</h3>
              <p className="news-excerpt">
                As a Canada-based initiative, Made in Africa Expo Canada 2026
                recognizes that our gathering takes place...
              </p>
              <a href="#read-more" className="read-more-link">Read More &rarr;</a>
            </div>
          </div>
          <a href="#view-all-news" className="view-all-news-link">View All News &rarr;</a>
        </div>
      </div> {/* End section-content-wrapper */}

      {/* --- Are You Ready To Be Part Of History? (Red Background) --- */}
      <div className="ready-to-be-part-section">
        <h2 className="ready-title">Are You Ready To Be Part Of History?</h2>
        <p className="ready-description">
          Join us for the inaugural Made in Africa Expo Canada, whether you're
          showcasing products, exploring opportunities, or building partnerships.
          AfriCanada Expo 2026 is your platform to connect, learn, and expand.
        </p>
        <div className="ready-buttons">
          <button className="btn btn-red-filled">EXHIBIT +</button>
          <button className="btn btn-red-hollow">SPONSOR</button>
        </div>
      </div>

      {/* --- Stay Connected (Gradient Background) --- */}
      <div className="stay-connected-section">
        <h2 className="stay-title">Stay Connected</h2>
        <p className="stay-description">
          Get exclusive updates on exhibitors, speakers, special offers, and announcements.
        </p>
        <form className="newsletter-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" className="newsletter-input" />
            <input type="email" placeholder="Email Address" className="newsletter-input" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company Name" className="newsletter-input" />
            <select className="newsletter-select">
              <option value="">I'm interested in...</option>
              <option value="exhibiting">Exhibiting</option>
              <option value="visiting">Visiting</option>
              <option value="sponsoring">Sponsoring</option>
              <option value="partnering">Partnering</option>
              <option value="media">Media</option>
            </select>
          </div>
          <div className="form-checkbox">
            <input type="checkbox" id="agreeToReceiveEmails" />
            <label htmlFor="agreeToReceiveEmails">I agree to receive emails from Made in Africa Expo Global</label>
          </div>
          <button type="submit" className="newsletter-submit-button">SUBSCRIBE NOW</button>
          <p className="privacy-notice">We respect your privacy. Unsubscribe anytime.</p>
        </form>
      </div>

    </section>
  );
};

export default PartnerNewsCTASection;