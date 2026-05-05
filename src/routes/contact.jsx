
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Globe2, Building2 } from "lucide-react";
import jars from "@/assets/jars.jpg";
import facility from "@/assets/facility.jpg";
import { SectionHeading, SectionLabel } from "@/components/site/Section";



function Contact() {
  return (
    <div>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={jars}
            alt=""
            className="w-full h-full object-cover opacity-40"
            width={1280}
            height={896}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="container mx-auto px-6 relative max-w-4xl text-center">
          <SectionLabel>Contact Us</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6">
            Let's start a <span className="text-gradient-gold italic">conversation.</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Quotes, samples, custom blends, partnerships — we typically reply within 4 business
            hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { icon: Mail, t: "Email Us", d: "export@shaaravglobal.com", sub: "24/7 response" },
            { icon: Phone, t: "Call Us", d: "+91 98765 43210", sub: "Mon-Sat 9am-7pm IST" },
            { icon: MessageCircle, t: "WhatsApp", d: "+91 98765 43210", sub: "Instant chat" },
          ].map((c) => (
            <div key={c.t} className="glass rounded-2xl p-8 text-center hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold mx-auto flex items-center justify-center mb-5 shadow-luxury">
                <c.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-2">{c.t}</h3>
              <p className="text-foreground/90 mb-1">{c.d}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel>Send a message</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Tell us what you <span className="text-gradient-gold italic">need.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form and our export team will get back to you with a tailored proposal.
            </p>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Our team will reach out shortly.");
              }}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  required
                  placeholder="Your name"
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary outline-none transition"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary outline-none transition"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Company name"
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary outline-none transition"
                />
                <input
                  placeholder="Country"
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary outline-none transition"
                />
              </div>
              <select className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary outline-none transition">
                <option>I'm interested in...</option>
                <option>Whole Spices</option>
                <option>Powdered Spices</option>
                <option>Custom Blends / Private Label</option>
                <option>Saffron</option>
                <option>Bulk Quote</option>
              </select>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your requirements..."
                className="w-full px-5 py-4 rounded-xl bg-card border border-border focus:border-primary outline-none transition resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-luxury hover:scale-105 transition-transform"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src={facility}
                alt="Office"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={896}
              />
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl mb-5">Visit Our Headquarters</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-muted-foreground">
                      Plot 12, Spice Park, Kandla SEZ, Gujarat 370230, India
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-muted-foreground">Mon-Sat · 9:00am – 7:00pm IST</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Building2 className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="font-semibold">Facility</div>
                    <div className="text-muted-foreground">
                      120,000 sqft processing & warehousing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Global Offices"
            title={
              <>
                Reach us <span className="text-gradient-gold italic">anywhere</span>
              </>
            }
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { c: "Mumbai", t: "HQ India", a: "Spice Park, Kandla", p: "+91 98765 43210" },
              { c: "Dubai", t: "Middle East", a: "DMCC, JLT Tower", p: "+971 50 123 4567" },
              { c: "London", t: "Europe", a: "Canary Wharf, E14", p: "+44 20 7946 0123" },
              { c: "New Jersey", t: "Americas", a: "Edison, NJ 08817", p: "+1 732 555 0123" },
            ].map((o) => (
              <div key={o.c} className="glass rounded-2xl p-6 hover-lift">
                <Globe2 className="w-6 h-6 text-primary mb-3" />
                <div className="text-xs uppercase tracking-widest text-primary mb-1">{o.t}</div>
                <h3 className="font-display text-2xl mb-2">{o.c}</h3>
                <p className="text-sm text-muted-foreground mb-1">{o.a}</p>
                <p className="text-sm">{o.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden glass">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=70.20%2C22.95%2C70.30%2C23.05&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeading
            label="FAQ"
            title={
              <>
                Common <span className="text-gradient-gold italic">questions</span>
              </>
            }
          />
          <div className="space-y-4">
            {[
              {
                q: "What's your minimum order quantity?",
                a: "500kg for whole/powder, 5kg for saffron. Lower MOQs available for sample/pilot orders.",
              },
              {
                q: "How quickly can you ship a sample?",
                a: "Sample kits ship within 48 hours via DHL/FedEx, typically arriving in 3-5 business days.",
              },
              {
                q: "Do you offer credit terms?",
                a: "Established clients can request L/C, D/A or open account terms after due diligence.",
              },
              {
                q: "Can I visit your facility?",
                a: "Absolutely. Schedule a visit and we'll arrange airport pickup, factory tour, and farm visits.",
              },
            ].map((f) => (
              <details key={f.q} className="glass rounded-2xl p-6 group">
                <summary className="cursor-pointer font-display text-xl flex justify-between items-center">
                  {f.q}
                  <span className="group-open:rotate-90 transition">→</span>
                </summary>
                <p className="text-muted-foreground mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
