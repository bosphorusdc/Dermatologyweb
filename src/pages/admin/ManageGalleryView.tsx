import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Plus,
  Trash2,
  Edit2,
  Search,
  Upload,
  Check,
  X,
  Loader2,
  Image as ImageIcon,
  Film,
  Camera,
  Play,
} from "lucide-react";

export interface GalleryItemRecord {
  id: string;
  title: string;
  category: string;
  media_type: "image" | "video";
  media_url: string;
  thumbnail_url: string | null;
  order_index: number;
  is_active: boolean;
  created_at: string;
}

const GALLERY_CATEGORIES = [
  { value: "videos", label: "Live Procedures (Video)" },
  { value: "results", label: "Clinical Results" },
  { value: "procedures", label: "Clinical Practice" },
  { value: "clinic", label: "Clinic & Facility" },
  { value: "ambassador", label: "Brand Ambassador" },
];

export function ManageGalleryView() {
  const [items, setItems] = useState<GalleryItemRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItemRecord | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("videos");
  const [mediaType, setMediaType] = useState<"image" | "video">("video");
  const [mediaUrl, setMediaUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [orderIndex, setOrderIndex] = useState(0);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("gallery_items")
        .select("*")
        .order("order_index", { ascending: true })
        .order("created_at", { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (err: any) {
      console.error("Error fetching gallery items:", err);
      toast.error("Failed to load gallery items");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (item?: GalleryItemRecord) => {
    if (item) {
      setEditingItem(item);
      setTitle(item.title);
      setCategory(item.category);
      setMediaType(item.media_type);
      setMediaUrl(item.media_url);
      setThumbnailUrl(item.thumbnail_url || "");
      setOrderIndex(item.order_index);
    } else {
      setEditingItem(null);
      setTitle("");
      setCategory("videos");
      setMediaType("video");
      setMediaUrl("");
      setThumbnailUrl("");
      setOrderIndex(items.length + 1);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const isVideo = file.type.startsWith("video/");
      const folder = isVideo ? "videos" : "gallery";
      const fileExt = file.name.split(".").pop();
      const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("clinic-media")
        .upload(fileName, file, { cacheControl: "3600", upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("clinic-media")
        .getPublicUrl(fileName);

      setMediaUrl(urlData.publicUrl);
      if (isVideo) {
        setMediaType("video");
        setCategory("videos");
      } else {
        setMediaType("image");
      }
      toast.success("File uploaded successfully");
    } catch (err: any) {
      console.error("Upload error:", err);
      toast.error("Failed to upload: " + (err.message || ""));
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !mediaUrl.trim()) {
      toast.error("Please provide title and media URL");
      return;
    }

    setIsSaving(true);
    try {
      const payload = {
        title: title.trim(),
        category,
        media_type: mediaType,
        media_url: mediaUrl.trim(),
        thumbnail_url: thumbnailUrl.trim() || null,
        order_index: Number(orderIndex) || 0,
        updated_at: new Date().toISOString(),
      };

      if (editingItem) {
        const { error } = await supabase
          .from("gallery_items")
          .update(payload)
          .eq("id", editingItem.id);

        if (error) throw error;
        toast.success("Media item updated");
      } else {
        const { error } = await supabase
          .from("gallery_items")
          .insert([{ ...payload, is_active: true }]);

        if (error) throw error;
        toast.success("New media item published");
      }

      handleCloseModal();
      fetchGallery();
    } catch (err: any) {
      console.error("Save error:", err);
      toast.error(err.message || "Failed to save item");
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("gallery_items")
        .update({ is_active: !currentStatus })
        .eq("id", id);

      if (error) throw error;

      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, is_active: !currentStatus } : i))
      );
      toast.success(!currentStatus ? "Item published" : "Item set to draft");
    } catch (err: any) {
      console.error("Toggle error:", err);
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id: string, itemTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${itemTitle}"?`)) return;

    try {
      const { error } = await supabase.from("gallery_items").delete().eq("id", id);
      if (error) throw error;

      setItems((prev) => prev.filter((i) => i.id !== id));
      toast.success("Media item deleted");
    } catch (err: any) {
      console.error("Delete error:", err);
      toast.error("Failed to delete item");
    }
  };

  const filtered = items.filter((item) => {
    const matchesTab = activeTab === "all" || item.category === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <h2 className="font-heading text-2xl font-light text-foreground">
            Clinic Gallery & Procedures Media
          </h2>
          <p className="text-xs text-muted-foreground font-light mt-0.5">
            Manage live clinical procedure videos, treatment photos, and facility showcases
          </p>
        </div>

        <Button
          onClick={() => handleOpenModal()}
          className="rounded-none h-10 px-5 bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Upload Media</span>
        </Button>
      </div>

      {/* Tabs and Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase transition-colors ${
              activeTab === "all"
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All ({items.length})
          </button>
          {GALLERY_CATEGORIES.map((cat) => {
            const count = items.filter((i) => i.category === cat.value).length;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                className={`px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase transition-colors ${
                  activeTab === cat.value
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search media..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-9 pl-9 pr-3 bg-muted/30 border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Media Grid */}
      {loading ? (
        <div className="p-16 text-center border border-border bg-card">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-accent mb-2" />
          <p className="text-xs text-muted-foreground">Loading media items...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-16 text-center border border-dashed border-border bg-card">
          <Film className="w-8 h-8 text-accent/50 mx-auto mb-3" />
          <h3 className="font-heading text-lg font-light text-foreground mb-1">
            No media items found
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            Upload procedure videos or clinic photography for your website visitors.
          </p>
          <Button
            onClick={() => handleOpenModal()}
            variant="outline"
            className="rounded-none text-xs font-bold uppercase"
          >
            Upload Media
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="border border-border bg-card overflow-hidden shadow-sm flex flex-col justify-between group"
            >
              <div className="relative aspect-video bg-black/10 overflow-hidden">
                {item.media_type === "video" ? (
                  <video
                    src={`${item.media_url}#t=0.001`}
                    preload="metadata"
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.media_url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute top-2 left-2 flex items-center gap-1.5">
                  <span className="bg-foreground/80 px-2 py-0.5 text-[8px] font-black uppercase text-background tracking-wider flex items-center gap-1">
                    {item.media_type === "video" ? (
                      <>
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>Video</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-2.5 h-2.5" />
                        <span>Photo</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleToggleActive(item.id, item.is_active)}
                    className={`px-2 py-0.5 text-[8px] font-black uppercase tracking-wider ${
                      item.is_active
                        ? "bg-emerald-600 text-white"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}
                  >
                    {item.is_active ? "Live" : "Draft"}
                  </button>
                </div>
              </div>

              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-accent uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-heading text-sm font-medium text-foreground line-clamp-2">
                    {item.title}
                  </h4>
                </div>

                <div className="pt-3 mt-3 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
                  <span className="font-mono">#{item.order_index}</span>
                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleOpenModal(item)}
                      className="h-7 w-7 p-0 text-muted-foreground hover:text-foreground"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(item.id, item.title)}
                      className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border w-full max-w-lg p-6 sm:p-8 shadow-2xl relative animate-fade-up max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
              <h3 className="font-heading text-xl font-light text-foreground">
                {editingItem ? "Edit Media Item" : "Add Gallery Media"}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                  Media Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. PRP Hair Restoration Live Infiltration"
                  className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                />
              </div>

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
                    {GALLERY_CATEGORIES.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                    Media Type *
                  </label>
                  <select
                    value={mediaType}
                    onChange={(e) => setMediaType(e.target.value as "image" | "video")}
                    className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                  >
                    <option value="video">Video (.mp4, .mov)</option>
                    <option value="image">Photo (.jpg, .png)</option>
                  </select>
                </div>
              </div>

              {/* Upload file or enter URL */}
              <div className="space-y-2 pt-2 border-t border-border">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground block">
                  Media File or Video URL *
                </label>

                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-2 h-10 px-4 bg-muted hover:bg-muted/80 border border-border text-xs font-semibold text-foreground cursor-pointer transition-colors">
                    {isUploading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-3.5 h-3.5 text-accent" />
                        <span>Upload File</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                      className="hidden"
                    />
                  </label>

                  <input
                    type="url"
                    required
                    value={mediaUrl}
                    onChange={(e) => setMediaUrl(e.target.value)}
                    placeholder="https://... direct video or image URL"
                    className="flex-1 h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                  />
                </div>
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
                  disabled={isSaving || isUploading}
                  className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold uppercase px-6"
                >
                  {isSaving ? "Saving..." : editingItem ? "Update Item" : "Publish Item"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
