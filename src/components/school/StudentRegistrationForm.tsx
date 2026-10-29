import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Loader2,
  Sparkles,
  AlertCircle,
  Phone,
  User,
  MapPin,
  Crown,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { REGISTERED_COURSES } from "@/data/school";

interface StudentRegistrationFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function StudentRegistrationForm({ className = "", onSuccess }: StudentRegistrationFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [tier, setTier] = useState<"regular" | "vip">("regular");
  const [selectedCourse, setSelectedCourse] = useState("All 18 Certified Modules (Full Curriculum)");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanName = fullName.trim();
    const cleanPhone = phone.trim();
    const cleanLocation = location.trim();

    if (!cleanName || cleanName.length < 2) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    if (!cleanPhone || cleanPhone.length < 7) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }

    if (!cleanLocation || cleanLocation.length < 2) {
      setErrorMsg("Please enter your city / location.");
      return;
    }

    setLoading(true);

    try {
      const notesContent = `Package: ${tier.toUpperCase()} | Location: ${cleanLocation} | Course: ${selectedCourse}`;

      const { error } = await supabase
        .from("online_registrations")
        .insert([
          {
            full_name: cleanName,
            phone_number: cleanPhone,
            location: cleanLocation,
            package_tier: tier,
            status: "pending",
            notes: notesContent,
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
    setLocation("");
    setTier("regular");
    setSelectedCourse("All 18 Certified Modules (Full Curriculum)");
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
          Registration Submitted Successfully
        </span>
        <h3 className="font-heading text-2xl font-light text-foreground mb-3">
          Thank you, {fullName}!
        </h3>

        {/* Summary Card */}
        <div className="bg-background border border-border p-4 max-w-sm mx-auto my-5 text-left text-xs space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <span className="text-muted-foreground">Session Tier:</span>
            <span className={`px-2 py-0.5 font-bold uppercase tracking-wider text-[10px] ${
              tier === "vip" ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"
            }`}>
              {tier === "vip" ? "★ VIP Session" : "Regular Session"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Phone:</span>
            <span className="font-semibold text-foreground">{phone}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Location:</span>
            <span className="font-semibold text-foreground">{location}</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground font-light max-w-md mx-auto leading-relaxed mb-6">
          Our admissions coordinator will contact you at{" "}
          <strong className="text-foreground font-semibold">{phone}</strong> shortly to confirm your schedule and enrollment details.
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
          <span>Bosphorus Cosmetology School</span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-light text-foreground mb-1.5">
          Student Intake Registration
        </h3>
        <p className="text-xs text-muted-foreground font-light leading-relaxed">
          Please provide your contact info and select your preferred intake package below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ── 1. Full Name ── */}
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
              placeholder="e.g. Dr. Sara Tadesse or Abebe Kebede"
              className="w-full h-11 pl-10 pr-4 bg-background border border-border focus:border-accent focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
            />
          </div>
        </div>

        {/* ── 2. Phone Number ── */}
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

        {/* ── 3. Location ── */}
        <div>
          <label className="block text-[11px] font-semibold text-foreground/80 tracking-wide uppercase mb-1.5">
            Location / City <span className="text-accent">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
              <MapPin className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Addis Ababa (Bole, CMC, etc.) or Hawassa, Adama..."
              className="w-full h-11 pl-10 pr-4 bg-background border border-border focus:border-accent focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors"
            />
          </div>
        </div>

        {/* ── 4. Package Tier: Regular vs VIP ── */}
        <div>
          <label className="block text-[11px] font-semibold text-foreground/80 tracking-wide uppercase mb-2">
            Intake Session Type <span className="text-accent">*</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Regular Option */}
            <button
              type="button"
              onClick={() => setTier("regular")}
              className={`p-4 border text-left transition-all relative flex flex-col justify-between ${
                tier === "regular"
                  ? "border-accent bg-accent/5 ring-1 ring-accent"
                  : "border-border bg-background hover:border-foreground/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className={`w-4 h-4 ${tier === "regular" ? "text-accent" : "text-muted-foreground"}`} />
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Regular
                    </span>
                  </div>
                  {tier === "regular" && (
                    <span className="w-4 h-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground font-light leading-snug">
                  Standard cohort group sessions & supervised practical laboratory clinical device rotations.
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-border/50 text-[10px] text-foreground/75 font-medium">
                Standard Group Cohort
              </div>
            </button>

            {/* VIP Option */}
            <button
              type="button"
              onClick={() => setTier("vip")}
              className={`p-4 border text-left transition-all relative flex flex-col justify-between overflow-hidden ${
                tier === "vip"
                  ? "border-accent bg-accent/10 ring-1 ring-accent"
                  : "border-border bg-background hover:border-foreground/40"
              }`}
            >
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-2 py-0.5 text-[8px] font-black uppercase tracking-widest">
                VIP
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      VIP Session
                    </span>
                  </div>
                  {tier === "vip" && (
                    <span className="w-4 h-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[10px] mr-6">
                      ✓
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground font-light leading-snug">
                  Private 1-on-1 executive doctor mentorship, customized schedule, and dedicated device access.
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-border/50 text-[10px] text-accent font-semibold flex items-center gap-1">
                <span>Private & Flexible Hours</span>
              </div>
            </button>
          </div>
        </div>

        {/* ── 5. Course / Curriculum Interest (Optional) ── */}
        <div className="pt-1">
          <label className="block text-[11px] font-semibold text-foreground/80 tracking-wide uppercase mb-1.5">
            Specific Course Focus <span className="text-muted-foreground text-[10px] font-normal lowercase">(optional)</span>
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
              <option value="All 18 Certified Modules (Full Curriculum)">
                All 18 Certified Modules (Full Curriculum) — Recommended
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
          className="w-full rounded-none h-12 text-[10px] font-black tracking-widest uppercase bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 transition-colors shadow-none mt-3"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting Registration...
            </span>
          ) : (
            `Register for ${tier === "vip" ? "VIP Session" : "Regular Session"}`
          )}
        </Button>

        <p className="text-[10px] text-muted-foreground text-center font-light pt-1">
          By registering, you will receive admissions and enrollment confirmation from our campus desk.
        </p>
      </form>
    </div>
  );
}
