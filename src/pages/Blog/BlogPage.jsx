import { PageHero } from '../../components/common/PageHero'

import { InfoTiles } from '../Home/InfoTiles'
import { media, blogCards } from '../../constants/data'

export function BlogPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Useful thinking for financial services, families, and investors."
        text="A premium website feels more complete when insight and credibility continue beyond service descriptions."
        image={media.planning}
      />
      
      <section className="section page-shell blog-grid">
        {blogCards.map((card) => (
          <article key={card.title} className="blog-card">
            <span>{card.category}</span>
            <h3>{card.title}</h3>
            <p>{card.summary}</p>
            <button onClick={() => onNavigate(`blog/${card.id}`)} type="button">
              Read Article
            </button>
          </article>
        ))}
      </section>
      
      <section className="section page-shell story-layout">
        <div className="story-layout__copy">
          <span className="eyebrow">Editorial Direction</span>
          <h2>Short, practical, credibility-building content.</h2>
          <p>
            These sections are designed to support a premium client impression: informed,
            calm, and grounded in real decision-making.
          </p>
        </div>
        <article
          className="image-panel image-panel--portrait"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.16), rgba(11, 22, 19, 0.54)), url(${media.boardroom})`,
          }}
        />
      </section>
      
      <section className="section page-shell comparison-grid">
        <article className="glass-card">
          <h3>Investment Thought</h3>
          <p>Decision frameworks, mindset, and clarity over noise.</p>
        </article>
        <article className="glass-card">
          <h3>Financial Services Thought</h3>
          <p>Practical improvement ideas for owners and operators.</p>
        </article>
        <article className="glass-card">
          <h3>Family Thought</h3>
          <p>Continuity, structure, and relationship-sensitive planning.</p>
        </article>
      </section>
      
      <section className="section page-shell quote-block">
        <blockquote>Insight should feel useful, not merely impressive.</blockquote>
      </section>
      
      <section className="section page-shell final-cta">
        <div className="final-cta__panel">
          <div>
            <span className="eyebrow eyebrow--light">Need Direct Advice?</span>
            <h2>Insights are valuable. Personal consulting is better when the decision matters.</h2>
          </div>
        </div>
      </section>

      <InfoTiles
        eyebrow="Reading Value"
        title="The blog should build trust, not just fill space."
        items={[
          { title: 'Short and Strong', text: 'Good content respects the reader\'s time and still adds real value.' },
          { title: 'Decision-Oriented', text: 'Topics support actual financial services, property, and family choices.' },
          { title: 'Credibility Building', text: 'Insights deepen trust before the first conversation even begins.' },
        ]}
      />
    </>
  )
}
