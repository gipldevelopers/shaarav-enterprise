export function WhyChooseUs({ eyebrow, title, items }) {
  const icons = [
    // Clarity icon
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
    // Discretion icon
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    // Consistency icon
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  ];

  return (
    <section className="section page-shell">
      <div className="section-heading mx-auto text-center flex flex-col items-center">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {items.map((item, i) => (
          <article 
            key={item.title} 
            className="p-8 border border-[#14231f]/10 rounded-[2rem] bg-[#fffcf7]/90 shadow-soft transition-transform hover:-translate-y-1 relative overflow-hidden group"
          >
            {/* Subtle top accent line on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#d7a96b] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#14231f]/10 shadow-sm flex items-center justify-center text-[#8f6330] mb-6">
              {icons[i] || icons[0]}
            </div>
            
            <strong className="block text-[#152b23] text-[1.4rem] font-display tracking-tight mb-3">
              {item.title}
            </strong>
            <p className="text-muted leading-relaxed text-[1.05rem]">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
