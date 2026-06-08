import React from "react";
import "./Experience.css";

const timeline = [
  {
    title: "Indo-Japan Collaborative Research Project",
    date: "2025 - Ongoing",
    desc: "Selected for a collaborative initiative focused on induction motor short-circuit detection using acoustic signals and ML model development.",
  },
  {
    title: "3D Modelling & Product Visualization Internship",
    date: "June 2025",
    desc: "Worked on 3D modelling, rendering, and animation workflows using Maya, Photoshop, and After Effects.",
  },
  {
    title: "Microsoft Imagine Cup 2026",
    date: "2026",
    desc: "Participated with the Vitals AI project, building an AI-driven healthcare solution for the global competition.",
  },
  {
    title: "Smart India Hackathon 2025",
    date: "2025",
    desc: "Presented Agri Bharat Connect, a supply chain project with API integrations and decentralized architecture concepts.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Achievements</span>
          <h2>Experience & accomplishments</h2>
        </div>

        <div className="timeline-list">
          {timeline.map((item) => (
            <div className="timeline-card glass reveal" key={item.title}>
              <div className="timeline-point" />
              <div className="timeline-content">
                <div className="timeline-heading">
                  <h3>{item.title}</h3>
                  <span>{item.date}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
