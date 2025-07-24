import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaLeaf, FaAppleAlt, FaLemon, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      {/* Floating fruit decorations */}
      <motion.div 
        className="fruit-decoration apple"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaAppleAlt />
      </motion.div>
      <motion.div 
        className="fruit-decoration lemon"
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaLemon />
      </motion.div>
      
      {/* Main footer content */}
      <div className="footer-content">
        <div className="footer-columns">
          {/* Brand Column */}
          <div className="footer-column brand-column">
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.02 }}
            >
              <span className="logo-text">Frutivá</span>
              <FaLeaf className="logo-icon" />
            </motion.div>
            <p className="tagline">Naturally fermented. Unforgettably fresh.</p>
            <div className="social-icons">
              <motion.a 
                href="https://instagram.com/frutiva" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#FF7A00" }}
              >
                <FiInstagram />
              </motion.a>
              <motion.a 
                href="https://facebook.com/frutiva" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#FF7A00" }}
              >
                <FiFacebook />
              </motion.a>
              <motion.a 
                href="https://twitter.com/frutiva" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#FF7A00" }}
              >
                <FiTwitter />
              </motion.a>
              <motion.a 
                href="https://youtube.com/frutiva" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#FF7A00" }}
              >
                <FiYoutube />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/">Home</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/about">About</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/products">Products</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/seasonal">Seasonal Specials</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/contact">Contact</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/shop">Shop Online</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/locations">Store Locator</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/nutrition">Nutritional Info</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/faq">FAQ</a>
              </motion.li>
            </ul>
          </div>
          
          {/* Customer Support */}
          <div className="footer-column">
            <h3>Customer Support</h3>
            <ul>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/contact">Contact Us</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/help">Help Center</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/shipping">Shipping & Returns</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/track">Track Order</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="/wholesale">Wholesale Inquiries</a>
              </motion.li>
            </ul>
            <div className="contact-info">
              <p>Phone: <a href="tel:5551235843">(555) 123-JUICE</a></p>
              <p>Email: <a href="mailto:hello@frutiva.com">hello@frutiva.com</a></p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="footer-column newsletter-column">
            <h3>Stay Fresh with Frutivá Updates</h3>
            <p>Get exclusive offers & health tips</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
              />
              <motion.button
                className="newsletter-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© 2025 Frutivá. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="/terms">Terms of Service</a>
            <span className="divider">|</span>
            <a href="/cookies">Cookie Policy</a>
          </div>
          <div className="certifications">
            <span className="cert-badge">Organic Certified</span>
            <span className="cert-badge">Non-GMO</span>
            <span className="cert-badge">Vegan</span>
          </div>
          <p className="made-with-love">Made with <span className="heart">❤️</span> for your health</p>
        </div>
      </div>
      
      
    </footer>
  );
};

export default Footer;