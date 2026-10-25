import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { services as defaultServices, type Service } from "@/data/services";
import { GALLERY_ITEMS as defaultGallery, type GalleryItem, type GalleryCategory } from "@/data/gallery";

// ── 1. Live Services Hook ───────────────────────────────────────
export interface LiveService extends Service {
  id?: string;
  categoryName?: string;
  price?: string | null;
  duration?: string | null;
}

export function useLiveServices() {
  const [services, setServices] = useState<LiveService[]>(defaultServices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchServices() {
      try {
        const { data, error } = await supabase
          .from("clinic_services")
          .select("*")
          .eq("is_active", true)
          .order("order_index", { ascending: true })
          .order("created_at", { ascending: false });

        if (error) {
          console.warn("Supabase clinic_services fetch notice:", error.message);
          return;
        }

        if (data && data.length > 0 && isMounted) {
          const mappedServices: LiveService[] = data.map((item) => ({
            slug: item.id,
            title: item.title,
            categoryName: item.category,
            price: item.price,
            duration: item.duration,
            description: item.duration ? `${item.category} · ${item.duration}` : item.category,
            fullDescription: item.title,
            benefits: item.price
              ? [`Professional Clinical Procedure`, `Price: ${item.price}`]
              : [`Professional Clinical Procedure`],
            images: {
              gallery: item.image_url ? [item.image_url] : [],
            },
          }));

          // Put dynamic CMS services first, followed by defaults
          setServices([...mappedServices, ...defaultServices]);
        }
      } catch (err) {
        console.warn("Error in useLiveServices:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchServices();
    return () => {
      isMounted = false;
    };
  }, []);

  return { services, loading };
}

// ── 2. Live Before & After Cases Hook ───────────────────────────
export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  before_image_url: string;
  after_image_url: string;
  treatment_used?: string | null;
  sessions_count?: string | null;
}

const melasmaBeforeImg = new URL("../assets/Melasma before & after/photo_2026-03-25_13-10-10.jpg", import.meta.url).href;
const melasmaAfterImg = new URL("../assets/Melasma before & after/photo_2026-03-25_13-09-53.jpg", import.meta.url).href;
const bacteriaBeforeImg = new URL("../assets/skinbacteria infection b and f/photo_2026-03-25_13-18-56.jpg", import.meta.url).href;
const bacteriaAfterImg = new URL("../assets/skinbacteria infection b and f/photo_2026-03-25_13-19-08.jpg", import.meta.url).href;

const DEFAULT_BEFORE_AFTER: BeforeAfterItem[] = [
  {
    id: "default-melasma",
    title: "Melasma & Pigmentation Treatment",
    category: "Melasma",
    before_image_url: melasmaBeforeImg,
    after_image_url: melasmaAfterImg,
    treatment_used: "Q-Switched Laser + Medical Topical Protocol",
    sessions_count: "3 Sessions",
  },
  {
    id: "default-bacteria",
    title: "Skin Bacteria Infection Clearance",
    category: "Bacterial Infection",
    before_image_url: bacteriaBeforeImg,
    after_image_url: bacteriaAfterImg,
    treatment_used: "Targeted Medical Dermatology Protocol",
    sessions_count: "Full Clinical Clearance",
  },
];

export function useBeforeAfterCases() {
  const [cases, setCases] = useState<BeforeAfterItem[]>(DEFAULT_BEFORE_AFTER);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchCases() {
      try {
        const { data, error } = await supabase
          .from("before_after_cases")
          .select("*")
          .eq("is_active", true)
          .order("order_index", { ascending: true })
          .order("created_at", { ascending: false });

        if (error) {
          console.warn("Supabase before_after_cases fetch notice:", error.message);
          return;
        }

        if (data && data.length > 0 && isMounted) {
          setCases([...data, ...DEFAULT_BEFORE_AFTER]);
        }
      } catch (err) {
        console.warn("Error in useBeforeAfterCases:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchCases();
    return () => {
      isMounted = false;
    };
  }, []);

  return { cases, loading };
}

// ── 3. Live Gallery Items Hook ──────────────────────────────────
export function useLiveGallery() {
  const [items, setItems] = useState<GalleryItem[]>(defaultGallery);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchGallery() {
      try {
        const { data, error } = await supabase
          .from("gallery_items")
          .select("*")
          .eq("is_active", true)
          .order("order_index", { ascending: true })
          .order("created_at", { ascending: false });

        if (error) {
          console.warn("Supabase gallery_items fetch notice:", error.message);
          return;
        }

        if (data && data.length > 0 && isMounted) {
          const mappedItems: GalleryItem[] = data.map((item) => ({
            id: item.id,
            type: item.media_type,
            src: item.media_url,
            thumbnail: item.thumbnail_url || undefined,
            title: item.title,
            category: (item.category as GalleryItem["category"]) || "procedures",
            categoryLabel: item.category === "videos" ? "Live Video Procedure" : "Clinical Record",
            description: "", // No redundant descriptions as requested
            tags: [item.category],
          }));

          setItems([...mappedItems, ...defaultGallery]);
        }
      } catch (err) {
        console.warn("Error in useLiveGallery:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchGallery();
    return () => {
      isMounted = false;
    };
  }, []);

  return { items, loading };
}
