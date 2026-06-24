import { media } from '../../constants/data'

export function IntroSplit() {
  return (
    <section className="section page-shell intro-split !mt-[clamp(1rem,3vw,3rem)] !pt-0">
      <div className="section-heading">
        <span className="eyebrow">About Shaarav</span>
        <h2>We help financial services grow, sustain, and move with more certainty.</h2>
       
      </div>

      <div className="intro-split__grid">
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-start p-6 rounded-[1.5rem] bg-[#fffcf7]/82 border border-[#14231f]/8 shadow-soft">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d7a96b]/20 text-[#8f6330] font-bold text-sm shrink-0">1</span>
            <div>
              <h4 className="text-[1.15rem] font-bold text-[#152b23] mb-1">Simplified Solutions</h4>
              <p className="!mt-0 text-muted">We cater to single and micro enterprise owners through simplified, structured solutions powered by technology and human effort.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-6 rounded-[1.5rem] bg-[#fffcf7]/82 border border-[#14231f]/8 shadow-soft">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d7a96b]/20 text-[#8f6330] font-bold text-sm shrink-0">2</span>
            <div>
              <h4 className="text-[1.15rem] font-bold text-[#152b23] mb-1">Connected Network</h4>
              <p className="!mt-0 text-muted">We do more than advise. We help bring together demand, supply, financial services buyers, sellers, and investors so clients can move to an actionable path.</p>
            </div>
          </div>
        </div>

        <article
          className="image-panel image-panel--tall !min-h-[20rem] !p-6"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(14, 28, 24, 0.2), rgba(14, 28, 24, 0.62)), url(${media.boardroom})`,
          }}
        >
          <div>
            <span className="eyebrow eyebrow--light">Premium Advisory</span>
            <h3 className="!max-w-[18ch]">Structured guidance for modern financial services families and entrepreneurs.</h3>
          </div>
        </article>
      </div>
    </section>
  )
}
