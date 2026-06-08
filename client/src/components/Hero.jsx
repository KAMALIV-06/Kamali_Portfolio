import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="container">
        <div className="hero-inner reveal is-visible">
          <h2>Hello, I am</h2>
          <h1>Kamali V</h1>
          <p className="muted">Full Stack Developer | ML Enthusiast | Engineering Student</p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
