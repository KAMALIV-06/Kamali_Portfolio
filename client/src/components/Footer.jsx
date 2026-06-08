import React from "react";
import "./Footer.css";

const Footer = ()=>{
  return (
    <footer className="section section--sm">
      <div className="container">
        <div className="footer-inner glass" style={{padding:'18px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>© {new Date().getFullYear()} Kamali V · All rights reserved</div>
          <div className="socials muted">GitHub • LinkedIn • Email</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
