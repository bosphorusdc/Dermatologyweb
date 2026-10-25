import { Link } from "react-router-dom";
import { SCHOOL_ADDRESS, SCHOOL_PHONE, SCHOOL_PARENT_COMPANY, SCHOOL_NAME, SCHOOL_SESSION_TYPE } from "@/data/school";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, GraduationCap, Building2, CheckCircle2 } from "lucide-react";

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
              Admissions & Registration
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Student Registration
          </h2>

          <p className="text-muted-foreground font-light text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Official admissions for {SCHOOL_NAME} by {SCHOOL_PARENT_COMPANY}.
          </p>
        </div>

        {/* Official Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          
          {/* Card 1: Official Program Info */}
          <div className="border border-accent bg-accent/5 p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-accent uppercase mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>Official Program</span>
              </div>

              <h3 className="font-heading text-2xl font-light text-foreground mb-2">
                Cosmetology & Skin Care
              </h3>

              <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                Comprehensive professional aesthetic curriculum with 18 certified course topics and medical device practicals.
              </p>

              <div className="space-y-3 pt-4 border-t border-accent/20 text-xs">
                <div className="flex items-center gap-2.5 text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span><strong>Entity:</strong> {SCHOOL_PARENT_COMPANY}</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span><strong>Entry Session:</strong> {SCHOOL_SESSION_TYPE}</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span><strong>Curriculum:</strong> 18 Detailed Course Topics</span>
                </div>
                <div className="flex items-center gap-2.5 text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span><strong>Training:</strong> Theoretical & Hands-On Machine Lab</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-accent/20">
              <Link to="/school/contact">
                <Button
                  className="w-full rounded-none h-11 text-[10px] font-black tracking-widest uppercase bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2 transition-colors shadow-none"
                >
                  <GraduationCap className="w-4 h-4" />
                  Register / Inquire Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Campus Office & Direct Contact */}
          <div className="border border-border bg-card p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-accent uppercase mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Campus Location</span>
              </div>

              <h3 className="font-heading text-2xl font-light text-foreground mb-2">
                Admissions Office
              </h3>

              <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                Visit the campus admissions desk for direct registration and curriculum inquiries.
              </p>

              <div className="space-y-4 pt-4 border-t border-border/60 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground block">Campus Address:</strong>
                    {SCHOOL_ADDRESS.full}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground block">Direct Phone:</strong>
                    <a
                      href={`tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`}
                      className="text-accent font-bold hover:underline"
                    >
                      {SCHOOL_PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border/60">
              <a
                href={`tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`}
                className="w-full h-11 border border-border hover:border-accent text-foreground hover:text-accent text-[10px] font-black tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Admissions Desk
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
