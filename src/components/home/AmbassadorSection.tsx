import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const nebyouImg = new URL("../../assets/ambassador-nebyou.jpg", import.meta.url).href;
const abrahamImg = new URL("../../assets/ambassador-abraham.jpg", import.meta.url).href;

export interface AmbassadorItem {
  id: string;
  name: string;
  role: string;
  photo: string;
  statement: string;
  focus: string;
}

interface AmbassadorSectionProps {
  division?: "dermatology" | "school";
  headline?: string;
  subheadline?: string;
  ambassadors?: AmbassadorItem[];
}

const DEFAULT_CLINIC_AMBASSADORS: AmbassadorItem[] = [
  {
    id: "nebyou",
    name: "Artist Nebyou Indris",
    role: "Artist & Brand Ambassador",
    photo: nebyouImg,
    statement:
      "Being in front of the camera every day, my skin needs to look and feel healthy from within. Bosphorus gives me real medical-grade care with visible results that keep me feeling confident on and off camera.",
    focus: "Medical Dermatology & Restorative Aesthetics",
  },
  {
    id: "abraham",
    name: "Influencer Abraham Zereay (1 Birr)",
    role: "Social Media Brand Ambassador",
    photo: abrahamImg,
    statement:
      "Authentic skincare isn't about hype—it's about scientific protocols and expert specialists. Bosphorus represents the gold standard in modern clinical dermatology in Ethiopia.",
    focus: "Aesthetic Precision & Social Advocacy",
  },
];

const DEFAULT_SCHOOL_AMBASSADORS: AmbassadorItem[] = [
  {
    id: "nebyou",
    name: "Artist Nebyou Indris",
    role: "Artist & Brand Ambassador",
    photo: nebyouImg,
    statement:
      "Proper clinical training is the foundation of real skincare excellence. Bosphorus Cosmetology School is raising the standard by giving students hands-on laser practice and certified skills for a successful career.",
    focus: "Certified Aesthetician Pathways",
  },
  {
    id: "abraham",
    name: "Influencer Abraham Zereay (1 Birr)",
    role: "Social Media Brand Ambassador",
    photo: abrahamImg,
    statement:
      "Empowering a new generation of certified skincare specialists with world-class devices and scientific rigor right here in Addis Ababa.",
    focus: "Device Mastery & Creative Industry",
  },
];

export function AmbassadorSection({
  division = "dermatology",
  headline,
  subheadline,
  ambassadors,
}: AmbassadorSectionProps) {
  const isSchool = division === "school";
  const list =
    ambassadors || (isSchool ? DEFAULT_SCHOOL_AMBASSADORS : DEFAULT_CLINIC_AMBASSADORS);

  const title =
    headline ||
    (isSchool
      ? "Two Ambassadors. One Vision for Skincare Education."
      : "Two Ambassadors. One Standard of Clinical Excellence.");

  const desc =
    subheadline ||
    (isSchool
      ? "Celebrating our partnership with acclaimed artists Nebyou Indris and Abraham Zeray, championing accredited cosmetology education and clinical device training in Ethiopia."
      : "Celebrating our official partnership with acclaimed artists Nebyou Indris and Abraham Zeray, championing authentic skin health, medical dermatology, and transformative aesthetic care.");

  return (
    <section className="py-24 md:py-32 bg-background border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 md:mb-20 animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
                Official Brand Ambassadors
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground leading-[1.05] mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
              {desc}
            </p>
          </div>

          {/* Dual Ambassador Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {list.map((item, index) => (
              <div
                key={item.id}
                className="group border border-border bg-card flex flex-col sm:flex-row overflow-hidden hover:border-accent/40 transition-all duration-500 shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Full Uncropped Photo Column */}
                <div className="relative md:w-1/2 aspect-[3/4] overflow-hidden bg-neutral-950 shrink-0 flex items-center justify-center">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-md px-2.5 py-1 text-[8px] font-black tracking-widest text-foreground uppercase border border-border">
                    Brand Ambassador
                  </div>
                </div>

                {/* Content Column */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-accent text-[9px] font-bold tracking-widest uppercase mb-2">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.focus}</span>
                    </div>

                    <h3 className="font-heading text-2xl font-light text-foreground tracking-tight mb-1">
                      {item.name}
                    </h3>

                    <p className="text-xs text-muted-foreground font-light mb-6">
                      {item.role}
                    </p>

                    <div className="relative pl-4 border-l-2 border-accent/60 mb-6">
                      <Quote className="w-3.5 h-3.5 text-accent/50 mb-2" />
                      <p className="text-xs md:text-sm text-foreground/80 font-light italic leading-relaxed">
                        "{item.statement}"
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[9px] font-black tracking-widest text-muted-foreground uppercase">
                      Bosphorus Partner
                    </span>
                    <Link
                      to={isSchool ? "/registration" : "/contact"}
                      className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-accent uppercase hover:underline group/link"
                    >
                      <span>{isSchool ? "Apply Now" : "Consultation"}</span>
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
