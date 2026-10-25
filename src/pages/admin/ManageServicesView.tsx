import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Plus,
  Trash2,
  Edit2,
  Search,
  Upload,
  X,
  Loader2,
  Image as ImageIcon,
  Film,
  Play,
  Sparkles,
  LayoutGrid,
  List,
  Camera,
} from "lucide-react";
import { CLINIC_LOGO } from "@/lib/service-media";

export interface ClinicServiceRecord {
  id: string;
  title: string;
  category: string;
  description: string | null;
  image_url: string | null;
  secondary_media_url: string | null;
  secondary_media_type: "image" | "video" | null;
  order_index: number;
  is_active: boolean;
  created_at: string;
}

const CATEGORY_OPTIONS = [
  "All",
  "Medical Dermatology",
  "Aesthetic Medicine",
  "Laser & Body",
  "Hair & Scalp",
];

// Helper to determine cover media (image or video thumbnail)
function getServiceCover(item: ClinicServiceRecord) {
  const isVideoUrl = (url?: string | null) =>
    Boolean(
      url &&
        (url.toLowerCase().endsWith(".mov") ||
          url.toLowerCase().endsWith(".mp4") ||
          url.includes("/videos/"))
    );

  // 1. If service has a real image cover
  if (item.image_url && !isVideoUrl(item.image_url)) {
    return {
      type: "image" as const,
      src: item.image_url,
      hasVideo: Boolean(item.secondary_media_type === "video" && item.secondary_media_url),
      videoUrl: item.secondary_media_type === "video" ? item.secondary_media_url : null,
    };
  }

  // 2. If service has a video (in secondary_media_url or image_url)
  const videoSrc =
    item.secondary_media_type === "video" && item.secondary_media_url
      ? item.secondary_media_url
      : isVideoUrl(item.image_url)
      ? item.image_url
      : isVideoUrl(item.secondary_media_url)
      ? item.secondary_media_url
      : null;

  if (videoSrc) {
    return {
      type: "video" as const,
      src: videoSrc,
      hasVideo: true,
      videoUrl: videoSrc,
    };
  }

  // 3. If service has a secondary photo
  if (item.secondary_media_url && !isVideoUrl(item.secondary_media_url)) {
    return {
      type: "image" as const,
      src: item.secondary_media_url,
      hasVideo: false,
      videoUrl: null,
    };
  }

  // 4. Fallback placeholder
  return {
    type: "placeholder" as const,
    src: null,
    hasVideo: false,
    videoUrl: null,
  };
}

// Interactive Gallery Card Component
function ServiceGalleryCard({
  item,
  onEdit,
  onDelete,
  onToggleActive,
}: {
  item: ClinicServiceRecord;
  onEdit: (item: ClinicServiceRecord) => void;
  onDelete: (id: string, title: string) => void;
  onToggleActive: (id: string, current: boolean) => void;
}) {
  const media = getServiceCover(item);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="border border-border bg-card overflow-hidden shadow-sm flex flex-col justify-between group hover:border-accent/40 transition-all duration-300">
      {/* ── 1. Media Preview Area (Aspect 16:9) ── */}
      <div className="relative aspect-video bg-neutral-900 overflow-hidden select-none">
        {media.type === "video" && media.src ? (
          <div className="relative w-full h-full bg-black">
            <video
              ref={videoRef}
              src={`${media.src}#t=0.001`}
              preload="metadata"
              playsInline
              muted
              loop
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              onMouseEnter={() => {
                videoRef.current?.play().catch(() => {});
              }}
              onMouseLeave={() => {
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0.001;
                }
              }}
            />
            {/* Center Play Overlay Icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
            </div>
          </div>
        ) : media.type === "image" && media.src ? (
          <img
            src={media.src}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-card p-6 border-b border-border/40 select-none">
            <img
              src={CLINIC_LOGO}
              alt="Bosphorus Dermatology"
              className="max-h-12 w-auto object-contain opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
          </div>
        )}

        {/* Top-Left Badges: Order & Media Type */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10 pointer-events-none">
          <span className="bg-black/75 backdrop-blur-md px-2 py-0.5 text-[9px] font-mono text-white/90 border border-white/10">
            #{item.order_index}
          </span>
          {media.type === "video" ? (
            <span className="bg-accent px-2 py-0.5 text-[8px] font-black uppercase text-accent-foreground tracking-wider flex items-center gap-1 shadow-sm">
              <Play className="w-2.5 h-2.5 fill-current" />
              <span>Video Thumbnail</span>
            </span>
          ) : media.hasVideo ? (
            <span className="bg-accent px-2 py-0.5 text-[8px] font-black uppercase text-accent-foreground tracking-wider flex items-center gap-1 shadow-sm">
              <Film className="w-2.5 h-2.5" />
              <span>+ Video</span>
            </span>
          ) : media.type === "image" ? (
            <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 text-[8px] font-bold uppercase text-white tracking-wider flex items-center gap-1">
              <Camera className="w-2.5 h-2.5" />
              <span>Photo</span>
            </span>
          ) : (
            <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 text-[8px] font-medium uppercase text-white/80 tracking-wider">
              Default Logo
            </span>
          )}
        </div>

        {/* Top-Right: Live / Draft Toggle */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <button
            onClick={() => onToggleActive(item.id, item.is_active)}
            className={`px-2.5 py-0.5 text-[8px] font-black tracking-widest uppercase transition-all shadow-sm ${
              item.is_active
                ? "bg-emerald-600 text-white"
                : "bg-black/70 backdrop-blur-md text-white/70 hover:text-white border border-white/20"
            }`}
            title="Click to toggle Live/Draft"
          >
            {item.is_active ? "Live" : "Draft"}
          </button>
        </div>

        {/* Subtle Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* ── 2. Card Content Area ── */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-1.5">
            {item.category}
          </span>
          <h3 className="font-heading text-base font-medium text-foreground tracking-tight leading-snug mb-2 line-clamp-1">
            {item.title}
          </h3>
          {item.description ? (
            <p className="text-xs text-muted-foreground font-light line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground/50 font-light italic">
              Standard clinical procedure protocol
            </p>
          )}
        </div>

        {/* ── 3. Bottom Action Bar ── */}
        <div className="pt-3.5 mt-3.5 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            {item.secondary_media_url && (
              <span className="inline-flex items-center gap-1 text-accent font-medium uppercase text-[9px]">
                {item.secondary_media_type === "video" ? (
                  <>
                    <Film className="w-3 h-3" />
                    <span>Live Video</span>
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-3 h-3" />
                    <span>2nd Media</span>
                  </>
                )}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onEdit(item)}
              className="rounded-none h-7 px-2.5 text-[10px] font-bold uppercase gap-1"
            >
              <Edit2 className="w-3 h-3" />
              <span>Edit</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onDelete(item.id, item.title)}
              className="rounded-none h-7 w-7 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
              title="Delete service"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ManageServicesView() {
  const [services, setServices] = useState<ClinicServiceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ClinicServiceRecord | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingSecondary, setIsUploadingSecondary] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Medical Dermatology");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [secondaryMediaUrl, setSecondaryMediaUrl] = useState("");
  const [secondaryMediaType, setSecondaryMediaType] = useState<"image" | "video">("image");
  const [orderIndex, setOrderIndex] = useState(0);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("clinic_services")
        .select("*")
        .order("order_index", { ascending: true })
        .order("created_at", { ascending: false });

      if (error) throw error;
      setServices(data || []);
    } catch (err: any) {
      console.error("Error fetching services:", err);
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (item?: ClinicServiceRecord) => {
    if (item) {
      setEditingItem(item);
      setTitle(item.title);
      setCategory(item.category);
      setDescription(item.description || "");
      setImageUrl(item.image_url || "");
      setSecondaryMediaUrl(item.secondary_media_url || "");
      setSecondaryMediaType(item.secondary_media_type || "image");
      setOrderIndex(item.order_index);
    } else {
      setEditingItem(null);
      setTitle("");
      setCategory("Medical Dermatology");
      setDescription("");
      setImageUrl("");
      setSecondaryMediaUrl("");
      setSecondaryMediaType("image");
      setOrderIndex(services.length + 1);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingCover(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `services/${Date.now()}-cover-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("clinic-media")
        .upload(fileName, file, { cacheControl: "3600", upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("clinic-media")
        .getPublicUrl(fileName);

      setImageUrl(urlData.publicUrl);
      toast.success("Cover photo uploaded");
    } catch (err: any) {
      console.error("Cover upload error:", err);
      toast.error("Failed to upload cover: " + (err.message || ""));
    } finally {
      setIsUploadingCover(false);
    }
  };

  const handleSecondaryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingSecondary(true);
    const isVideo =
      file.type.startsWith("video/") ||
      file.name.endsWith(".MOV") ||
      file.name.endsWith(".mov") ||
      file.name.endsWith(".mp4");
    setSecondaryMediaType(isVideo ? "video" : "image");

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `services/${Date.now()}-media-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("clinic-media")
        .upload(fileName, file, { cacheControl: "3600", upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("clinic-media")
        .getPublicUrl(fileName);

      setSecondaryMediaUrl(urlData.publicUrl);
      toast.success(isVideo ? "Procedure video uploaded" : "Secondary photo uploaded");
    } catch (err: any) {
      console.error("Secondary upload error:", err);
      toast.error("Failed to upload file: " + (err.message || ""));
    } finally {
      setIsUploadingSecondary(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Please enter a service name");
      return;
    }

    setIsSaving(true);
    try {
      const payload = {
        title: title.trim(),
        category,
        description: description.trim() || null,
        image_url: imageUrl.trim() || null,
        secondary_media_url: secondaryMediaUrl.trim() || null,
        secondary_media_type: secondaryMediaUrl.trim() ? secondaryMediaType : null,
        price: null,
        duration: null,
        order_index: Number(orderIndex) || 0,
        updated_at: new Date().toISOString(),
      };

      if (editingItem) {
        const { error } = await supabase
          .from("clinic_services")
          .update(payload)
          .eq("id", editingItem.id);

        if (error) throw error;
        toast.success("Service updated successfully");
      } else {
        const { error } = await supabase
          .from("clinic_services")
          .insert([{ ...payload, is_active: true }]);

        if (error) throw error;
        toast.success("New service created successfully");
      }

      handleCloseModal();
      fetchServices();
    } catch (err: any) {
      console.error("Save error:", err);
      toast.error(err.message || "Failed to save service");
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("clinic_services")
        .update({ is_active: !currentStatus })
        .eq("id", id);

      if (error) throw error;

      setServices((prev) =>
        prev.map((s) => (s.id === id ? { ...s, is_active: !currentStatus } : s))
      );
      toast.success(!currentStatus ? "Service published" : "Service unpublished");
    } catch (err: any) {
      console.error("Toggle error:", err);
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id: string, serviceTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${serviceTitle}"?`)) return;

    try {
      const { error } = await supabase.from("clinic_services").delete().eq("id", id);
      if (error) throw error;

      setServices((prev) => prev.filter((s) => s.id !== id));
      toast.success("Service removed");
    } catch (err: any) {
      console.error("Delete error:", err);
      toast.error("Failed to delete service");
    }
  };

  // Filtered by Search & Category
  const filtered = services.filter((s) => {
    const matchesCategory =
      selectedCategory === "All" || s.category === selectedCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* ── 1. Top Header & Add Service Action ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <h2 className="font-heading text-2xl font-light text-foreground">
            Clinic Services & Procedures
          </h2>
          <p className="text-xs text-muted-foreground font-light mt-0.5">
            Manage treatments, descriptions, cover photos, and procedure videos
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => handleOpenModal()}
            className="rounded-none h-10 px-5 bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Service</span>
          </Button>
        </div>
      </div>

      {/* ── 2. Category Filter Tabs & View Toggle Bar ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORY_OPTIONS.map((cat) => {
            const count =
              cat === "All"
                ? services.length
                : services.filter((s) => s.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase transition-colors ${
                  selectedCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Search & Layout View Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 pl-9 pr-3 bg-muted/30 border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
            />
          </div>

          {/* Grid / Table Toggle */}
          <div className="hidden sm:flex items-center border border-border bg-muted/40 p-0.5">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 transition-colors ${
                viewMode === "grid"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="Gallery Cards View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`p-1.5 transition-colors ${
                viewMode === "table"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="Table View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. Content Display: Gallery Cards (Default) or Table ── */}
      {loading ? (
        <div className="p-16 text-center border border-border bg-card">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-accent mb-2" />
          <p className="text-xs text-muted-foreground">Loading services...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-16 text-center border border-dashed border-border bg-card">
          <Sparkles className="w-8 h-8 text-accent/50 mx-auto mb-3" />
          <h3 className="font-heading text-lg font-light text-foreground mb-1">
            No services found
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            {searchQuery
              ? "Try adjusting your search terms or category filter."
              : "Get started by adding your first clinic procedure."}
          </p>
          <Button
            onClick={() => handleOpenModal()}
            variant="outline"
            className="rounded-none text-xs font-bold uppercase"
          >
            Create Service
          </Button>
        </div>
      ) : viewMode === "grid" ? (
        /* ── Gallery Cards Grid ── */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <ServiceGalleryCard
              key={item.id}
              item={item}
              onEdit={handleOpenModal}
              onDelete={handleDelete}
              onToggleActive={handleToggleActive}
            />
          ))}
        </div>
      ) : (
        /* ── Table View Fallback ── */
        <div className="border border-border bg-card overflow-x-auto shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-muted/40 border-b border-border text-muted-foreground uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4 w-12">#</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Description</th>
                <th className="py-3 px-4">Media</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((item) => {
                const media = getServiceCover(item);
                return (
                  <tr key={item.id} className="hover:bg-muted/20 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-muted-foreground">
                      {item.order_index}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-black/10 border border-border overflow-hidden shrink-0 relative">
                          {media.type === "video" && media.src ? (
                            <video
                              src={`${media.src}#t=0.001`}
                              preload="metadata"
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          ) : media.type === "image" && media.src ? (
                            <img
                              src={media.src}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center p-1 bg-card">
                              <img src={CLINIC_LOGO} alt={item.title} className="max-h-6 w-auto object-contain opacity-70" />
                            </div>
                          )}
                        </div>
                        <span className="font-heading font-medium text-foreground text-sm">
                          {item.title}
                        </span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-muted/80 text-foreground border border-border">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs text-muted-foreground truncate">
                      {item.description || <span className="italic text-muted-foreground/50">None</span>}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5">
                        {media.type === "video" ? (
                          <span className="px-1.5 py-0.5 bg-accent/10 border border-accent/30 text-[9px] font-bold uppercase text-accent flex items-center gap-1">
                            <Play className="w-2.5 h-2.5 fill-current" /> Video Cover
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.5 bg-muted text-[9px] font-semibold uppercase text-muted-foreground">
                            Photo Cover
                          </span>
                        )}
                        {item.secondary_media_url && (
                          <span className="px-1.5 py-0.5 bg-accent/10 border border-accent/30 text-[9px] font-bold uppercase text-accent flex items-center gap-1">
                            {item.secondary_media_type === "video" ? (
                              <>
                                <Film className="w-2.5 h-2.5" /> Video
                              </>
                            ) : (
                              <>
                                <ImageIcon className="w-2.5 h-2.5" /> Photo
                              </>
                            )}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => handleToggleActive(item.id, item.is_active)}
                        className={`px-2.5 py-1 text-[9px] font-black tracking-widest uppercase transition-colors ${
                          item.is_active
                            ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                            : "bg-muted text-muted-foreground border border-border"
                        }`}
                      >
                        {item.is_active ? "Live" : "Draft"}
                      </button>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleOpenModal(item)}
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                          title="Edit Service"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(item.id, item.title)}
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                          title="Delete Service"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* ── 4. Add / Edit Modal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border w-full max-w-lg p-6 sm:p-8 shadow-2xl relative animate-fade-up max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
              <h3 className="font-heading text-xl font-light text-foreground">
                {editingItem ? "Edit Service" : "Add Service"}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              {/* Service Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                  Service Name *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. PRP Platelet-Rich Plasma Therapy"
                  className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                />
              </div>

              {/* Category & Display Order */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                  >
                    {CATEGORY_OPTIONS.filter((c) => c !== "All").map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={orderIndex}
                    onChange={(e) => setOrderIndex(Number(e.target.value))}
                    className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              {/* Description (Optional) */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                  Description <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Clinical treatment details, targeted skin conditions, or protocol summary..."
                  className="w-full p-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                />
              </div>

              {/* Cover Photo */}
              <div className="space-y-1.5 pt-2 border-t border-border">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground block">
                  Cover Photo
                </label>
                <div className="flex items-center gap-3">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Cover Preview"
                      className="w-16 h-16 object-cover border border-border shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-card border border-border flex items-center justify-center p-2 shrink-0 select-none">
                      <img src={CLINIC_LOGO} alt="Default Logo" className="max-h-8 w-auto object-contain opacity-70" />
                    </div>
                  )}

                  <div className="flex-1 space-y-2">
                    <label className="inline-flex items-center gap-2 h-9 px-4 bg-muted hover:bg-muted/80 border border-border text-xs font-semibold text-foreground cursor-pointer transition-colors">
                      {isUploadingCover ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-3.5 h-3.5 text-accent" />
                          <span>Upload Cover Photo</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleCoverUpload}
                        disabled={isUploadingCover}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Or enter direct cover image URL"
                      className="w-full h-8 px-2 bg-muted/20 border border-border text-[11px] text-muted-foreground focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Another Photo or Video (Optional) */}
              <div className="space-y-1.5 pt-2 border-t border-border">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                    Another Photo or Video <span className="text-muted-foreground font-normal">(Optional)</span>
                  </label>
                  <div className="flex items-center gap-2 text-[10px]">
                    <label className="inline-flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="secType"
                        checked={secondaryMediaType === "image"}
                        onChange={() => setSecondaryMediaType("image")}
                        className="text-accent"
                      />
                      <span>Photo</span>
                    </label>
                    <label className="inline-flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="secType"
                        checked={secondaryMediaType === "video"}
                        onChange={() => setSecondaryMediaType("video")}
                        className="text-accent"
                      />
                      <span>Video</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {secondaryMediaUrl ? (
                    secondaryMediaType === "video" ? (
                      <div className="w-16 h-16 bg-black border border-border flex items-center justify-center text-accent shrink-0 relative overflow-hidden">
                        <video src={secondaryMediaUrl} className="w-full h-full object-cover" muted />
                        <Film className="w-5 h-5 absolute text-white drop-shadow" />
                      </div>
                    ) : (
                      <img
                        src={secondaryMediaUrl}
                        alt="Secondary Preview"
                        className="w-16 h-16 object-cover border border-border shrink-0"
                      />
                    )
                  ) : (
                    <div className="w-16 h-16 bg-muted border border-border flex items-center justify-center text-muted-foreground shrink-0">
                      {secondaryMediaType === "video" ? <Film className="w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
                    </div>
                  )}

                  <div className="flex-1 space-y-2">
                    <label className="inline-flex items-center gap-2 h-9 px-4 bg-muted hover:bg-muted/80 border border-border text-xs font-semibold text-foreground cursor-pointer transition-colors">
                      {isUploadingSecondary ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-3.5 h-3.5 text-accent" />
                          <span>Upload {secondaryMediaType === "video" ? "Video" : "Photo"}</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept={secondaryMediaType === "video" ? "video/*,.MOV,.mov,.mp4" : "image/*"}
                        onChange={handleSecondaryUpload}
                        disabled={isUploadingSecondary}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="url"
                      value={secondaryMediaUrl}
                      onChange={(e) => setSecondaryMediaUrl(e.target.value)}
                      placeholder={`Or enter direct ${secondaryMediaType} URL`}
                      className="w-full h-8 px-2 bg-muted/20 border border-border text-[11px] text-muted-foreground focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-border mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCloseModal}
                  className="rounded-none text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSaving || isUploadingCover || isUploadingSecondary}
                  className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold uppercase px-6"
                >
                  {isSaving ? "Saving..." : editingItem ? "Update Service" : "Create Service"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
