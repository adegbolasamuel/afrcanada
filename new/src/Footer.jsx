import React from "react";
import "./Footer.css";
import footerLogo from "./assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top-wrapper">
        {/* Column 1 – Intro */}
        <div className="footer-intro-column">
          <img
            src={footerLogo}
            alt="Made In Africa Logo"
            className="footer-logo"
          />

          <p className="footer-intro-text">
            Canada's premier trade exhibition connecting African excellence with
            global opportunities. Join us June 10-12, 2026 in Edmonton, Alberta.
          </p>

          <h4 className="footer-column-title">Stay Connected</h4>
          <p className="footer-stay-connected-description">
            Get updates on exhibitors, speakers, and special offers.
          </p>

          <form className="footer-newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-email-input"
            />
            <button type="submit" className="footer-subscribe-button">
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 2 – Quick Links */}
        <div className="footer-nav-column">
          <h4 className="footer-column-title">Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#exhibit">Why Exhibit</a>
            </li>
            <li>
              <a href="#visit">Why Visit</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3 – Exhibitors */}
        <div className="footer-nav-column">
          <h4 className="footer-column-title">For Exhibitors</h4>
          <ul>
            <li>
              <a href="#">Exhibitor Packages</a>
            </li>
            <li>
              <a href="#">Book Your Stand</a>
            </li>
            <li>
              <a href="#">Exhibitor Manual</a>
            </li>
          </ul>
        </div>

        {/* Column 4 – Visitors */}
        <div className="footer-nav-column">
          <h4 className="footer-column-title">For Visitors</h4>
          <ul>
            <li>
              <a href="#">Visitor Registration</a>
            </li>
            <li>
              <a href="#">Conference Passes</a>
            </li>
            <li>
              <a href="#">Travel Information</a>
            </li>
            <li>
              <a href="#">Visa Support</a>
            </li>
          </ul>
        </div>

        {/* Contact Row */}
        <div className="footer-contact-socials">
          <div className="footer-contact-details">
            <div className="footer-contact-item">
              <span className="contact-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 3.3335H3.33341C2.41294 3.3335 1.66675 4.07969 1.66675 5.00016V15.0002C1.66675 15.9206 2.41294 16.6668 3.33341 16.6668H16.6667C17.5872 16.6668 18.3334 15.9206 18.3334 15.0002V5.00016C18.3334 4.07969 17.5872 3.3335 16.6667 3.3335Z"
                    stroke="#E2473C"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3334 5.8335L10.8584 10.5835C10.6011 10.7447 10.3037 10.8302 10.0001 10.8302C9.69648 10.8302 9.39902 10.7447 9.14175 10.5835L1.66675 5.8335"
                    stroke="#E2473C"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="contact-label">General Inquiries</p>
                <a
                  href="mailto:info@madeinafricaexpo.com"
                  className="contact-value"
                >
                  info@madeinafricaexpo.com
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3334 14.0999V16.5999C18.3344 16.832 18.2868 17.0617 18.1939 17.2744C18.1009 17.487 17.9645 17.6779 17.7935 17.8348C17.6225 17.9917 17.4206 18.1112 17.2007 18.1855C16.9809 18.2599 16.7479 18.2875 16.5168 18.2666C13.9525 17.988 11.4893 17.1117 9.32511 15.7083C7.31163 14.4288 5.60455 12.7217 4.32511 10.7083C2.91676 8.53426 2.04031 6.05908 1.76677 3.48325C1.74595 3.25281 1.77334 3.02055 1.84719 2.80127C1.92105 2.58199 2.03975 2.38049 2.19575 2.2096C2.35174 2.03871 2.54161 1.90218 2.75327 1.80869C2.96492 1.7152 3.19372 1.6668 3.42511 1.66658H5.92511C6.32953 1.6626 6.7216 1.80582 7.02824 2.06953C7.33488 2.33324 7.53517 2.69946 7.59177 3.09992C7.69729 3.89997 7.89298 4.68552 8.17511 5.44158C8.28723 5.73985 8.31149 6.06401 8.24503 6.37565C8.17857 6.68729 8.02416 6.97334 7.80011 7.19992L6.74177 8.25825C7.92807 10.3445 9.65549 12.072 11.7418 13.2583L12.8001 12.1999C13.0267 11.9759 13.3127 11.8215 13.6244 11.755C13.936 11.6885 14.2602 11.7128 14.5584 11.8249C15.3145 12.107 16.1001 12.3027 16.9001 12.4083C17.3049 12.4654 17.6746 12.6693 17.9389 12.9812C18.2032 13.2931 18.3436 13.6912 18.3334 14.0999Z"
                    stroke="#E2473C"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="contact-label">Phone</p>
                <a href="tel:+15875013257" className="contact-value">
                  +1 (587) 501-3257
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6666 8.33317C16.6666 12.494 12.0508 16.8273 10.5008 18.1657C10.3564 18.2742 10.1806 18.333 9.99992 18.333C9.81925 18.333 9.64348 18.2742 9.49909 18.1657C7.94909 16.8273 3.33325 12.494 3.33325 8.33317C3.33325 6.56506 4.03563 4.86937 5.28587 3.61913C6.53612 2.36888 8.23181 1.6665 9.99992 1.6665C11.768 1.6665 13.4637 2.36888 14.714 3.61913C15.9642 4.86937 16.6666 6.56506 16.6666 8.33317Z"
                    stroke="#E2473C"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z"
                    stroke="#E2473C"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">Edmonton, Alberta, Canada</p>
              </div>
            </div>
          </div>

          <div className="footer-social-links">
            <span className="social-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M23.3333 16.6665C24.6593 16.6665 25.9311 17.1933 26.8688 18.131C27.8065 19.0687 28.3333 20.3404 28.3333 21.6665V27.4998H24.9999V21.6665C24.9999 21.2245 24.8243 20.8006 24.5118 20.488C24.1992 20.1754 23.7753 19.9998 23.3333 19.9998C22.8912 19.9998 22.4673 20.1754 22.1547 20.488C21.8422 20.8006 21.6666 21.2245 21.6666 21.6665V27.4998H18.3333V21.6665C18.3333 20.3404 18.86 19.0687 19.7977 18.131C20.7354 17.1933 22.0072 16.6665 23.3333 16.6665Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.0001 17.5H11.6667V27.5H15.0001V17.5Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3334 14.9998C14.2539 14.9998 15.0001 14.2536 15.0001 13.3332C15.0001 12.4127 14.2539 11.6665 13.3334 11.6665C12.4129 11.6665 11.6667 12.4127 11.6667 13.3332C11.6667 14.2536 12.4129 14.9998 13.3334 14.9998Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="social-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M28.3334 13.3332C28.3334 13.3332 27.7501 15.0832 26.6667 16.1665C28.0001 24.4999 18.8334 30.5832 11.6667 25.8332C13.5001 25.9165 15.3334 25.3332 16.6667 24.1665C12.5001 22.9165 10.4167 17.9999 12.5001 14.1665C14.3334 16.3332 17.1667 17.5832 20.0001 17.4999C19.2501 13.9999 23.3334 11.9999 25.8334 14.3332C26.7501 14.3332 28.3334 13.3332 28.3334 13.3332Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="social-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M24.9999 11.6665H22.4999C21.3948 11.6665 20.335 12.1055 19.5536 12.8869C18.7722 13.6683 18.3333 14.7281 18.3333 15.8332V18.3332H15.8333V21.6665H18.3333V28.3332H21.6666V21.6665H24.1666L24.9999 18.3332H21.6666V15.8332C21.6666 15.6122 21.7544 15.4002 21.9107 15.2439C22.0669 15.0876 22.2789 14.9998 22.4999 14.9998H24.9999V11.6665Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="social-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M24.1667 11.6665H15.8334C13.5322 11.6665 11.6667 13.532 11.6667 15.8332V24.1665C11.6667 26.4677 13.5322 28.3332 15.8334 28.3332H24.1667C26.4679 28.3332 28.3334 26.4677 28.3334 24.1665V15.8332C28.3334 13.532 26.4679 11.6665 24.1667 11.6665Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.3333 19.4748C23.4361 20.1683 23.3176 20.8766 22.9947 21.4989C22.6718 22.1213 22.1609 22.6259 21.5346 22.9412C20.9083 23.2564 20.1986 23.3661 19.5064 23.2547C18.8142 23.1433 18.1747 22.8165 17.679 22.3207C17.1832 21.825 16.8564 21.1855 16.745 20.4933C16.6336 19.8011 16.7433 19.0913 17.0585 18.4651C17.3737 17.8388 17.8784 17.3279 18.5007 17.005C19.1231 16.682 19.8314 16.5636 20.5249 16.6664C21.2324 16.7713 21.8873 17.101 22.393 17.6067C22.8987 18.1124 23.2283 18.7673 23.3333 19.4748Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.5833 15.4165H24.5916"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="social-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M12.0833 24.1667C11.5012 21.4194 11.5012 18.5806 12.0833 15.8333C12.1598 15.5543 12.3076 15.3001 12.5122 15.0955C12.7167 14.8909 12.971 14.7432 13.25 14.6667C17.7195 13.9262 22.2805 13.9262 26.75 14.6667C27.029 14.7432 27.2833 14.8909 27.4878 15.0955C27.6924 15.3001 27.8402 15.5543 27.9167 15.8333C28.4988 18.5806 28.4988 21.4194 27.9167 24.1667C27.8402 24.4457 27.6924 24.6999 27.4878 24.9045C27.2833 25.1091 27.029 25.2568 26.75 25.3333C22.2805 26.0739 17.7195 26.0739 13.25 25.3333C12.971 25.2568 12.7167 25.1091 12.5122 24.9045C12.3076 24.6999 12.1598 24.4457 12.0833 24.1667Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3333 22.5L22.4999 20L18.3333 17.5V22.5Z"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom-wrapper">
        <div className="footer-copyright">
          <p>© 2025 Made in Africa Expo. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

        <p className="footer-acknowledgement">
          We acknowledge that we are on Treaty 6 territory...
        </p>
      </div>
    </footer>
  );
};

export default Footer;
