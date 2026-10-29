import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, ShieldCheck, Phone } from "lucide-react";
import { StudentRegistrationForm } from "@/components/school/StudentRegistrationForm";
import schoolLogo from "@/assets/school-logo-transparent.png";
import { SCHOOL_PHONE, SCHOOL_NAME, SCHOOL_PARENT_COMPANY, SCHOOL_ADDRESS } from "@/data/school";

export default function RegistrationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between selection:bg-accent selection:text-white">
      {/* ── Minimalist Top Navigation ── */}
      <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                navigate("/school");
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>

          <Link to="/school" className="flex items-center gap-2.5">
            <img
              src={schoolLogo}
              alt={SCHOOL_NAME}
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          <a
            href={`tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline tracking-wider"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{SCHOOL_PHONE}</span>
          </a>
        </div>
      </header>

      {/* ── Main Form Container (Only the Form) ── */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-xl mx-auto">
          {/* Header branding above form */}
          <div className="text-center mb-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-black tracking-[0.25em] uppercase mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Official Student Intake</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-light tracking-tight text-foreground mb-2">
              Student Registration
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
              {SCHOOL_NAME}
            </p>
          </div>

          {/* The Registration Form Card */}
          <div className="shadow-2xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            <StudentRegistrationForm />
          </div>

          {/* Trust badges below form */}
          <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-muted-foreground font-light">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Accredited under {SCHOOL_PARENT_COMPANY}</span>
            </div>
            <div className="text-muted-foreground/40">•</div>
            <div>Bole Atlas, Kelela Tower 3rd Floor</div>
          </div>
        </div>
      </main>

      {/* ── Simple Minimal Bottom Footer ── */}
      <footer className="w-full border-t border-border py-4 text-center text-[10px] text-muted-foreground/60 font-light">
        <p>© {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</p>
      </footer>
    </div>
  );
}
