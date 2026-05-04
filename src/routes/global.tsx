import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Ship, Plane, Truck, Clock, FileCheck, MapPin } from "lucide-react";
import globeImg from "@/assets/global.jpg";
import facility from "@/assets/facility.jpg";
import jars from "@/assets/jars.jpg";
import { SectionHeading, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/global")({
  head: () => ({
    meta: [
      { title: "Global Reach — Shaarav Spice Exports Worldwide" },
      { name: "description", content: "Shipping premium Indian spices to 40+ countries with reliable logistics, full documentation, and local support." },
    ],
  }),
  component: GlobalReach,
});

function GlobalReach() {
  return (
    <div>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={globeImg} alt="" className="w-full h-full object-cover opacity-40 animate-slow-zoom" width={1280} height={896}/>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background"/>
        </div>
        <div className="container mx-auto px-6 relative max-w-4xl">
          <SectionLabel>Global Reach</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6">
            Six continents.<br/><span className="text-gradient-gold italic">One promise.</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">From the spice belt of India to your warehouse — wherever in the world that may be.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[["40+","Countries"],["120+","Clients"],["8","Major Ports"],["24/7","Support"]].map(([n,l]) => (
            <div key={l} className="glass rounded-2xl p-8">
              <div className="font-display text-4xl text-gradient-gold mb-2">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading label="Regions" title={<>Where we <span className="text-gradient-gold italic">deliver</span></>} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {r:"North America",c:"USA · Canada · Mexico",n:"12"},
              {r:"Europe",c:"UK · Germany · France · Italy · Spain · Netherlands",n:"15"},
              {r:"Middle East",c:"UAE · Saudi Arabia · Qatar · Oman · Kuwait",n:"8"},
              {r:"Asia Pacific",c:"Japan · Singapore · Australia · Korea · Vietnam",n:"9"},
              {r:"Africa",c:"South Africa · Kenya · Nigeria · Egypt",n:"6"},
              {r:"South America",c:"Brazil · Argentina · Chile · Colombia",n:"4"},
            ].map(r => (
              <div key={r.r} className="glass rounded-2xl p-8 hover-lift">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl">{r.r}</h3>
                  <Globe2 className="w-5 h-5 text-primary"/>
                </div>
                <p className="text-muted-foreground mb-4">{r.c}</p>
                <div className="text-xs uppercase tracking-widest text-primary">{r.n} countries served</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading label="Logistics" title={<>How we <span className="text-gradient-gold italic">deliver</span></>} subtitle="A multi-modal logistics network engineered for speed, safety and flexibility." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:Ship,t:"Sea Freight",d:"FCL & LCL out of Mundra, Nhava Sheva, Cochin & Chennai. 21–35 day transit."},
              {icon:Plane,t:"Air Cargo",d:"Express premium shipments via Mumbai & Delhi. 3–7 day delivery worldwide."},
              {icon:Truck,t:"Last Mile",d:"Bonded warehouse partnerships in 12 cities for door-step delivery."},
            ].map(s => (
              <div key={s.t} className="glass rounded-2xl p-8 hover-lift">
                <s.icon className="w-12 h-12 text-primary mb-5"/>
                <h3 className="font-display text-2xl mb-3">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden">
            <img src={jars} alt="Export packaging" className="w-full h-full object-cover" loading="lazy" width={1280} height={896}/>
          </div>
          <div>
            <SectionLabel>Documentation</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Paperwork, <span className="text-gradient-gold italic">handled.</span></h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Customs, certificates, and country-specific compliance — our export team manages every form so your shipment clears without delays.
            </p>
            <ul className="space-y-3">
              {["Certificate of Origin","Phytosanitary Certificate","Health Certificate","Halal / Kosher / Organic","Country-specific labelling","Pre-shipment inspection"].map(t => (
                <li key={t} className="flex gap-3 items-center"><FileCheck className="w-4 h-4 text-primary"/>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading label="Offices" title={<>Local <span className="text-gradient-gold italic">presence</span></>} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {c:"Mumbai, India",t:"Headquarters"},
              {c:"Dubai, UAE",t:"Middle East Hub"},
              {c:"London, UK",t:"Europe Office"},
              {c:"New Jersey, USA",t:"Americas Hub"},
            ].map(o => (
              <div key={o.c} className="glass rounded-2xl p-6 hover-lift">
                <MapPin className="w-6 h-6 text-primary mb-3"/>
                <div className="text-xs uppercase tracking-widest text-primary mb-1">{o.t}</div>
                <h3 className="font-display text-xl">{o.c}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Lead Times</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">On time, <span className="text-gradient-gold italic">every time.</span></h2>
            <div className="space-y-4">
              {[
                {r:"GCC / Middle East",t:"5-10 days"},
                {r:"Europe",t:"21-25 days sea / 5 days air"},
                {r:"North America",t:"28-35 days sea / 7 days air"},
                {r:"East Asia",t:"15-20 days"},
              ].map(l => (
                <div key={l.r} className="glass rounded-xl p-5 flex justify-between items-center">
                  <span className="font-display text-lg">{l.r}</span>
                  <span className="flex items-center gap-2 text-primary"><Clock className="w-4 h-4"/>{l.t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden">
            <img src={facility} alt="Operations" className="w-full h-full object-cover" loading="lazy" width={1280} height={896}/>
          </div>
        </div>
      </section>

      <section className="py-24 text-center bg-card/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl mb-6">Ship to <span className="text-gradient-gold italic">your country.</span></h2>
          <p className="text-muted-foreground text-lg mb-8">Tell us where you're based and we'll handle the rest.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-luxury">Get Shipping Quote <ArrowRight className="w-4 h-4"/></Link>
        </div>
      </section>
    </div>
  );
}
