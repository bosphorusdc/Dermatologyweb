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
  Sparkles,
  Columns,
} from "lucide-react";

export interface BeforeAfterRecord {
  id: string;
  title: string;
  category: string;
  before_image_url: string;
  after_image_url: string;
  treatment_used: string | null;
  sessions_count: string | null;
  order_index: number;
  is_active: boolean;
  created_at: string;
}

export function ManageBeforeAfterView() {
  const [cases, setCases] = useState<BeforeAfterRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<BeforeAfterRecord | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingBefore, setUploadingBefore] = useState(false);
  const [uploadingAfter, setUploadingAfter] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Pigmentation & Melasma");
  const [beforeImageUrl, setBeforeImageUrl] = useState("");
  const [afterImageUrl, setAfterImageUrl] = useState("");
  const [treatmentUsed, setTreatmentUsed] = useState("");
  const [sessionsCount, setSessionsCount] = useState("");
  const [orderIndex, setOrderIndex] = useState(0);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("before_after_cases")
        .select("*")
        .order("order_index", { ascending: true })
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCases(data || []);
    } catch (err: any) {
      console.error("Error fetching before/after cases:", err);
      toast.error("Failed to load before/after cases");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (item?: BeforeAfterRecord) => {
    if (item) {
      setEditingItem(item);
      setTitle(item.title);
      setCategory(item.category);
      setBeforeImageUrl(item.before_image_url);
      setAfterImageUrl(item.after_image_url);
      setTreatmentUsed(item.treatment_used || "");
      setSessionsCount(item.sessions_count || "");
      setOrderIndex(item.order_index);
    } else {
      setEditingItem(null);
      setTitle("");
      setCategory("Pigmentation & Melasma");
      setBeforeImageUrl("");
      setAfterImageUrl("");
      setTreatmentUsed("");
      setSessionsCount("3 Sessions");
      setOrderIndex(cases.length + 1);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "before" | "after"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (type === "before") setUploadingBefore(true);
    else setUploadingAfter(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `before-after/${Date.now()}-${type}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("clinic-media")
        .upload(fileName, file, { cacheControl: "3600", upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("clinic-media")
        .getPublicUrl(fileName);

      if (type === "before") {
        setBeforeImageUrl(urlData.publicUrl);
        toast.success("Before photo uploaded");
      } else {
        setAfterImageUrl(urlData.publicUrl);
        toast.success("After photo uploaded");
      }
    } catch (err: any) {
      console.error("Upload error:", err);
      toast.error("Failed to upload image: " + (err.message || ""));
    } finally {
      if (type === "before") setUploadingBefore(false);
      else setUploadingAfter(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !beforeImageUrl.trim() || !afterImageUrl.trim()) {
      toast.error("Please provide title and both Before & After photos");
      return;
    }

    setIsSaving(true);
    try {
      const payload = {
        title: title.trim(),
        category: category.trim(),
        before_image_url: beforeImageUrl.trim(),
        after_image_url: afterImageUrl.trim(),
        treatment_used: treatmentUsed.trim() || null,
        sessions_count: sessionsCount.trim() || null,
        order_index: Number(orderIndex) || 0,
        updated_at: new Date().toISOString(),
      };

      if (editingItem) {
        const { error } = await supabase
          .from("before_after_cases")
          .update(payload)
          .eq("id", editingItem.id);

        if (error) throw error;
        toast.success("Case updated successfully");
      } else {
        const { error } = await supabase
          .from("before_after_cases")
          .insert([{ ...payload, is_active: true }]);

        if (error) throw error;
        toast.success("New case added successfully");
      }

      handleCloseModal();
      fetchCases();
    } catch (err: any) {
      console.error("Save error:", err);
      toast.error(err.message || "Failed to save case");
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("before_after_cases")
        .update({ is_active: !currentStatus })
        .eq("id", id);

      if (error) throw error;

      setCases((prev) =>
        prev.map((c) => (c.id === id ? { ...c, is_active: !currentStatus } : c))
      );
      toast.success(!currentStatus ? "Case published" : "Case unpublished");
    } catch (err: any) {
      console.error("Toggle error:", err);
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id: string, caseTitle: string) => {
    if (!confirm(`Are you sure you want to delete case "${caseTitle}"?`)) return;

    try {
      const { error } = await supabase
        .from("before_after_cases")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setCases((prev) => prev.filter((c) => c.id !== id));
      toast.success("Case removed");
    } catch (err: any) {
      console.error("Delete error:", err);
      toast.error("Failed to delete case");
    }
  };

  const filtered = cases.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <h2 className="font-heading text-2xl font-light text-foreground">
            Before & After Clinical Cases
          </h2>
          <p className="text-xs text-muted-foreground font-light mt-0.5">
            Photographic clinical transformations showcased on the home and services pages
          </p>
        </div>

        <Button
          onClick={() => handleOpenModal()}
          className="rounded-none h-10 px-5 bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add Clinical Case</span>
        </Button>
      </div>

      {/* Filter and Search */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search cases by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-muted/30 border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>

        <span className="text-xs text-muted-foreground">
          Showing <strong className="text-foreground">{filtered.length}</strong> cases
        </span>
      </div>

      {/* Grid of Cases */}
      {loading ? (
        <div className="p-16 text-center border border-border bg-card">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-accent mb-2" />
          <p className="text-xs text-muted-foreground">Loading cases...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="p-16 text-center border border-dashed border-border bg-card">
          <Columns className="w-8 h-8 text-accent/50 mx-auto mb-3" />
          <h3 className="font-heading text-lg font-light text-foreground mb-1">
            No clinical cases found
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            Add clinical before & after photo comparisons for patient evidence.
          </p>
          <Button
            onClick={() => handleOpenModal()}
            variant="outline"
            className="rounded-none text-xs font-bold uppercase"
          >
            Create New Case
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="border border-border bg-card overflow-hidden shadow-sm flex flex-col justify-between"
            >
              {/* Split Photos */}
              <div className="grid grid-cols-2 h-44 border-b border-border bg-black/5">
                <div className="relative overflow-hidden border-r border-border/50">
                  <img
                    src={item.before_image_url}
                    alt={`${item.title} before`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-foreground/80 px-2 py-0.5 text-[8px] font-black uppercase text-background tracking-widest">
                    Before
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={item.after_image_url}
                    alt={`${item.title} after`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-accent px-2 py-0.5 text-[8px] font-black uppercase text-accent-foreground tracking-widest">
                    After
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[9px] font-bold tracking-widest text-accent uppercase">
                      {item.category}
                    </span>
                    <button
                      onClick={() => handleToggleActive(item.id, item.is_active)}
                      className={`text-[9px] font-black tracking-widest uppercase px-2 py-0.5 ${
                        item.is_active
                          ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {item.is_active ? "Live" : "Draft"}
                    </button>
                  </div>

                  <h3 className="font-heading text-base font-medium text-foreground tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <div className="text-[11px] text-muted-foreground space-y-1">
                    {item.treatment_used && (
                      <p>Protocol: <span className="text-foreground">{item.treatment_used}</span></p>
                    )}
                    {item.sessions_count && (
                      <p>Duration: <span className="text-accent font-semibold">{item.sessions_count}</span></p>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground">
                    Order #{item.order_index}
                  </span>
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
                {editingItem ? "Edit Clinical Case" : "Add Before & After Case"}
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
                  Case Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Melasma & Hyperpigmentation Clearance"
                  className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                    Concern / Category
                  </label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Melasma, Acne, Vitiligo"
                    className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                  />
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

              {/* Before Photo Upload */}
              <div className="space-y-1.5 pt-2 border-t border-border">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground block">
                  Before Treatment Photo *
                </label>
                <div className="flex items-center gap-3">
                  {beforeImageUrl ? (
                    <img
                      src={beforeImageUrl}
                      alt="Before Preview"
                      className="w-16 h-16 object-cover border border-border shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-muted border border-border flex items-center justify-center text-muted-foreground shrink-0">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                  )}

                  <div className="flex-1 space-y-2">
                    <label className="inline-flex items-center gap-2 h-9 px-4 bg-muted hover:bg-muted/80 border border-border text-xs font-semibold text-foreground cursor-pointer transition-colors">
                      {uploadingBefore ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-3.5 h-3.5 text-accent" />
                          <span>Upload Before Photo</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleUpload(e, "before")}
                        disabled={uploadingBefore}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="url"
                      value={beforeImageUrl}
                      onChange={(e) => setBeforeImageUrl(e.target.value)}
                      placeholder="Or enter direct photo URL"
                      className="w-full h-8 px-2 bg-muted/20 border border-border text-[11px] text-muted-foreground focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* After Photo Upload */}
              <div className="space-y-1.5 pt-2 border-t border-border">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground block">
                  After Treatment Photo *
                </label>
                <div className="flex items-center gap-3">
                  {afterImageUrl ? (
                    <img
                      src={afterImageUrl}
                      alt="After Preview"
                      className="w-16 h-16 object-cover border border-border shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-muted border border-border flex items-center justify-center text-muted-foreground shrink-0">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                  )}

                  <div className="flex-1 space-y-2">
                    <label className="inline-flex items-center gap-2 h-9 px-4 bg-muted hover:bg-muted/80 border border-border text-xs font-semibold text-foreground cursor-pointer transition-colors">
                      {uploadingAfter ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-3.5 h-3.5 text-accent" />
                          <span>Upload After Photo</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleUpload(e, "after")}
                        disabled={uploadingAfter}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="url"
                      value={afterImageUrl}
                      onChange={(e) => setAfterImageUrl(e.target.value)}
                      placeholder="Or enter direct photo URL"
                      className="w-full h-8 px-2 bg-muted/20 border border-border text-[11px] text-muted-foreground focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                    Protocol Used
                  </label>
                  <input
                    type="text"
                    value={treatmentUsed}
                    onChange={(e) => setTreatmentUsed(e.target.value)}
                    placeholder="e.g. Q-Switched Laser + Topical"
                    className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                    Sessions / Duration
                  </label>
                  <input
                    type="text"
                    value={sessionsCount}
                    onChange={(e) => setSessionsCount(e.target.value)}
                    placeholder="e.g. 3 Sessions"
                    className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                  />
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
                  disabled={isSaving || uploadingBefore || uploadingAfter}
                  className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold uppercase px-6"
                >
                  {isSaving ? "Saving..." : editingItem ? "Update Case" : "Add Case"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
