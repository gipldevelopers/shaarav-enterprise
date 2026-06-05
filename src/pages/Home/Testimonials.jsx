import { useState } from 'react'
import { testimonials } from '../../constants/data'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section page-shell testimonials-section py-20 relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute top-10 left-10 text-[18rem] font-display font-extrabold text-[#d7a96b]/5 leading-none select-none pointer-events-none">
        “
      </div>
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="eyebrow">Testimonials</span>
        <h2 className="text-4xl font-display text-[#152b23] mt-2">What Our Clients Say</h2>
        <p className="text-muted mt-4">Feedback from families, owners, and investors we serve.</p>
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Testimonial Card */}
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-[#fffcf7]/90 border border-[#14231f]/10 shadow-soft relative min-h-[250px] flex flex-col justify-between transition-all duration-500">
          <p className="text-[#152b23] text-xl md:text-2xl font-medium italic leading-[1.6] mb-8 font-serif">
            "{testimonials[activeIndex].quote}"
          </p>
          
          <div className="flex items-center justify-between border-t border-[#14231f]/8 pt-6">
            <div>
              <h4 className="text-[#152b23] font-bold text-lg m-0">
                {testimonials[activeIndex].author}
              </h4>
              <p className="text-accent-strong text-sm font-semibold m-0 mt-0.5">
                {testimonials[activeIndex].role}
              </p>
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-muted bg-[#14231f]/5 px-3 py-1.5 rounded-full">
              {testimonials[activeIndex].location}
            </span>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={handlePrev}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#14231f]/10 bg-white shadow-soft text-[#152b23] cursor-pointer hover:bg-[#8f6330] hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          </button>
          
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-[#8f6330]' : 'bg-[#14231f]/15'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-[#14231f]/10 bg-white shadow-soft text-[#152b23] cursor-pointer hover:bg-[#8f6330] hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
