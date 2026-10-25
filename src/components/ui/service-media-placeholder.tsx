import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceMediaPlaceholderProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: "hero" | "card" | "thumb";
}

export function ServiceMediaPlaceholder({
  title,
  subtitle = "Clinical imagery coming soon",
  className,
  variant = "card",
}: ServiceMediaPlaceholderProps) {
  const words = title.trim().split(/\s+/);
  const accent = words.length > 1 ? words[words.length - 1] : title;
  const lead = words.length > 1 ? words.slice(0, -1).join(" ") : "";
  const initial = title.trim().charAt(0).toUpperCase();

  if (variant === "hero") {
    return (
      <div className={cn("relative overflow-hidden", className)} aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,17%,13%)] via-[hsl(210,20%,16%)] to-[hsl(196,22%,18%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,17%,8%)] via-transparent to-[hsl(196,28%,22%)]/20" />
        <div className="absolute top-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-accent/[0.07] blur-[100px]" />
        <div className="absolute -bottom-32 -left-20 w-[360px] h-[360px] rounded-full bg-[hsl(196,28%,28%)]/10 blur-[80px]" />
      </div>
    );
  }

  if (variant === "thumb") {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <div className="absolute inset-0 bg-[hsl(210,17%,11%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-[hsl(196,28%,18%)]/40" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-2xl rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 blur-xl rounded-full -translate-x-1/4 translate-y-1/4" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, hsl(0,0%,100%) 0, hsl(0,0%,100%) 1px, transparent 1px, transparent 12px)",
          }}
        />

        <p
          aria-hidden
          className="absolute inset-0 flex items-center justify-center font-heading text-[9rem] font-light text-white/[0.06] select-none leading-none translate-y-2"
        >
          {initial}
        </p>

        <div className="absolute top-5 left-5 flex items-center gap-2">
          <div className="w-6 h-6 border border-white/10 flex items-center justify-center">
            <Activity className="h-3 w-3 text-accent/70" />
          </div>
          <div className="h-px w-8 bg-accent/40" />
        </div>

        <div className="absolute bottom-5 right-5 w-10 h-10 border border-white/[0.06] border-t-accent/30 border-r-accent/30" />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,17%,14%)] via-[hsl(196,28%,20%)] to-[hsl(210,17%,9%)]" />
      <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-1/3 -left-1/4 w-2/3 h-2/3 rounded-full bg-accent/8 blur-2xl" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
        <div className="w-12 h-12 border border-white/15 flex items-center justify-center mb-6">
          <Activity className="h-5 w-5 text-accent/80" />
        </div>
        <p className="text-[9px] font-black tracking-[0.5em] text-accent/70 uppercase mb-3">
          Treatment Profile
        </p>
        {lead && (
          <p className="font-heading text-white/35 font-light text-lg tracking-tight">{lead}</p>
        )}
        <p className="font-heading font-light tracking-tighter text-white text-xl md:text-2xl">
          {accent}
        </p>
        <p className="text-white/30 text-xs font-light mt-3 max-w-xs">{subtitle}</p>
      </div>
    </div>
  );
}
