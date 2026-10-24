import { useState } from "react";
import { Stethoscope } from "lucide-react";
import { TEAM_MEMBERS, type TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

function TeamCard({ member, index }: TeamCardProps) {
  const [imageError, setImageError] = useState(false);

  // Extract clean initials
  const initials = member.name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const hasCustomPhoto =
    !imageError &&
    member.photo &&
    member.photo !== "" &&
    member.photo !== "/placeholder.svg";

  return (
    <div
      className="group flex flex-col animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* ── Photo / Minimal Placeholder Frame ── */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[hsl(210,17%,12%)] border border-border group-hover:border-accent/50 transition-colors duration-500">
        {hasCustomPhoto ? (
          <img
            src={member.photo}
            alt={member.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          /* Minimalist Luxury Editorial Placeholder */
          <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-[hsl(210,17%,16%)] via-[hsl(210,20%,12%)] to-[hsl(210,17%,9%)] flex flex-col items-center justify-center p-6 text-center select-none">
            {/* Ambient light glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-accent/15 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-accent/10 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3" />

            {/* Corner architectural accents */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-5 h-5 border border-white/10 flex items-center justify-center">
                <Stethoscope className="h-2.5 w-2.5 text-accent/80" />
              </div>
              <div className="h-px w-6 bg-accent/40" />
            </div>
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-accent/40" />

            {/* Monogram emblem */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:border-accent/70 group-hover:scale-105 transition-all duration-500">
                <span className="font-heading text-xl font-light tracking-widest text-white/90">
                  {initials}
                </span>
              </div>
              <p className="text-[8px] font-black tracking-[0.35em] text-accent uppercase">
                Bosphorus Specialist
              </p>
            </div>
          </div>
        )}

        {/* Subtle bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      {/* ── Minimalist Editorial Metadata ── */}
      <div className="pt-5 flex flex-col">
        <p className="text-[9px] font-black tracking-[0.35em] text-accent uppercase mb-1.5">
          {member.role}
        </p>
        <h3 className="font-heading text-xl font-light tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
          {member.name}
        </h3>
        {member.specialty && (
          <p className="text-xs font-light text-muted-foreground mt-1">
            {member.specialty}
          </p>
        )}
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="py-32 bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* ── Section Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-fade-up">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[9px] font-black tracking-[0.4em] text-accent uppercase">
                  Our Specialists
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tighter text-foreground leading-[0.95]">
                Medical leadership,<br />
                <span className="italic font-light text-muted-foreground">
                  proven expertise.
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground font-light max-w-md text-sm md:text-base leading-relaxed">
              Board-certified practitioners and clinical aestheticians dedicated to diagnostic rigor and evidence-based results.
            </p>
          </div>

          {/* ── 4-Column Minimal Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
