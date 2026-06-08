import React from "react";
import "./Hero.css";

const roles = ["Full Stack Developer", "ML Enthusiast", "IT Student"];

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">Future-ready applications for modern engineering teams</span>
          <h1>Hi, I'm <span>Kamali V</span></h1>
          <div className="hero-roles">
            {roles.map((role) => (
              <span key={role} className="role-pill">{role}</span>
            ))}
          </div>
          <p>
            Pre-final year Information Technology student passionate about full-stack development,
            machine learning, and building scalable real-world applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>

          <div className="hero-socials">
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="mailto:kamali@example.com" aria-label="Email">Email</a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="visual-glow" />
          <div className="visual-frame">
            <div className="visual-photo" aria-hidden="true" />
          </div>
          <div className="visual-shape shape-one" />
          <div className="visual-shape shape-two" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
