import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DivisionSwitcher } from "./DivisionSwitcher";
import logo from "@/assets/school-logo-transparent.png";
import { SCHOOL_PHONE } from "@/data/school";

const schoolNavigation = [
  { name: "Home", href: "/school" },
  { name: "Courses", href: "/school/curriculum" },
  { name: "Admissions", href: "/school/admissions" },
  { name: "About", href: "/school/about" },
  { name: "Contact", href: "/school/contact" },
];

interface SchoolHeaderProps {
  onOpenEnrollModal?: () => void;
}

export const SchoolHeader = ({ onOpenEnrollModal }: SchoolHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm py-0"
            : "bg-background/85 backdrop-blur-md border-b border-border/40 py-0"
        }`}
      >
        <DivisionSwitcher />

        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* School Logo */}
            <Link to="/school" className="flex items-center shrink-0 group py-1">
              <img
                src={logo}
                alt="Bosphorus Cosmetology and Skin Care School"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>

            {/* Desktop Navigation - Concise Menu items */}
            <nav className="hidden md:flex items-center gap-1">
              {schoolNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3.5 py-1.5 text-[11px] font-bold tracking-widest uppercase transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-accent" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Trigger */}
            <div className="flex items-center gap-2.5">
              <a
                href={`tel:${SCHOOL_PHONE.replace(/\s+/g, "")}`}
                className="hidden lg:flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors mr-1"
              >
                <Phone className="w-3 h-3 text-accent" />
                <span>{SCHOOL_PHONE}</span>
              </a>

              <Link to="/registration">
                <Button
                  size="sm"
                  className="rounded-none h-8 px-4 text-[10px] font-black tracking-widest bg-accent hover:bg-accent/90 text-accent-foreground shadow-none uppercase flex items-center gap-1.5"
                >
                  <GraduationCap className="w-3 h-3" />
                  APPLY NOW
                </Button>
              </Link>

              {/* Mobile hamburger */}
              <button
                className="md:hidden flex items-center justify-center w-8 h-8 text-foreground/70 hover:text-foreground transition-colors ml-1"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-300 ease-in-out ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-12 px-8 overflow-y-auto">
          {/* Quick Division Switch in Mobile Menu */}
          <div className="bg-muted p-3 mb-6 border border-border">
            <p className="text-[9px] font-black tracking-widest uppercase text-muted-foreground mb-2">Division</p>
            <div className="flex gap-2">
              <Link
                to="/dermatology"
                className="flex-1 py-1.5 text-center text-[10px] font-bold tracking-wider bg-background border border-border text-foreground hover:border-accent flex items-center justify-center gap-1.5"
              >
                <Stethoscope className="w-3 h-3 text-accent" />
                <span>Clinic</span>
              </Link>
              <Link
                to="/school"
                className="flex-1 py-1.5 text-center text-[10px] font-bold tracking-wider bg-accent text-accent-foreground"
              >
                🎓 School
              </Link>
            </div>
          </div>

          <nav className="flex flex-col gap-1 mb-8">
            {schoolNavigation.map((item, i) => (
              <Link
                key={item.name}
                to={item.href}
                style={{ transitionDelay: mobileOpen ? `${i * 30}ms` : "0ms" }}
                className={`py-3 border-b border-border text-xl font-heading font-light tracking-tight transition-colors ${
                  isActive(item.href) ? "text-accent" : "text-foreground/80 hover:text-foreground"
                } ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"} transition-all duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-border flex flex-col gap-3">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Campus:</strong> Kelela Tower 3rd Floor, Bole Atlas
            </p>
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Tel:</strong> {SCHOOL_PHONE}
            </p>
            <Link to="/registration" onClick={() => setMobileOpen(false)} className="w-full mt-2">
              <Button
                size="lg"
                className="w-full rounded-none h-11 text-[10px] font-black tracking-widest bg-accent hover:bg-accent/90 text-accent-foreground shadow-none"
              >
                APPLY FOR ADMISSION
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
