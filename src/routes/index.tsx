import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe2, Leaf, ShieldCheck, Truck, Sparkles, Star, Quote, ChevronRight, Check, Flame, Users, Package, Factory } from "lucide-react";
import hero from "@/assets/hero-spices.jpg";
import saffron from "@/assets/saffron.jpg";
import farmers from "@/assets/farmers.jpg";
import facility from "@/assets/facility.jpg";
import powders from "@/assets/powders.jpg";
import whole from "@/assets/whole-spices.jpg";
import globeImg from "@/assets/global.jpg";
import cardamomHands from "@/assets/cardamom-hands.jpg";
import jars from "@/assets/jars.jpg";
import mortar from "@/assets/mortar.jpg";
import { SectionHeading, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaarav Global Ventures — Premium Indian Spice Exporter" },
      { name: "description", content: "Pure flavors. Global reach. Premium whole & powdered Indian spices for the world's finest kitchens." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* 1. HERO with video bg */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30"
            poster={hero}>
            <source src="https://cdn.coverr.co/videos/coverr-cooking-with-spices-2649/1080p.mp4" type="video/mp4" />
          </video>
          <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-4xl reveal">
            <SectionLabel>Est. 2018 · Trusted in 40+ Countries</SectionLabel>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6">
              Where <span className="text-gradient-gold italic">Quality</span><br />
              Meets <span className="text-gradient-gold italic">Tradition</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              From sun-drenched farms of India to the world's most discerning kitchens — premium whole and powdered spices, sourced ethically, processed meticulously.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/products" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-luxury hover:scale-105 transition-transform">
                Discover Our Range <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-semibold hover:bg-primary/10 transition">
                Request Catalog
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              {[["40+","Countries"],["120+","Clients"],["35+","Spice Varieties"],["ISO","Certified"]].map(([n,l]) => (
                <div key={l}>
                  <div className="font-display text-2xl md:text-3xl text-gradient-gold">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-widest uppercase animate-float">Scroll</div>
      </section>

      {/* 2. Marquee logos */}
      <section className="border-y border-border bg-secondary/30 py-10 overflow-hidden">
        <div className="container mx-auto px-6 mb-6">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground">Trusted by leading importers worldwide</p>
        </div>
        <div className="flex gap-16 animate-shimmer whitespace-nowrap">
          {["AROMA & CO","SPICE ROUTE","KITCHEN ROYALE","GLOBAL FLAVORS","ORIENTAL TRADERS","NORDIC FOODS","MAESTRO DELI","HARVEST INTL"].map((b)=>(
            <span key={b} className="font-display text-2xl md:text-3xl text-muted-foreground/60 tracking-widest">{b}</span>
          ))}
          {["AROMA & CO","SPICE ROUTE","KITCHEN ROYALE","GLOBAL FLAVORS"].map((b,i)=>(
            <span key={i} className="font-display text-2xl md:text-3xl text-muted-foreground/60 tracking-widest">{b}</span>
          ))}
        </div>
      </section>

      {/* 3. Pure Flavors / About */}
      <section className="min-h-screen flex items-center py-16 relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-deep">
              <img src={cardamomHands} alt="Hands holding cardamom" className="w-full h-full object-cover animate-slow-zoom" loading="lazy" width={1280} height={896}/>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 aspect-square rounded-3xl overflow-hidden border-4 border-background shadow-luxury hidden md:block">
              <img src={mortar} alt="Mortar with spice" className="w-full h-full object-cover" loading="lazy" width={1280} height={896}/>
            </div>
            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 hidden md:block">
              <div className="text-2xl font-display text-gradient-gold">7+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Years Heritage</div>
            </div>
          </div>
          <div>
            <SectionLabel>About Shaarav</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4">
              Pure Flavors.<br /><span className="text-gradient-gold italic">Global Reach.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Shaarav Global Ventures, we believe quality spices are the soul of every kitchen. Founded with a vision to bring India's rich legacy to every corner of the globe, we specialize in the export of premium whole and powdered spices.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We source directly from trusted farmers and processing units, ensuring only the finest products reach our clients — with uncompromising commitment to purity, freshness, and authenticity.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                {icon:Leaf,t:"Direct Sourcing",d:"From farm to facility"},
                {icon:ShieldCheck,t:"Lab Verified",d:"Every batch tested"},
                {icon:Award,t:"Premium Grade",d:"Export-quality only"},
                {icon:Globe2,t:"Worldwide",d:"40+ countries served"},
              ].map(({icon:Icon,t,d}) => (
                <div key={t} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">{t}</div>
                    <div className="text-xs text-muted-foreground">{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all text-sm">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Mission with parallax bg */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-16">
        <div className="absolute inset-0">
          <img src={globeImg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" width={1280} height={896}/>
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel>Our Mission</SectionLabel>
            <p className="font-display text-2xl md:text-4xl leading-tight mb-8">
              "To deliver the <span className="text-gradient-gold italic">authentic taste of India</span> to kitchens across the globe — empowering local farmers, delighting global consumers, and building lasting business relationships."
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              {[
                {n:"01",t:"Source",d:"Direct partnerships with farmer cooperatives across India's spice belt."},
                {n:"02",t:"Process",d:"State-of-the-art facilities with rigorous quality controls and lab testing."},
                {n:"03",t:"Deliver",d:"Reliable global logistics, transparent documentation, on-time always."},
              ].map(s => (
                <div key={s.n} className="glass p-6 rounded-2xl text-left hover-lift">
                  <div className="font-display text-4xl text-gradient-gold mb-3">{s.n}</div>
                  <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Whole spices showcase */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading label="Signature Range" title={<>Whole <span className="text-gradient-gold italic">Spices</span></>} subtitle="Handpicked, sun-cured, and exported in their most natural form to preserve every essential note." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {n:"Black Pepper",img:whole,o:"Malabar, India"},
              {n:"Green Cardamom",img:cardamomHands,o:"Kerala Hills"},
              {n:"Cinnamon Sticks",img:whole,o:"Sri Lanka & Kerala"},
              {n:"Star Anise",img:whole,o:"Northeast India"},
              {n:"Cloves",img:whole,o:"Tamil Nadu"},
              {n:"Cumin Seeds",img:hero,o:"Gujarat & Rajasthan"},
              {n:"Fennel Seeds",img:hero,o:"Gujarat"},
              {n:"Bay Leaves",img:cardamomHands,o:"Himalayan Foothills"},
            ].map(p => (
              <div key={p.n} className="group relative aspect-[3/4] rounded-2xl overflow-hidden hover-lift cursor-pointer border border-border">
                <img src={p.img} alt={p.n} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={1280} height={896}/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 p-4 w-full">
                  <div className="text-xs uppercase tracking-widest text-primary mb-1">{p.o}</div>
                  <div className="font-display text-xl">{p.n}</div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowRight className="w-3 h-3 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Powdered spices split */}
      <section className="py-16 bg-secondary/20 relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Powdered Excellence</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4">
              Ground to <span className="text-gradient-gold italic">perfection.</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our cold-grinding process locks in essential oils and aroma. Every powdered spice retains its vibrant color, full potency, and authentic character — exactly as nature intended.
            </p>
            <ul className="space-y-3 mb-6">
              {["Cold-ground to preserve volatile oils","Steam sterilized for microbial safety","Custom mesh sizes available","Bulk & retail-ready packaging"].map(t => (
                <li key={t} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5"><Check className="w-3 h-3 text-primary"/></div>
                  <span className="text-sm text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-3">
              {["Turmeric","Red Chili","Coriander","Cumin","Garam Masala","Curry Powder"].map(s => (
                <div key={s} className="glass rounded-xl px-3 py-2 text-xs text-center font-medium">{s}</div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-deep border border-border">
            <img src={powders} alt="Spice powders" className="w-full h-full object-cover" loading="lazy" width={1280} height={896}/>
          </div>
        </div>
      </section>

      {/* 7. Process timeline */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading label="Farm to Table" title={<>The <span className="text-gradient-gold italic">Shaarav</span> Process</>} subtitle="Every spice on your shelf has travelled a meticulous path. Here's how we guarantee its journey." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {icon:Leaf,t:"Cultivation",d:"Partner farms across India's spice regions following sustainable practices.",img:farmers},
              {icon:Package,t:"Harvesting",d:"Hand-picked at peak ripeness, sun-cured the traditional way.",img:cardamomHands},
              {icon:Factory,t:"Processing",d:"Cleaned, sorted, ground, and sterilized in modern facilities.",img:facility},
              {icon:Truck,t:"Export",d:"Vacuum sealed, certified, and shipped to your doorstep worldwide.",img:globeImg},
            ].map((s,i) => (
              <div key={s.t} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative border border-border">
                  <img src={s.img} alt={s.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={1280} height={896}/>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center font-display font-bold text-primary-foreground text-sm">{i+1}</div>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <s.icon className="w-4 h-4 text-primary" />
                  <h3 className="font-display text-lg">{s.t}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why us with image bg */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={facility} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" width={1280} height={896}/>
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container mx-auto px-6 relative">
          <SectionHeading label="Why Choose Us" title={<>Built on <span className="text-gradient-gold italic">six pillars</span></>} subtitle="What separates Shaarav from the ordinary spice trader." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {icon:ShieldCheck,t:"Uncompromising Purity",d:"Zero adulteration. Every shipment lab-tested and certified to international standards."},
              {icon:Leaf,t:"Ethical Sourcing",d:"Fair pricing for farmers, transparent supply chains, and sustainable agriculture."},
              {icon:Award,t:"Award-Winning Quality",d:"Recognized by leading export councils and trusted across continents."},
              {icon:Truck,t:"On-Time Logistics",d:"Reliable global shipping with full documentation and tracking."},
              {icon:Sparkles,t:"Custom Blends",d:"Private label, custom formulations, and packaging tailored to your brand."},
              {icon:Users,t:"Dedicated Support",d:"A personal account manager for every client, every shipment."},
            ].map(c => (
              <div key={c.t} className="glass rounded-2xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center mb-4 shadow-luxury">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{c.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Saffron premium feature */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative aspect-square rounded-3xl overflow-hidden shadow-deep border border-border">
            <img src={saffron} alt="Saffron" className="w-full h-full object-cover" loading="lazy" width={1280} height={896}/>
          </div>
          <div className="lg:col-span-3">
            <SectionLabel>The Crown Jewel</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight mb-4">
              Kashmiri <span className="text-gradient-gold italic">Saffron</span> — pound for pound, the world's most precious spice.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sourced from the high meadows of Pampore, our Mongra grade saffron is hand-harvested from the autumn crocus, sorted thread-by-thread, and graded to international ISO 3632 Category I.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[["260+","Crocin Value"],["95+","Picrocrocin"],["I","ISO Grade"]].map(([n,l]) => (
                <div key={l}>
                  <div className="font-display text-2xl text-gradient-gold">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all text-sm">
              View Saffron Range <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Global reach */}
      <section className="py-16 relative bg-secondary/20">
        <div className="container mx-auto px-6">
          <SectionHeading label="Worldwide Distribution" title={<>Exporting to <span className="text-gradient-gold italic">40+ countries</span></>} subtitle="From the spice hubs of India to kitchens, restaurants, and retailers across six continents." />
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {region:"North America",cities:"USA · Canada · Mexico",count:"12 countries"},
              {region:"Europe",cities:"UK · Germany · France · Italy",count:"15 countries"},
              {region:"Middle East",cities:"UAE · Saudi · Qatar · Oman",count:"8 countries"},
              {region:"Asia Pacific",cities:"Japan · Singapore · Australia",count:"9 countries"},
              {region:"Africa",cities:"South Africa · Kenya · Nigeria",count:"6 countries"},
              {region:"South America",cities:"Brazil · Argentina · Chile",count:"4 countries"},
            ].map(r => (
              <div key={r.region} className="glass rounded-2xl p-5 hover-lift">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl">{r.region}</h3>
                  <Globe2 className="w-4 h-4 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-2">{r.cities}</p>
                <div className="text-xs uppercase tracking-widest text-primary">{r.count}</div>
              </div>
            ))}
          </div>
          <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-border">
            <img src={globeImg} alt="Global distribution" className="w-full h-full object-cover" loading="lazy" width={1280} height={896}/>
          </div>
        </div>
      </section>

      {/* 11. Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading label="Quality You Can Trust" title={<>Certified, audited, <span className="text-gradient-gold italic">verified.</span></>} subtitle="Compliance with the world's most rigorous food safety and quality standards." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["ISO 22000","FSSAI","HACCP","FDA","APEDA","ORGANIC"].map(c => (
              <div key={c} className="aspect-square glass rounded-2xl flex flex-col items-center justify-center hover-lift p-3">
                <Award className="w-8 h-8 text-primary mb-2" />
                <div className="font-display text-base text-center">{c}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Certified</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Testimonials */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <SectionHeading label="Voices of Trust" title={<>What our <span className="text-gradient-gold italic">clients</span> say</>} />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {n:"Marco Rossi",r:"Procurement Head, Aroma & Co. (Italy)",t:"Shaarav has transformed our spice supply chain. The consistency in aroma and color, batch after batch, is simply unmatched."},
              {n:"Priya Nair",r:"Founder, Spice Route Café (UK)",t:"Their Kashmiri saffron is the gold standard. Our customers can taste the difference, and so can we."},
              {n:"Hiroshi Tanaka",r:"Director, Oriental Foods (Japan)",t:"Reliable, transparent, and always on time. Working with Shaarav feels like a true partnership, not a transaction."},
            ].map(t => (
              <div key={t.n} className="glass rounded-2xl p-6 hover-lift relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_,i)=> <Star key={i} className="w-3 h-3 fill-primary text-primary"/>)}
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed mb-4 italic">"{t.t}"</p>
                <div className="border-t border-border pt-3">
                  <div className="font-semibold text-sm">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Spice gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionHeading label="Visual Stories" title={<>The Shaarav <span className="text-gradient-gold italic">gallery</span></>} subtitle="A glimpse into the world of premium spices — from harvest to packaging." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[hero,farmers,facility,powders,whole,saffron,cardamomHands,jars].map((src,i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl border border-border ${i%3===0?"row-span-2 aspect-[3/4]":"aspect-square"} hover-lift group`}>
                <img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={1280} height={896}/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Stats banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold opacity-95" />
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[["7+","Years Experience"],["500+","Tons / Year"],["98%","Client Retention"],["24/7","Support"]].map(([n,l]) => (
              <div key={l}>
                <div className="font-display text-4xl md:text-6xl text-white mb-1">{n}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/90">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" width={1920} height={1080}/>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background" />
        </div>
        <div className="container mx-auto px-6 relative text-center max-w-3xl">
          <SectionLabel>Begin Your Journey</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
            Bring authentic <span className="text-gradient-gold italic">Indian spices</span> to your shelves.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Whether you're a distributor, retailer, or chef — partner with Shaarav for spices the world keeps coming back for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-luxury hover:scale-105 transition-transform">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass font-semibold hover:bg-primary/10 transition">
              Browse Products <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
