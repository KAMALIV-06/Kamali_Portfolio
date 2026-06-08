import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container about-inner grid--2">
        <div className="about-card glass">
          <div className="profile-pic" aria-hidden>
            {/* Placeholder circle */}
          </div>
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <h3 className="muted">Passionate engineering student focused on full-stack and ML.</h3>
          <p>
            I am an engineering student with experience building web applications and
            experimenting with machine learning models. I enjoy turning ideas into
            polished products and learning new tools to solve real-world problems.
          </p>
          <p>
            I actively work with Java, Python, JavaScript, and modern web stacks.
            I'm seeking opportunities to contribute to impactful projects and grow as an
            engineer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
