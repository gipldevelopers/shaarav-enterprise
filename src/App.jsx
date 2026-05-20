import { useEffect, useMemo, useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Services', route: 'services' },
  { label: 'Founder', route: 'founder' },
  { label: 'Blog', route: 'blog' },
  { label: 'Contact', route: 'contact' },
]

const media = {
  hero:
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80',
  boardroom:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  financial:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  planning:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
  family:
    'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80',
  realEstate:
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
  founder:
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
  workspace:
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
  contact:
    'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80',
}

const contactCards = [
  {
    title: 'Instagram',
    text: 'Drop a DM',
    href: 'https://www.instagram.com/',
    icon: 'instagram',
    colorClass: 'social-card--instagram',
  },
  {
    title: 'LinkedIn',
    text: 'Connect With Us',
    href: 'https://www.linkedin.com/',
    icon: 'linkedin',
    colorClass: 'social-card--linkedin',
  },
  {
    title: 'Facebook',
    text: 'Join the Conversation',
    href: 'https://www.facebook.com/',
    icon: 'facebook',
    colorClass: 'social-card--facebook',
  },
]

const serviceCards = [
  {
    id: 'financial-investment',
    title: 'Financial & Investment Consulting',
    description:
      'Tailored consulting for individuals and MSMEs across investment strategy, financial direction, and decision clarity.',
    image: media.financial,
  },
  {
    id: 'family-office-estate',
    title: 'Family Office Management & Estate Planning',
    description:
      'Holistic support for families seeking continuity, governance, estate structure, and wealth protection across generations.',
    image: media.family,
  },
  {
    id: 'real-estate-investment',
    title: 'Real Estate Investment',
    description:
      'Reliable property guidance for homebuyers and investors looking for smart, grounded, and opportunity-led decisions.',
    image: media.realEstate,
  },
  {
    id: 'small-enterprise-solutions',
    title: 'Small Enterprise Solutions',
    description:
      'Structured help for growing businesses through operational clarity, financial discipline, and practical strategic support.',
    image: media.workspace,
  },
]

const blogCards = [
  {
    id: 'micro-enterprise-financial-discipline',
    title: 'How Micro Enterprises Can Build Financial Discipline',
    category: 'Insights',
    summary:
      'A simple framework for business owners who want better control without overcomplicating daily operations.',
  },
  {
    id: 'family-wealth-planning-practical',
    title: 'Family Wealth Planning That Actually Feels Practical',
    category: 'Family Office',
    summary:
      'Thoughtful ways to approach continuity, structure, and intergenerational planning with more clarity.',
  },
  {
    id: 'real-estate-investment-intent',
    title: 'Choosing Real Estate With Investment Intent',
    category: 'Property',
    summary:
      'What to evaluate when property is both an emotional decision and a long-term financial commitment.',
  },
]

function getRouteFromHash() {
  const raw = window.location.hash.replace(/^#\/?/, '').trim()
  const route = raw || 'home'
  const detailRoutes = [
    ...serviceCards.map((item) => `service/${item.id}`),
    ...blogCards.map((item) => `blog/${item.id}`),
  ]
  const validRoutes = [...navItems.map((item) => item.route), ...detailRoutes]
  return validRoutes.includes(route) ? route : 'home'
}

function SocialIcon({ type }) {
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="35%" stopColor="#fa7e1e" />
            <stop offset="68%" stopColor="#d62976" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#instagramGradient)" />
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.8" r="1.2" fill="#fff" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0a66c2" />
        <rect x="6" y="9.2" width="2.5" height="8.2" fill="#fff" />
        <circle cx="7.25" cy="6.7" r="1.45" fill="#fff" />
        <path
          d="M11 9.2h2.4v1.2c.6-.9 1.7-1.5 3.2-1.5 2.6 0 4 1.5 4 4.7v3.8H18v-3.5c0-1.7-.6-2.6-2-2.6-1.4 0-2.3 1-2.3 2.6v3.5H11V9.2z"
          fill="#fff"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#1877f2" />
      <path
        d="M13.2 20v-6.6h2.2l.4-2.6h-2.6V9.1c0-.8.3-1.5 1.6-1.5H16V5.4c-.3 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v2.3H9v2.6h2.1V20h2.1z"
        fill="#fff"
      />
    </svg>
  )
}

function Brand() {
  return (
    <div className="brand__copy">
      <p className="brand__name">Shaarav Enterprise</p>
      <p className="brand__tag">Consulting for growth, structure, and clarity</p>
    </div>
  )
}

function InfoTiles({ eyebrow, title, items }) {
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

function Header({ route, onNavigate }) {
  return (
    <header className="topbar">
      <button className="brand brand--button" onClick={() => onNavigate('home')} type="button">
        <img src="/logo.png" alt="Shaarav Enterprise logo" className="brand__logo" />
        <Brand />
      </button>

      <nav className="nav">
        {navItems.map((item) => (
          <button
            key={item.route}
            className={item.route === route ? 'is-active' : ''}
            onClick={() => onNavigate(item.route)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

function HeroSection() {
  const metrics = [
    { value: '20+', label: 'Years of practical business exposure' },
    { value: '4', label: 'Focused consulting verticals' },
    { value: 'Ahmedabad', label: 'Trusted local roots with strategic reach' },
  ]

  return (
    <section className="hero page-shell" id="home">
      <div
        className="hero__media"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 16, 15, 0.82) 0%, rgba(8, 16, 15, 0.58) 42%, rgba(8, 16, 15, 0.22) 100%), url(${media.hero})`,
        }}
      >
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__grid">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--light">Ahmedabad, India</span>
            <h1>Strategic financial guidance with a premium, personal approach.</h1>
            <p className="hero__lead">
              Shaarav Enterprise helps business owners, families, and investors make
              sharper decisions through structured advisory, long-term thinking, and
              deeply practical business insight.
            </p>

            <div className="hero__pills">
              <span>Investment clarity</span>
              <span>Family office planning</span>
              <span>Real estate guidance</span>
            </div>

            <div className="hero__actions">
              <a className="button button--primary" href="#/contact">
                Book a Consultation
              </a>
              <a className="button button--secondary" href="#/services">
                View Services
              </a>
            </div>
          </div>

          <aside className="hero__spotlight">
            <p className="hero__spotlight-label">Shaarav Signature</p>
            <h2 className="hero__spotlight-title">
              Built for clients who value clarity, discretion, and direction.
            </h2>
            <p>
              We bring together consulting discipline, financial awareness, and
              entrepreneurial understanding to create a more confident path forward.
            </p>
            <div className="hero__spotlight-line" />
            <p className="hero__spotlight-note">
              From investment planning to enterprise guidance, every recommendation is
              designed to feel personal, structured, and actionable.
            </p>
          </aside>
        </div>

        <div className="metrics">
          {metrics.map((item) => (
            <article key={item.label} className="metric-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomePage({ onNavigate }) {
  return (
    <>
      <HeroSection />

      <section className="section page-shell trust-strip">
        <div className="trust-strip__items">
          <span>Business Consulting</span>
          <span>Family Office Advisory</span>
          <span>Real Estate Strategy</span>
          <span>Micro Enterprise Solutions</span>
        </div>
      </section>

      <section className="section page-shell intro-split">
        <div className="section-heading">
          <span className="eyebrow">About Shaarav</span>
          <h2>We help businesses grow, sustain, and move with more certainty.</h2>
          <p>
            Shaarav Enterprise is built for clients who want practical advice,
            strategic thinking, and a deeply human consulting experience.
          </p>
        </div>

        <div className="intro-split__grid">
          <article className="glass-card copy-card">
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
            className="image-panel image-panel--tall"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(14, 28, 24, 0.2), rgba(14, 28, 24, 0.62)), url(${media.boardroom})`,
            }}
          >
            <div>
              <span className="eyebrow eyebrow--light">Premium Advisory</span>
              <h3>Structured guidance for modern business families and entrepreneurs.</h3>
            </div>
          </article>
        </div>
      </section>

      <section className="section page-shell band-section">
        <div className="band-section__grid">
          <article className="band-card band-card--dark">
            <span className="eyebrow eyebrow--light">Vision</span>
            <p>
              To empower individuals and families with clarity, confidence, and
              strategic financial guidance that builds prosperity and a well-structured
              legacy.
            </p>
          </article>

          <article className="band-card band-card--accent">
            <span className="eyebrow">Mission</span>
            <p>
              To offer strategic consulting, personalised coaching, and investment
              planning that protects wealth continuity and supports generational
              success.
            </p>
          </article>
        </div>
      </section>

      <section className="section page-shell services-preview">
        <div className="section-heading section-heading--wide">
          <span className="eyebrow">Our Services</span>
          <h2>Designed to feel credible in the room and useful in the real world.</h2>
          <p>
            Over the years we have recognised the need for optimal solutions that cut
            costs, improve productivity, and bring clear direction to each stage of
            growth.
          </p>
        </div>

        <div className="services-grid">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className="service-card"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(9, 18, 16, 0.08), rgba(9, 18, 16, 0.86)), url(${service.image})`,
              }}
            >
              <div className="service-card__content">
                <span className="service-card__kicker">Consulting</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button onClick={() => onNavigate(`service/${service.id}`)} type="button">
                  Explore Service
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section page-shell process-showcase">
        <div className="process-showcase__grid">
          <article className="process-copy">
            <span className="eyebrow">Our Approach</span>
            <h2>Every engagement moves through a more structured path.</h2>
          </article>
          <div className="process-steps">
            <article className="process-step">
              <strong>01</strong>
              <h3>Understand</h3>
              <p>We listen deeply to your business reality, family priorities, and goals.</p>
            </article>
            <article className="process-step">
              <strong>02</strong>
              <h3>Structure</h3>
              <p>We simplify the complexity into a clear, actionable framework.</p>
            </article>
            <article className="process-step">
              <strong>03</strong>
              <h3>Guide</h3>
              <p>We support confident decisions with thoughtful, grounded recommendations.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section page-shell sector-mosaic">
        <div className="section-heading">
          <span className="eyebrow">Who We Serve</span>
          <h2>Different client needs, different section styles, one clear standard.</h2>
        </div>
        <div className="mosaic-grid">
          <article className="mosaic-card">
            <h3>Business Owners</h3>
            <p>Owners who need structure, growth planning, and calmer decision-making.</p>
          </article>
          <article className="mosaic-card mosaic-card--image" style={{ backgroundImage: `url(${media.workspace})` }} />
          <article className="mosaic-card mosaic-card--accent">
            <h3>Families</h3>
            <p>Families looking for continuity, wealth clarity, and long-term planning.</p>
          </article>
          <article className="mosaic-card">
            <h3>Investors</h3>
            <p>Clients who want practical analysis, confidence, and opportunity-led direction.</p>
          </article>
        </div>
      </section>

      <InfoTiles
        eyebrow="Why Clients Choose Us"
        title="What makes the experience feel more premium."
        items={[
          { title: 'Clarity', text: 'Complex topics are translated into calmer, simpler next steps.' },
          { title: 'Discretion', text: 'Money, family, and business matters are handled with care.' },
          { title: 'Consistency', text: 'The tone stays polished, thoughtful, and decision-focused.' },
        ]}
      />

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

      <section className="section page-shell credentials-section">
        <div className="section-heading">
          <span className="eyebrow">Certificates & Achievements</span>
          <h2>Professional credibility backed by ongoing learning.</h2>
        </div>

        <div className="credentials-grid">
          {[
            'PGDBA from Symbiosis, Pune in HR & Finance',
            'Understanding of Lean Six Sigma Green Belt',
            'Certified Core Strategy Programme in Trading in Markets',
            '20 years of experience across business, education, finance, and management',
          ].map((item) => (
            <article key={item} className="credential-card">
              <span className="credential-card__mark" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <InfoTiles
        eyebrow="Strategic Advantage"
        title="Structure creates value in more ways than one."
        items={[
          { title: 'Better Alignment', text: 'Business, family, and financial decisions can move together.' },
          { title: 'Faster Action', text: 'A clear framework reduces hesitation and improves momentum.' },
          { title: 'Reduced Friction', text: 'Less confusion means more energy for real progress.' },
        ]}
      />

      <section className="section page-shell final-cta">
        <div className="final-cta__panel">
          <div>
            <span className="eyebrow eyebrow--light">Connect With Us</span>
            <h2>Business anxiety? Drop us a line and let&apos;s find the right cure.</h2>
            <p>
              Whether you need investment clarity, family office guidance, property
              direction, or small-enterprise consulting, we are here to help you move
              with confidence.
            </p>
          </div>
          <button className="button button--primary" onClick={() => onNavigate('contact')} type="button">
            Contact Shaarav
          </button>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A consulting practice built on lived business experience."
        text="Shaarav Enterprise brings together commerce, family business exposure, administration, finance, and entrepreneurial thinking into a premium advisory experience."
        image={media.boardroom}
      />
      <section className="section page-shell narrative-grid">
        <article className="glass-card">
          <h3>What We Believe</h3>
          <p>Advice should feel clear, practical, and respectful of real business conditions.</p>
        </article>
        <article className="glass-card">
          <h3>What We Avoid</h3>
          <p>Complication for the sake of sounding expert. We value simplicity with depth.</p>
        </article>
        <article className="glass-card">
          <h3>What Clients Feel</h3>
          <p>More confident, more structured, and less overwhelmed after the right conversation.</p>
        </article>
      </section>
      <section className="section page-shell story-layout">
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
          className="image-panel image-panel--portrait"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.2), rgba(11, 22, 19, 0.55)), url(${media.planning})`,
          }}
        />
      </section>
      <section className="section page-shell band-section">
        <div className="band-section__grid">
          <article className="band-card band-card--dark">
            <span className="eyebrow eyebrow--light">Vision</span>
            <p>Clarity, confidence, and long-term prosperity with a structured legacy.</p>
          </article>
          <article className="band-card band-card--accent">
            <span className="eyebrow">Mission</span>
            <p>Strategic financial consulting and personalised coaching for decisive action.</p>
          </article>
        </div>
      </section>
      <section className="section page-shell process-steps process-steps--alt">
        <article className="process-step">
          <strong>01</strong>
          <h3>Listen</h3>
          <p>Understand the client context before offering any recommendation.</p>
        </article>
        <article className="process-step">
          <strong>02</strong>
          <h3>Clarify</h3>
          <p>Translate complexity into a decision-ready path that feels manageable.</p>
        </article>
        <article className="process-step">
          <strong>03</strong>
          <h3>Support</h3>
          <p>Help clients move forward with more confidence and better structure.</p>
        </article>
      </section>
      <section className="section page-shell quote-block">
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

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Advisory built for business, family, property, and growth."
        text="Each service is designed to feel premium, understandable, and directly useful in the real world."
        image={media.financial}
      />
      <section className="section page-shell services-grid services-grid--full">
        {serviceCards.map((service) => (
          <article
            key={service.title}
            className="service-card service-card--large"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(9, 18, 16, 0.08), rgba(9, 18, 16, 0.86)), url(${service.image})`,
            }}
          >
            <div className="service-card__content">
              <span className="service-card__kicker">Service Vertical</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button type="button">Request Consultation</button>
            </div>
          </article>
        ))}
      </section>
      <section className="section page-shell comparison-grid">
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
          <p>Operational clarity, cash-flow awareness, and strategy grounded in business reality.</p>
        </article>
      </section>
      <section className="section page-shell story-layout">
        <article
          className="image-panel image-panel--portrait"
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
      <section className="section page-shell band-section">
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
      <section className="section page-shell quote-block">
        <blockquote>We would also look into other special aspects of our customers&apos; needs with prior discussions.</blockquote>
      </section>

      <InfoTiles
        eyebrow="Service Strengths"
        title="Each service area solves a different kind of pressure."
        items={[
          { title: 'Financial Depth', text: 'Useful direction for planning, investment, and decision clarity.' },
          { title: 'Family Continuity', text: 'Sensitive structuring for wealth, legacy, and protection.' },
          { title: 'Business Practicality', text: 'Advice that respects the day-to-day reality of smaller enterprises.' },
        ]}
      />
    </>
  )
}

function FounderPage() {
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
      <section className="section page-shell founder-page-grid">
        <article className="glass-card">
          <span className="eyebrow">From the CEO&apos;s Desk</span>
          <h2>It began with commerce, family business, and a natural pull toward enterprise.</h2>
          <p>
            From Pune to Ahmedabad, the journey has moved through procurement, finance,
            administration, education, trading, creativity, and entrepreneurship.
          </p>
        </article>
        <article
          className="image-panel image-panel--portrait"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11, 22, 19, 0.12), rgba(11, 22, 19, 0.42)), url(${media.workspace})`,
          }}
        />
      </section>
      <section className="section page-shell timeline-layout">
        {journeyPoints.map((point, index) => (
          <article key={point} className="timeline-card">
            <strong>0{index + 1}</strong>
            <p>{point}</p>
          </article>
        ))}
      </section>
      <section className="section page-shell credentials-grid">
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
      <section className="section page-shell quote-block">
        <blockquote>
          Tangible, cognizable, and intelligible services grounded in more than two decades of experience.
        </blockquote>
      </section>
      <section className="section page-shell final-cta">
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

function BlogPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Useful thinking for businesses, families, and investors."
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
          <h3>Business Thought</h3>
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
          { title: 'Short and Strong', text: 'Good content respects the reader’s time and still adds real value.' },
          { title: 'Decision-Oriented', text: 'Topics support actual business, property, and family choices.' },
          { title: 'Credibility Building', text: 'Insights deepen trust before the first conversation even begins.' },
        ]}
      />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation with a clearer next step."
        text="For clients who want direct guidance, structured support, and a more premium advisory experience."
        image={media.contact}
      />
      <section className="section page-shell contact-grid">
        <article className="glass-card contact-card">
          <h3>Visit Us</h3>
          <p>Shaarav Enterprise</p>
          <p>B7-1601, Waterlily, Adani Shantigram, Nr Vaishnodevi Circle, Ahmedabad - 382421</p>
        </article>
        <article className="glass-card contact-card">
          <h3>Call Us</h3>
          <a href="tel:+919925528021">+91 9925528021</a>
        </article>
        <article className="glass-card contact-card">
          <h3>Email Us</h3>
          <a href="mailto:info@shaaraventerprise.com">info@shaaraventerprise.com</a>
        </article>
      </section>
      <section className="section page-shell contact-cta-panel">
        <div className="final-cta__panel">
          <div>
            <span className="eyebrow eyebrow--light">Why Reach Out</span>
            <h2>Whether it&apos;s business anxiety or investment confusion, we will find a cure.</h2>
            <p>
              Reach out for a first conversation around business growth, real estate,
              family office planning, or micro-enterprise support.
            </p>
          </div>
        </div>
      </section>
      <section className="section page-shell quote-block">
        <blockquote>Let us help you reach the right path for you and help you decide.</blockquote>
      </section>
      <section className="section page-shell note-panel">
        <article className="glass-card">
          <h3>Response Style</h3>
          <p>Clear, respectful, thoughtful, and tailored to your context.</p>
        </article>
      </section>

      <InfoTiles
        eyebrow="Before You Reach Out"
        title="A few reasons clients usually contact us."
        items={[
          { title: 'Need Clarity', text: 'When the next financial or business step feels unclear.' },
          { title: 'Need Structure', text: 'When ideas exist but need better shape and direction.' },
          { title: 'Need Confidence', text: 'When an important decision requires more grounded judgment.' },
        ]}
      />
    </>
  )
}

function ServiceDetailPage({ service }) {
  return (
    <>
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
          { title: 'Clarity', text: 'A simpler decision-making framework for complex business or financial choices.' },
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
          { title: 'Owners', text: 'When business pressure requires a calmer and more strategic next step.' },
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

function BlogDetailPage({ post }) {
  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        text={post.summary}
        image={post.category === 'Property' ? media.realEstate : post.category === 'Family Office' ? media.family : media.financial}
      />
      <DetailSection
        title="Why this topic matters."
        text="The blog detail experience should feel useful and editorial, not generic. Each article supports a more informed and premium brand impression while still staying practical."
        points={[
          'Focused on actual decision-making rather than vague inspiration',
          'Written for business owners, families, and investors',
          'Structured to support trust and clarity quickly',
        ]}
        image={post.category === 'Property' ? media.realEstate : post.category === 'Family Office' ? media.family : media.financial}
      />
      <InfoTiles
        eyebrow="Key Takeaways"
        title="A concise way to absorb the main message."
        items={[
          { title: 'Context', text: 'Good decisions begin with understanding the real situation properly.' },
          { title: 'Structure', text: 'A simple framework often creates more progress than more information.' },
          { title: 'Judgment', text: 'The strongest decisions balance opportunity, timing, and discipline.' },
        ]}
      />
      <section className="section page-shell quote-block">
        <blockquote>Insight is valuable when it changes how you think about the next decision.</blockquote>
      </section>
      <InfoTiles
        eyebrow="Where to Go Next"
        title="Reading is helpful. Personal advice is better when the decision is significant."
        items={[
          { title: 'Discuss', text: 'Use the article as a starting point for a more direct consulting conversation.' },
          { title: 'Clarify', text: 'Translate general insight into something relevant to your own context.' },
          { title: 'Act', text: 'Move forward with stronger structure and more confidence.' },
        ]}
      />
    </>
  )
}

function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero page-shell">
      <div
        className="page-hero__media"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(9, 17, 16, 0.76) 0%, rgba(9, 17, 16, 0.48) 46%, rgba(9, 17, 16, 0.24) 100%), url(${image})`,
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

function Footer({ onNavigate }) {
  return (
    <footer className="footer page-shell">
      <div className="footer__top">
        <button className="brand brand--button footer__brand-button" onClick={() => onNavigate('home')} type="button">
          <img src="/logo.png" alt="" className="footer__logo" />
          <Brand />
        </button>

        <div className="footer__links">
          {navItems.map((item) => (
            <button key={item.route} onClick={() => onNavigate(item.route)} type="button">
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="footer__socials">
        {contactCards.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`social-card ${item.colorClass}`}
          >
            <div className="social-card__icon">
              <SocialIcon type={item.icon} />
            </div>
            <div className="social-card__copy">
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          </a>
        ))}
      </div>

      <p className="footer__copyright">Copyright (c) 2026 Shaarav Enterprise. All Rights Reserved.</p>
    </footer>
  )
}

function App() {
  const [route, setRoute] = useState(() => getRouteFromHash())

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (nextRoute) => {
    window.location.hash = nextRoute === 'home' ? '#/' : `#/${nextRoute}`
  }

  const currentPage = useMemo(() => {
    const matchedService = serviceCards.find((item) => `service/${item.id}` === route)
    if (matchedService) {
      return <ServiceDetailPage service={matchedService} />
    }

    const matchedBlog = blogCards.find((item) => `blog/${item.id}` === route)
    if (matchedBlog) {
      return <BlogDetailPage post={matchedBlog} />
    }

    switch (route) {
      case 'about':
        return <AboutPage />
      case 'services':
        return <ServicesPage />
      case 'founder':
        return <FounderPage />
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }, [route])

  return (
    <div className="site-shell">
      <Header route={route} onNavigate={handleNavigate} />
      <main>{currentPage}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
