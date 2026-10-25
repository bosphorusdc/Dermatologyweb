import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import type { Service } from "@/data/services";
import { CLINIC_LOGO, getServiceThumbnail } from "@/lib/service-media";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TreatmentsCarouselProps {
  services: Service[];
}

function ServiceCardMedia({ service }: { service: Service }) {
  const videoSrc = service.images?.videos?.[0];
  const imageSrc = getServiceThumbnail(service);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. If service has its own video, show video thumbnail with live hover preview
  if (videoSrc) {
    return (
      <div className="relative w-full h-full bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={`${videoSrc}#t=0.001`}
          preload="metadata"
          playsInline
          muted
          loop
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          onMouseEnter={() => {
            videoRef.current?.play().catch(() => {});
          }}
          onMouseLeave={() => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0.001;
            }
          }}
        />

        {/* Live Video Indicator Badge */}
        <div className="absolute top-3 left-3 bg-accent/90 backdrop-blur-md px-2.5 py-1 text-[8px] font-bold tracking-widest text-white uppercase flex items-center gap-1.5 border border-white/20 pointer-events-none z-10">
          <Play className="h-2.5 w-2.5 fill-white text-white" />
          <span>Live Video</span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />
      </div>
    );
  }

  // 2. If service has its own image (before/after/gallery), show image
  if (imageSrc) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-muted/50">
        <img
          src={imageSrc}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />
      </div>
    );
  }

  // 3. Fallback: Show official clinic logo
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-muted/30 p-8 border-b border-border/40">
      <img
        src={CLINIC_LOGO}
        alt="Bosphorus Dermatology"
        className="max-h-14 w-auto object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
      />
    </div>
  );
}

export function TreatmentsCarousel({ services }: TreatmentsCarouselProps) {
  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: false,
        }}
        className="w-full"
      >
        {/* ── Section Header Row: Title on Left, Single Professional "All Services" & Arrows on Right ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-fade-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">
                Our Treatments
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tighter text-foreground leading-[0.95]">
              Every procedure,<br />
              <span className="italic font-light text-muted-foreground">one standard.</span>
            </h2>
          </div>

          {/* Unified Controls: 1 All Services button + Nav Arrows */}
          <div className="flex items-center gap-6 shrink-0 pb-1">
            <Link to="/services">
              <Button
                variant="ghost"
                className="h-10 px-0 hover:bg-transparent text-[10px] font-black tracking-[0.25em] uppercase text-foreground hover:text-accent group/btn transition-colors"
              >
                <span>All Services</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5 text-accent group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <div className="h-4 w-px bg-border hidden sm:block" />

            <div className="flex items-center gap-2">
              <CarouselPrevious className="relative inset-auto translate-y-0 h-10 w-10 rounded-none border border-border bg-background hover:bg-muted text-foreground hover:text-accent shadow-none transition-colors" />
              <CarouselNext className="relative inset-auto translate-y-0 h-10 w-10 rounded-none border border-border bg-background hover:bg-muted text-foreground hover:text-accent shadow-none transition-colors" />
            </div>
          </div>
        </div>

        {/* ── Carousel Cards Grid ── */}
        <CarouselContent className="-ml-6">
          {services.map((service) => (
            <CarouselItem
              key={service.slug}
              className="pl-6 basis-[280px] sm:basis-[320px] lg:basis-[340px]"
            >
              <Link
                to={`/services/${service.slug}`}
                className="group flex flex-col h-full bg-accent text-white border border-accent/20 hover:border-accent hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden shadow-md"
              >
                {/* Media Header (Enlarged, Dominant Visual Card) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <ServiceCardMedia service={service} />

                  {/* Arrow Icon on hover */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/95 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-sm">
                    <ArrowRight className="h-3.5 w-3.5 text-accent group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Content Details: Compact Small Section */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-between bg-accent text-white">
                  <div>
                    <p className="text-[8px] font-black tracking-[0.25em] text-white/70 uppercase mb-1">
                      Clinical Protocol
                    </p>
                    <h3 className="font-heading text-base sm:text-lg font-light text-white tracking-tight truncate">
                      {service.title}
                    </h3>
                  </div>

                  <div className="pt-2.5 mt-2.5 border-t border-white/15 flex items-center justify-between text-[9px] font-bold tracking-widest uppercase text-white/90 group-hover:text-white transition-colors">
                    <span>Explore Treatment</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
