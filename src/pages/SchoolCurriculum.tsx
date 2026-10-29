import { Link } from "react-router-dom";
import { SchoolHeader } from "@/components/layout/SchoolHeader";
import { SchoolFooter } from "@/components/layout/SchoolFooter";
import { REGISTERED_COURSES } from "@/data/school";
import { CurriculumSection } from "@/components/school/CurriculumSection";
import { Button } from "@/components/ui/button";
import { GraduationCap, CheckCircle, Award } from "lucide-react";

export default function SchoolCurriculum() {
  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      <SchoolHeader />

      {/* Main curriculum list */}
      <CurriculumSection />

      {/* Certification details */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="border border-border p-10 bg-card">
            <div className="flex items-center gap-3 text-accent text-xs font-bold tracking-widest uppercase mb-4">
              <Award className="w-5 h-5" />
              Certification & Credentials
            </div>
            <h3 className="font-heading text-3xl font-light text-foreground mb-4">
              Graduation Competency Certificate
            </h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
              Upon successful completion of all theoretical exams and supervised clinical practical demonstrations, students are awarded the official Certificate of Aesthetic & Cosmetology Competency issued by Bosphorus Medical Solution PLC.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-border text-xs text-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Certified Clinical Device Operator</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Licensed Aesthetician Pathway</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Clinical Portfolio Documentation</span>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-heading text-lg font-light text-foreground">Ready to start your aesthetic certification?</p>
                <p className="text-xs text-muted-foreground font-light">Seats are limited for each supervised clinical batch.</p>
              </div>
              <Link to="/registration">
                <Button className="rounded-none h-11 px-8 text-[10px] font-black tracking-widest uppercase bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2 shadow-none">
                  <GraduationCap className="w-4 h-4" />
                  APPLY NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SchoolFooter />
    </div>
  );
}
