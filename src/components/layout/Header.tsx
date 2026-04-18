import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border py-0"
            : "bg-background/80 backdrop-blur-md border-b border-border/40 py-0"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src={logo}
                alt="Bosphorus Dermatology"
                className="h-8 object-contain transition-opacity duration-200 group-hover:opacity-70"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-[11px] font-black tracking-[0.2em] uppercase transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-accent" />
                  )}
                </Link>
              ))}

              {/* Services dropdown */}
              <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onClick={() => setServicesOpen((v) => !v)}
                  className={`flex items-center gap-1.5 px-4 py-2 text-[11px] font-black tracking-[0.2em] uppercase transition-colors duration-200 ${
                    location.pathname.startsWith("/services")
                      ? "text-accent"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-background border border-border shadow-luxury-hover z-50 py-2"
                  >
                    {/* Arrow */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-background border-l border-t border-border rotate-45" />
                    <div className="max-h-80 overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="block px-5 py-2.5 text-[11px] font-medium text-foreground/70 hover:text-accent hover:bg-muted/50 transition-colors duration-150"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border mt-2 pt-2 px-3">
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-2 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase text-accent hover:text-accent/80 transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* CTA + mobile trigger */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden md:block">
                <Button
                  size="sm"
                  className="rounded-none h-9 px-6 text-[10px] font-black tracking-[0.2em] bg-foreground hover:bg-foreground/90 text-background transition-all hover:scale-[1.02] active:scale-[0.98] shadow-none"
                >
                  BOOK NOW
                </Button>
              </Link>

              {/* Mobile hamburger */}
              <button
                className="md:hidden flex items-center justify-center w-9 h-9 text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-300 ease-in-out ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-12 px-8 overflow-y-auto">

          {/* Primary links */}
          <nav className="flex flex-col gap-1 mb-10">
            {navigation.map((item, i) => (
              <Link
                key={item.name}
                to={item.href}
                style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
                className={`py-4 border-b border-border text-3xl font-heading font-light tracking-tight transition-colors ${
                  isActive(item.href) ? "text-accent" : "text-foreground/80 hover:text-foreground"
                } ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} transition-all duration-300`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/services"
              style={{ transitionDelay: mobileOpen ? "120ms" : "0ms" }}
              className={`py-4 border-b border-border text-3xl font-heading font-light tracking-tight text-foreground/80 hover:text-foreground transition-all duration-300 ${
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Services
            </Link>
          </nav>

          {/* Services list */}
          <div className="mb-auto">
            <p className="text-[9px] font-black tracking-[0.4em] text-muted-foreground uppercase mb-5">
              All Treatments
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="text-sm text-foreground/60 hover:text-accent transition-colors font-medium"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/contact">
              <Button
                size="lg"
                className="w-full rounded-none h-14 text-[11px] font-black tracking-[0.25em] bg-foreground hover:bg-foreground/90 text-background shadow-none"
              >
                BOOK CONSULTATION
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
