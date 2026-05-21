import { useState } from 'react'
import { PageHero } from '../../components/common/PageHero'
import { InfoTiles } from '../Home/InfoTiles'
import { media } from '../../constants/data'

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      e.target.reset() // Clear the form

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation with a clearer next step."
        text="For clients who want direct guidance, structured support, and a more premium advisory experience."
        image={media.contact}
      />

      <section className="section page-shell" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
        <div className="glass-card flex flex-col md:flex-row justify-between items-stretch overflow-hidden" style={{ padding: 0, gap: 0 }}>
          {/* Subtle top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d7a96b] to-transparent opacity-60"></div>

          <a
            href="https://maps.google.com/?q=Shaarav+Enterprise,+B7-1601,+Waterlily,+Adani+Shantigram,+Nr+Vaishnodevi+Circle,+Ahmedabad+-+382421"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/5 hover:bg-black/[0.02] transition-colors duration-300 flex flex-col items-start group !text-[#152b23]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#d7a96b]/10 text-[#8f6330] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-0 !text-[#152b23]">Visit Us</h3>
            </div>
            <p className="font-bold text-sm tracking-wide mb-1 uppercase !text-[#152b23] group-hover:!text-[#8f6330] transition-colors">Shaarav Enterprise</p>
            <p className="text-sm !text-[#152b23]/70 leading-relaxed max-w-[280px]">B7-1601, Waterlily, Adani Shantigram, Nr Vaishnodevi Circle, Ahmedabad - 382421</p>
          </a>

          <a
            href="tel:+919925528021"
            className="flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/5 hover:bg-black/[0.02] transition-colors duration-300 flex flex-col items-start group !text-[#152b23]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#d7a96b]/10 text-[#8f6330] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-0 !text-[#152b23]">Call Us</h3>
            </div>
            <p className="text-sm !text-[#152b23]/70 mb-2">Direct line for immediate assistance</p>
            <span className="text-lg font-medium !text-[#152b23] group-hover:!text-[#8f6330] transition-colors inline-block tracking-wide">+91 9925528021</span>
          </a>

          <a
            href="mailto:info@shaaraventerprise.com"
            className="flex-1 p-8 md:p-10 hover:bg-black/[0.02] transition-colors duration-300 flex flex-col items-start group !text-[#152b23]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#d7a96b]/10 text-[#8f6330] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-0 !text-[#152b23]">Email Us</h3>
            </div>
            <p className="text-sm !text-[#152b23]/70 mb-2">For detailed inquiries and support</p>
            <span className="text-lg font-medium !text-[#152b23] group-hover:!text-[#8f6330] transition-colors inline-block break-all">info@shaaraventerprise.com</span>
          </a>
        </div>
      </section>

      <section className="section page-shell" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* LEFT SIDE: Text Sections */}
          <div className="flex flex-col gap-4 h-full">
            <div className="final-cta__panel" style={{ margin: 0, height: 'auto', padding: '1.5rem' }}>
              <div>
                <span className="eyebrow eyebrow--light">Why Reach Out</span>
                <h2 style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>Whether it&apos;s business anxiety or investment confusion, we will find a cure.</h2>
                <p style={{ fontSize: '0.9rem' }}>
                  Reach out for a first conversation around business growth, real estate,
                  family office planning, or micro-enterprise support.
                </p>
              </div>
            </div>

            <div className="quote-block" style={{ margin: 0, padding: 0 }}>
              <blockquote style={{ fontSize: '1.25rem', textAlign: 'left', margin: '0.5rem 0' }}>Let us help you reach the right path for you and help you decide.</blockquote>
            </div>

            <article className="glass-card flex flex-col justify-center" style={{ margin: 0, padding: '1.5rem', flexGrow: 1 }}>
              <h3 style={{ fontSize: '1.25rem' }}>Response Style</h3>
              <p style={{ fontSize: '0.9rem' }}>Clear, respectful, thoughtful, and tailored to your context.</p>
            </article>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="h-full">
            <article className="glass-card relative h-full flex flex-col justify-center" style={{ width: '100%', margin: 0, padding: '1.5rem 2rem' }}>
              <h3 style={{ marginBottom: '0.25rem', textAlign: 'center', fontSize: '1.5rem' }}>Send a Message</h3>
              <p style={{ textAlign: 'center', opacity: 0.7, marginBottom: '1.5rem', fontSize: '0.85rem' }}>We typically respond within 24 hours.</p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="opacity-80">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="name" className="text-xs font-medium opacity-80 ml-1">Full Name</label>
                      <input
                        name="name"
                        type="text"
                        id="name"
                        className="p-2.5 text-sm rounded-lg bg-white/50 border border-black/5 focus:border-black/20 focus:bg-white focus:outline-none transition-all shadow-sm"
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="email" className="text-xs font-medium opacity-80 ml-1">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        id="email"
                        className="p-2.5 text-sm rounded-lg bg-white/50 border border-black/5 focus:border-black/20 focus:bg-white focus:outline-none transition-all shadow-sm"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="topic" className="text-xs font-medium opacity-80 ml-1">Topic</label>
                    <select
                      name="topic"
                      id="topic"
                      className="p-2.5 text-sm rounded-lg bg-white/50 border border-black/5 focus:border-black/20 focus:bg-white focus:outline-none transition-all shadow-sm cursor-pointer"
                      disabled={isSubmitting}
                    >
                      <option value="business">Business Growth</option>
                      <option value="realestate">Real Estate</option>
                      <option value="familyoffice">Family Office</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-xs font-medium opacity-80 ml-1">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="3"
                      className="p-2.5 text-sm rounded-lg bg-white/50 border border-black/5 focus:border-black/20 focus:bg-white focus:outline-none transition-all shadow-sm resize-none"
                      placeholder="How can we help you?"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="button button--primary mt-2 w-full flex justify-center py-2.5 text-sm tracking-wide disabled:opacity-70">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </article>
          </div>

        </div>
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
