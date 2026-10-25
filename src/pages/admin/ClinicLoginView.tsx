import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Lock, Mail, Eye, EyeOff, Loader2, Sparkles, Stethoscope } from "lucide-react";

interface ClinicLoginViewProps {
  onSuccess: () => void;
}

export function ClinicLoginView({ onSuccess }: ClinicLoginViewProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) throw error;

      if (data.session) {
        toast.success("Welcome to Bosphorus Clinic CMS");
        onSuccess();
      }
    } catch (err: any) {
      console.error("Login error:", err);
      const msg = err?.message || "Invalid credentials. Please verify your email and password.";
      setErrorMsg(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background ambient pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="w-full max-w-md bg-card border border-border p-8 sm:p-10 shadow-xl relative z-10 animate-fade-up">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
            <Stethoscope className="w-8 h-8" />
          </div>
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="h-px w-6 bg-accent" />
            <span className="text-[10px] font-black tracking-[0.35em] text-accent uppercase">
              Clinic Administration
            </span>
            <div className="h-px w-6 bg-accent" />
          </div>
          <h1 className="font-heading text-3xl font-light text-foreground tracking-tight">
            Dermatology CMS
          </h1>
          <p className="text-xs text-muted-foreground font-light mt-1">
            Sign in to manage services, clinical cases, and gallery media
          </p>
        </div>

        {/* Error message banner */}
        {errorMsg && (
          <div className="mb-6 p-3.5 bg-destructive/10 border border-destructive/20 text-destructive text-xs leading-relaxed">
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold tracking-wider uppercase text-foreground">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@bosphorusderma.com"
                className="w-full h-11 pl-10 pr-4 bg-muted/30 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold tracking-wider uppercase text-foreground">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-11 pl-10 pr-10 bg-muted/30 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-none bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-black tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              <span>Sign In to Clinic CMS</span>
            )}
          </Button>
        </form>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-[10px] text-muted-foreground/70 tracking-wider uppercase">
            Bosphorus Medical Solutions PLC · Confidential
          </p>
        </div>
      </div>
    </div>
  );
}
