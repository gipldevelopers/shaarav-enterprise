export function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className="w-10 h-px bg-primary" />
      <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">
        {children}
      </span>
      <span className="w-10 h-px bg-primary" />
    </div>
  );
}

export function SectionHeading({ label, title, subtitle, center = true }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-10`}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
