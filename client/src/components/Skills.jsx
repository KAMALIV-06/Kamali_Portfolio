import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./Skills.css";

const iconMap = {
  React: "⚛",
  HTML: "</>",
  CSS: "🎨",
  Flutter: "🌩",
  "Node.js": "⬢",
  "Spring Boot": "☘",
  "REST API": "🔗",
  Hibernate: "🗄",
  JDBC: "🧠",
  Java: "☕",
  Python: "🐍",
  "C/C++": "💠",
  PostgreSQL: "🐘",
  MySQL: "🐬",
  Git: "🔧",
  GitHub: "🐙",
  ML: "🤖",
  FastAPI: "⚡",
  "Data Processing": "📊",
};

const defaultSkills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: "90%" },
      { name: "HTML", level: "95%" },
      { name: "CSS", level: "92%" },
      { name: "Flutter", level: "75%" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "90%" },
      { name: "Spring Boot", level: "70%" },
      { name: "REST API", level: "88%" },
      { name: "Hibernate", level: "72%" },
      { name: "JDBC", level: "78%" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "Java", level: "88%" },
      { name: "Python", level: "86%" },
      { name: "C/C++", level: "76%" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", level: "84%" },
      { name: "MySQL", level: "82%" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "92%" },
      { name: "GitHub", level: "92%" },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "ML", level: "80%" },
      { name: "FastAPI", level: "78%" },
      { name: "Data Processing", level: "84%" },
    ],
  },
];

const Skills = () => {
  const [skills, setSkills] = useState(defaultSkills);

  useEffect(() => {
    api
      .get("/api/skills")
      .then((res) => {
        if (!Array.isArray(res.data) || res.data.length === 0) return;

        const mapped = res.data.map((category) => ({
          category: category.category,
          items: category.items.map((item) => ({
            name: item,
            level: defaultSkills
              .flatMap((group) => group.items)
              .find((value) => value.name === item)?.level || "80%",
          })),
        }));

        if (mapped.length) {
          setSkills(mapped);
        }
      })
      .catch(() => {
        setSkills(defaultSkills);
      });
  }, []);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Core Capabilities</span>
          <h2>Skill grid for modern engineering work</h2>
        </div>

        <div className="skill-grid">
          {skills.map((group) => (
            <div className="skill-group glass" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <div className="skill-card" key={skill.name}>
                    <div className="skill-meta">
                      <div className="skill-icon">{iconMap[skill.name] || skill.name[0]}</div>
                      <div>
                        <strong>{skill.name}</strong>
                        <span>{group.category}</span>
                      </div>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: skill.level }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
