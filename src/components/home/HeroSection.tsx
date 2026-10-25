import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBeforeAfterSlider } from "./HeroBeforeAfterSlider";

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
      {/* ── Main Container ── */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* ── Left Content: Editorial Typography & Animation (Centered on mobile, left on desktop) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center text-center lg:items-start lg:text-left animate-fade-up max-w-2xl mx-auto lg:mx-0 py-6">
            {/* Overline with icon (Hidden on mobile, visible on desktop) */}
            <h2 className="hidden lg:flex items-center justify-start gap-2.5 mb-8">
              <Stethoscope className="w-4 h-4 text-accent shrink-0" />
              <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">
                Bosphorus Dermatology & Aesthetics Center
              </span>
            </h2>

            {/* Main Headline with Typing Animation (2 rows, max 3 on mobile) */}
            <h1
              id="home-hero-title"
              className="font-heading text-[clamp(2.1rem,5.8vw,6.5rem)] sm:text-[clamp(2.8rem,6.5vw,6.5rem)] font-light tracking-tighter text-foreground leading-[1.02] sm:leading-[0.95] lg:leading-[0.92] mb-8 text-center lg:text-left"
            >
              Where{" "}
              <span className="inline-grid grid-cols-1 grid-rows-1 items-baseline whitespace-nowrap align-baseline">
                {/* Ghost word that locks maximum width at all screen sizes */}
                <span
                  className="invisible col-start-1 row-start-1 select-none pointer-events-none font-medium pr-1.5 sm:pr-3"
                  aria-hidden="true"
                >
                  Medicine
                </span>
                {/* Active typed word */}
                <span className="col-start-1 row-start-1 flex items-baseline justify-center lg:justify-start">
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
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md mx-auto lg:mx-0 mb-12 text-center lg:text-left">
              Board-certified specialists. Dermoscopy & advanced diagnostics. Transformative results without compromise.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-stretch w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-[0.98] group border-0 shadow-md uppercase"
                >
                  BOOK CONSULTATION
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] text-foreground/80 hover:text-accent hover:bg-accent/5 transition-all uppercase border-border hover:border-accent shadow-none"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>

          {/* ── Right Content: Clinical Before & After Slidable Showcase ── */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-fade-up">
            <HeroBeforeAfterSlider />
          </div>

        </div>
      </div>
    </section>
  );
}
