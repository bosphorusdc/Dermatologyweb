import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Play, Volume2, ArrowRight, Video, Sparkles, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoShowcaseItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  src: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
}

const VIDEOS: VideoShowcaseItem[] = [
  {
    id: "about-school",
    title: "Tour the Academy & High-Tech Aesthetic Labs",
    category: "Institutional Overview",
    badge: "Official Film",
    src: "/videos/about-school.mp4",
    description:
      "Take an exclusive tour of our modern campus at Kelela Building, Atlas. Discover our advanced laser laboratories, AI multispectral diagnostic systems, sterile clinical suites, and dedicated aesthetic training classrooms.",
    highlights: ["Medical Laser Physics", "Aseptic Clinical Protocol", "Hands-on Device Mastery"],
    ctaText: "Explore Full Curriculum",
    ctaHref: "/school/curriculum",
  },
  {
    id: "testimony-school",
    title: "Authentic Student & Graduate Testimony",
    category: "Graduate Experience",
    badge: "Student Voice",
    src: "/videos/testimony-school.mp4",
    description:
      "Hear first-hand from a Bosphorus graduate about their transformative journey—from learning the foundational biology of cutaneous layers to mastering real patient procedures and stepping into a certified aesthetic career.",
    highlights: ["Clinical Confidence", "Doctor Mentorship", "Career Launchpad"],
    ctaText: "Apply for Next Intake",
    ctaHref: "/registration",
  },
];

function VideoCard({ item, index }: { item: VideoShowcaseItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false; // enable audio on direct user click
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="group flex flex-col h-full bg-card border border-border hover:border-accent transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden animate-fade-up select-none"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* ── 16:9 Video Player Viewport ── */}
      <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden border-b border-border/60">
        <video
          ref={videoRef}
          src={item.src}
          playsInline
          controls={isPlaying}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none flex items-center gap-2">
          <div className="bg-background/95 backdrop-blur-md px-3 py-1 text-[8.5px] font-bold tracking-widest uppercase border border-border text-foreground shadow-sm">
            {item.badge}
          </div>
        </div>

        <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none">
          <div className="bg-black/75 backdrop-blur-md px-2 py-0.5 text-[8px] font-mono tracking-wider uppercase border border-white/10 text-white/90">
            HD 1080P
          </div>
        </div>

        {/* Custom Play Overlay (visible when paused) */}
        {!isPlaying && (
          <div
            onClick={handlePlayClick}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/45 hover:bg-black/35 cursor-pointer transition-colors backdrop-blur-[1px]"
          >
            {/* Animated Play Button */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-60" />
              <div className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <Play className="h-6 w-6 fill-white ml-1 text-white" />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3.5 py-1 text-[9px] font-bold tracking-widest text-white/90 uppercase border border-white/15 shadow-md">
              <Volume2 className="w-3 h-3 text-accent" />
              <span>Watch Video with Audio</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Card Content Body ── */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-card">
        <div>
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[9px] font-black tracking-[0.28em] text-accent uppercase">
              {item.category}
            </span>
          </div>

          <h3 className="font-heading text-2xl font-light tracking-tight text-foreground group-hover:text-accent transition-colors duration-300 mb-3 leading-snug">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed mb-6">
            {item.description}
          </p>

          {/* Highlights Tag Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {item.highlights.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 bg-muted/60 text-foreground/80 px-2.5 py-1 text-[10px] font-medium border border-border/60"
              >
                <Sparkles className="w-2.5 h-2.5 text-accent" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Architectural Card Footer Link ── */}
        <div className="pt-4 border-t border-border/50 flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-1.5">
            <Video className="w-3 h-3 text-accent" />
            Bosphorus Media
          </span>

          <Link
            to={item.ctaHref}
            className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-accent uppercase hover:underline group/btn"
          >
            <span>{item.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SchoolVideoShowcase() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* ── Section Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-fade-up">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Inside Bosphorus Academy
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.02]">
                See the school in motion.<br />
                <span className="italic font-light text-muted-foreground">
                  Campus life & student voices.
                </span>
              </h2>
            </div>
            
            <p className="text-muted-foreground font-light max-w-md text-sm md:text-base leading-relaxed">
              Step inside our certified clinical laboratories at Kelela Building and hear directly from graduates mastering modern laser technologies, chemical peels, and aesthetic skin science.
            </p>
          </div>

          {/* ── Dual Side-by-Side Video Showcase Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {VIDEOS.map((video, index) => (
              <VideoCard key={video.id} item={video} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
