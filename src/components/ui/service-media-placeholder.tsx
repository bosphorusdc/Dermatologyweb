import { Sparkles } from "lucide-react";
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

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,17%,14%)] via-[hsl(196,28%,20%)] to-[hsl(210,17%,9%)]" />
      <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-1/3 -left-1/4 w-2/3 h-2/3 rounded-full bg-accent/8 blur-2xl" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)",
          backgroundSize: variant === "thumb" ? "32px 32px" : "48px 48px",
        }}
      />
      <div
        className={cn(
          "relative z-10 flex flex-col items-center justify-center h-full text-center",
          variant === "thumb" ? "p-4" : "p-8"
        )}
      >
        {variant !== "thumb" && (
          <div className="w-12 h-12 border border-white/15 flex items-center justify-center mb-6">
            <Sparkles className="h-5 w-5 text-accent/80" />
          </div>
        )}
        {variant !== "thumb" && (
          <p className="text-[9px] font-black tracking-[0.5em] text-accent/70 uppercase mb-3">
            Treatment Profile
          </p>
        )}
        {lead && variant !== "thumb" && (
          <p className="font-heading text-white/35 font-light text-lg tracking-tight">{lead}</p>
        )}
        <p
          className={cn(
            "font-heading font-light tracking-tighter text-white",
            variant === "hero" && "text-3xl md:text-5xl",
            variant === "card" && "text-xl md:text-2xl",
            variant === "thumb" && "text-[11px] leading-tight line-clamp-2"
          )}
        >
          {variant === "thumb" ? title : accent}
        </p>
        {variant !== "thumb" && (
          <p className="text-white/30 text-xs font-light mt-3 max-w-xs">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
