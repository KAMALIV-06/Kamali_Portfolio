import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-inner glass">
        <div>
          <strong>Kamali V</strong>
          <p className="muted">Full Stack Developer | ML Enthusiast</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Kamali V. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
