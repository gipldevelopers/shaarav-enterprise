import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'

export function FounderPage() {
  const journeyPoints = [
    'A foundation in commerce, marketing, business law, and taxation, shaped by early hands-on business involvement.',
    'Operational experience in travel, aviation, procurement, and banking before joining the family business in Ahmedabad.',
    'Leadership across clearing, forwarding, warehousing, administration, equity markets, and entrepreneurial consulting.',
  ]

  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="A journey built from curiosity, hands-on work, and steady professional growth."
        text="From early business exposure to structured financial consulting, the founder story behind Shaarav Enterprise is practical, layered, and deeply experienced."
        image={media.founder}
      />
      
      <section className="section page-shell founder-page-grid gap-0">
        <article className="glass-card">
          <span className="eyebrow">From the CEO&apos;s Desk</span>
          <h2>It began with commerce, family business, and a natural pull toward enterprise.</h2>
          <p>
            From Pune to Ahmedabad, the journey has moved through procurement, finance,
            administration, education, trading, creativity, and entrepreneurship.
          </p>
        </article>
        <article
          className="image-panel image-panel--portrait !min-h-[20rem]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.12), rgba(11, 22, 19, 0.42)), url(${media.workspace})`,
          }}
        />
      </section>
      
      <section className="section page-shell timeline-layout gap-0">
        {journeyPoints.map((point, index) => (
          <article key={point} className="timeline-card">
            <strong>0{index + 1}</strong>
            <p>{point}</p>
          </article>
        ))}
      </section>
      
      <section className="section page-shell credentials-grid gap-0">
        {[
          'PGDBA from Symbiosis, Pune in HR & Finance',
          'Lean Six Sigma Green Belt understanding',
          'Certified Core Strategy Programme in Trading in Markets',
          'Creative interior project experience and design instinct',
        ].map((item) => (
          <article key={item} className="credential-card">
            <span className="credential-card__mark" />
            <p>{item}</p>
          </article>
        ))}
      </section>
      
      <section className="section page-shell quote-block gap-0">
        <blockquote>
          Tangible, cognizable, and intelligible services grounded in more than two decades of experience.
        </blockquote>
      </section>
      
      <section className="section page-shell final-cta gap-0">
        <div className="final-cta__panel">
          <div>
            <span className="eyebrow eyebrow--light">Work With Shaarav</span>
            <h2>Experience-led consulting for clients who want thoughtful guidance.</h2>
          </div>
        </div>
      </section>

      <InfoTiles
        eyebrow="Founder Lens"
        title="The founder journey shapes the consulting mindset."
        items={[
          { title: 'Commercial Instinct', text: 'A practical understanding of how businesses actually operate.' },
          { title: 'Cross-Functional View', text: 'Exposure across administration, finance, operations, and planning.' },
          { title: 'Creative Judgment', text: 'The ability to think beyond rigid templates while staying structured.' },
        ]}
      />
    </>
  )
}
