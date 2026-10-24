import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  GALLERY_ITEMS,
  type GalleryItem,
  type GalleryCategory,
} from "@/data/gallery";
import { Button } from "@/components/ui/button";
import {
  Play,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Calendar,
  Sparkles,
  Camera,
  Film,
  Building2,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

const CATEGORY_TABS: { key: GalleryCategory; label: string; icon: LucideIcon }[] = [
  { key: "all", label: "All Media", icon: Sparkles },
  { key: "videos", label: "Live Procedures (Videos)", icon: Film },
  { key: "results", label: "Clinical Results", icon: Camera },
  { key: "procedures", label: "Clinical Practice", icon: Camera },
  { key: "clinic", label: "Clinic & Facility", icon: Building2 },
  { key: "ambassador", label: "Brand Ambassador", icon: UserCheck },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Filtered items
  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setSelectedIndex(idx);
    setSelectedItem(item);
  };

  const closeLightbox = useCallback(() => {
    setSelectedItem(null);
    setSelectedIndex(-1);
  }, []);

  const nextItem = useCallback(() => {
    if (filteredItems.length === 0) return;
    setSelectedIndex((current) => {
      const nextIdx = (current + 1) % filteredItems.length;
      setSelectedItem(filteredItems[nextIdx]);
      return nextIdx;
    });
  }, [filteredItems]);

  const prevItem = useCallback(() => {
    if (filteredItems.length === 0) return;
    setSelectedIndex((current) => {
      const prevIdx = (current - 1 + filteredItems.length) % filteredItems.length;
      setSelectedItem(filteredItems[prevIdx]);
      return prevIdx;
    });
  }, [filteredItems]);

  // Keyboard controls for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, closeLightbox, nextItem, prevItem]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── 01: Hero Section ── */}
      <section className="pt-40 pb-20 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">
                Visual Documentation
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-light tracking-tighter text-foreground leading-[0.95] mb-6 animate-fade-up">
              Documented Precision.<br />
              <span className="font-medium">The Gallery.</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Explore live clinical procedures, authentic patient results, clinic treatment suites, and official partnership moments at Bosphorus Dermatology & Aesthetics Center.
            </p>
          </div>
        </div>
      </section>

      {/* ── 02: Gallery Filter Bar & Grid ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-10 mb-12 border-b border-border">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.key;
              const count =
                tab.key === "all"
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((item) => item.category === tab.key).length;

              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`h-11 px-5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all flex items-center gap-2.5 border rounded-none ${
                    isActive
                      ? "bg-foreground text-background border-foreground shadow-sm"
                      : "bg-background text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
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

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative flex flex-col bg-card border border-border hover:border-accent/60 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg cursor-pointer animate-fade-up"
                style={{ animationDelay: `${(index % 9) * 40}ms` }}
              >
                {/* Media Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-black">
                  {item.type === "video" ? (
                    <>
                      <video
                        src={`${item.src}#t=0.001`}
                        preload="metadata"
                        playsInline
                        muted
                        loop
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0.001;
                        }}
                      />
                      {/* Video Badge */}
                      <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[8px] font-bold tracking-widest text-white uppercase flex items-center gap-1.5 border border-white/10 pointer-events-none z-10">
                        <Play className="h-2.5 w-2.5 fill-accent text-accent" />
                        <span>Live Video</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Photo Badge */}
                      <div className="absolute top-3 left-3 bg-foreground/90 backdrop-blur-md px-2.5 py-1 text-[8px] font-bold tracking-widest text-background uppercase border border-border/20 pointer-events-none z-10">
                        {item.categoryLabel}
                      </div>
                    </>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

                  {/* Expand / Maximize Hover Button */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-background/90 backdrop-blur-sm border border-border/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <Maximize2 className="h-3.5 w-3.5 text-accent" />
                  </div>
                </div>

                {/* Caption Details */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-card">
                  <div>
                    <span className="text-[9px] font-black tracking-[0.25em] text-accent uppercase mb-1 block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-heading text-lg font-medium text-foreground tracking-tight group-hover:text-accent transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-border/50">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[9px] tracking-wider uppercase px-2 py-0.5 bg-muted/60 text-muted-foreground font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── 03: Bottom Consultation Banner ── */}
          <div className="mt-28 p-10 md:p-16 border border-border bg-muted/20 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase">
                  Schedule Consultation
                </span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
                Ready to begin your customized skincare journey?
              </h2>

              <p className="text-muted-foreground font-light text-base md:text-lg mb-8 leading-relaxed">
                Consult with our specialist dermatologists at Hidmona Tower for clinical diagnosis and tailored aesthetic treatment plans.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-none h-14 px-8 text-[11px] font-black tracking-[0.25em] uppercase w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-[0.98] shadow-none flex items-center justify-center gap-2.5">
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

      {/* ── 04: Fullscreen Media Lightbox / Modal ── */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 animate-fade-in">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase bg-black/60 px-3 py-1 border border-white/10">
                {selectedItem.categoryLabel}
              </span>
              <span className="text-xs text-white/60 hidden sm:inline">
                {selectedIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="h-10 w-10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
              title="Close (Esc)"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Media Player / Viewer */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-h-[70vh]">
            
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevItem();
              }}
              className="absolute left-2 md:left-6 z-30 h-12 w-12 bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Content Display */}
            <div className="max-h-full max-w-5xl flex items-center justify-center">
              {selectedItem.type === "video" ? (
                <video
                  key={selectedItem.src}
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[68vh] max-w-full rounded-none shadow-2xl border border-white/10 object-contain"
                />
              ) : (
                <img
                  key={selectedItem.src}
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[68vh] max-w-full rounded-none shadow-2xl border border-white/10 object-contain"
                />
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextItem();
              }}
              className="absolute right-2 md:right-6 z-30 h-12 w-12 bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Details Footer */}
          <div className="max-w-4xl mx-auto w-full bg-black/70 border border-white/10 p-5 backdrop-blur-md z-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-lg md:text-xl font-medium text-white tracking-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-white/70 font-light mt-1 max-w-2xl leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {selectedItem.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] tracking-wider uppercase px-2 py-1 bg-white/10 text-white/80 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      )}

      <Footer />
    </div>
  );
}
