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
  Globe,
  UserCheck,
} from "lucide-react";

type AdminTab = "services" | "before-after" | "gallery";

export default function ClinicAdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<AdminTab>("services");

  // Live item counts for navigation badges
  const [counts, setCounts] = useState({
    services: 0,
    beforeAfter: 0,
    gallery: 0,
  });

  const fetchCounts = async () => {
    try {
      const [
        { count: sCount },
        { count: bCount },
        { count: gCount },
      ] = await Promise.all([
        supabase.from("clinic_services").select("*", { count: "exact", head: true }),
        supabase.from("before_after_cases").select("*", { count: "exact", head: true }),
        supabase.from("gallery_items").select("*", { count: "exact", head: true }),
      ]);

      setCounts({
        services: sCount || 0,
        beforeAfter: bCount || 0,
        gallery: gCount || 0,
      });
    } catch (err) {
      console.warn("Could not fetch counts:", err);
    }
  };

  useEffect(() => {
    // 1. Check existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (session?.user) {
        fetchCounts();
      }
    });

    // 2. Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchCounts();
      }
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
            fetchCounts();
          });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row antialiased">
      {/* ── 1. Desktop & Tablet Sidebar (Fixed Left) ── */}
      <aside className="hidden md:flex flex-col w-64 lg:w-72 bg-card border-r border-border h-screen sticky top-0 z-30 shadow-sm flex-shrink-0">
        {/* Brand Header */}
        <div className="p-6 border-b border-border flex items-center gap-3">
          <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="font-heading text-sm font-medium text-foreground truncate">
                Bosphorus Clinic
              </h2>
              <span className="px-1.5 py-0.2 bg-accent text-accent-foreground text-[8px] font-black uppercase tracking-wider">
                CMS
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground font-light">
              Dermatology Management
            </p>
          </div>
        </div>

        {/* User Info Card */}
        <div className="px-5 py-3.5 bg-muted/20 border-b border-border flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
              Signed in as
            </p>
            <p className="text-xs font-mono text-foreground truncate">
              {user.email}
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <div className="pb-2 px-2">
            <p className="text-[9px] font-bold text-muted-foreground/80 uppercase tracking-widest">
              Clinic Sections
            </p>
          </div>

          <button
            onClick={() => setActiveTab("services")}
            className={`w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold tracking-wider uppercase transition-all border ${
              activeTab === "services"
                ? "bg-accent text-accent-foreground border-accent shadow-sm"
                : "bg-transparent text-muted-foreground border-transparent hover:bg-muted/40 hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4" />
              <span>Services</span>
            </div>
            {counts.services > 0 && (
              <span
                className={`text-[10px] px-2 py-0.5 font-mono ${
                  activeTab === "services"
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {counts.services}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("before-after")}
            className={`w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold tracking-wider uppercase transition-all border ${
              activeTab === "before-after"
                ? "bg-accent text-accent-foreground border-accent shadow-sm"
                : "bg-transparent text-muted-foreground border-transparent hover:bg-muted/40 hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-3">
              <Columns className="w-4 h-4" />
              <span>Before & After</span>
            </div>
            {counts.beforeAfter > 0 && (
              <span
                className={`text-[10px] px-2 py-0.5 font-mono ${
                  activeTab === "before-after"
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {counts.beforeAfter}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold tracking-wider uppercase transition-all border ${
              activeTab === "gallery"
                ? "bg-accent text-accent-foreground border-accent shadow-sm"
                : "bg-transparent text-muted-foreground border-transparent hover:bg-muted/40 hover:text-foreground"
            }`}
          >
            <div className="flex items-center gap-3">
              <Camera className="w-4 h-4" />
              <span>Gallery Media</span>
            </div>
            {counts.gallery > 0 && (
              <span
                className={`text-[10px] px-2 py-0.5 font-mono ${
                  activeTab === "gallery"
                    ? "bg-white/20 text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {counts.gallery}
              </span>
            )}
          </button>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-border space-y-2">
          <Link
            to="/dermatology"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-10 px-3.5 border border-border hover:border-accent text-muted-foreground hover:text-accent text-[11px] font-bold tracking-wider uppercase flex items-center justify-between transition-colors"
          >
            <span>Public Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full h-10 rounded-none text-[11px] font-bold tracking-wider uppercase text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors flex items-center justify-between px-3.5"
          >
            <span>Sign Out</span>
            <LogOut className="w-3.5 h-3.5" />
          </Button>
        </div>
      </aside>

      {/* ── 2. Mobile Top Bar (Visible on < md) ── */}
      <header className="md:hidden sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
            <Stethoscope className="w-4 h-4" />
          </div>
          <div>
            <h1 className="font-heading text-sm font-medium text-foreground leading-tight">
              Bosphorus Clinic CMS
            </h1>
            <p className="text-[9px] text-muted-foreground font-mono truncate max-w-[170px]">
              {user.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/dermatology"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-accent border border-border"
            title="View Public Site"
          >
            <Globe className="w-4 h-4" />
          </Link>
          <button
            onClick={handleLogout}
            className="p-2 text-muted-foreground hover:text-destructive border border-border"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ── 3. Main Content Workspace ── */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 pb-28 md:pb-10 max-w-7xl mx-auto w-full">
        {activeTab === "services" && <ManageServicesView />}
        {activeTab === "before-after" && <ManageBeforeAfterView />}
        {activeTab === "gallery" && <ManageGalleryView />}
      </main>

      {/* ── 4. Mobile Bottom Menu / Navigation Dock (Visible on < md) ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border shadow-[0_-10px_25px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-3 h-16">
          <button
            onClick={() => setActiveTab("services")}
            className={`flex flex-col items-center justify-center gap-1 transition-all relative ${
              activeTab === "services"
                ? "text-accent bg-accent/5 font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === "services" && (
              <span className="absolute top-0 left-4 right-4 h-0.5 bg-accent" />
            )}
            <Layers className="w-5 h-5" />
            <span className="text-[10px] tracking-wider uppercase">Services</span>
            {counts.services > 0 && (
              <span className="absolute top-2 right-4 text-[9px] px-1 rounded-full bg-accent text-accent-foreground font-mono">
                {counts.services}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("before-after")}
            className={`flex flex-col items-center justify-center gap-1 transition-all relative ${
              activeTab === "before-after"
                ? "text-accent bg-accent/5 font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === "before-after" && (
              <span className="absolute top-0 left-4 right-4 h-0.5 bg-accent" />
            )}
            <Columns className="w-5 h-5" />
            <span className="text-[10px] tracking-wider uppercase">B & A</span>
            {counts.beforeAfter > 0 && (
              <span className="absolute top-2 right-4 text-[9px] px-1 rounded-full bg-accent text-accent-foreground font-mono">
                {counts.beforeAfter}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex flex-col items-center justify-center gap-1 transition-all relative ${
              activeTab === "gallery"
                ? "text-accent bg-accent/5 font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === "gallery" && (
              <span className="absolute top-0 left-4 right-4 h-0.5 bg-accent" />
            )}
            <Camera className="w-5 h-5" />
            <span className="text-[10px] tracking-wider uppercase">Gallery</span>
            {counts.gallery > 0 && (
              <span className="absolute top-2 right-4 text-[9px] px-1 rounded-full bg-accent text-accent-foreground font-mono">
                {counts.gallery}
              </span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
