import React from "react";
import "./Footer.scss";
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiMail,
} from "react-icons/fi";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-wrapper">
        <div className="newsletter">
          <h2>STAY UPTO DATE ABOUT</h2>
          <h2>OUR LATEST OFFERS</h2>
        </div>
        <div className="newsletter-form">
          <div className="input-group">
            <FiMail className="icon" />
            <input type="email" placeholder="Enter your email address" />
          </div>
          <button className="subscribe-btn">Subscribe to Newsletter</button>
        </div>
      </div>

      <div className="footer-main-wrapper">
        <div className="footer-main">
          <div className="footer-left">
            <h3>SHOP.CO</h3>
            <p>
              We have clothes that suit your style and <br /> which you're proud to
              wear. From <br /> women to men.
            </p>
            <div className="social-icons">
              <FiTwitter />
              <FiFacebook />
              <FiInstagram />
              <FiGithub />
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>COMPANY</h4>
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h4>HELP</h4>
              <ul>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4>FAQ</h4>
              <ul>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div>
              <h4>RESOURCES</h4>
              <ul>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Shop.co © 2000–2023, All Rights Reserved</p>
          <div className="payment-icons">
            <img src="/src/assets/img/footer-img/img5.png" alt="Visa" />
            <img src="/src/assets/img/footer-img/img1.png" alt="Mastercard" />
            <img src="/src/assets/img/footer-img/img2.png" alt="PayPal" />
            <img src="/src/assets/img/footer-img/img3.png" alt="Apple Pay" />
            <img src="/src/assets/img/footer-img/img4.png" alt="Google Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
