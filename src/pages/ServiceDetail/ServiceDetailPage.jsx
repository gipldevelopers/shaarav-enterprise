import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'

function DetailSection({ title, text, points, image, reverse = false }) {
  return (
    <section className="section page-shell story-layout">
      {!reverse ? (
        <>
          <div className="story-layout__copy story-layout__copy--card">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="detail-points">
              {points.map((point) => (
                <div key={point} className="detail-point">
                  {point}
                </div>
              ))}
            </div>
          </div>
          <article
            className="image-panel image-panel--portrait"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.16), rgba(11, 22, 19, 0.48)), url(${image})`,
            }}
          />
        </>
      ) : (
        <>
          <article
            className="image-panel image-panel--portrait"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.16), rgba(11, 22, 19, 0.48)), url(${image})`,
            }}
          />
          <div className="story-layout__copy story-layout__copy--card">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="detail-points">
              {points.map((point) => (
                <div key={point} className="detail-point">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export function ServiceDetailPage({ service, onNavigate }) {
  return (
    <>
      <div className="page-shell !mt-32 -mb-24 relative z-10">
        <button 
          onClick={() => onNavigate('services')}
          className="button button--secondary !py-2 !px-4 !min-h-[2.5rem] flex items-center gap-2 cursor-pointer hover:bg-black/5 !text-black"
        >
          ← Back to Services
        </button>
      </div>
      <PageHero
        eyebrow="Service Detail"
        title={service.title}
        text={service.description}
        image={service.image}
      />

      <InfoTiles
        eyebrow="What This Covers"
        title="A premium advisory service with practical depth."
        items={[
          { title: 'Strategy', text: 'Clear direction shaped around your current position and future goals.' },
          { title: 'Clarity', text: 'A simpler decision-making framework for complex financial services or financial choices.' },
          { title: 'Support', text: 'Thoughtful guidance that stays grounded in real-world practicality.' },
        ]}
      />

      <DetailSection
        title="How this service is approached."
        text="Each engagement is adapted to the client's stage, risk appetite, decision pressure, and long-term priorities. The emphasis stays on useful clarity rather than generic consulting language."
        points={[
          'Personalised understanding before recommendations are made',
          'Clear sequencing instead of overwhelming information',
          'Balanced strategic and practical perspective',
        ]}
        image={service.image}
      />

      <InfoTiles
        eyebrow="Best For"
        title="Clients who want structure and confidence."
        items={[
          { title: 'Individuals', text: 'When an important financial or investment decision needs more clarity.' },
          { title: 'Families', text: 'When wealth continuity or long-term planning needs stronger structure.' },
          { title: 'Business Owners, HNIs & Ultra HNIs', text: 'When financial services or personal wealth pressure requires a calmer and more strategic next step.' },
        ]}
      />

      <section className="section page-shell quote-block">
        <blockquote>Premium consulting should simplify the next move, not complicate it.</blockquote>
      </section>

      <InfoTiles
        eyebrow="Expected Outcomes"
        title="What a successful engagement should create."
        items={[
          { title: 'Decision Clarity', text: 'A better understanding of what to do next and why.' },
          { title: 'Strategic Alignment', text: 'Choices that fit both immediate needs and longer-term goals.' },
          { title: 'Calmer Execution', text: 'A more confident path forward with less confusion.' },
        ]}
      />
    </>
  )
}
