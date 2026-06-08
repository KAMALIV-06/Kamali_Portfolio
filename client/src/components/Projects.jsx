import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/api/projects').then(res=>setProjects(res.data)).catch(()=>{
      setProjects([
        {id:1,title:'Fault Diagnosis Using Acoustic Signals',desc:'ML based fault diagnosis using audio signals',tech:['Python','ML','Signal Processing'],github:'#',live:'#'},
        {id:2,title:'One Student One Tree',desc:'Environmental awareness platform with tree planting tracking',tech:['React','Node','Postgres'],github:'#',live:'#'},
        {id:3,title:'Personal Portfolio Website',desc:'This portfolio built with React and Express',tech:['React','Vite','Node'],github:'#',live:'#'},
      ])
    })
  },[])

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <p className="muted">Selected projects showcasing full-stack & ML work</p>

        <div className="projects-grid grid grid--3">
          {projects.map(p=> (
            <article key={p.id} className="project-card glass">
              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="muted small">{p.desc}</p>
                <div className="tech-list">
                  {p.tech && p.tech.map((t,i)=>(<span key={i}>{t}</span>))}
                </div>
              </div>
              <div className="project-actions">
                <a href={p.github || '#'} target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
                <a href={p.live || '#'} target="_blank" rel="noreferrer" className="btn-primary">Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
