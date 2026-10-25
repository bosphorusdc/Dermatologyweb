import { Link } from "react-router-dom";
import { SchoolHeader } from "@/components/layout/SchoolHeader";
import { SchoolFooter } from "@/components/layout/SchoolFooter";
import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, Phone, Building2, CheckCircle2 } from "lucide-react";
import { SCHOOL_ADDRESS, SCHOOL_PHONE, SCHOOL_NAME, SCHOOL_PARENT_COMPANY } from "@/data/school";

export default function SchoolAdmissions() {
  return (
    <div className="min-h-screen bg-background">
      <SchoolHeader />

      {/* Official Registration & Intake Info */}
      <section className="pt-32 pb-20 md:pt-36 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Session Card */}
            <div className="border border-border p-8 bg-card">
              <span className="text-[10px] font-black tracking-widest text-accent uppercase block mb-2">
                Program Intake
              </span>
              <h3 className="font-heading text-2xl font-light text-foreground mb-3">
                Regular Session
              </h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                Comprehensive curriculum combining theory and practical device training.
              </p>
              <div className="pt-4 border-t border-border/60 text-xs space-y-2 text-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Entry Session: Regular</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>18 Detailed Course Topics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>Hands-on Machine Practice</span>
                </div>
              </div>
            </div>

            {/* Registration Office Card */}
            <div className="border border-border p-8 bg-card flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black tracking-widest text-accent uppercase block mb-2">
                  Admissions Office
                </span>
                <h3 className="font-heading text-2xl font-light text-foreground mb-3">
                  Campus Location
                </h3>
                <div className="space-y-3 text-xs text-muted-foreground font-light mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{SCHOOL_ADDRESS.full}</p>
                    </div>
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
              </div>

              <div className="pt-4 border-t border-border/60">
                <p className="text-[11px] text-muted-foreground">
                  To register or schedule an admissions visit, please call during regular office hours or visit our campus office on the 3rd floor.
                </p>
              </div>
            </div>

          </div>

          {/* Direct CTA */}
          <div className="border border-border bg-muted/30 p-8 text-center">
            <h4 className="font-heading text-xl font-light text-foreground mb-2">
              Have questions about registration?
            </h4>
            <p className="text-xs text-muted-foreground font-light mb-6 max-w-md mx-auto">
              Our admissions team is available to assist you at Kelela Tower 3rd Floor, Bole Atlas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/school/contact">
                <Button
                  className="rounded-none h-11 px-7 text-[10px] font-black tracking-widest uppercase bg-foreground text-background hover:bg-foreground/90"
                >
                  Contact Admissions
                </Button>
              </Link>
              <a href={`tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`}>
                <Button
                  variant="outline"
                  className="rounded-none h-11 px-7 text-[10px] font-black tracking-widest uppercase border-border"
                >
                  Call {SCHOOL_PHONE}
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>

      <SchoolFooter />
    </div>
  );
}
