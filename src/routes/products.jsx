import { Link } from "react-router-dom";
import { ArrowRight, Filter, Package, Award, Leaf, Star } from "lucide-react";
import hero from "@/assets/hero-spices.jpg";
import whole from "@/assets/whole-spices.jpg";
import powders from "@/assets/powders.jpg";
import saffron from "@/assets/saffron.jpg";
import cardamom from "@/assets/cardamom-hands.jpg";
import jars from "@/assets/jars.jpg";
import mortar from "@/assets/mortar.jpg";
import { SectionHeading, SectionLabel } from "@/components/site/Section";



const categories = [
  "Whole Spices",
  "Powdered Spices",
  "Blended Masalas",
  "Saffron",
  "Organic",
  "Custom Packaging",
];

const items = [
  { n: "Black Pepper", c: "Whole Spices", img: whole, price: "On Request", grade: "Premium" },
  { n: "Green Cardamom", c: "Whole Spices", img: cardamom, price: "On Request", grade: "AAA" },
  { n: "Cinnamon Sticks", c: "Whole Spices", img: whole, price: "On Request", grade: "Premium" },
  { n: "Cloves", c: "Whole Spices", img: whole, price: "On Request", grade: "Hand-picked" },
  { n: "Cumin Seeds", c: "Whole Spices", img: hero, price: "On Request", grade: "Sortex" },
  { n: "Star Anise", c: "Whole Spices", img: whole, price: "On Request", grade: "Premium" },
  {
    n: "Turmeric Powder",
    c: "Powdered Spices",
    img: powders,
    price: "On Request",
    grade: "5% Curcumin",
  },
  {
    n: "Red Chili Powder",
    c: "Powdered Spices",
    img: powders,
    price: "On Request",
    grade: "Kashmiri",
  },
  {
    n: "Coriander Powder",
    c: "Powdered Spices",
    img: powders,
    price: "On Request",
    grade: "Premium",
  },
  { n: "Garam Masala", c: "Blended Masalas", img: mortar, price: "On Request", grade: "Signature" },
  {
    n: "Curry Powder",
    c: "Blended Masalas",
    img: mortar,
    price: "On Request",
    grade: "Custom Blend",
  },
  { n: "Kashmiri Saffron", c: "Saffron", img: saffron, price: "On Request", grade: "ISO Cat I" },
];

function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={powders}
            alt=""
            className="w-full h-full object-cover opacity-40"
            width={1280}
            height={896}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <SectionLabel>Our Catalog</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6">
              The complete <span className="text-gradient-gold italic">spice range.</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              35+ varieties of premium whole, ground, blended and specialty spices — all
              export-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-6">
          {[
            { t: "Whole Spices", d: "Sun-cured, sortex-cleaned", img: whole, to: "#whole" },
            { t: "Powdered Spices", d: "Cold-ground, vibrant color", img: powders, to: "#powder" },
            {
              t: "Premium Saffron",
              d: "ISO Category I, Mongra grade",
              img: saffron,
              to: "#saffron",
            },
          ].map((c) => (
            <a
              key={c.t}
              href={c.to}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden hover-lift"
            >
              <img
                src={c.img}
                alt={c.t}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={1280}
                height={896}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="font-display text-3xl mb-2">{c.t}</h3>
                <p className="text-muted-foreground mb-4">{c.d}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Filter pills */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-6 flex flex-wrap items-center gap-3">
          <Filter className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground mr-2">Browse:</span>
          {categories.map((c) => (
            <button
              key={c}
              className="px-5 py-2 rounded-full glass text-sm hover:bg-primary hover:text-primary-foreground transition"
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Catalog grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Catalog"
            title={
              <>
                Browse our <span className="text-gradient-gold italic">range</span>
              </>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((p) => (
              <div key={p.n} className="group glass rounded-2xl overflow-hidden hover-lift">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.n}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={1280}
                    height={896}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/70 backdrop-blur text-[10px] uppercase tracking-widest text-primary">
                    {p.grade}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-primary uppercase tracking-widest mb-1">{p.c}</div>
                  <h3 className="font-display text-xl mb-2">{p.n}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-muted-foreground">{p.price}</span>
                    <Link
                      to="/contact"
                      className="text-primary hover:gap-2 inline-flex items-center gap-1 text-sm font-semibold transition-all"
                    >
                      Inquire <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom blends */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-deep">
            <img
              src={mortar}
              alt="Custom blends"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={896}
            />
          </div>
          <div>
            <SectionLabel>Bespoke</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Custom blends, <span className="text-gradient-gold italic">private label.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Have a signature recipe? We'll formulate, test, and pack it under your brand. From
              small artisan runs to industrial volumes.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Recipe development & R&D",
                "Pilot batches before scale-up",
                "White label & private label",
                "Custom packaging & branding",
                "Compliance with destination market",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-center">
                  <Star className="w-4 h-4 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold"
            >
              Request a Sample <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Packaging"
            title={
              <>
                Built for <span className="text-gradient-gold italic">freshness</span>
              </>
            }
            subtitle="Multi-layer barrier packaging that locks aroma, color and potency for months."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { t: "Bulk Sacks", d: "25kg / 50kg jute & PP", icon: Package },
              { t: "Vacuum Pouches", d: "500g – 5kg multi-layer", icon: Package },
              { t: "Retail Jars", d: "100g – 500g glass / PET", icon: Package },
              { t: "Custom", d: "Your design, your specs", icon: Package },
            ].map((p) => (
              <div key={p.t} className="glass rounded-2xl p-6 text-center hover-lift">
                <p.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mt-12">
            <img
              src={jars}
              alt="Packaging options"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={896}
            />
          </div>
        </div>
      </section>

      {/* Quality stamp */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: Award, t: "ISO 22000", d: "Food Safety Management" },
            { icon: Leaf, t: "Organic Certified", d: "USDA & EU NOP" },
            { icon: Star, t: "FDA Registered", d: "Cleared for US imports" },
          ].map((c) => (
            <div key={c.t} className="glass rounded-2xl p-10 hover-lift">
              <c.icon className="w-12 h-12 text-primary mx-auto mb-5" />
              <h3 className="font-display text-2xl mb-2">{c.t}</h3>
              <p className="text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            Need a <span className="text-gradient-gold italic">full catalog?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get our latest product brochure with specifications, pricing tiers and packaging
            options.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-luxury"
          >
            Download Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Products;
