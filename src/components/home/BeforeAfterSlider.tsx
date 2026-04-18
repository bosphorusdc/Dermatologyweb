import { useCallback, useRef, useState } from "react";

function clampPercentage(value: number) {
  return Math.min(100, Math.max(0, value));
}

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clampPercentage(next));
  }, []);

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      className="relative h-full w-full cursor-ew-resize touch-none select-none overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
        setFromClientX(e.clientX);
      }}
      onPointerUp={(e) => {
        try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
      }}
      onPointerCancel={(e) => {
        try {
          if (e.currentTarget.hasPointerCapture(e.pointerId))
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
      }}
      onKeyDown={(e) => {
        const step = e.shiftKey ? 10 : 5;
        if (e.key === "ArrowLeft") { e.preventDefault(); setPosition((c) => clampPercentage(c - step)); }
        if (e.key === "ArrowRight") { e.preventDefault(); setPosition((c) => clampPercentage(c + step)); }
      }}
    >
      {/* After layer (base) */}
      <div className="absolute inset-0">
        <img src={after} alt={afterLabel} className="h-full w-full object-cover" draggable={false} />
        <div className="pointer-events-none absolute bottom-5 right-5 bg-accent px-3 py-1.5 text-[9px] font-black tracking-[0.3em] text-accent-foreground uppercase">
          {afterLabel}
        </div>
      </div>

      {/* Before layer (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt={beforeLabel} className="h-full w-full object-cover" draggable={false} />
        <div className="pointer-events-none absolute bottom-5 left-5 bg-foreground/80 backdrop-blur-sm px-3 py-1.5 text-[9px] font-black tracking-[0.3em] text-background uppercase">
          {beforeLabel}
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-px bg-white/80 shadow-[0_0_8px_rgba(0,0,0,0.3)]"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl border border-border">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M5 4L1 8L5 12" stroke="hsl(210,17%,13%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 4L15 8L11 12" stroke="hsl(210,17%,13%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
