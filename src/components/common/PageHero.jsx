export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero page-shell">
      <div
        className="page-hero__media"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.16), rgba(11, 22, 19, 0.68)), url(${image})`,
        }}
      />
      <div className="page-hero__content">
        <span className="eyebrow eyebrow--light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}
