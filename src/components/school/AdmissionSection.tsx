import { Link } from "react-router-dom";
import { SCHOOL_ADDRESS, SCHOOL_PHONE, SCHOOL_PARENT_COMPANY, SCHOOL_NAME, SCHOOL_SESSION_TYPE } from "@/data/school";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import { StudentRegistrationForm } from "./StudentRegistrationForm";

interface AdmissionSectionProps {
  onOpenEnrollModal?: () => void;
}

export function AdmissionSection({ onOpenEnrollModal }: AdmissionSectionProps) {
  return (
    <section id="admissions" className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
              Admissions & Enrollment
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Student Registration
          </h2>

          <p className="text-muted-foreground font-light text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Reserve your seat for upcoming sessions at {SCHOOL_NAME} by {SCHOOL_PARENT_COMPANY}.
          </p>
        </div>

        {/* Form and Campus Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mb-12 items-start">
          
          {/* Interactive Online Form (7 cols) */}
          <div className="lg:col-span-7">
            <StudentRegistrationForm />
          </div>

          {/* Quick Info & Campus Office (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Session Info */}
            <div className="border border-border p-6 bg-card">
              <span className="text-[10px] font-black tracking-widest text-accent uppercase block mb-2">
                Intake Program
              </span>
              <h4 className="font-heading text-xl font-light text-foreground mb-3">
                Regular Session Intake
              </h4>
              <div className="space-y-2.5 text-xs text-foreground/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Entry Session: <strong>{SCHOOL_SESSION_TYPE}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>18 Certified Course Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Practical Clinical Demonstrations</span>
                </div>
              </div>
            </div>

            {/* Campus Office */}
            <div className="border border-border p-6 bg-card">
              <span className="text-[10px] font-black tracking-widest text-accent uppercase block mb-2">
                Admissions Desk
              </span>
              <h4 className="font-heading text-xl font-light text-foreground mb-3">
                Campus Location
              </h4>
              <div className="space-y-3 text-xs text-muted-foreground font-light mb-5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{SCHOOL_ADDRESS.full}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a
                    href={`tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`}
                    className="font-bold text-accent hover:underline text-sm"
                  >
                    {SCHOOL_PHONE}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`}
                className="w-full h-10 border border-border hover:border-accent text-foreground hover:text-accent text-[10px] font-black tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Admissions Office
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
