import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality" },
  { to: "/global", label: "Global Reach" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3 shadow-sm" : "py-6 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center shadow-luxury">
            <span className="font-display text-xl font-bold text-primary-foreground">S</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl text-gradient-gold font-semibold tracking-wider">SHAARAV</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Global Ventures</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
              activeProps={{ className: "text-primary" }}>
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform shadow-luxury">
          Get a Quote
        </Link>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass mt-3 mx-6 rounded-2xl p-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-foreground/70 hover:text-primary">{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
