import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ServiceMediaPlaceholder } from "@/components/ui/service-media-placeholder";
import { LazyVideo } from "@/components/ui/lazy-video";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { services } from "@/data/services";
import { getServiceThumbnail } from "@/lib/service-media";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const serviceIndex = services.findIndex((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const hasBeforeAfter = !!(service.images?.before && service.images?.after);
  const hasVideos      = !!(service.images?.videos?.length);
  const hasGallery     = !!(service.images?.gallery?.length);
  const heroMedia      = getServiceThumbnail(service);

  // Related services (prev/next)
  const prev = services[serviceIndex - 1];
  const next = services[serviceIndex + 1];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        {/* Media */}
        {heroMedia ? (
          <img
            src={heroMedia}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
        ) : (
          <ServiceMediaPlaceholder
            title={service.title}
            variant="hero"
            className="absolute inset-0 w-full h-full"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,17%,8%)] via-[hsl(210,17%,8%)]/50 to-transparent" />

        {/* Back link */}
        <Link
          to="/services"
          className="absolute top-24 left-6 md:left-12 z-10 flex items-center gap-2 text-white/60 hover:text-white text-[10px] font-black tracking-[0.3em] uppercase transition-colors group"
        >
          <ChevronLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
          All Services
        </Link>

        <div className="relative z-10 container mx-auto px-6 pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <div className="h-px w-8 bg-accent/70" />
              <span className="text-[9px] font-black tracking-[0.5em] text-accent uppercase">Treatment Profile</span>
            </div>
            <h1
              className="font-heading text-5xl md:text-7xl font-light tracking-tighter text-white leading-[0.92] animate-fade-up mb-6"
              style={{ animationDelay: "80ms" }}
            >
              {service.title}
            </h1>
            <p
              className="text-white/55 text-lg font-light leading-relaxed max-w-2xl animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Description */}
            <div className="lg:col-span-7 animate-fade-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">About This Treatment</span>
              </div>
              <p className="text-lg text-foreground/80 font-light leading-relaxed mb-14">
                {service.fullDescription}
              </p>

              {/* Benefits */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-border" />
                <span className="text-[9px] font-black tracking-[0.4em] text-muted-foreground/60 uppercase">Key Benefits</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-border/50 last:border-0">
                    <div className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                    <p className="text-sm text-foreground/70 font-light leading-snug">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:col-start-9 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="border border-border p-8 flex flex-col gap-8 sticky top-24">
                <div>
                  <p className="text-[9px] font-black tracking-[0.4em] text-muted-foreground/50 uppercase mb-3">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-sm text-foreground font-medium">Accepting new patients</p>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <p className="text-[9px] font-black tracking-[0.4em] text-muted-foreground/50 uppercase mb-3">Treatment</p>
                  <p className="text-sm text-foreground font-light">{service.title}</p>
                </div>

                <div className="h-px bg-border" />

                <div className="flex flex-col gap-3">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="w-full rounded-none h-12 bg-foreground hover:bg-foreground/90 text-background text-[10px] font-black tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-none border-0"
                    >
                      BOOK CONSULTATION
                      <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full rounded-none h-10 text-[10px] font-black tracking-[0.2em] uppercase border-border hover:border-accent/40 hover:bg-muted/30 shadow-none transition-all"
                    >
                      All Treatments
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      {hasBeforeAfter && (
        <section className="py-24 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-12 animate-fade-up">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Clinical Results</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: "80ms" }}>
                <div className="relative overflow-hidden h-[500px]">
                  <img src={service.images!.before} alt="Before" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute bottom-5 left-5 bg-foreground/80 backdrop-blur-sm px-4 py-2 text-[9px] font-black tracking-[0.3em] text-background uppercase">Before</div>
                </div>
                <div className="relative overflow-hidden h-[500px]">
                  <img src={service.images!.after} alt="After" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute bottom-5 right-5 bg-accent px-4 py-2 text-[9px] font-black tracking-[0.3em] text-accent-foreground uppercase">After</div>
                </div>
              </div>
              <p className="text-[9px] text-muted-foreground/40 tracking-widest uppercase italic mt-8">
                * Results photographed under standardised clinical lighting. Individual biological response varies.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {hasGallery && (
        <section className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-12 animate-fade-up">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Gallery</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 animate-fade-up" style={{ animationDelay: "80ms" }}>
                {service.images!.gallery!.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden">
                    <img src={src} alt={`${service.title} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Videos ── */}
      {hasVideos && (
        <section className="py-24 bg-muted/20 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-12 animate-fade-up">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">Procedure Videos</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "80ms" }}>
                {service.images!.videos!.map((src, i) => (
                  <div key={i} className="aspect-[9/16] overflow-hidden bg-black">
                    <LazyVideo src={src} clickToPlay className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-32 bg-[hsl(210,17%,11%)]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <h2 className="font-heading text-4xl md:text-6xl font-light tracking-tighter text-white leading-[0.95] mb-6">
                Ready to start<br />
                <span className="italic text-white/35">your</span>{" "}
                <span className="font-medium">{service.title.split(" ")[0]} protocol?</span>
              </h2>
              <p className="text-white/45 font-light leading-relaxed max-w-lg">
                Book a private consultation with one of our board-certified specialists. We'll assess your condition and design a protocol tailored specifically to you.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 animate-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="flex flex-col gap-3">
                <Link to="/contact">
                  <Button size="lg" className="w-full rounded-none h-14 bg-accent hover:bg-accent/90 text-accent-foreground text-[11px] font-black tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-[0.98] group border-0 shadow-none">
                    BOOK CONSULTATION
                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="ghost" size="lg" className="w-full rounded-none h-12 text-[10px] font-black tracking-[0.2em] text-white/50 hover:text-white hover:bg-white/5 uppercase border border-white/10 hover:border-white/20 transition-all">
                    Browse All Treatments
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prev / Next ── */}
      {(prev || next) && (
        <section className="border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {prev ? (
              <Link to={`/services/${prev.slug}`} className="group flex items-center gap-6 p-10 hover:bg-muted/30 transition-colors">
                <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:-translate-x-1 transition-all shrink-0" />
                <div>
                  <p className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/50 uppercase mb-1">Previous</p>
                  <p className="font-heading text-lg font-light text-foreground group-hover:text-accent transition-colors">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/services/${next.slug}`} className="group flex items-center justify-end gap-6 p-10 hover:bg-muted/30 transition-colors text-right">
                <div>
                  <p className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/50 uppercase mb-1">Next</p>
                  <p className="font-heading text-lg font-light text-foreground group-hover:text-accent transition-colors">{next.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetail;
