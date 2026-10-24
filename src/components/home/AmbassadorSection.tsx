import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const ambassadorImg = new URL("../../assets/ambassador.jpg", import.meta.url).href;

interface AmbassadorSectionProps {
  photo?: string;
  name?: string;
  role?: string;
  headline?: string;
  statement?: string;
}

export function AmbassadorSection({
  photo = ambassadorImg,
  name = "Nebyou Indris",
  role = "Artist & Brand Ambassador",
  headline = "Confidence starts with authentic skin health.",
  statement = "Being in front of the camera every day, my skin needs to look and feel healthy from within. Bosphorus gives me real medical-grade care with visible results that keep me feeling confident on and off camera.",
}: AmbassadorSectionProps) {
  const [imageError, setImageError] = useState(false);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const hasCustomPhoto =
    !imageError && photo && photo !== "" && photo !== "/placeholder.svg";

  return (
    <section className="py-28 md:py-36 bg-background border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── Left Column: Editorial Photo Frame ── */}
          <div className="lg:col-span-5 lg:col-start-1 animate-fade-up">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden bg-[hsl(210,17%,12%)] border border-border group hover:border-accent/40 transition-colors duration-500 shadow-sm">
              {hasCustomPhoto ? (
                <img
                  src={photo}
                  alt={name}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              ) : (
                /* Luxury Styled Placeholder */
                <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-[hsl(210,17%,16%)] via-[hsl(210,20%,12%)] to-[hsl(210,17%,8%)] flex flex-col items-center justify-center p-8 text-center select-none">
                  {/* Soft ambient lighting */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-accent/20 blur-3xl rounded-full translate-x-1/4 -translate-y-1/4" />
                  <div className="absolute bottom-0 left-0 w-44 h-44 bg-accent/10 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4" />

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-5 h-5 border border-white/15 flex items-center justify-center">
                      <Sparkles className="h-2.5 w-2.5 text-accent/80" />
                    </div>
                    <div className="h-px w-6 bg-accent/40" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-accent/40" />

                  {/* Avatar Icon */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:border-accent/70 group-hover:scale-105 transition-all duration-500 shadow-inner">
                      <span className="font-heading text-2xl font-light tracking-widest text-white/90">
                        {initials}
                      </span>
                    </div>
                    <p className="text-[8px] font-black tracking-[0.4em] text-accent uppercase">
                      Ambassador Spotlight
                    </p>
                  </div>
                </div>
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1 text-[8px] font-black tracking-[0.25em] text-foreground uppercase border border-border">
                Brand Ambassador
              </div>

              {/* Bottom tag */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-[8px] font-black tracking-[0.3em] text-accent uppercase mb-1">
                  The Face of Bosphorus
                </p>
                <h3 className="font-heading text-xl font-light tracking-tight text-white">
                  {name}
                </h3>
              </div>
            </div>
          </div>

          {/* ── Right Column: Influencer Perspective & Story ── */}
          <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">
                Our Ambassador
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tighter text-foreground leading-[0.98] mb-8">
              Real skin, <br />
              <span className="italic font-light text-muted-foreground">
                unfiltered confidence.
              </span>
            </h2>

            {/* Influencer Perspective Statement */}
            <div className="relative mb-8 pl-6 border-l-2 border-accent/60">
              <Quote className="h-5 w-5 text-accent/40 mb-3" />
              <p className="text-lg md:text-xl font-light text-foreground/90 leading-relaxed italic mb-4">
                "{statement}"
              </p>
              <div>
                <p className="font-heading text-base font-medium text-foreground tracking-tight">
                  {name}
                </p>
                <p className="text-xs font-light text-muted-foreground">
                  {role}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="rounded-none h-12 px-8 text-[10px] font-black tracking-[0.25em] bg-accent hover:bg-accent/90 text-accent-foreground border-0 shadow-none transition-all hover:scale-[1.02] active:scale-[0.98] group uppercase"
                >
                  Book Your Consultation
                  <ArrowRight className="ml-3 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
