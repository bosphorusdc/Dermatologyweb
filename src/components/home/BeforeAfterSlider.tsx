import { useCallback, useRef, useState } from "react";
import beforeImage from "@/assets/before.png";
import afterImage from "@/assets/after.png";

function clampPercentage(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function BeforeAfterSlider() {
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
      className="relative h-full w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-xl shadow-luxury outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
        setFromClientX(e.clientX);
      }}
      onPointerUp={(e) => {
        if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;

        try {
          e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
      }}
      onPointerCancel={(e) => {
        try {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
        } catch {}
      }}
      onKeyDown={(e) => {
        const step = e.shiftKey ? 10 : 5;

        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setPosition((current) => clampPercentage(current - step));
        }

        if (e.key === "ArrowRight") {
          e.preventDefault();
          setPosition((current) => clampPercentage(current + step));
        }
      }}
    >
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="After treatment"
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white">
          After
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={beforeImage}
          alt="Before treatment"
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white">
          Before
        </div>
      </div>

      <div className="absolute bottom-0 top-0 w-1 bg-background" style={{ left: `${position}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-foreground bg-background shadow-lg">
          <div className="flex gap-1" aria-hidden="true">
            <div className="h-4 w-0.5 bg-foreground" />
            <div className="h-4 w-0.5 bg-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
