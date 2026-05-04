import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/20 mt-24">
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary-foreground">S</span>
              </div>
              <div>
                <div className="font-display text-xl text-gradient-gold font-semibold">SHAARAV</div>
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Global Ventures</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Bringing the authentic taste of India to kitchens around the world through premium spice exports rooted in tradition and quality.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg text-primary mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[["/", "Home"],["/about","About Us"],["/products","Our Products"],["/quality","Quality Promise"],["/global","Global Reach"],["/contact","Contact"]].map(([to,label]) => (
                <li key={to}><Link to={to} className="hover:text-primary transition">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-primary mb-5">Products</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Whole Spices","Powdered Spices","Blended Masalas","Premium Saffron","Organic Range","Custom Packaging"].map(p => (
                <li key={p} className="hover:text-primary transition cursor-pointer">{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-primary mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Plot 12, Spice Park, Kandla SEZ, Gujarat 370230, India</span></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>+91 98765 43210</span></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>export@shaaravglobal.com</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Shaarav Global Ventures. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Export Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
