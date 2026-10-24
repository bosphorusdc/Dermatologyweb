import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { services, type Service } from "@/data/services";
import { CLINIC_LOGO, getServiceThumbnail, hasServiceVideo } from "@/lib/service-media";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Play,
  Sparkles,
  Stethoscope,
  Scissors,
  CheckCircle2,
  Calendar,
} from "lucide-react";

// Category classifications
type CategoryKey = "all" | "medical" | "aesthetic" | "laser" | "hair";

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All Procedures" },
  { key: "medical", label: "Medical Dermatology" },
  { key: "aesthetic", label: "Aesthetic Medicine" },
  { key: "laser", label: "Laser & Body" },
  { key: "hair", label: "Hair & Scalp" },
];

function getCategoryForService(slug: string): CategoryKey {
  const aestheticSlugs = [
    "hydrafacial",
    "chemical-peels",
    "dermal-fillers",
    "dermaplaning",
    "botox",
    "prf-therapy",
    "mesotherapy",
    "microneedling",
  ];
  const laserSlugs = [
    "fat-removal",
    "microdermabrasion",
    "tattoo-removal",
    "cryolipolysis",
    "laser-hair-removal",
  ];
  const hairSlugs = [
    "prp",
    "dandruff-treatment",
    "alopecia",
    "hair-restoration",
    "eyebrow-beard-transplants",
  ];

  if (aestheticSlugs.includes(slug)) return "aesthetic";
  if (laserSlugs.includes(slug)) return "laser";
  if (hairSlugs.includes(slug)) return "hair";
  return "medical";
}

function getCategoryLabel(category: CategoryKey): string {
  switch (category) {
    case "aesthetic":
      return "Aesthetic Medicine";
    case "laser":
      return "Laser & Body";
    case "hair":
      return "Hair & Scalp";
    case "medical":
    default:
      return "Medical Dermatology";
  }
}

function ServiceCardMedia({ service }: { service: Service }) {
  const videoSrc = service.images?.videos?.[0];
  const imageSrc = getServiceThumbnail(service);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Video Thumbnail with hover playback
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

        {/* Video Badge */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[8px] font-bold tracking-widest text-white uppercase flex items-center gap-1.5 border border-white/10 pointer-events-none z-10">
          <Play className="h-2.5 w-2.5 fill-accent text-accent" />
          <span>Live Video</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />
      </div>
    );
  }

  // 2. Direct Procedure Image
  if (imageSrc) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-muted/40">
        <img
          src={imageSrc}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />

        {/* Before / After badge if available */}
        {(service.images?.before || service.images?.after) && (
          <div className="absolute top-3 left-3 bg-foreground/90 backdrop-blur-md px-2.5 py-1 text-[8px] font-bold tracking-widest text-background uppercase border border-border/20 pointer-events-none z-10">
            Clinical Results
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />
      </div>
    );
  }

  // 3. Fallback: Official Bosphorus Logo
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

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Services List
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const category = getCategoryForService(service.slug);
      const matchesCategory =
        activeCategory === "all" || category === activeCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.benefits?.some((b) => b.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── 01: Hero Section ── */}
      <section className="pt-40 pb-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">
                Clinical Portfolio
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-light tracking-tighter text-foreground leading-[0.95] mb-6 animate-fade-up">
              Specialized Care.<br />
              <span className="font-medium">Definitive Results.</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Explore our full directory of medical dermatology, aesthetic medicine, laser therapies, and hair restoration procedures.
            </p>
          </div>
        </div>
      </section>

      {/* ── 02: Controls & Grid Section ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          
          {/* Filter Bar & Search Toolbar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 mb-12 border-b border-border">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;
                const count =
                  cat.key === "all"
                    ? services.length
                    : services.filter(
                        (s) => getCategoryForService(s.slug) === cat.key
                      ).length;

                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`h-11 px-5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all flex items-center gap-2.5 border rounded-none ${
                      isActive
                        ? "bg-foreground text-background border-foreground shadow-sm"
                        : "bg-background text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-background/20 text-background"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search treatment or concern..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 bg-muted/40 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:bg-background transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-8">
            <span>
              Showing <strong className="text-foreground font-medium">{filteredServices.length}</strong> {filteredServices.length === 1 ? "procedure" : "procedures"}
              {activeCategory !== "all" && ` in ${getCategoryLabel(activeCategory)}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
          </div>

          {/* ── Services Grid ── */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const category = getCategoryForService(service.slug);

                return (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="group flex flex-col h-full bg-card border border-border hover:border-accent/60 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg animate-fade-up"
                    style={{ animationDelay: `${(index % 9) * 50}ms` }}
                  >
                    {/* Media Thumbnail Container (16:10 Ratio) */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <ServiceCardMedia service={service} />

                      {/* Top Right Quick Hover Action */}
                      <div className="absolute top-3 right-3 w-8 h-8 bg-background/90 backdrop-blur-sm border border-border/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                        <ArrowRight className="h-3.5 w-3.5 text-accent group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 flex flex-col flex-1 justify-between bg-card">
                      <div>
                        {/* Category Tag */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[9px] font-black tracking-[0.25em] text-accent uppercase">
                            {getCategoryLabel(category)}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-heading text-xl font-medium text-foreground tracking-tight group-hover:text-accent transition-colors mb-3">
                          {service.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2 mb-6">
                          {service.description}
                        </p>

                        {/* Benefits Preview */}
                        {service.benefits && service.benefits.length > 0 && (
                          <div className="space-y-1.5 pt-4 border-t border-border/50">
                            {service.benefits.slice(0, 2).map((benefit, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-xs text-muted-foreground/80 font-light"
                              >
                                <CheckCircle2 className="h-3 w-3 text-accent shrink-0" />
                                <span className="truncate">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Bottom Link CTA */}
                      <div className="pt-5 mt-6 border-t border-border/60 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-foreground/80 group-hover:text-accent transition-colors">
                        <span>View Procedure</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-border bg-muted/20 my-8">
              <Search className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-40" />
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                No matching procedures found
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                We couldn't find any treatment matching your search. Please try a different query or category filter.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="rounded-none text-xs tracking-widest uppercase font-bold"
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* ── 03: Direct Consultation Banner ── */}
          <div className="mt-28 p-10 md:p-16 border border-border bg-muted/20 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">
                  Personalized Diagnosis
                </span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
                Not sure which protocol is right for your skin?
              </h2>

              <p className="text-muted-foreground font-light text-base md:text-lg mb-8 leading-relaxed">
                Schedule an in-person consultation with our board-certified dermatologists for thorough dermoscopic evaluation and custom care planning.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    className="bg-foreground hover:bg-foreground/90 text-background rounded-none h-14 px-8 text-[11px] font-black tracking-[0.25em] uppercase w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-[0.98] shadow-none flex items-center justify-center gap-2.5"
                  >
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>Book Consultation</span>
                  </Button>
                </Link>
                <a href="tel:+251934768888" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="rounded-none h-14 px-8 text-[11px] font-black tracking-[0.2em] uppercase border border-foreground/30 hover:border-foreground hover:bg-background text-foreground w-full sm:w-auto transition-all shadow-none flex items-center justify-center"
                  >
                    <span>Call: +251 934 76 8888</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
