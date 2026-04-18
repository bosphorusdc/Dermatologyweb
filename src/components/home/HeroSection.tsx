import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState, useCallback } from "react";

import melasmaAfter    from "@/assets/Melasma before & after/photo_2026-03-25_13-10-10.jpg";
import vitiligoAfter   from "@/assets/Vitiligo/photo_2026-03-25_13-11-23.jpg";
import acneBefore      from "@/assets/Acne/photo_2026-03-25_21-35-51.jpg";
import dandruffAfter   from "@/assets/Dandruff treatment before and after/photo_2026-03-25_13-15-34.jpg";
import bacteriaAfter   from "@/assets/skinbacteria infection b and f/photo_2026-03-25_13-19-08.jpg";
import gradientBg      from "@/assets/Images/vecteezy_abstract-gradient-white-and-grey-liquid-wave-background_20817380.jpg";

const TYPING_WORDS = ["Medicine", "Science"];
const TYPE_SPEED   = 90;   // ms per character typed
const ERASE_SPEED  = 50;   // ms per character erased
const PAUSE_MS     = 1800; // ms to hold the full word

function useTypingAnimation(words: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx]     = useState(0);
  const [phase, setPhase]         = useState<"typing" | "pausing" | "erasing">("typing");
  const charIdx = useRef(0);

  useEffect(() => {
    const word = words[wordIdx];

    if (phase === "typing") {
      if (charIdx.current < word.length) {
        const t = setTimeout(() => {
          charIdx.current += 1;
          setDisplayed(word.slice(0, charIdx.current));
        }, TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), PAUSE_MS);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pausing") {
      setPhase("erasing");
    }

    if (phase === "erasing") {
      if (charIdx.current > 0) {
        const t = setTimeout(() => {
          charIdx.current -= 1;
          setDisplayed(word.slice(0, charIdx.current));
        }, ERASE_SPEED);
        return () => clearTimeout(t);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, wordIdx, words]);

  return { displayed, isTyping: phase === "typing" };
}

const resultCards = [
  {
    slug: "melasma",
    title: "Melasma Treatment",
    subtitle: "Visible reduction after 3 sessions",
    image: melasmaAfter,
  },
  {
    slug: "vitiligo",
    title: "Vitiligo Treatment",
    subtitle: "Pigmentation restored over 6 weeks",
    image: vitiligoAfter,
  },
  {
    slug: "acne",
    title: "Acne Treatment",
    subtitle: "Clear skin after targeted protocol",
    image: acneBefore,
  },
  {
    slug: "dandruff-treatment",
    title: "Dandruff Treatment",
    subtitle: "Scalp health restored in 4 weeks",
    image: dandruffAfter,
  },
  {
    slug: "skin-bacteria-infection",
    title: "Skin Bacteria Infection",
    subtitle: "Full clearance after clinical protocol",
    image: bacteriaAfter,
  },
];

const stats = [
  { value: "3.2k+", label: "Patients" },
  { value: "13",    label: "Years" },
  { value: "98%",   label: "Satisfaction" },
];

const CARD_H = 96;   // px — h-24
const GAP    = 12;   // px — gap-3
const STEP   = CARD_H + GAP;
const INTERVAL_MS = 2500;

export function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const listRef   = useRef<HTMLDivElement>(null);
  const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const { displayed, isTyping } = useTypingAnimation(TYPING_WORDS);

  const scrollTo = (idx: number) => {
    setActiveIdx(idx);
    listRef.current?.scrollTo({ top: idx * STEP, behavior: "smooth" });
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % resultCards.length;
        listRef.current?.scrollTo({ top: next * STEP, behavior: "smooth" });
        return next;
      });
    }, INTERVAL_MS);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* ── Background: gradient image ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={gradientBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 container mx-auto px-6 pb-20 pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Left: headline */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-4 mb-10 animate-fade-up">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.5em] text-accent uppercase">
                Bosphorus Dermatology
              </span>
            </div>

            <h1
              id="home-hero-title"
              className="font-heading text-[clamp(3.5rem,8vw,7rem)] font-light tracking-tighter text-foreground leading-[0.92] animate-fade-up mb-8"
              style={{ animationDelay: "80ms" }}
            >
              Where{" "}
              <span className="inline-flex items-baseline gap-2">
                <span className="font-medium text-foreground">{displayed}</span>
                {/* blinking cursor */}
                <span
                  className="inline-block w-[3px] bg-accent self-stretch"
                  style={{
                    animation: "blink 1s step-end infinite",
                    marginBottom: "0.1em",
                  }}
                />
              </span>
              <br />
              <span className="italic text-foreground/35 font-light">Meets</span>{" "}
              <span className="font-medium">Precision.</span>
            </h1>

            <p
              className="text-lg text-muted-foreground font-light leading-relaxed max-w-md mb-12 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Board-certified specialists. Evidence-based protocols. Transformative results — without compromise.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-[0.98] group border-0 shadow-none"
                >
                  BOOK CONSULTATION
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all uppercase border-foreground/20 hover:border-foreground/40 shadow-none"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: auto-scrolling result cards */}
          <div
            className="lg:col-span-5 flex flex-col gap-3 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-1">
              <div className="h-px w-6 bg-border" />
              <span className="text-[9px] font-black tracking-[0.4em] text-muted-foreground/60 uppercase">
                Clinical Results
              </span>
            </div>

            {/* Scrollable card list — shows ~3 cards, clips the rest */}
            <div
              ref={listRef}
              className="flex flex-col gap-3 overflow-hidden"
              style={{ maxHeight: `${3 * CARD_H + 2 * GAP}px` }}
              onMouseEnter={stopTimer}
              onMouseLeave={startTimer}
            >
              {resultCards.map((card, i) => {
                const isActive = i === activeIdx;
                return (
                  <Link
                    key={card.slug}
                    to={`/services/${card.slug}`}
                    onClick={stopTimer}
                    className={`group relative flex items-stretch overflow-hidden border transition-all duration-500 shadow-luxury cursor-pointer shrink-0`}
                    style={{
                      height: `${CARD_H}px`,
                      borderColor: isActive ? "hsl(196,45%,33%)" : "hsl(196,18%,87%)",
                      backgroundColor: "white",
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="w-24 shrink-0 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className={`w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100 ${
                          isActive ? "grayscale-0" : "grayscale"
                        }`}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col justify-center px-5 gap-1 flex-1 min-w-0">
                      <span className="text-[9px] font-black tracking-[0.35em] text-accent uppercase">
                        Post-Protocol
                      </span>
                      <p className="text-foreground font-heading text-lg font-light tracking-tight truncate">
                        {card.title}
                      </p>
                      <p className="text-muted-foreground text-xs font-light truncate">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center pr-4 shrink-0">
                      <ArrowRight
                        className={`h-4 w-4 transition-all duration-300 ${
                          isActive ? "text-accent opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-60"
                        }`}
                      />
                    </div>

                    {/* Active left bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent transition-all duration-300"
                      style={{ opacity: isActive ? 1 : 0 }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-1">
              {resultCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { stopTimer(); scrollTo(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIdx
                      ? "w-4 h-1.5 bg-accent"
                      : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground/40"
                  }`}
                  aria-label={`Go to result ${i + 1}`}
                />
              ))}
            </div>

            <p className="text-[9px] text-muted-foreground/40 tracking-widest uppercase italic mt-1">
              * Individual results may vary. Clinical lighting conditions apply.
            </p>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          className="mt-16 pt-8 border-t border-border grid grid-cols-3 gap-8 max-w-sm animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-heading text-3xl font-light text-foreground tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/50 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
