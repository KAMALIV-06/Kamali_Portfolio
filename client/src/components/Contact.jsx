import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}: ${form.subject}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.email}`);
    window.location.href = `mailto:kamali@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-panel glass reveal">
          <span className="eyebrow">Get in Touch</span>
          <h2>Let's collaborate on your next product.</h2>
          <p>
            I'm available for full-stack, ML, and research-driven projects. Reach out if you
            want to build scalable systems with a modern experience.
          </p>

          <div className="contact-details">
            <div>
              <strong>Email</strong>
              <p>kamali@example.com</p>
            </div>
            <div>
              <strong>LinkedIn</strong>
              <p>linkedin.com/in/kamali-v</p>
            </div>
            <div>
              <strong>GitHub</strong>
              <p>github.com/kamali-v</p>
            </div>
          </div>
        </div>

        <form className="contact-form glass reveal" onSubmit={submit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            required
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
