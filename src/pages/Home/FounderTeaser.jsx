import { media } from '../../constants/data'

export function FounderTeaser({ onNavigate }) {
  return (
    <section className="section page-shell founder-teaser !py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Profile Visual on Left */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-[#d7a96b]/10 rounded-[2.5rem] rotate-2 transition-transform duration-500 group-hover:rotate-1"></div>
          <div 
            className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-cover bg-center shadow-[0_30px_70px_rgba(20,35,31,0.12)] border border-[#14231f]/10"
            style={{ backgroundImage: `url(${media.founder})` }}
          >
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[1.8rem] bg-[#14231f]/90 text-white backdrop-blur-md border border-white/10 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d7a96b]">20+ Years Experience</span>
              <h4 className="text-xl font-display mt-1 mb-0 text-white">Grounded Advisory</h4>
            </div>
          </div>
        </div>
        
        {/* Teaser copy on Right */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="eyebrow">From the CEO&apos;s Desk</span>
          <h2 className="text-4xl lg:text-5xl font-display text-[#152b23] mt-2 mb-6 leading-tight">
            A founder journey shaped by discipline, curiosity, and experience.
          </h2>
          <p className="text-[1.1rem] text-muted leading-relaxed mb-8">
            From commerce studies in Pune to hands-on exposure in finance,
            procurement, administration, trading, and entrepreneurship, the Shaarav
            journey is built on doing the work, not only studying it.
          </p>
          <div>
            <button 
              className="button button--primary cursor-pointer" 
              onClick={() => onNavigate('founder')} 
              type="button"
            >
              Read Founder Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
