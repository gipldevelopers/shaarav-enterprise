import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'
import { AboutPhilosophy } from './AboutPhilosophy'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A consulting practice built on lived business experience."
        text="Shaarav Enterprise brings together commerce, family business exposure, administration, finance, and entrepreneurial thinking into a premium advisory experience."
        image={media.boardroom}
      />
      
      <AboutPhilosophy />
      
      <section className="page-shell story-layout !my-12">
        <div className="story-layout__copy">
          <span className="eyebrow">The Shaarav Standard</span>
          <h2>We help businesses grow and sustain.</h2>
          <p>
            Greetings from Shaarav Enterprise. We cater to single or micro enterprise
            owners with the best of simplified and structured solutions using
            technology and human effort together.
          </p>
          <p>
            We not only bring together demand and supply but also open the route to
            meaningful connections between buyers, sellers, and investors.
          </p>
        </div>
        <article
          className="image-panel image-panel--portrait !min-h-[20rem]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.2), rgba(11, 22, 19, 0.55)), url(${media.planning})`,
          }}
        />
      </section>
      
      <section className="page-shell band-section !my-12">
        <div className="band-section__grid">
          <article className="band-card band-card--dark !p-6">
            <span className="eyebrow eyebrow--light">Vision</span>
            <p>Clarity, confidence, and long-term prosperity with a structured legacy.</p>
          </article>
          <article className="band-card band-card--accent !p-6">
            <span className="eyebrow">Mission</span>
            <p>Strategic financial consulting and personalised coaching for decisive action.</p>
          </article>
        </div>
      </section>
      
      <section className="page-shell process-steps process-steps--alt !my-12">
        <article className="process-step !p-6">
          <strong>01</strong>
          <h3>Listen</h3>
          <p>Understand the client context before offering any recommendation.</p>
        </article>
        <article className="process-step !p-6">
          <strong>02</strong>
          <h3>Clarify</h3>
          <p>Translate complexity into a decision-ready path that feels manageable.</p>
        </article>
        <article className="process-step !p-6">
          <strong>03</strong>
          <h3>Support</h3>
          <p>Help clients move forward with more confidence and better structure.</p>
        </article>
      </section>
      
      <section className="page-shell quote-block !my-12">
        <blockquote>"Let us help you reach out to the right path for you and help you decide."</blockquote>
      </section>

      <InfoTiles
        eyebrow="About Highlights"
        title="The Shaarav identity is built on more than positioning."
        items={[
          { title: 'Grounded Experience', text: 'The advisory style comes from real operational and financial exposure.' },
          { title: 'Human Approach', text: 'The client experience stays warm, direct, and understandable.' },
          { title: 'Premium Intent', text: 'Presentation and guidance are designed to feel elevated, not generic.' },
        ]}
      />
    </>
  )
}
