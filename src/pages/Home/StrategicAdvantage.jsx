export function StrategicAdvantage({ eyebrow, title, items }) {
  return (
    <section className="section page-shell relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Sticky or static Text */}
        <div className="section-heading max-w-xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <div className="w-20 h-1 mt-8 bg-gradient-to-r from-[#d7a96b] to-[#8f6330] rounded-full"></div>
        </div>

        {/* Right Side: Stacked Items */}
        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <article 
              key={item.title} 
              className="group relative flex items-start p-8 md:p-10 rounded-[2rem] bg-[#fffcf7]/90 border border-[#14231f]/10 shadow-soft transition-all duration-300 hover:bg-white hover:-translate-y-1 overflow-hidden"
            >
              {/* Background accent on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(215,169,107,0.06)] rounded-bl-[100px] pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:bg-[rgba(215,169,107,0.1)]"></div>
              
              <div className="flex-none mr-6 mt-1">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#152b23] text-[#f8f3eb] font-bold text-lg shadow-[0_8px_20px_rgba(21,43,35,0.2)] group-hover:scale-110 transition-transform">
                  0{i + 1}
                </span>
              </div>
              <div className="relative z-10">
                <strong className="block text-[#152b23] text-xl font-display tracking-tight mb-2 group-hover:text-[#8f6330] transition-colors">
                  {item.title}
                </strong>
                <p className="text-[#5f6f68] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
