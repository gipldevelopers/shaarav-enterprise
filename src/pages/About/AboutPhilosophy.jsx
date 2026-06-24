export function AboutPhilosophy() {
  const principles = [
    {
      title: "What We Believe",
      text: "Advice should feel clear, practical, and respectful of real financial services conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    },
    {
      title: "What We Avoid",
      text: "Complication for the sake of sounding expert. We value simplicity with depth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
      )
    },
    {
      title: "What Clients Feel",
      text: "More confident, more structured, and less overwhelmed after the right conversation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
      )
    }
  ];

  return (
    <section className="section page-shell relative !py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {principles.map((p, index) => (
          <article 
            key={p.title} 
            className="group relative p-10 rounded-[2.5rem] bg-[#fffcf7]/80 border border-[#14231f]/10 shadow-soft overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(20,35,31,0.08)] flex flex-col justify-between min-h-[300px]"
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(215,169,107,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Background Number */}
            <div className="absolute -top-10 -right-4 text-[12rem] font-display font-bold text-[rgba(20,35,31,0.02)] leading-none select-none transition-transform duration-700 group-hover:scale-110">
              {index + 1}
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(215,169,107,0.15)] text-[#8f6330] border border-[rgba(215,169,107,0.3)] shadow-[inset_0_2px_5px_rgba(255,255,255,0.7)] group-hover:bg-[#8f6330] group-hover:text-white transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="text-[#152b23] text-2xl font-display m-0 tracking-tight relative z-10">
                  {p.title}
                </h3>
              </div>
              <p className="text-[#5f6f68] text-[1.1rem] leading-[1.6] relative z-10 font-medium">
                {p.text}
              </p>
            </div>
            
            {/* Animated Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#d7a96b] to-[#8f6330] transition-all duration-500 ease-out group-hover:w-full"></div>
          </article>
        ))}
      </div>
    </section>
  )
}
