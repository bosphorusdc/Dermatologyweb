import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  autoplayWhenVisible?: boolean;
  clickToPlay?: boolean;
}

export function LazyVideo({
  src,
  autoplayWhenVisible = false,
  clickToPlay = false,
  className,
  ...props
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || clickToPlay) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!loaded) {
            el.src = src;
            setLoaded(true);
          }
          if (autoplayWhenVisible) {
            el.play().then(() => setPlaying(true)).catch(() => {});
          }
        } else if (autoplayWhenVisible) {
          el.pause();
        }
      },
      { rootMargin: "120px", threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src, autoplayWhenVisible, clickToPlay, loaded]);

  const handlePlay = () => {
    const el = ref.current;
    if (!el) return;
    if (!loaded) {
      el.src = src;
      setLoaded(true);
    }
    el.play().then(() => setPlaying(true)).catch(() => {});
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={ref}
        className={cn("w-full h-full object-cover", className)}
        muted
        playsInline
        loop={autoplayWhenVisible}
        preload="none"
        controls={clickToPlay && playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        {...props}
      />
      {clickToPlay && !playing && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/45 transition-colors group"
          aria-label="Play video"
        >
          <div className="w-14 h-14 rounded-full border border-white/35 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Play className="h-6 w-6 text-white fill-white ml-1" />
          </div>
        </button>
      )}
    </div>
  );
}
