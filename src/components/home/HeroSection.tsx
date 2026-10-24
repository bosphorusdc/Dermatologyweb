import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroBeautyImg = new URL("../../assets/hero-beauty.jpg", import.meta.url).href;

const TYPING_WORDS = ["Medicine", "Science"];
const TYPE_SPEED = 90;   // ms per character typed
const ERASE_SPEED = 50;   // ms per character erased
const PAUSE_MS = 1800; // ms to hold the full word

function useTypingAnimation(words: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");
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

export function HeroSection() {
  const { displayed } = useTypingAnimation(TYPING_WORDS);

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center overflow-hidden bg-background pt-28 pb-16 transition-colors duration-500"
    >
      {/* ── Seamless Right Image without container ── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[54%] pointer-events-none select-none z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={heroBeautyImg}
            alt="Bosphorus Dermatology"
            className="w-full h-full object-cover object-[70%_top]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,0.6) 35%, black 60%, black 100%), linear-gradient(to top, transparent 0%, rgba(0,0,0,0.8) 12%, black 25%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,0.6) 35%, black 60%, black 100%), linear-gradient(to top, transparent 0%, rgba(0,0,0,0.8) 12%, black 25%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
            loading="eager"
          />
        </div>
      </div>

      {/* ── Main Container ── */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left Content: Original Editorial Typography & Animation ── */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-up max-w-2xl py-6">
            {/* Overline with accent line */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">
                Bosphorus Dermatology & Aesthetics Center
              </span>
            </div>

            {/* Main Headline with Typing Animation (Zero layout shift) */}
            <h1
              id="home-hero-title"
              className="font-heading text-[clamp(3.2rem,7vw,6.5rem)] font-light tracking-tighter text-foreground leading-[0.92] mb-8"
            >
              Where{" "}
              <span className="inline-grid grid-cols-1 grid-rows-1 items-baseline whitespace-nowrap align-baseline">
                {/* Ghost word that locks maximum width at all screen sizes */}
                <span
                  className="invisible col-start-1 row-start-1 select-none pointer-events-none font-medium pr-3"
                  aria-hidden="true"
                >
                  Medicine
                </span>
                {/* Active typed word */}
                <span className="col-start-1 row-start-1 flex items-baseline">
                  <span className="font-medium text-foreground">{displayed}</span>
                  {/* Blinking cursor */}
                  <span
                    className="inline-block w-[3px] bg-accent self-stretch ml-1"
                    style={{
                      animation: "blink 1s step-end infinite",
                      marginBottom: "0.1em",
                    }}
                  />
                </span>
              </span>
              <br />
              <span className="italic text-foreground/35 font-light">Meets</span>{" "}
              <span className="font-medium">Precision.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md mb-12">
              Board-certified specialists. Dermoscopy & advanced diagnostics. Transformative results without compromise.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-[0.98] group border-0 shadow-none uppercase"
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

          {/* ── Mobile/Tablet Image (Seamless, No Container) ── */}
          <div className="lg:hidden relative w-full aspect-[4/5] max-w-md mx-auto animate-fade-up">
            <img
              src={heroBeautyImg}
              alt="Bosphorus Dermatology"
              className="w-full h-full object-cover object-top select-none"
              style={{
                maskImage:
                  "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.8) 15%, black 30%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.8) 15%, black 30%)",
              }}
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
