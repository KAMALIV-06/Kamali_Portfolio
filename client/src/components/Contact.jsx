import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({name:'',email:'',message:''});

  const submit = (e)=>{
    e.preventDefault();
    // simple mailto fallback
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(form.message + "\n\n" + form.email)
    window.location.href = `mailto:kamali@example.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="muted">Let's build something together — feel free to reach out.</p>

        <div className="contact-grid grid--2">
          <form className="contact-form glass" onSubmit={submit}>
            <input placeholder="Your name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
            <input placeholder="Your email" type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
            <textarea placeholder="Message" required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
            <div style={{display:'flex',justifyContent:'flex-end'}}>
              <button className="btn-primary" type="submit">Send Message</button>
            </div>
          </form>

          <div className="contact-info">
            <div className="glass info-card">
              <h3>Connect</h3>
              <p className="muted">Email: kamali@example.com</p>
              <p className="muted">Location: Chennai, India</p>
              <div style={{marginTop:12}}>
                <a href="#" className="muted">GitHub</a> • <a href="#" className="muted">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
