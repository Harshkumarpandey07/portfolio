import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace these with your actual EmailJS credentials
      const SERVICE_ID = "YOUR_SERVICE_ID";
      const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
      const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_name: "Harsh Kumar Pandey",
          },
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section contact-section" aria-labelledby="contact-heading">
      <div className="section-header">
        <h2 id="contact-heading">Get In Touch</h2>
        <p className="section-subtitle">
          Open to ML Engineer and Software Engineer roles. Let's talk!
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href="mailto:harshkumaranipandey@gmail.com">
              harshkumaranipandey@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <a
              href="https://www.linkedin.com/in/harsh-kumar-pandey-0011382a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn — Harsh Kumar Pandey
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🐙</span>
            <a
              href="https://github.com/Harshkumarpandey07"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub — Harshkumarpandey07
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Prayagraj, Uttar Pradesh, India</span>
          </div>
          <a
            href="/Harsh_Kumar_Pandey_Resume.pdf"
            download="Harsh_Kumar_Pandey_Resume.pdf"
            className="btn-resume contact-resume"
          >
            📄 Download Resume
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi Harsh, I'd like to discuss a role..."
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary contact-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>

          {status === "success" && (
            <p className="form-success">✅ Message sent! I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="form-error">❌ Something went wrong. Email me directly at harshkumaranipandey@gmail.com</p>
          )}
        </form>
      </div>
    </section>
  );
}
