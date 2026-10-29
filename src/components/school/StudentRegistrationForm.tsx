import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, Sparkles, AlertCircle, Phone, User, BookOpen } from "lucide-react";
import { REGISTERED_COURSES } from "@/data/school";

interface StudentRegistrationFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function StudentRegistrationForm({ className = "", onSuccess }: StudentRegistrationFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("Regular Full Intake (All 18 Certified Modules)");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanName = fullName.trim();
    const cleanPhone = phone.trim();

    if (!cleanName || cleanName.length < 2) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    if (!cleanPhone || cleanPhone.length < 7) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from("online_registrations")
        .insert([
          {
            full_name: cleanName,
            phone_number: cleanPhone,
            status: "pending",
            notes: `Program Interest: ${selectedCourse}`,
          },
        ]);

      if (error) throw error;

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error("Error submitting registration:", err);
      setErrorMsg(err?.message || "Failed to submit registration. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFullName("");
    setPhone("");
    setSubmitted(false);
    setErrorMsg(null);
  };

  if (submitted) {
    return (
      <div className={`border border-accent/40 bg-accent/5 p-8 text-center animate-fade-up ${className}`}>
        <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 mx-auto flex items-center justify-center mb-4 text-accent">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-[10px] font-black tracking-widest text-accent uppercase block mb-1">
          Registration Submitted
        </span>
        <h3 className="font-heading text-2xl font-light text-foreground mb-3">
          Thank you, {fullName}!
        </h3>
        <p className="text-xs text-muted-foreground font-light max-w-md mx-auto leading-relaxed mb-6">
          Your online registration has been received by our admissions team. We will call you on{" "}
          <strong className="text-foreground font-semibold">{phone}</strong> shortly to finalize your enrollment and class schedule.
        </p>
        <Button
          type="button"
          onClick={handleReset}
          variant="outline"
          className="rounded-none h-10 px-6 text-[10px] font-black tracking-widest uppercase border-border hover:border-accent text-foreground hover:text-accent shadow-none"
        >
          Register Another Student
        </Button>
      </div>
    );
  }

  return (
    <div className={`border border-border bg-card p-6 sm:p-8 ${className}`}>
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-accent uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Online Intake</span>
        </div>
        <h3 className="font-heading text-2xl font-light text-foreground mb-1.5">
          Student Registration
        </h3>
        <p className="text-xs text-muted-foreground font-light">
          Fill in your details below to register. Our admissions coordinator will contact you directly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-[11px] font-semibold text-foreground/80 tracking-wide uppercase mb-1.5">
            Full Name <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Dr. Sara Tadesse"
              className="w-full h-11 pl-10 pr-4 bg-background border border-border focus:border-accent focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-[11px] font-semibold text-foreground/80 tracking-wide uppercase mb-1.5">
            Phone Number <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +251 91 123 4567 or 0911..."
              className="w-full h-11 pl-10 pr-4 bg-background border border-border focus:border-accent focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
            />
          </div>
        </div>

        {/* Program / Course of Interest */}
        <div>
          <label className="block text-[11px] font-semibold text-foreground/80 tracking-wide uppercase mb-1.5">
            Program / Course Interest <span className="text-muted-foreground text-[10px] font-normal lowercase">(optional)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
              <BookOpen className="w-4 h-4" />
            </div>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full h-11 pl-10 pr-4 bg-background border border-border focus:border-accent focus:outline-none text-xs text-foreground transition-colors cursor-pointer"
            >
              <option value="Regular Full Intake (All 18 Certified Modules)">
                Regular Full Intake (All 18 Certified Modules) — Recommended
              </option>
              {REGISTERED_COURSES.map((course) => (
                <option key={course.id} value={`#${course.id} ${course.title}`}>
                  Module #{course.id}: {course.title} ({course.sessionType})
                </option>
              ))}
            </select>
          </div>
        </div>

        {errorMsg && (
          <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 text-destructive text-xs">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full rounded-none h-12 text-[10px] font-black tracking-widest uppercase bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 transition-colors shadow-none mt-2"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting Registration...
            </span>
          ) : (
            "Complete Registration"
          )}
        </Button>

        <p className="text-[10px] text-muted-foreground text-center font-light pt-1">
          By registering, you agree to receive admissions and enrollment details by phone or SMS.
        </p>
      </form>
    </div>
  );
}
