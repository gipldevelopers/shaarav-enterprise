import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'
import { ServicesTree } from './ServicesTree'

export function ServicesPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Advisory built for financial services, family, property, and growth."
        text="Each service is designed to feel premium, understandable, and directly useful in the real world."
        image={media.financial}
      />

      <ServicesTree onNavigate={onNavigate} />

      <section className="section page-shell comparison-grid gap-0">
        <article className="glass-card">
          <h3>For Individuals</h3>
          <p>Clearer financial direction, practical investment conversation, and better decision support.</p>
        </article>
        <article className="glass-card">
          <h3>For Families</h3>
          <p>Long-term continuity planning, estate sensitivity, and structured family office thinking.</p>
        </article>
        <article className="glass-card">
          <h3>For MSMEs</h3>
          <p>Operational clarity, cash-flow awareness, and strategy grounded in financial services reality.</p>
        </article>
      </section>

      <section className="section page-shell story-layout gap-0">
        <article
          className="image-panel image-panel--portrait !min-h-[20rem]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.18), rgba(11, 22, 19, 0.52)), url(${media.realEstate})`,
          }}
        />
        <div className="story-layout__copy">
          <span className="eyebrow">How We Work</span>
          <h2>We don&apos;t just list services. We shape outcomes.</h2>
          <p>
            Every advisory conversation is adapted to the client&apos;s stage, ambition,
            and pressure points. The goal is not just information, but useful movement.
          </p>
        </div>
      </section>

      <section className="section page-shell band-section gap-0">
        <div className="band-section__grid">
          <article className="band-card band-card--dark">
            <span className="eyebrow eyebrow--light">Structured</span>
            <p>Clear frameworks and simplified pathways.</p>
          </article>
          <article className="band-card band-card--accent">
            <span className="eyebrow">Personal</span>
            <p>Advice shaped to individual need, not generic templates.</p>
          </article>
        </div>
      </section>

      <section className="section page-shell quote-block !my-12 gap-0">
        <blockquote>We would also look into other special aspects of our customers&apos; needs with prior discussions.</blockquote>
      </section>

      <InfoTiles
        eyebrow="Service Strengths"
        title="Each service area solves a different kind of pressure."
        items={[
          { title: 'Financial Depth', text: 'Useful direction for planning, investment, and decision clarity.' },
          { title: 'Family Continuity', text: 'Sensitive structuring for wealth, legacy, and protection.' },
          { title: 'Financial Services Practicality', text: 'Advice that respects the day-to-day reality of smaller enterprises.' },
        ]}
      />
    </>
  )
}
