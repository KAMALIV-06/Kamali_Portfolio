import React from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "OCI Certified Generative AI Professional",
    issuer: "Oracle",
    detail: "Focused on generative AI foundations, prompt engineering, and production readiness.",
  },
  {
    title: "OCI Certified Foundations Associate",
    issuer: "Oracle",
    detail: "Validated core cloud computing concepts, OCI architecture, and infrastructure fundamentals.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Credentials</span>
          <h2>Certifications</h2>
        </div>

        <div className="certification-grid">
          {certifications.map((cert) => (
            <div className="cert-card glass reveal" key={cert.title}>
              <div className="cert-header">
                <span className="cert-badge">Oracle</span>
                <h3>{cert.title}</h3>
              </div>
              <p>{cert.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
