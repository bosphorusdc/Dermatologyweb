import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const hasBeforeAfter = service.images?.before && service.images?.after;
  const hasVideos = service.images?.videos && service.images.videos.length > 0;
  const hasGallery = service.images?.gallery && service.images.gallery.length > 0;
  const hasAnyMedia = hasBeforeAfter || hasVideos || hasGallery;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Creative Detail Hero ── */}
      <section className="pt-48 pb-24 bg-background overflow-hidden relative">
        <div className="absolute top-20 right-0 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[12rem] font-heading font-black tracking-tighter uppercase whitespace-nowrap">
            {service.title.split(' ')[0]}
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8 animate-fade-up">
              <span className="text-[10px] font-black tracking-[0.5em] text-accent uppercase">
                Treatment Profile
              </span>
              <div className="h-px w-20 bg-accent/20" />
            </div>

            <h1 className="font-heading text-6xl md:text-8xl font-light tracking-tighter text-foreground leading-[0.95] animate-fade-up">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "italic text-muted-foreground pr-4" : "font-medium pr-4"}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <p className="mt-12 text-xl text-muted-foreground font-light max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── Architectural Overview ── */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Description side */}
            <div className="lg:col-span-7 animate-fade-up">
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[10px] font-black tracking-[0.4em] text-muted-foreground uppercase">Description</span>
                <div className="h-px w-10 bg-border" />
              </div>
              <p className="text-2xl text-foreground font-light leading-relaxed mb-12">
                {service.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <p className="text-foreground/70 font-medium tracking-tight text-sm uppercase">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual side */}
            <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="relative">
                <div className="absolute -inset-4 border border-border rounded-[3rem] -z-10 translate-x-8 translate-y-8" />
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-luxury">
                  {hasBeforeAfter ? (
                    <img
                      src={service.images!.after}
                      alt={`${service.title} result`}
                      className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                    />
                  ) : hasVideos ? (
                    <video
                      src={service.images!.videos![0]}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : hasGallery ? (
                    <img
                      src={service.images!.gallery![0]}
                      alt={`${service.title}`}
                      className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                    />
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop"
                      alt="Clinical environment"
                      className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                    />
                  )}
                </div>
                {/* Floating label */}
                <div className="absolute -bottom-8 -left-8 bg-foreground p-8 text-background shadow-2xl">
                  <p className="text-[10px] font-black tracking-[0.4em] text-accent uppercase mb-4">Status</p>
                  <p className="text-xl font-heading font-light italic text-background">Currently accepting new private patients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinical Results ── */}
      {hasAnyMedia && (
        <section className="py-32 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-block px-4 py-1.5 border border-accent/20 rounded-full mb-8">
                <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
                  Proven Efficacy
                </span>
              </div>
              <h2 className="font-heading text-5xl font-medium tracking-tight text-foreground mb-6">
                Clinical Results.
              </h2>
              <p className="text-muted-foreground font-light">
                Observed results from our specialized clinical pathways.
              </p>
            </div>

            {/* Before / After images */}
            {hasBeforeAfter && (
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="relative group shadow-luxury overflow-hidden h-[500px]">
                  <img
                    src={service.images!.before}
                    alt="Before"
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-10 left-10 glass-effect px-4 py-2 text-[10px] font-black tracking-widest uppercase">Initial Condition</div>
                </div>
                <div className="relative group shadow-luxury overflow-hidden h-[500px]">
                  <img
                    src={service.images!.after}
                    alt="After"
                    className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-10 left-10 bg-accent px-4 py-2 text-accent-foreground text-[10px] font-black tracking-widest uppercase">Post-Protocol</div>
                </div>
              </div>
            )}

            {/* Gallery images */}
            {hasGallery && (
              <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                {service.images!.gallery!.map((src, i) => (
                  <div key={i} className="relative group shadow-luxury overflow-hidden aspect-square">
                    <img
                      src={src}
                      alt={`${service.title} result ${i + 1}`}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Videos */}
            {hasVideos && (
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {service.images!.videos!.map((src, i) => (
                  <div key={i} className="relative group shadow-luxury overflow-hidden aspect-[9/16] rounded-2xl bg-black">
                    <video
                      src={src}
                      className="w-full h-full object-cover"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </div>
                ))}
              </div>
            )}

            <p className="text-center text-[10px] text-muted-foreground mt-12 tracking-widest uppercase italic">
              * Results photographed under standard clinical lighting. Individual biological response varies.
            </p>
          </div>
        </section>
      )}

      {/* ── Closing Call ── */}
      <section className="py-40 bg-background text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-5xl md:text-7xl font-medium tracking-tighter text-foreground mb-12">
            The <br className="hidden md:block" />
            <span className="italic font-light text-muted-foreground">Restore.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-none h-16 px-12 text-[11px] font-black tracking-[0.2em] shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                SECURE A CONSULTATION
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground font-bold tracking-widest text-[10px] uppercase group p-4">
              Return to Catalog
              <div className="h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
