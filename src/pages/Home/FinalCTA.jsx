export function FinalCTA({ onNavigate }) {
  return (
    <section className="section page-shell final-cta">
      <div className="final-cta__panel">
        <div>
          <span className="eyebrow eyebrow--light">Connect With Us</span>
          <h2>Financial Services anxiety? Drop us a line and let&apos;s find the right cure.</h2>
          <p>
            Whether you need investment clarity, family office guidance, property
            direction, or small-enterprise consulting, we are here to help you move
            with confidence.
          </p>
        </div>
        <button className="button button--primary whitespace-nowrap shrink-0" onClick={() => onNavigate('contact')} type="button">
          Contact Shaarav
        </button>
      </div>
    </section>
  )
}
