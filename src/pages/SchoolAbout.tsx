import { SchoolHeader } from "@/components/layout/SchoolHeader";
import { SchoolFooter } from "@/components/layout/SchoolFooter";
import { SchoolFacultySection } from "@/components/school/SchoolFacultySection";
import { SchoolTestimonySection } from "@/components/school/SchoolTestimonySection";
import { AmbassadorSection } from "@/components/home/AmbassadorSection";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, ShieldCheck, Microscope, HeartHandshake, ArrowRight } from "lucide-react";
import { SCHOOL_NAME, SCHOOL_PARENT_COMPANY, SCHOOL_ADDRESS, SCHOOL_PHONE } from "@/data/school";
import { Link } from "react-router-dom";

export default function SchoolAbout() {
  return (
    <div className="min-h-screen bg-background">
      <SchoolHeader />

      {/* Philosophy & Vision */}
      <section className="pt-32 pb-20 md:pt-36 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-[10px] font-black tracking-[0.35em] text-accent uppercase block mb-4">
                Our Educational Vision
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground tracking-tight mb-6">
                Clinical Rigor. <br />
                Aesthetic Precision.
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm font-light leading-relaxed">
                <p>
                  At {SCHOOL_NAME}, we believe that cosmetology and aesthetic practice must be rooted in true dermatological science. Understanding the biological layers of the skin, melanogenesis kinetics, and cutaneous wound healing is not an elective—it is the prerequisite for safe, transformative results.
                </p>
                <p>
                  Our curriculum combines intensive classroom theory with hands-on practice on real medical equipment. We emphasize safety protocols, proper diagnosis via multispectral skin and hair analyzers, and ethical patient consultations.
                </p>
                <p>
                  Whether mastering autologous PRP therapy, laser hair removal on diverse skin phototypes, or chemical peels, our students develop the confidence and technical precision required in modern aesthetic clinics.
                </p>
              </div>

              <div className="pt-8">
                <Link to="/registration">
                  <Button
                    className="rounded-none h-12 px-8 text-[10px] font-black tracking-[0.2em] uppercase bg-foreground text-background hover:bg-foreground/90"
                  >
                    <GraduationCap className="w-4 h-4 mr-2 text-accent" />
                    Apply for Next Intake
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="border border-border p-8 bg-card">
                <div className="w-10 h-10 border border-border flex items-center justify-center text-accent mb-4">
                  <Microscope className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-xl font-medium text-foreground mb-2">
                  Clinical Lab Facilities
                </h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Our laboratories at Kelela Tower feature clinical lasers, medical centrifuges, RF platforms, and hydrafacial systems matching international med-spa standards.
                </p>
              </div>

              <div className="border border-border p-8 bg-card">
                <div className="w-10 h-10 border border-border flex items-center justify-center text-accent mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-xl font-medium text-foreground mb-2">
                  Safety & Ethics First
                </h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Strict focus on infection prevention, autoclave sterilization, aseptic technique, and recognition of medical skin conditions requiring physician referral.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Ambassadors */}
      <AmbassadorSection division="school" />

      {/* Graduate Testimony */}
      <SchoolTestimonySection />

      {/* Faculty & Instructors (Staff section hidden per request) */}
      {/* <SchoolFacultySection /> */}

      {/* Cross link to Dermatology Center */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-[10px] font-black tracking-[0.35em] text-accent uppercase mb-2">
            Dual Institutional Network
          </p>
          <h3 className="font-heading text-3xl font-light text-foreground mb-4">
            Bosphorus Dermatology & Aesthetics Center
          </h3>
          <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-lg mx-auto mb-8">
            Looking for patient consultations, clinical acne care, PRP, or dermatological treatments? Visit our dedicated clinical center at Hidmona Tower, Bole Road.
          </p>
          <Link to="/dermatology">
            <Button
              variant="outline"
              className="rounded-none h-12 px-8 text-[10px] font-black tracking-[0.2em] uppercase border-border hover:bg-background"
            >
              Explore Dermatology Center
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <SchoolFooter />
    </div>
  );
}
