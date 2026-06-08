import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./Projects.css";

const defaultProjects = [
  {
    id: 1,
    title: "RMK Stock – Inventory Management System",
    desc: "Built and maintained a live institutional inventory management application handling stock, orders, and location management across the institution.",
    tech: ["React.js", "Node.js", "MySQL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "One Student One Tree",
    desc: "Developed a tree monitoring and maintenance platform where students track assigned trees with periodic updates.",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Fault Diagnosis Using Acoustic Signals",
    desc: "Research focused on detecting induction motor short-circuit faults using acoustic signal processing and machine learning.",
    tech: ["Python", "Machine Learning", "Signal Processing"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Intelligent Habit Risk Predictor API",
    desc: "Built a FastAPI backend implementing weighted rule-based burnout risk scoring with modular API architecture.",
    tech: ["FastAPI", "Python", "REST API"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Vitals AI",
    desc: "Hackathon project integrating frontend, backend, database, and hardware components into a working AI-driven healthcare solution.",
    tech: ["Flutter", "Node.js", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Agri Bharat Connect",
    desc: "Supply chain focused hackathon project with API integrations and decentralized architecture concepts.",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    api
      .get("/api/projects")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setProjects(res.data.map((project, index) => ({
            id: project.id || index,
            title: project.title || project.name || defaultProjects[index]?.title,
            desc: project.description || project.desc || defaultProjects[index]?.desc,
            tech: project.tech || defaultProjects[index]?.tech,
            github: project.github || "#",
            live: project.live || "#",
            featured: project.featured || index === 0,
          })));
        }
      })
      .catch(() => {
        setProjects(defaultProjects);
      });
  }, []);

  const featured = projects.find((project) => project.featured) || projects[0];
  const others = projects.filter((project) => project.id !== featured.id);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Showcase</span>
          <h2>Featured work and engineering systems</h2>
        </div>

        <div className="featured-card glass reveal">
          <div className="featured-copy">
            <span className="project-label">Featured Project</span>
            <h3>{featured.title}</h3>
            <p>{featured.desc}</p>
            <div className="tech-list">
              {featured.tech?.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-actions">
              <a href={featured.github} className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
              <a href={featured.live} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
          <div className="featured-visual" aria-hidden="true">
            <div className="visual-screenshot">Screenshot</div>
          </div>
        </div>

        <div className="project-grid">
          {others.map((project) => (
            <article className="project-card glass reveal" key={project.id}>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <div className="tech-list project-tech">
                {project.tech?.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
