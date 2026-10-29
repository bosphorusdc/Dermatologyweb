import { Link } from "react-router-dom";
import { Phone, ArrowRight, Facebook } from "lucide-react";
import logo from "@/assets/school-logo-transparent.png";
import {
  SCHOOL_NAME,
  SCHOOL_ADDRESS,
  SCHOOL_PHONE,
  SCHOOL_PARENT_COMPANY,
  SCHOOL_SOCIALS,
} from "@/data/school";

export const SchoolFooter = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-6 py-12 md:py-14 max-w-5xl">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* ── Row 1 (Center): Brand Identity & Campus ── */}
          <div className="flex flex-col items-center gap-3">
            <Link to="/school" className="group">
              <img
                src={logo}
                alt="Bosphorus Cosmetology and Skin Care School"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>
            <p className="text-[11px] text-muted-foreground font-light max-w-md">
              {SCHOOL_PARENT_COMPANY} • {SCHOOL_ADDRESS.building}, Bole Atlas, Addis Ababa
            </p>
          </div>

          {/* ── Row 2 (Center): Navigation Links ── */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs text-muted-foreground font-medium">
            <Link to="/school" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/school/curriculum" className="hover:text-foreground transition-colors">
              Courses
            </Link>
            <Link to="/school/admissions" className="hover:text-foreground transition-colors">
              Admissions
            </Link>
            <Link to="/registration" className="text-accent hover:underline font-semibold transition-colors">
              Online Registration
            </Link>
            <Link to="/school/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/school/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link
              to="/dermatology"
              className="text-accent hover:underline font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Dermatology Center</span>
              <ArrowRight className="size-3" />
            </Link>
          </nav>

          {/* ── Row 3 (Center): Social Media Icons & Direct Phone ── */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Facebook */}
            <a
              href={SCHOOL_SOCIALS[0].href}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="size-8 rounded-none border border-border bg-background hover:bg-muted hover:border-accent hover:text-accent flex items-center justify-center text-muted-foreground transition-all active:scale-[0.95]"
            >
              <Facebook className="size-3.5" />
            </a>

            {/* Instagram */}
            <a
              href={SCHOOL_SOCIALS[1].href}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="size-8 rounded-none border border-border bg-background hover:bg-muted hover:border-accent hover:text-accent flex items-center justify-center text-muted-foreground transition-all active:scale-[0.95]"
            >
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href={SCHOOL_SOCIALS[2].href}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="size-8 rounded-none border border-border bg-background hover:bg-muted hover:border-accent hover:text-accent flex items-center justify-center text-muted-foreground transition-all active:scale-[0.95]"
            >
              <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>

            <div className="h-4 w-px bg-border/60 mx-1 hidden sm:block" />

            {/* Direct Phone */}
            <a
              href={`tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border hover:border-accent bg-background text-[11px] font-bold text-foreground hover:text-accent transition-all active:scale-[0.95]"
            >
              <Phone className="size-3 text-accent" />
              <span>{SCHOOL_PHONE}</span>
            </a>
          </div>

        </div>

        {/* ── Bottom Micro-Bar (Center) ── */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-center gap-3 text-[11px] text-muted-foreground font-light text-center">
          <p>© {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</p>
          <span className="hidden sm:inline text-border">•</span>
          <div className="flex items-center gap-3">
            <Link to="/school" className="text-accent font-medium hover:underline">
              School
            </Link>
            <span className="text-border">•</span>
            <Link to="/dermatology" className="hover:text-foreground transition-colors">
              Dermatology
            </Link>
            <span className="text-border">•</span>
            <Link to="/" className="hover:text-foreground transition-colors">
              Portal
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
