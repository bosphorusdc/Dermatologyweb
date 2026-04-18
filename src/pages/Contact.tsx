import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Mail, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const img = new URL("../assets/Images/photo_3_2026-03-25_21-38-08.jpg", import.meta.url).href;

const hours = [
  { day: "Monday — Friday", time: "09:00 — 18:00", open: true },
  { day: "Saturday",         time: "10:00 — 16:00", open: true },
  { day: "Sunday",           time: "Closed",         open: false },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="pt-40 pb-20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-6 animate-fade-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.5em] text-accent uppercase">Contact Us</span>
              </div>
              <h1 className="font-heading text-6xl md:text-7xl font-light tracking-tighter text-foreground leading-[0.92] mb-8">
                Let's start<br />
                <span className="italic text-foreground/35 font-light">your</span>{" "}
                <span className="font-medium">journey.</span>
              </h1>
              <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-md">
                We operate strictly by appointment to ensure the highest standard of privacy and clinical attention. Reach out and we'll respond within one business day.
              </p>
            </div>

            {/* Quick info strip */}
            <div className="lg:col-span-5 lg:col-start-8 animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="flex flex-col gap-5">
                {[
                  { icon: MapPin, label: "Location",  value: "Hidna Building, Bole, Addis Ababa" },
                  { icon: Mail,   label: "Email",     value: "bosphorus@gmail.com" },
                  { icon: Clock,  label: "Hours",     value: "Mon–Fri 09:00–18:00 · Sat 10:00–16:00" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                    <div className="w-8 h-8 flex items-center justify-center border border-border shrink-0 mt-0.5">
                      <Icon className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/50 uppercase mb-1">{label}</p>
                      <p className="text-sm text-foreground font-light">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main: Form + Image ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Form */}
            <div className="lg:col-span-6 animate-fade-up">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Book a Consultation</span>
              </div>

              {submitted ? (
                <div className="border border-accent/30 bg-accent/5 p-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl font-light text-foreground mb-3">Request received.</h3>
                  <p className="text-muted-foreground font-light text-sm">We'll be in touch within one business day to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-black tracking-[0.3em] text-foreground/50 uppercase">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="h-12 px-4 border border-border bg-background text-foreground text-sm font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-black tracking-[0.3em] text-foreground/50 uppercase">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="h-12 px-4 border border-border bg-background text-foreground text-sm font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black tracking-[0.3em] text-foreground/50 uppercase">Treatment of Interest</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="h-12 px-4 border border-border bg-background text-foreground text-sm font-light focus:outline-none focus:border-accent transition-colors appearance-none"
                    >
                      <option value="">Select a treatment</option>
                      {[
                        "Acne Treatment", "Dandruff Treatment", "Fat Removal",
                        "Melasma Treatment", "Microdermabrasion", "Microneedling",
                        "PRP Therapy", "Skin Bacteria Infection", "Tattoo Removal",
                        "Vitiligo Treatment", "General Consultation",
                      ].map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black tracking-[0.3em] text-foreground/50 uppercase">Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your concern or what you'd like to achieve..."
                      className="px-4 py-3 border border-border bg-background text-foreground text-sm font-light placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-none h-14 bg-foreground hover:bg-foreground/90 text-background text-[11px] font-black tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-none border-0 mt-2"
                  >
                    SEND REQUEST
                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>

                  <p className="text-[9px] text-muted-foreground/40 tracking-wide">
                    Your information is kept strictly confidential and used only to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>

            {/* Right: image + hours */}
            <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
              {/* Clinic image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt="Bosphorus Dermatology Clinic"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Hours card */}
              <div className="border border-border p-8">
                <p className="text-[9px] font-black tracking-[0.4em] text-muted-foreground/50 uppercase mb-6">Clinical Hours</p>
                <div className="flex flex-col gap-4">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between">
                      <span className="text-sm text-foreground/70 font-light">{h.day}</span>
                      <span className={`text-sm font-medium ${h.open ? "text-foreground" : "text-muted-foreground/40"}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="border-t border-border">
        <div className="w-full h-[480px] grayscale-[0.6] hover:grayscale-0 transition-all duration-1000">
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
