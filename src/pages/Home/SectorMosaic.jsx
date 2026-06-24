import { media } from '../../constants/data'

export function SectorMosaic() {
  return (
    <section className="section page-shell sector-mosaic">
      <div className="section-heading">
        <span className="eyebrow">Who We Serve</span>
        <h2>Different client needs, different section styles, one clear standard.</h2>
      </div>
      <div className="mosaic-grid">
        <article className="mosaic-card">
          <h3>Financial Services Owners, HNIs & Ultra HNIs</h3>
          <p>Entrepreneurs, high-net-worth individuals, and families seeking structure, growth planning, and calmer decision-making.</p>
        </article>
        <article className="mosaic-card mosaic-card--image" style={{ backgroundImage: `url(${media.workspace})` }} />
        <article className="mosaic-card mosaic-card--accent">
          <h3>Families</h3>
          <p>Families looking for continuity, wealth clarity, and long-term planning.</p>
        </article>
        <article className="mosaic-card">
          <h3>Investors</h3>
          <p>Clients who want practical analysis, confidence, and opportunity-led direction.</p>
        </article>
      </div>
    </section>
  )
}
