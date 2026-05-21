import { media } from '../../constants/data'

export function FounderTeaser({ onNavigate }) {
  return (
    <section className="section page-shell founder-teaser">
      <div className="founder-teaser__grid">
        <article className="glass-card">
          <span className="eyebrow">From the CEO&apos;s Desk</span>
          <h2>A founder journey shaped by discipline, curiosity, and experience.</h2>
          <p>
            From commerce studies in Pune to hands-on exposure in finance,
            procurement, administration, trading, and entrepreneurship, the Shaarav
            journey is built on doing the work, not only studying it.
          </p>
          <button className="button button--primary" onClick={() => onNavigate('founder')} type="button">
            Read Founder Story
          </button>
        </article>
        <article
          className="image-panel"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(13, 28, 24, 0.12), rgba(13, 28, 24, 0.44)), url(${media.founder})`,
          }}
        />
      </div>
    </section>
  )
}
