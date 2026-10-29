import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Volume2, VolumeX, Play, Pause, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SCHOOL_NAME } from "@/data/school";

const TYPING_WORDS = ["Practice", "Science", "Mastery"];
const TYPE_SPEED = 90;
const ERASE_SPEED = 50;
const PAUSE_MS = 1800;

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

  return { displayed };
}

interface SchoolHeroProps {
  onOpenEnrollModal?: () => void;
}

export function SchoolHero({ onOpenEnrollModal }: SchoolHeroProps) {
  const { displayed } = useTypingAnimation(TYPING_WORDS);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section
      aria-labelledby="school-hero-title"
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center overflow-hidden bg-background pt-28 pb-16 transition-colors duration-500"
    >
      {/* ── Main Container ── */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* ── Left Content: Editorial Swiss Luxury Typography & Animation (Center on mobile, left on desktop) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center text-center lg:items-start lg:text-left animate-fade-up max-w-2xl mx-auto lg:mx-0 py-6">
            
            {/* Overline with accent line (Hidden on mobile, visible on desktop) */}
            <div className="hidden lg:flex items-center justify-start gap-4 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">
                {SCHOOL_NAME} • Bole Atlas
              </span>
            </div>

            {/* Main Headline with Typing Animation (2 rows, max 3 on mobile) */}
            <h1
              id="school-hero-title"
              className="font-heading text-[clamp(2.1rem,5.8vw,6.5rem)] sm:text-[clamp(2.8rem,6.5vw,6.5rem)] font-light tracking-tighter text-foreground leading-[1.02] sm:leading-[0.95] lg:leading-[0.92] mb-8 text-center lg:text-left"
            >
              Where{" "}
              <span className="inline-grid grid-cols-1 grid-rows-1 items-baseline whitespace-nowrap align-baseline">
                {/* Ghost word that locks maximum width at all screen sizes */}
                <span
                  className="invisible col-start-1 row-start-1 select-none pointer-events-none font-medium pr-1.5 sm:pr-3"
                  aria-hidden="true"
                >
                  Science
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
              <span className="font-medium">Mastery.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md mx-auto lg:mx-0 mb-12 text-center lg:text-left">
              18 comprehensive aesthetic modules. Cutaneous science & supervised clinical device labs accredited under Bosphorus Medical Solution PLC at Kelela Tower.
            </p>

            {/* CTAs matching emil-design-engineering-polish */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-stretch w-full sm:w-auto">
              <Link to="/registration" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-[0.98] group border-0 shadow-none uppercase flex items-center justify-center gap-2"
                >
                  <GraduationCap className="size-4" />
                  APPLY FOR INTAKE
                  <ArrowRight className="ml-3 size-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>

              <a href="#courses" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-none h-14 px-10 text-[11px] font-black tracking-[0.25em] text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all uppercase border-foreground/20 hover:border-foreground/40 shadow-none"
                >
                  Explore 18 Courses
                </Button>
              </a>
            </div>

          </div>

          {/* ── Right Content: Live Academy Campus Tour Video Showcase ── */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-fade-up">
            <div className="relative aspect-video lg:aspect-[4/3] w-full bg-neutral-950 border border-border hover:border-accent transition-all duration-500 overflow-hidden shadow-2xl group select-none">
              <video
                ref={videoRef}
                src="/videos/about-school.mp4"
                poster="/school/course-002.png"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Top Floating Badges */}
              <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none flex items-center gap-2">
                <div className="bg-background/95 backdrop-blur-md px-3 py-1 text-[8.5px] font-bold tracking-widest uppercase border border-border text-foreground shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Academy Tour
                </div>
              </div>

              <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none">
                <div className="bg-black/75 backdrop-blur-md px-2.5 py-0.5 text-[8px] font-mono tracking-wider uppercase border border-white/10 text-white/90">
                  Kelela Tower
                </div>
              </div>

              {/* Bottom Ambient Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none opacity-80" />

              {/* Bottom Interactive Control Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 z-20 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-8 h-8 rounded-none border border-white/20 bg-black/60 hover:bg-accent text-white flex items-center justify-center transition-all backdrop-blur-sm"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="h-8 px-3 rounded-none border border-white/20 bg-black/60 hover:bg-accent text-white flex items-center gap-1.5 text-[9px] font-bold tracking-wider uppercase transition-all backdrop-blur-sm"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-red-400" />
                        <span>Sound Off</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-accent" />
                        <span>Sound On</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="w-8 h-8 rounded-none border border-white/20 bg-black/60 hover:bg-accent text-white flex items-center justify-center transition-all backdrop-blur-sm"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Below Player Micro Caption */}
            <div className="flex items-center justify-between pt-3 px-1 text-[9px] font-mono tracking-wider uppercase text-muted-foreground">
              <span>Practical Laser & Diagnostic Labs</span>
              <span className="text-accent font-bold">Tour Video</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
