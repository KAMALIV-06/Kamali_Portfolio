import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar glass ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <span className="name">Kamali V</span>
          <small className="role">Full Stack Developer</small>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact" className="cta">Contact</a>
        </nav>

        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
