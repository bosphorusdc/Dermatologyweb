import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── Creative Hero ── */}
      <section className="pt-48 pb-32 bg-background overflow-hidden relative border-b border-border">
        {/* Subtle decorative text */}
        <div className="absolute top-20 right-0 opacity-[0.03] select-none pointer-events-none">
          <span className="text-[15rem] font-heading font-black tracking-tighter">PROCEDURES</span>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-10 animate-fade-up">
              <span className="text-[10px] font-black tracking-[0.5em] text-accent uppercase">
                Expertise
              </span>
              <div className="h-px w-24 bg-accent/20" />
            </div>
            
            <h1 className="font-heading text-7xl md:text-8xl font-light tracking-tighter text-foreground leading-[0.9] animate-fade-up">
              Medical <br />
              <span className="font-medium">Artistry.</span>
            </h1>
            
            <p className="mt-14 text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              Our repertoire is curated for performance. We offer only those treatments where we can guarantee clinical excellence and definitive results.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Architectural List ── */}
      <section className="py-48 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group block border-b border-border py-16 lg:py-24 animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Numbering */}
                  <div className="lg:col-span-1">
                    <span className="text-[10px] font-black tracking-[0.5em] text-accent/30 group-hover:text-accent transition-colors">
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-8 lg:pl-12">
                    <h2 className="font-heading text-4xl md:text-6xl font-medium tracking-tight text-foreground mb-8 group-hover:translate-x-6 transition-transform duration-500">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-xl font-light leading-relaxed max-w-3xl opacity-70 group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center h-full pt-10 lg:pt-0">
                    <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:rotate-45 transition-all duration-500">
                      <Plus className="h-6 w-6 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Need more info? */}
          <div className="mt-48 text-center max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-heading text-3xl font-medium text-foreground mb-8">
              Seeking a specific procedure?
            </h3>
            <p className="text-xl text-muted-foreground font-light mb-14 leading-relaxed">
              Not all medical protocols are listed online. If you have a specific clinical need, our specialists are available for confidential consultations.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background rounded-none h-16 px-16 text-[12px] font-black tracking-[0.3em] shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                DIRECT CONSULTANT CONTACT
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
