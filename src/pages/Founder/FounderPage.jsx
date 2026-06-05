import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'

export function FounderPage() {
  const journeyPoints = [
    'A foundation in commerce, marketing, business law, and taxation, shaped by early hands-on business involvement.',
    'Operational experience in travel, aviation, procurement, and banking before joining the family business in Ahmedabad.',
    'Leadership across clearing, forwarding, warehousing, administration, equity markets, and entrepreneurial consulting.',
  ];

  const credentials = [
    {
      title: 'PGDBA (HR & Finance)',
      subtitle: 'Symbiosis, Pune',
      text: 'Deep academic foundation in human resources, financial management, and business administration.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: 'Lean Six Sigma',
      subtitle: 'Green Belt understanding',
      text: 'Operational excellence methodologies focused on process improvement and variance reduction.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: 'Core Strategy Programme',
      subtitle: 'Trading in Financial Markets',
      text: 'Certified expertise in market structure, macroeconomics, capital planning, and technical execution.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Creative Project Design',
      subtitle: 'Interior & Architectural Instinct',
      text: 'Practical spatial coordination, architectural styling, and design management experience.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="A journey built from curiosity, hands-on work, and steady professional growth."
        text="From early business exposure to structured financial consulting, the founder story behind Shaarav Enterprise is practical, layered, and deeply experienced."
        image={media.founder}
      />
      
      {/* Editorial Profile Section */}
      <section className="section page-shell relative py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Profile on Left */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#d7a96b]/10 rounded-[2.5rem] rotate-2 transition-transform duration-500 group-hover:rotate-1"></div>
            <div 
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-cover bg-center shadow-[0_30px_70px_rgba(20,35,31,0.12)] border border-[#14231f]/10"
              style={{ backgroundImage: `url(${media.founder})` }}
            >
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[1.8rem] bg-[#14231f]/90 text-white backdrop-blur-md border border-white/10 shadow-lg">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d7a96b]">Company Lead</span>
                <h4 className="text-xl font-display mt-1 mb-0 text-white">Shaarav Enterprise</h4>
                <p className="text-sm text-white/70 mt-1 mb-0">Ahmedabad, India</p>
              </div>
            </div>
          </div>
          
          {/* Narrative Copy on Right */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="eyebrow">From the CEO&apos;s Desk</span>
            <h2 className="text-4xl lg:text-5xl font-display text-[#152b23] mt-2 mb-6 leading-tight">
              A philosophy built on direct operational experience.
            </h2>
            <div className="space-y-6 text-[1.1rem] text-muted leading-relaxed">
              <p>
                From Pune to Ahmedabad, the journey has moved through procurement, finance,
                administration, education, trading, creativity, and entrepreneurship.
              </p>
              <blockquote className="border-l-4 border-[#d7a96b] pl-6 my-8 italic text-[#203730] font-medium text-lg bg-[#d7a96b]/5 py-4 pr-4 rounded-r-xl">
                "We cater to single and micro enterprise owners with the best of simplified and structured solutions, combining technology and human effort."
              </blockquote>
              <p>
                Having navigated the complex realities of family business, administrative hurdles, and market dynamics firsthand, the advisory approach is kept simple, tangible, and actionable.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section page-shell relative py-20 bg-[#fffcf7]/40 rounded-[2.5rem] border border-[#14231f]/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">Milestones</span>
          <h2 className="text-4xl font-display text-[#152b23] mt-2">The Professional Journey</h2>
          <p className="text-muted mt-4">More than two decades of diverse, hands-on operational leadership.</p>
        </div>
        
        <div className="relative border-l-2 border-[#d7a96b]/30 ml-4 md:ml-32 space-y-12 max-w-4xl mx-auto">
          {journeyPoints.map((point, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group transition-all duration-300">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#fffaf4] border-2 border-[#8f6330] group-hover:bg-[#8f6330] transition-colors duration-300 shadow-sm"></div>
              
              {/* Step number */}
              <div className="absolute -left-12 md:-left-20 top-0 text-3xl font-display font-bold text-[#8f6330]/20 group-hover:text-[#8f6330]/60 transition-colors duration-300 select-none">
                0{index + 1}
              </div>
              
              {/* Step Card */}
              <div className="p-8 rounded-[1.7rem] bg-[#fffcf7]/80 border border-[#14231f]/8 shadow-soft group-hover:translate-x-1 group-hover:shadow-[0_20px_40px_rgba(20,35,31,0.06)] transition-all duration-500">
                <p className="text-[#152b23] text-[1.1rem] leading-[1.7] m-0 font-medium">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Credentials Grid */}
      <section className="section page-shell py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">Qualifications</span>
          <h2 className="text-4xl font-display text-[#152b23] mt-2">Credentials & Background</h2>
          <p className="text-muted mt-4">Academic and practical competencies supporting strategic advisory roles.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((cred) => (
            <article 
              key={cred.title} 
              className="group relative p-8 rounded-[2.5rem] bg-[#fffcf7]/80 border border-[#14231f]/10 shadow-soft overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(20,35,31,0.06)] flex flex-col justify-between min-h-[220px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(215,169,107,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(215,169,107,0.15)] text-[#8f6330] border border-[rgba(215,169,107,0.3)] shadow-[inset_0_2px_5px_rgba(255,255,255,0.7)] group-hover:bg-[#8f6330] group-hover:text-white transition-colors duration-300">
                    {cred.icon}
                  </div>
                  <div>
                    <h3 className="text-[#152b23] text-xl font-bold m-0 tracking-tight">
                      {cred.title}
                    </h3>
                    <span className="text-xs text-accent-strong uppercase font-bold tracking-widest block mt-0.5">{cred.subtitle}</span>
                  </div>
                </div>
                <p className="text-[#5f6f68] text-[0.98rem] leading-[1.6] m-0 font-medium">
                  {cred.text}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#d7a96b] to-[#8f6330] transition-all duration-500 ease-out group-hover:w-full"></div>
            </article>
          ))}
        </div>
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
