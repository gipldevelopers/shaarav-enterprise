import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Eye, Award, Leaf, Users, Sparkles, Globe2 } from "lucide-react";
import farmers from "@/assets/farmers.jpg";
import facility from "@/assets/facility.jpg";
import cardamom from "@/assets/cardamom-hands.jpg";
import mortar from "@/assets/mortar.jpg";
import jars from "@/assets/jars.jpg";
import { SectionHeading, SectionLabel } from "@/components/site/Section";



function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={farmers}
            alt=""
            className="w-full h-full object-cover opacity-40 animate-slow-zoom"
            width={1280}
            height={896}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl reveal">
            <SectionLabel>Our Story</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6">
              Rooted in <span className="text-gradient-gold italic">tradition.</span>
              <br />
              Reaching the <span className="text-gradient-gold italic">world.</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              A story of farmers, families, and the timeless flavors of India — carried with care to
              every continent.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-deep">
            <img
              src={mortar}
              alt="Heritage"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={896}
            />
          </div>
          <div>
            <SectionLabel>Heritage</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              A heritage <span className="text-gradient-gold italic">three generations</span> in the
              making.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Shaarav was born from a family that has worked with spices since the 1960s. What began
              as a small trading house in Gujarat is today a globally recognized export brand — but
              the obsession with quality has never changed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every kilogram we ship carries the weight of that legacy: the farmer's care, the
              grinder's precision, and the unspoken promise of authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="What Drives Us"
            title={
              <>
                Mission, vision &amp; <span className="text-gradient-gold italic">values</span>
              </>
            }
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                t: "Mission",
                d: "To deliver authentic Indian spices to global kitchens with uncompromising purity and care.",
              },
              {
                icon: Eye,
                t: "Vision",
                d: "To be the world's most trusted Indian spice exporter — synonymous with quality, ethics, and excellence.",
              },
              {
                icon: Heart,
                t: "Values",
                d: "Integrity, sustainability, partnership, and a deep respect for the land and people behind every spice.",
              },
            ].map((c) => (
              <div key={c.t} className="glass rounded-2xl p-10 hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-luxury">
                  <c.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-3xl mb-4">{c.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Our Journey"
            title={
              <>
                Milestones across <span className="text-gradient-gold italic">the years</span>
              </>
            }
          />
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                y: "1968",
                t: "The Beginning",
                d: "Family trading house founded in Gujarat with a single sack of black pepper.",
              },
              {
                y: "2002",
                t: "First Export",
                d: "Maiden international shipment to the Gulf — the global journey begins.",
              },
              {
                y: "2018",
                t: "Shaarav Founded",
                d: "Modern brand established with a state-of-the-art processing facility.",
              },
              {
                y: "2022",
                t: "40 Countries",
                d: "Crossed the 40-country milestone with offices on three continents.",
              },
              {
                y: "2026",
                t: "Today",
                d: "500+ tons exported annually, 120+ enterprise clients, zero-defect track record.",
              },
            ].map((m, i) => (
              <div key={m.y} className="grid md:grid-cols-[120px_1fr] gap-6 items-start group">
                <div className="font-display text-4xl text-gradient-gold">{m.y}</div>
                <div className="glass rounded-2xl p-6 hover-lift border-l-2 border-primary">
                  <h3 className="font-display text-2xl mb-2">{m.t}</h3>
                  <p className="text-muted-foreground">{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Leadership"
            title={
              <>
                The people behind <span className="text-gradient-gold italic">Shaarav</span>
              </>
            }
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "Arvind Patel", r: "Founder & CEO", img: cardamom },
              { n: "Meera Shah", r: "Head of Quality", img: facility },
              { n: "Rahul Mehta", r: "Director, Global Trade", img: farmers },
            ].map((p) => (
              <div key={p.n} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={p.img}
                    alt={p.n}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={1280}
                    height={896}
                  />
                </div>
                <h3 className="font-display text-2xl">{p.n}</h3>
                <p className="text-primary text-sm uppercase tracking-widest mt-1">{p.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Sustainability</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Good for farmers.{" "}
              <span className="text-gradient-gold italic">Good for the planet.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We work directly with 2,000+ smallholder farmers across India, paying premium rates
              and investing in regenerative agriculture practices. Our packaging is recyclable, our
              facility runs on 60% solar, and we're carbon-neutral by 2030.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                ["2000+", "Farmers"],
                ["60%", "Solar Powered"],
                ["100%", "Recyclable"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gradient-gold">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden shadow-deep">
            <img
              src={farmers}
              alt="Sustainable farming"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={896}
            />
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Recognition"
            title={
              <>
                Awards &amp; <span className="text-gradient-gold italic">accolades</span>
              </>
            }
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { y: "2024", a: "Best Spice Exporter", b: "Spices Board India" },
              { y: "2023", a: "Excellence in Quality", b: "APEDA" },
              { y: "2023", a: "Sustainable Trade Award", b: "FICCI" },
              { y: "2022", a: "Emerging Brand of the Year", b: "India Food Forum" },
            ].map((a) => (
              <div key={a.a} className="glass rounded-2xl p-6 hover-lift">
                <Award className="w-10 h-10 text-primary mb-4" />
                <div className="text-xs text-primary uppercase tracking-widest mb-2">{a.y}</div>
                <h3 className="font-display text-xl mb-2">{a.a}</h3>
                <p className="text-sm text-muted-foreground">{a.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Globe2, n: "40+", l: "Countries Served" },
            { icon: Users, n: "120+", l: "Enterprise Clients" },
            { icon: Leaf, n: "35+", l: "Spice Varieties" },
            { icon: Sparkles, n: "500T+", l: "Annual Exports" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-8">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="font-display text-5xl text-gradient-gold mb-2">{s.n}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <img
              src={jars}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-15"
              loading="lazy"
              width={1280}
              height={896}
            />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl mb-6">
                Let's <span className="text-gradient-gold italic">build something</span> together.
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Become a partner in our mission to bring authentic Indian spices to the world.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-luxury hover:scale-105 transition-transform"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
