import { Stethoscope, GraduationCap, ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_ADDRESS, CLINIC_PHONE } from "@/data/clinic";
import { SCHOOL_ADDRESS, SCHOOL_PHONE } from "@/data/school";

const clinicImg = new URL("../../assets/Images/photo_1_2026-03-25_21-38-08.jpg", import.meta.url).href;

interface DivisionPortalProps {
  onSelectCategory?: (category: "derma" | "school") => void;
}

export function DivisionPortal({ onSelectCategory }: DivisionPortalProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-background overflow-hidden pt-24 pb-16">
      {/* Background ambient pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Portal Header - Concise */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
              Bosphorus Medical Solution PLC
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-light tracking-tight text-foreground mb-4">
            Select Your Destination
          </h1>

          <p className="text-muted-foreground font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Choose between clinical patient care at our Dermatology Center or professional aesthetic certification at our Cosmetology School.
          </p>
        </div>

        {/* Two Visual Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Division 1: Dermatology Center */}
          <div className="border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-accent transition-all duration-300 group shadow-sm">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={clinicImg}
                  alt="Bosphorus Dermatology Clinic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-foreground/90 backdrop-blur-sm text-background px-2.5 py-1 text-[9px] font-black tracking-widest uppercase">
                  Dermatology Center
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 text-accent text-[10px] font-bold tracking-widest uppercase mb-2">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>Clinical Patient Care</span>
                </div>

                <h2 className="font-heading text-2xl font-light text-foreground mb-2">
                  Dermatology & Aesthetics Center
                </h2>

                <p className="text-muted-foreground text-xs font-light leading-relaxed mb-4">
                  Board-certified dermatologists, laser treatments, autologous PRP therapies, and personalized skincare protocols.
                </p>

                <div className="space-y-1.5 text-xs text-foreground/80 font-light border-t border-border/60 pt-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{CLINIC_ADDRESS.short}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{CLINIC_PHONE}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              {onSelectCategory ? (
                <Button
                  onClick={() => onSelectCategory("derma")}
                  size="lg"
                  className="w-full rounded-none h-12 text-[10px] font-black tracking-widest uppercase bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  OPEN DERMATOLOGY CENTER
                  <ArrowRight className="ml-2 h-3.5 w-3.5 text-white" />
                </Button>
              ) : (
                <Link to="/dermatology">
                  <Button
                    size="lg"
                    className="w-full rounded-none h-12 text-[10px] font-black tracking-widest uppercase bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    OPEN DERMATOLOGY CENTER
                    <ArrowRight className="ml-2 h-3.5 w-3.5 text-white" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Division 2: Cosmetology School Center */}
          <div className="border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-accent transition-all duration-300 group shadow-sm">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src="/school/course-002.png"
                  alt="Bosphorus Cosmetology School Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground px-2.5 py-1 text-[9px] font-black tracking-widest uppercase">
                  Cosmetology School
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 text-accent text-[10px] font-bold tracking-widest uppercase mb-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Aesthetic Education</span>
                </div>

                <h2 className="font-heading text-2xl font-light text-foreground mb-2">
                  Cosmetology & Skin Care School
                </h2>

                <p className="text-muted-foreground text-xs font-light leading-relaxed mb-4">
                  18 accredited courses, hands-on clinical laser and device labs, regular and weekend sessions with formal certification.
                </p>

                <div className="space-y-1.5 text-xs text-foreground/80 font-light border-t border-border/60 pt-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{SCHOOL_ADDRESS.building}, Bole Atlas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{SCHOOL_PHONE}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              {onSelectCategory ? (
                <Button
                  onClick={() => onSelectCategory("school")}
                  size="lg"
                  className="w-full rounded-none h-12 text-[10px] font-black tracking-widest uppercase bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  OPEN COSMETOLOGY SCHOOL
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              ) : (
                <Link to="/school">
                  <Button
                    size="lg"
                    className="w-full rounded-none h-12 text-[10px] font-black tracking-widest uppercase bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    OPEN COSMETOLOGY SCHOOL
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
