const certifications = [
  { id: 1, title: "Python for Data Science", issuer: "NPTEL — IIT Madras", badge: "🏅", grade: "Elite", date: "Sep – Oct 2025", description: "Earned NPTEL Elite certification in Python for Data Science from IIT Madras — covering data analysis, visualization, and ML fundamentals.", color: "cert-gold" },
  { id: 2, title: "Artificial Intelligence Virtual Internship", issuer: "IBM Skills Network", badge: "🤖", grade: "Completed", date: "Sep – Oct 2025", description: "Completed IBM's AI Virtual Internship covering practical AI concepts, machine learning workflows, and industry-standard AI tools.", color: "cert-blue" },
];
export default function Certifications() {
  return (
    <section className="section certs-section">
      <div className="section-header">
        <h2>Certifications</h2>
        <p className="section-subtitle">Recognized credentials from IIT Madras and IBM.</p>
      </div>
      <div className="certs-grid">
        {certifications.map((cert) => (
          <article key={cert.id} className={`cert-card ${cert.color}`}>
            <div className="cert-badge">{cert.badge}</div>
            <div className="cert-content">
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <span className="cert-grade">{cert.grade}</span>
              <p className="cert-desc">{cert.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
