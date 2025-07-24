import { motion } from "framer-motion";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" }, // use anchor link
  { name: "Products", path: "/shop" },
  { name: "Seasonal Specials", path: "/seasonalspecials" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand">
          <a href="/" className="brand-logo">
            Frutivá
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
  <a key={link.name} href={link.path} className="nav-link">
    {link.name}
  </a>
))}

        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          <a href="/shop" className="cta-button-1">
            Get Frutivá
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
<motion.div
  className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
  initial={false}
  animate={{
    opacity: isMobileMenuOpen ? 1 : 0,
    height: isMobileMenuOpen ? "100dvh" : 0,
    overflow: isMobileMenuOpen ? "auto" : "hidden",
  }}
  transition={{ duration: 0.3 }}
>
 {navLinks.map((link) => (
          <a
            key={`mobile-${link.name}`}
            href={link.path}
            className="mobile-nav-link"
            onClick={toggleMobileMenu}
          >
            {link.name}
          </a>
        ))}
        <div className="mobile-actions">
          <a href="/shop" className="mobile-cta-button" onClick={toggleMobileMenu}>
            Get Frutivá
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;