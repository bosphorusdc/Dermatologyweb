import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { services } from "@/data/services";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src={logo}
                alt="Bosphorus Dermatology"
                className="h-8 object-contain opacity-90 group-hover:opacity-60 transition-opacity"
              />
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
              Evidence-based dermatology and aesthetic medicine. Board-certified specialists. Surgical-grade precision in every treatment.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[9px] font-black tracking-[0.4em] text-foreground/40 uppercase mb-5">Pages</p>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Treatments */}
          <div className="md:col-span-2">
            <p className="text-[9px] font-black tracking-[0.4em] text-foreground/40 uppercase mb-5">Treatments</p>
            <nav className="flex flex-col gap-3">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light truncate"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-[9px] font-black tracking-[0.4em] text-foreground/40 uppercase mb-5">Contact</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-3.5 w-3.5 mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground font-light">Hidna Building, Bole, Addis Ababa</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-3.5 w-3.5 mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground font-light">Mon–Sat, 02:30–11:30</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">
            © {new Date().getFullYear()} Bosphorus Dermatology Center
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-muted-foreground/40 tracking-widest uppercase cursor-default">Privacy</span>
            <span className="text-[10px] text-muted-foreground/40 tracking-widest uppercase cursor-default">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
