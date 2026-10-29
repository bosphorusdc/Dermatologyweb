import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Play, Volume2, ArrowRight, Quote, Sparkles, CheckCircle2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SchoolTestimonySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="max-w-3xl mb-14 md:mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Graduate Voices & Proof
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.02]">
              Real student experience.<br />
              <span className="italic font-light text-muted-foreground">
                Certified clinical confidence.
              </span>
            </h2>
          </div>

          {/* 2-Column Grid: Full Size Portrait Video on Left, Editorial Testimony on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Full Size Native 9:16 Portrait Video Player */}
            <div className="lg:col-span-5 flex justify-center animate-fade-up">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[9/16] bg-neutral-950 border border-border hover:border-accent transition-all duration-500 overflow-hidden shadow-2xl group select-none">
                <video
                  ref={videoRef}
                  src="/videos/testimony-school.mp4"
                  playsInline
                  controls={isPlaying}
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-contain"
                />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                  <div className="bg-background/95 backdrop-blur-md px-3 py-1 text-[8.5px] font-bold tracking-widest uppercase border border-border text-foreground shadow-sm">
                    Graduate Interview
                  </div>
                </div>

                <div className="absolute top-3.5 right-3.5 z-20 pointer-events-none">
                  <div className="bg-black/75 backdrop-blur-md px-2 py-0.5 text-[8px] font-mono tracking-wider uppercase border border-white/10 text-white/90">
                    Full Audio
                  </div>
                </div>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div
                    onClick={handlePlayToggle}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 hover:bg-black/30 cursor-pointer transition-colors backdrop-blur-[1px]"
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-60" />
                      <div className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-6 w-6 fill-white ml-1 text-white" />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3.5 py-1 text-[9px] font-bold tracking-widest text-white/90 uppercase border border-white/15 shadow-md">
                      <Volume2 className="w-3 h-3 text-accent" />
                      <span>Watch Testimony with Sound</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Editorial Quote & Accredited Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-between animate-fade-up">
              <div className="relative pl-6 border-l-2 border-accent mb-8">
                <Quote className="w-8 h-8 text-accent/30 mb-3" />
                <p className="font-heading text-2xl sm:text-3xl font-light text-foreground leading-snug tracking-tight mb-4">
                  "Understanding cutaneous science alongside hands-on laser practice gave me the practical confidence to treat real skin concerns safely."
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <p className="text-[10px] font-black tracking-widest uppercase text-muted-foreground">
                    Bosphorus Cosmetology Graduate • Certified Practitioner
                  </p>
                </div>
              </div>

              {/* Pillars of the Educational Experience */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 bg-card border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-0.5">
                      Supervised Laser & Chemical Lab Hours
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Hands-on mastery of Nd:YAG, diode laser, micro-needling, and medical-grade peeling agents under sterile clinical controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-card border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-0.5">
                      Direct Physician & CIDESCO Mentorship
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Small cohort sizes ensuring individualized feedback from practicing dermatologists and aesthetic educators.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/registration">
                  <Button
                    className="rounded-none h-12 px-8 text-[10px] font-black tracking-[0.2em] uppercase bg-accent hover:bg-accent/90 text-accent-foreground border-0"
                  >
                    Apply for Next Intake
                    <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Button>
                </Link>

                <Link to="/school/curriculum">
                  <Button
                    variant="outline"
                    className="rounded-none h-12 px-8 text-[10px] font-black tracking-[0.2em] uppercase border-border hover:bg-muted"
                  >
                    Review 18 Courses
                  </Button>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
