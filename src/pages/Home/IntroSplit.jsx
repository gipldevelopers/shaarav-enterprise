import { media } from '../../constants/data'

export function IntroSplit() {
  return (
    <section className="section page-shell intro-split !mt-[clamp(1rem,3vw,3rem)] !pt-0">
      <div className="section-heading">
        <span className="eyebrow">About Shaarav</span>
        <h2>We help businesses grow, sustain, and move with more certainty.</h2>
       
      </div>

      <div className="intro-split__grid">
        <article className="glass-card copy-card !p-6">
          <p>
            Greetings from Shaarav Enterprise. We cater to single and micro
            enterprise owners through simplified, structured solutions powered by
            technology and human effort.
          </p>
          <p>
            We do more than advise. We help bring together demand, supply, business
            buyers, sellers, and investors so clients can move from uncertainty to a
            more actionable growth path.
          </p>
        </article>

        <article
          className="image-panel image-panel--tall !min-h-[20rem] !p-6"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(14, 28, 24, 0.2), rgba(14, 28, 24, 0.62)), url(${media.boardroom})`,
          }}
        >
          <div>
            <span className="eyebrow eyebrow--light">Premium Advisory</span>
            <h3 className="!max-w-[18ch]">Structured guidance for modern business families and entrepreneurs.</h3>
          </div>
        </article>
      </div>
    </section>
  )
}
