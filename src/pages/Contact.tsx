import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

const img = new URL("../assets/Images/photo_3_2026-03-25_21-38-08.jpg", import.meta.url).href;

const hours = [
  { day: "Monday — Saturday", time: "02:30 — 11:30", open: true },
  { day: "Sunday",            time: "Closed",          open: false },
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Hidna Building, Bole",
    sub: "Addis Ababa, Ethiopia",
    href: "https://maps.google.com/maps?q=Hidna+Building,+Bole,+Addis+Ababa,+Ethiopia",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-36 pb-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[9px] font-black tracking-[0.5em] text-accent uppercase">Contact Us</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-light tracking-tighter text-foreground leading-[0.92] max-w-3xl">
              Let's start{" "}
              <span className="italic text-foreground/35 font-light">your</span>{" "}
              <span className="font-medium">journey.</span>
            </h1>
            <p className="mt-8 text-muted-foreground font-light text-lg leading-relaxed max-w-xl">
              We operate strictly by appointment to ensure privacy and clinical attention. Visit us during clinical hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Clinic + Contact Details ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 lg:items-stretch border border-border">

            {/* Clinic image */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[560px] overflow-hidden animate-fade-up">
              <img
                src={img}
                alt="Bosphorus Dermatology Clinic reception"
                className="absolute inset-0 w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,17%,8%)]/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-[9px] font-black tracking-[0.4em] text-white/50 uppercase mb-2">Our Clinic</p>
                <p className="font-heading text-2xl md:text-3xl font-light text-white tracking-tight">
                  Bosphorus Dermatology &amp; Aesthetic Center
                </p>
              </div>
            </div>

            {/* Contact panel */}
            <div className="lg:col-span-5 flex flex-col animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="p-8 md:p-10 border-b border-border bg-muted/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-6 bg-accent" />
                  <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Get in Touch</span>
                </div>
                <div className="flex flex-col gap-6">
                  {contactDetails.map(({ icon: Icon, label, value, sub, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-10 h-10 flex items-center justify-center border border-border bg-background shrink-0">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/50 uppercase mb-1">{label}</p>
                        <p className="text-base text-foreground font-light">{value}</p>
                        <p className="text-sm text-muted-foreground font-light mt-0.5">{sub}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-accent transition-colors shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between bg-background">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    <span className="text-[9px] font-black tracking-[0.4em] text-muted-foreground/50 uppercase">Clinical Hours</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-0">
                        <span className="text-sm text-foreground/70 font-light">{h.day}</span>
                        <span className={`text-sm font-medium tabular-nums ${h.open ? "text-foreground" : "text-muted-foreground/40"}`}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Consultations are by appointment only. We welcome you during our clinical hours.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="border-t border-border bg-muted/10">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 animate-fade-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Find Us</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-light tracking-tighter text-foreground">
                Hidna Building, Bole
              </h2>
              <p className="text-muted-foreground font-light mt-2">Addis Ababa, Ethiopia</p>
            </div>
            <a
              href="https://maps.google.com/maps?q=Hidna+Building,+Bole,+Addis+Ababa,+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-foreground hover:text-accent transition-colors group shrink-0"
            >
              Open in Google Maps
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="w-full h-[420px] md:h-[480px] grayscale-[0.5] hover:grayscale-0 transition-all duration-1000">
          <iframe
            title="Bosphorus Clinic Location"
            src="https://maps.google.com/maps?q=Hidna+Building,+Bole,+Addis+Ababa,+Ethiopia&output=embed&z=16"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
