import { SchoolHeader } from "@/components/layout/SchoolHeader";
import { SchoolFooter } from "@/components/layout/SchoolFooter";
import { MapPin, Phone, Clock, ArrowUpRight, Building2, Facebook } from "lucide-react";
import {
  SCHOOL_ADDRESS,
  SCHOOL_NAME,
  SCHOOL_PHONE,
  SCHOOL_PHONE_HREF,
  SCHOOL_PARENT_COMPANY,
  SCHOOL_SOCIALS,
} from "@/data/school";

const campusImg = new URL("../assets/Images/photo_5_2026-03-25_21-38-08.jpg", import.meta.url).href;

const campusHours = [
  { day: "Monday — Friday", time: "08:30 — 17:30", open: true },
  { day: "Saturday (Lab Sessions)", time: "08:30 — 13:00", open: true },
  { day: "Sunday", time: "Closed", open: false },
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Campus Address",
    value: SCHOOL_ADDRESS.building,
    sub: `${SCHOOL_ADDRESS.area}, ${SCHOOL_ADDRESS.city}`,
    href: SCHOOL_ADDRESS.mapsUrl,
  },
  {
    icon: Phone,
    label: "Admissions Phone",
    value: SCHOOL_PHONE,
    sub: "Direct registration & campus tours",
    href: `tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`,
  },
  {
    icon: Building2,
    label: "Accredited Body",
    value: SCHOOL_PARENT_COMPANY,
    sub: "Aesthetic & Cosmetology Education",
    href: undefined,
  },
];

export default function SchoolContact() {
  return (
    <div className="min-h-screen bg-background">
      <SchoolHeader />

      {/* ── Campus + Contact Details ── */}
      <section className="pt-32 pb-20 md:pt-36 md:pb-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 lg:items-stretch border border-border">

            {/* Left 7 cols: Campus Facility Photo */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[580px] overflow-hidden animate-fade-up">
              <img
                src={campusImg}
                alt="Bosphorus Cosmetology School Campus Facility"
                className="absolute inset-0 w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,17%,8%)]/75 via-[hsl(210,17%,8%)]/25 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-[9px] font-black tracking-[0.4em] text-white/70 uppercase mb-2">Our Campus</p>
                <p className="font-heading text-2xl md:text-3xl font-light text-white tracking-tight">
                  {SCHOOL_NAME}
                </p>
                <p className="text-xs text-white/80 font-light mt-1">
                  {SCHOOL_ADDRESS.building} • {SCHOOL_ADDRESS.area}
                </p>
              </div>
            </div>

            {/* Right 5 cols: Details + Hours + Social Media */}
            <div className="lg:col-span-5 flex flex-col justify-between animate-fade-up" style={{ animationDelay: "120ms" }}>
              
              {/* Top: Contact Details */}
              <div className="p-8 md:p-10 border-b border-border bg-muted/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-6 bg-accent" />
                  <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Get in Touch</span>
                </div>
                <div className="flex flex-col gap-6">
                  {contactDetails.map(({ icon: Icon, label, value, sub, href }) =>
                    href ? (
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
                    ) : (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border border-border bg-background shrink-0">
                          <Icon className="h-4 w-4 text-accent" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/50 uppercase mb-1">{label}</p>
                          <p className="text-base text-foreground font-light">{value}</p>
                          <p className="text-sm text-muted-foreground font-light mt-0.5">{sub}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Middle: Hours */}
              <div className="p-8 md:p-10 border-b border-border bg-background">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  <span className="text-[9px] font-black tracking-[0.4em] text-muted-foreground/50 uppercase">Campus & Lab Hours</span>
                </div>
                <div className="flex flex-col gap-3">
                  {campusHours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between gap-4 py-2 border-b border-border last:border-0">
                      <span className="text-sm text-foreground/70 font-light">{h.day}</span>
                      <span className={`text-sm font-medium tabular-nums ${h.open ? "text-foreground" : "text-muted-foreground/40"}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Social Media Channels */}
              <div className="p-8 md:p-10 bg-muted/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-accent" />
                  <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Social Channels</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {/* Facebook */}
                  <a
                    href={SCHOOL_SOCIALS[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 border border-border bg-card hover:bg-accent hover:text-white hover:border-accent flex flex-col items-center justify-center gap-1.5 group transition-all duration-200 active:scale-[0.97]"
                  >
                    <Facebook className="size-4 text-accent group-hover:text-white transition-colors" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">Facebook</span>
                    <span className="text-[9px] text-muted-foreground group-hover:text-white/80 font-light truncate max-w-full">{SCHOOL_SOCIALS[0].handle}</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href={SCHOOL_SOCIALS[1].href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 border border-border bg-card hover:bg-accent hover:text-white hover:border-accent flex flex-col items-center justify-center gap-1.5 group transition-all duration-200 active:scale-[0.97]"
                  >
                    <svg className="size-4 text-accent group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span className="text-[10px] font-bold tracking-wider uppercase">Instagram</span>
                    <span className="text-[9px] text-muted-foreground group-hover:text-white/80 font-light truncate max-w-full">{SCHOOL_SOCIALS[1].handle}</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href={SCHOOL_SOCIALS[2].href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 border border-border bg-card hover:bg-accent hover:text-white hover:border-accent flex flex-col items-center justify-center gap-1.5 group transition-all duration-200 active:scale-[0.97]"
                  >
                    <svg className="size-4 text-accent group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                    <span className="text-[10px] font-bold tracking-wider uppercase">TikTok</span>
                    <span className="text-[9px] text-muted-foreground group-hover:text-white/80 font-light truncate max-w-full">{SCHOOL_SOCIALS[2].handle}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Interactive Campus Map ── */}
      <section className="border-t border-border bg-muted/10">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 animate-fade-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Campus Location</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-light tracking-tighter text-foreground">
                {SCHOOL_ADDRESS.building}
              </h2>
              <p className="text-muted-foreground font-light mt-2 text-sm max-w-xl">
                {SCHOOL_ADDRESS.area}, {SCHOOL_ADDRESS.city}. From Bole Road, turn towards Atlas hotel street; Kelela Tower is directly next to Desalegn Hotel. Take the elevator to the 3rd floor.
              </p>
            </div>
            <a
              href={SCHOOL_ADDRESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white hover:bg-accent/90 text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-200 shadow-sm active:scale-[0.98] shrink-0"
            >
              <MapPin className="h-3.5 w-3.5" />
              Open in Google Maps
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="w-full h-[450px] md:h-[500px] border-y border-border bg-muted/20">
          <iframe
            title="Bosphorus Cosmetology School Campus Location - Kelela Building Atlas"
            src={SCHOOL_ADDRESS.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

      <SchoolFooter />
    </div>
  );
}
