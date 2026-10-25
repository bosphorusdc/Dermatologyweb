import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DermatologyHome from "./DermatologyHome";
import SchoolHome from "./SchoolHome";
import { DivisionPortal } from "@/components/home/DivisionPortal";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial view from query string (?view=derma | school | portal)
  const viewParam = searchParams.get("view");
  const [category, setCategory] = useState<"portal" | "derma" | "school">(() => {
    if (viewParam === "derma") return "derma";
    if (viewParam === "school") return "school";
    return "portal";
  });

  // Sync state if query param changes
  useEffect(() => {
    if (viewParam === "derma" && category !== "derma") {
      setCategory("derma");
    } else if (viewParam === "school" && category !== "school") {
      setCategory("school");
    } else if ((!viewParam || viewParam === "portal") && category !== "portal") {
      setCategory("portal");
    }
  }, [viewParam, category]);

  const handleSelectCategory = (cat: "portal" | "derma" | "school") => {
    setCategory(cat);
    if (cat === "portal") {
      setSearchParams({});
    } else {
      setSearchParams({ view: cat });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Render selected view */}
      {category === "portal" && (
        <DivisionPortal onSelectCategory={handleSelectCategory} />
      )}

      {category === "derma" && (
        <DermatologyHome />
      )}

      {category === "school" && (
        <SchoolHome />
      )}
    </div>
  );
}
