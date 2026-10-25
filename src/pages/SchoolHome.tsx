import { Link } from "react-router-dom";
import { SchoolHeader } from "@/components/layout/SchoolHeader";
import { SchoolFooter } from "@/components/layout/SchoolFooter";
import { SchoolHero } from "@/components/school/SchoolHero";
import { AmbassadorSection } from "@/components/home/AmbassadorSection";
import { SchoolTestimonySection } from "@/components/school/SchoolTestimonySection";
import { CurriculumSection } from "@/components/school/CurriculumSection";
import { PracticalLabSection } from "@/components/school/PracticalLabSection";
import { SchoolFacultySection } from "@/components/school/SchoolFacultySection";
import { AdmissionSection } from "@/components/school/AdmissionSection";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, Phone } from "lucide-react";
import { SCHOOL_PHONE } from "@/data/school";

export default function SchoolHome() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/20 selection:text-slate-900">
      {/* School Header with Minimal Division Switcher & Short Menubar */}
      <SchoolHeader />

      {/* Hero Section with Live Academy Tour Video on Right */}
      <SchoolHero />

      {/* Brand Ambassador Section */}
      <AmbassadorSection division="school" />

      {/* Authentic Graduate Testimony Section (Right under Ambassadors) */}
      <SchoolTestimonySection />

      {/* 18 Course Topics with Real PDF Images & Concise Tips */}
      <CurriculumSection />

      {/* Hands-On Practical Lab Devices */}
      <PracticalLabSection />

      {/* Faculty & Staff Members (Staff section hidden per request) */}
      {/* <SchoolFacultySection /> */}

      {/* Intake Sessions & Admissions */}
      <AdmissionSection />

      {/* Minimal Bottom CTA */}
      <section className="bg-accent text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-[10px] font-black tracking-[0.3em] text-white/90 uppercase block mb-3">
            Kelela Tower, 3rd Floor • Bole Atlas
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            Begin your certified aesthetic education.
          </h2>

          <p className="text-white/80 font-light text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Register for regular sessions at our Bole Atlas campus or inquire directly with admissions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/school/contact">
              <Button
                size="lg"
                className="rounded-none h-12 px-8 text-[10px] font-black tracking-widest bg-white hover:bg-white/90 text-accent uppercase flex items-center gap-2 shadow-md"
              >
                <GraduationCap className="w-4 h-4" />
                APPLY NOW
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>

            <a href={`tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none h-12 px-8 text-[10px] font-black tracking-widest text-white hover:bg-white/10 uppercase border-white/30 flex items-center gap-2 bg-transparent"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                {SCHOOL_PHONE}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* School Footer */}
      <SchoolFooter />
    </div>
  );
}
