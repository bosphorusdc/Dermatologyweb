import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const melasmaBefore = new URL("../../assets/Melasma before & after/photo_2026-03-25_13-10-10.jpg", import.meta.url).href;
const melasmaAfter  = new URL("../../assets/Melasma before & after/photo_2026-03-25_13-09-53.jpg", import.meta.url).href;

const bacteriaBefore = new URL("../../assets/skinbacteria infection b and f/photo_2026-03-25_13-18-56.jpg", import.meta.url).href;
const bacteriaAfter  = new URL("../../assets/skinbacteria infection b and f/photo_2026-03-25_13-19-08.jpg", import.meta.url).href;

const dandruffBefore = new URL("../../assets/Dandruff treatment before and after/photo_2026-03-25_13-15-25.jpg", import.meta.url).href;
const dandruffAfter  = new URL("../../assets/Dandruff treatment before and after/photo_2026-03-25_13-15-34.jpg", import.meta.url).href;

const SLIDES = [
  {
    id: "melasma",
    title: "Melasma Treatment",
    before: melasmaBefore,
    after: melasmaAfter,
  },
  {
    id: "bacteria",
    title: "Skin Bacteria Infection",
    before: bacteriaBefore,
    after: bacteriaAfter,
  },
  {
    id: "dandruff",
    title: "Dandruff & Scalp Protocol",
    before: dandruffBefore,
    after: dandruffAfter,
  },
];

export function HeroBeforeAfterSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const active = SLIDES[current];

  return (
    <div
      className="relative w-full bg-card border border-border shadow-xl overflow-hidden select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Top Header Bar: Title and Sliders Only ── */}
      <div className="px-5 py-4 bg-muted/40 border-b border-border flex items-center justify-between gap-4">
        {/* Strictly Only the Title (No Extra Text) */}
        <h3 className="font-heading text-xl sm:text-2xl font-light tracking-tight text-foreground truncate">
          {active.title}
        </h3>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-mono tracking-widest text-muted-foreground mr-2">
            0{current + 1} / 0{SLIDES.length}
          </span>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous case"
            className="w-8 h-8 rounded-none border border-border bg-background hover:bg-muted text-foreground hover:text-accent flex items-center justify-center transition-all active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next case"
            className="w-8 h-8 rounded-none border border-border bg-background hover:bg-muted text-foreground hover:text-accent flex items-center justify-center transition-all active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Side-by-Side Before & After Images ── */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-neutral-950 overflow-hidden">
        <div className="grid grid-cols-2 h-full w-full">
          {/* Before Image */}
          <div className="relative h-full w-full overflow-hidden border-r border-background/20">
            <img
              key={`before-${active.id}`}
              src={active.before}
              alt={`${active.title} before`}
              className="w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
            />
            {/* Before Badge */}
            <div className="absolute bottom-3 left-3 bg-neutral-900/85 backdrop-blur-md px-2.5 py-1 text-[8.5px] font-black tracking-[0.25em] text-white uppercase border border-white/10 shadow-sm">
              BEFORE
            </div>
          </div>

          {/* After Image */}
          <div className="relative h-full w-full overflow-hidden">
            <img
              key={`after-${active.id}`}
              src={active.after}
              alt={`${active.title} after`}
              className="w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
            />
            {/* After Badge */}
            <div className="absolute bottom-3 right-3 bg-accent text-accent-foreground px-2.5 py-1 text-[8.5px] font-black tracking-[0.25em] uppercase shadow-sm">
              AFTER
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide Progress Bar / Indicator Dots ── */}
      <div className="px-5 py-2.5 bg-muted/20 border-t border-border flex items-center justify-center gap-2">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(idx)}
            aria-label={`Go to ${slide.title}`}
            className={`transition-all duration-300 ${
              idx === current
                ? "w-8 h-1.5 bg-accent"
                : "w-2.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
