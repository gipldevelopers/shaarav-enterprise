export function InfoTiles({ eyebrow, title, items }) {
  return (
    <section className="section page-shell info-tiles-section">
      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div className="info-tiles">
        {items.map((item) => (
          <article key={item.title} className="info-tile">
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
