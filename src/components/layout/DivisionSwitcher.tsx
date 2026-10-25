import { Link, useLocation } from "react-router-dom";
import { Stethoscope, GraduationCap } from "lucide-react";

export function DivisionSwitcher() {
  const location = useLocation();
  const isSchool = location.pathname.startsWith("/school");

  return (
    <div className="bg-accent text-white text-[11px] border-b border-white/20 select-none py-1.5 px-4 sm:px-6">
      <div className="container mx-auto flex items-center justify-center">
        {/* Centered Division Switcher */}
        <div className="flex items-center gap-2">
          <Link
            to="/dermatology"
            className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-all ${
              !isSchool
                ? "bg-white text-accent rounded-sm shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Stethoscope className="w-3 h-3" />
            <span>Clinic</span>
          </Link>

          <span className="text-white/40 text-xs">|</span>

          <Link
            to="/school"
            className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-all ${
              isSchool
                ? "bg-white text-accent rounded-sm shadow-sm"
                : "text-white/80 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>School</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
