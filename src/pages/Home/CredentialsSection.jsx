export function CredentialsSection() {
  const credentials = [
    'PGDBA from Symbiosis, Pune in HR & Finance',
    'Understanding of Lean Six Sigma Green Belt',
    'Certified Core Strategy Programme in Trading in Markets',
    '20 years of experience across financial services, education, finance, and management',
  ]

  return (
    <section className="section page-shell credentials-section">
      <div className="section-heading">
        <span className="eyebrow">Certificates & Achievements</span>
        <h2>Professional credibility backed by ongoing learning.</h2>
      </div>

      <div className="credentials-grid">
        {credentials.map((item) => (
          <article key={item} className="credential-card">
            <span className="credential-card__mark" />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
