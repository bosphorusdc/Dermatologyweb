import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { ClinicLoginView } from "./ClinicLoginView";
import { ManageServicesView } from "./ManageServicesView";
import { ManageBeforeAfterView } from "./ManageBeforeAfterView";
import { ManageGalleryView } from "./ManageGalleryView";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Stethoscope,
  Sparkles,
  Camera,
  LogOut,
  ExternalLink,
  Layers,
  Columns,
  Loader2,
  ShieldCheck,
} from "lucide-react";

type AdminTab = "services" | "before-after" | "gallery";

export default function ClinicAdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<AdminTab>("services");

  useEffect(() => {
    // 1. Check existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 2. Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      toast.success("Signed out successfully");
    } catch (err: any) {
      console.error("Sign out error:", err);
      toast.error("Error signing out");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <Loader2 className="w-8 h-8 animate-spin text-accent mb-3" />
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
          Verifying Clinic Session...
        </p>
      </div>
    );
  }

  // Not authenticated? Show Login Page
  if (!user) {
    return (
      <ClinicLoginView
        onSuccess={() => {
          supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
          });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Admin Navigation Header */}
      <header className="border-b border-border bg-card/90 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-base font-medium tracking-tight text-foreground">
                  Bosphorus Dermatology
                </span>
                <span className="px-1.5 py-0.5 text-[8px] font-black uppercase tracking-widest bg-accent text-accent-foreground">
                  CMS
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground font-mono truncate max-w-[200px] sm:max-w-none">
                {user.email}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/dermatology"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-9 px-3 border border-border hover:border-accent text-foreground hover:text-accent text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <span>View Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <Button
              onClick={handleLogout}
              variant="ghost"
              className="rounded-none h-9 px-3 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>

        </div>

        {/* Tab Navigation Bar */}
        <div className="border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 flex items-center gap-1 sm:gap-2 overflow-x-auto py-2">
            <button
              onClick={() => setActiveTab("services")}
              className={`h-10 px-4 text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 border rounded-none shrink-0 ${
                activeTab === "services"
                  ? "bg-accent text-accent-foreground border-accent shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:border-accent hover:text-foreground"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Services & Treatments</span>
            </button>

            <button
              onClick={() => setActiveTab("before-after")}
              className={`h-10 px-4 text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 border rounded-none shrink-0 ${
                activeTab === "before-after"
                  ? "bg-accent text-accent-foreground border-accent shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:border-accent hover:text-foreground"
              }`}
            >
              <Columns className="w-4 h-4" />
              <span>Before & After Cases</span>
            </button>

            <button
              onClick={() => setActiveTab("gallery")}
              className={`h-10 px-4 text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 border rounded-none shrink-0 ${
                activeTab === "gallery"
                  ? "bg-accent text-accent-foreground border-accent shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:border-accent hover:text-foreground"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Gallery & Video Media</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main CMS View Body */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-8">
        {activeTab === "services" && <ManageServicesView />}
        {activeTab === "before-after" && <ManageBeforeAfterView />}
        {activeTab === "gallery" && <ManageGalleryView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-4 bg-muted/10 text-center">
        <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
          Bosphorus Medical Solutions PLC · Clinic CMS v1.0
        </p>
      </footer>
    </div>
  );
}
