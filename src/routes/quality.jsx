import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  Award,
  FlaskConical,
  Leaf,
  Eye,
  ClipboardCheck,
  Lock,
} from "lucide-react";
import facility from "@/assets/facility.jpg";
import farmers from "@/assets/farmers.jpg";
import { SectionHeading, SectionLabel } from "@/components/site/Section";



function Quality() {
  return (
    <div>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={facility}
            alt=""
            className="w-full h-full object-cover opacity-40"
            width={1280}
            height={896}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="container mx-auto px-6 relative max-w-4xl">
          <SectionLabel>Quality Promise</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6">
            Purity is <span className="text-gradient-gold italic">non-negotiable.</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Every batch tested. Every shipment certified. Every promise kept.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Quality Pillars"
            title={
              <>
                Eight checkpoints,{" "}
                <span className="text-gradient-gold italic">zero shortcuts.</span>
              </>
            }
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, t: "Visual Sorting", d: "AI-assisted color & defect sorting at intake" },
              {
                icon: Microscope,
                t: "Lab Testing",
                d: "Every batch screened in our in-house ISO lab",
              },
              {
                icon: FlaskConical,
                t: "Pesticide Check",
                d: "500+ residue panel as per EU MRL standards",
              },
              {
                icon: ShieldCheck,
                t: "Microbial Safety",
                d: "Steam sterilization, log-5 reduction",
              },
              {
                icon: ClipboardCheck,
                t: "Documentation",
                d: "Full traceability from farm to container",
              },
              { icon: Lock, t: "Tamper-Proof", d: "Sealed packaging with batch QR codes" },
              { icon: Award, t: "Certifications", d: "ISO 22000, HACCP, FSSAI, FDA, USDA Organic" },
              {
                icon: Leaf,
                t: "Sustainable",
                d: "Fair trade & regenerative agriculture practices",
              },
            ].map((p) => (
              <div key={p.t} className="glass rounded-2xl p-6 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-luxury">
                  <p.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-deep">
            <img
              src={facility}
              alt="Lab"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={896}
            />
          </div>
          <div>
            <SectionLabel>Inside Our Lab</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              A <span className="text-gradient-gold italic">NABL-accredited</span> laboratory at the
              heart of our facility.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Equipped with HPLC, GC-MS, ICP-OES and rapid microbial detection, our lab tests every
              batch for 500+ parameters before it leaves our doors.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                ["500+", "Parameters"],
                ["48h", "Turnaround"],
                ["100%", "Batches"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gradient-gold">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Certifications"
            title={
              <>
                Our <span className="text-gradient-gold italic">credentials</span>
              </>
            }
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "ISO 22000",
              "HACCP",
              "FSSAI",
              "FDA",
              "USDA Organic",
              "EU Organic",
              "APEDA",
              "Halal",
              "Kosher",
              "BRC",
              "SEDEX",
              "Rainforest",
            ].map((c) => (
              <div
                key={c}
                className="aspect-square glass rounded-2xl flex flex-col items-center justify-center hover-lift p-4"
              >
                <Award className="w-10 h-10 text-primary mb-3" />
                <div className="font-display text-sm text-center">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Traceability"
            title={
              <>
                From farm to <span className="text-gradient-gold italic">your shelf.</span>
              </>
            }
          />
          <div className="grid md:grid-cols-5 gap-6">
            {["Farm", "Collection", "Processing", "Lab", "Export"].map((s, i) => (
              <div key={s} className="glass rounded-2xl p-6 text-center hover-lift relative">
                <div className="font-display text-5xl text-gradient-gold mb-3">{i + 1}</div>
                <h3 className="font-display text-xl">{s}</h3>
                <p className="text-xs text-muted-foreground mt-2">
                  Tagged with QR & blockchain log
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Sustainability</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Quality means <span className="text-gradient-gold italic">responsibility.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              We pay our farmers premium rates, invest in regenerative agriculture, and run our
              facilities on renewable energy. True quality starts at the soil.
            </p>
            <Link to="/about" className="text-primary font-semibold inline-flex items-center gap-2">
              Read about our impact <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden">
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

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="FAQ"
            title={
              <>
                Quality, <span className="text-gradient-gold italic">answered.</span>
              </>
            }
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How do you ensure batch consistency?",
                a: "Strict source mapping, blending protocols, and lab signoff on every batch before dispatch.",
              },
              {
                q: "Can I get a Certificate of Analysis with my shipment?",
                a: "Yes — every shipment ships with a complete CoA, MoA and country-specific compliance documents.",
              },
              {
                q: "Do you offer organic-certified spices?",
                a: "Yes, we are certified under USDA NOP and EU Organic for our complete range.",
              },
              {
                q: "What's your shelf life?",
                a: "Whole spices: 24 months. Powders: 12-18 months. All in vacuum / multi-layer barrier packaging.",
              },
            ].map((f) => (
              <details key={f.q} className="glass rounded-2xl p-6 group">
                <summary className="flex justify-between items-center cursor-pointer font-display text-xl">
                  {f.q}
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition" />
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            Get a <span className="text-gradient-gold italic">free sample</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Test our quality before you commit. We'll ship a sample kit anywhere.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-luxury"
          >
            Request Sample <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Quality;
