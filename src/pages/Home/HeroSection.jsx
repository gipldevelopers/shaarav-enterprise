import { media } from '../../constants/data'

export function HeroSection() {
  const metrics = [
    { value: '20+', label: 'Years of practical business exposure' },
    { value: '4', label: 'Focused consulting verticals' },
    { value: 'Ahmedabad', label: 'Trusted local roots with strategic reach' },
  ]

  return (
    <section className="hero page-shell" id="home">
      <div
        className="hero__media"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 16, 15, 0.82) 0%, rgba(8, 16, 15, 0.58) 42%, rgba(8, 16, 15, 0.22) 100%), url(${media.hero})`,
        }}
      >
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__grid">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--light">Ahmedabad, India</span>
            <h1>Strategic financial guidance with a premium, personal approach.</h1>
           

            <div className="hero__pills">
              <span>Investment clarity</span>
              <span>Family office planning</span>
              <span>Real estate guidance</span>
            </div>

            <div className="hero__actions">
              <a className="button button--primary" href="#/contact">
                Book a Consultation
              </a>
              <a className="button button--secondary" href="#/services">
                View Services
              </a>
            </div>
          </div>

          <aside className="hero__spotlight">
            <p className="hero__spotlight-label">Shaarav Signature</p>
            <h2 className="hero__spotlight-title">
              Built for clients who value clarity, discretion, and direction.
            </h2>
            <p>
              We bring together consulting discipline, financial awareness, and
              entrepreneurial understanding to create a more confident path forward.
            </p>
            <div className="hero__spotlight-line" />
            <p className="hero__spotlight-note">
              From investment planning to enterprise guidance, every recommendation is
              designed to feel personal, structured, and actionable.
            </p>
          </aside>
        </div>

        <div className="metrics">
          {metrics.map((item) => (
            <article key={item.label} className="metric-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
