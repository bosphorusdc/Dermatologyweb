import { Link } from "react-router-dom";
import { BadgeCheck, Sparkles, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

const highlights = [
  {
    icon: BadgeCheck,
    title: "Board-certified expertise",
    description: "Evidence-based dermatology and aesthetic medicine.",
  },
  {
    icon: Sparkles,
    title: "Natural-looking results",
    description: "Subtle enhancements designed around your features.",
  },
  {
    icon: Stethoscope,
    title: "Personalized care",
    description: "A treatment plan tailored to your skin and goals.",
  },
] as const;

export function HeroSection() {
  return (
    <section aria-labelledby="home-hero-title" className="relative overflow-hidden bg-medical-gradient">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pb-20 pt-32 lg:pb-28 lg:pt-36 relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-accent">Premium Dermatology Care</span>
            </div>

            <h1
              id="home-hero-title"
              className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              Bosphorus <span className="text-accent">Dermatology</span> & Aesthetic Center
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Medical excellence and aesthetic artistry—delivered with a calm, patient-first experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="btn-animated-gradient border-0 px-8 font-semibold text-foreground shadow-luxury hover:shadow-luxury-hover"
              >
                <Link to="/contact">Book a Consultation</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent/30 bg-white/60 px-8 text-foreground hover:bg-white hover:text-foreground"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-lg border border-border/60 bg-white/60 p-4 backdrop-blur">
                  <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <item.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    {item.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-2xl" aria-hidden="true" />

              <div className="relative rounded-2xl border border-border/60 bg-white/40 p-3 shadow-luxury">
                <div className="flex items-center justify-between px-1 pb-3">
                  <p className="text-sm font-medium text-foreground">Before & After</p>
                  <p className="text-xs text-muted-foreground">Drag to compare</p>
                </div>

                <div className="h-[420px] sm:h-[480px] lg:h-[560px]">
                  <BeforeAfterSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 hero-gradient-wave" aria-hidden="true" />
    </section>
  );
}
