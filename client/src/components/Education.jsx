import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="section section--sm">
      <div className="container">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item glass">
            <div className="timeline-date">2022 - Present</div>
            <div className="timeline-body">
              <h3>RMK Engineering College</h3>
              <p className="muted">Engineering Student — pursuing degree with focus on software and ML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
