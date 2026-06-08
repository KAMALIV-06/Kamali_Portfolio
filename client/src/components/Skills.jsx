import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    let mounted = true;
    api.get("/api/skills").then((res) => {
      if (mounted && res.data) setSkills(res.data);
    }).catch(()=>{
      // fallback static
      if(mounted) setSkills([
        {category:'Languages',items:['Java','Python','JavaScript','HTML','CSS']},
        {category:'Frameworks',items:['React.js','Node.js','Express.js']},
        {category:'Databases',items:['PostgreSQL','MySQL']},
      ])
    })
    return ()=> mounted = false;
  },[])

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <p className="muted">Technologies and tools I use regularly</p>

        <div className="skills-grid grid grid--3">
          {skills.map((s, idx) => (
            <div className="skill-card glass" key={idx}>
              <h3>{s.category}</h3>
              <ul>
                {s.items.map((it,i)=> <li key={i}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
