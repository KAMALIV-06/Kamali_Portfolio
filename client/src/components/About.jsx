import React from "react";
import "./About.css";

const education = [
  {
    title: "R.M.K. Engineering College",
    subtitle: "B.Tech Information Technology",
    date: "2023 - 2027",
    detail: "CGPA: 8.48",
  },
  {
    title: "R.M.K. Matric Hr. Sec School",
    subtitle: "Higher Secondary",
    date: "2023",
    detail: "87.8%",
  },
];

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-panel glass reveal">
          <div className="section-title">
            <span className="eyebrow">Academic Journey</span>
            <h2>Education Timeline</h2>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-item" key={item.title}>
                <div className="timeline-marker" />
                <div>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.subtitle}</p>
                  <p className="timeline-date">{item.date}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-copy glass reveal">
          <div className="section-title">
            <span className="eyebrow">About Me</span>
            <h2>Building practical systems with long-term impact</h2>
          </div>
          <p>
            I focus on crafting engineering solutions that blend production-ready full-stack
            systems with data-driven machine learning models. I enjoy exploring new
            algorithms while keeping user experience and reliability at the forefront.
          </p>
          <p>
            My work centers on solving real problems: automating workflows, creating
            observability for systems, and building tools that empower teams and users.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <strong>Curious technologist</strong>
              <span>Always experimenting with new stacks, APIs, and ML pipelines.</span>
            </div>
            <div className="highlight-card">
              <strong>Problem solver</strong>
              <span>Building clean, scalable systems for engineering and research needs.</span>
            </div>
            <div className="highlight-card">
              <strong>Impact-driven</strong>
              <span>Delivering solutions that are measurable, reliable, and reusable.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
