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
  DollarSign,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";

export interface ClinicServiceRecord {
  id: string;
  title: string;
  category: string;
  price: string | null;
  duration: string | null;
  image_url: string | null;
  order_index: number;
  is_active: boolean;
  created_at: string;
}

const CATEGORY_OPTIONS = [
  "Medical Dermatology",
  "Aesthetic Medicine",
  "Laser & Body",
  "Hair & Scalp",
];

export function ManageServicesView() {
  const [services, setServices] = useState<ClinicServiceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ClinicServiceRecord | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [imageUrl, setImageUrl] = useState("");
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
      setPrice(item.price || "");
      setDuration(item.duration || "");
      setImageUrl(item.image_url || "");
      setOrderIndex(item.order_index);
    } else {
      setEditingItem(null);
      setTitle("");
      setCategory(CATEGORY_OPTIONS[0]);
      setPrice("");
      setDuration("");
      setImageUrl("");
      setOrderIndex(services.length + 1);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `services/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("clinic-media")
        .upload(fileName, file, { cacheControl: "3600", upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("clinic-media")
        .getPublicUrl(fileName);

      setImageUrl(urlData.publicUrl);
      toast.success("Image uploaded successfully");
    } catch (err: any) {
      console.error("Upload error:", err);
      toast.error("Failed to upload image: " + (err.message || ""));
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Please enter a service title");
      return;
    }

    setIsSaving(true);
    try {
      const payload = {
        title: title.trim(),
        category,
        price: price.trim() || null,
        duration: duration.trim() || null,
        image_url: imageUrl.trim() || null,
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

  const filtered = services.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
        <div>
          <h2 className="font-heading text-2xl font-light text-foreground">
            Clinic Services & Procedures
          </h2>
          <p className="text-xs text-muted-foreground font-light mt-0.5">
            Published treatments update dynamically in the website carousel and catalog
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => handleOpenModal()}
            className="rounded-none h-10 px-5 bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Service</span>
          </Button>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search services by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-muted/30 border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>

        <span className="text-xs text-muted-foreground">
          Showing <strong className="text-foreground">{filtered.length}</strong> services
        </span>
      </div>

      {/* Services Table */}
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
            Get started by adding your first clinic procedure to the database.
          </p>
          <Button
            onClick={() => handleOpenModal()}
            variant="outline"
            className="rounded-none text-xs font-bold uppercase"
          >
            Create Service
          </Button>
        </div>
      ) : (
        <div className="border border-border bg-card overflow-x-auto shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-muted/40 border-b border-border text-muted-foreground uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Order</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-muted/20 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-muted-foreground">
                    #{item.order_index}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      {item.image_url ? (
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-10 h-10 object-cover border border-border shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-muted border border-border flex items-center justify-center shrink-0 text-muted-foreground">
                          <ImageIcon className="w-4 h-4" />
                        </div>
                      )}
                      <div>
                        <span className="font-medium text-foreground block">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-wider uppercase">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-foreground font-medium">
                    {item.price || "—"}
                  </td>
                  <td className="py-3.5 px-4 text-muted-foreground">
                    {item.duration || "—"}
                  </td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => handleToggleActive(item.id, item.is_active)}
                      className={`px-2.5 py-1 text-[10px] font-black tracking-widest uppercase transition-colors ${
                        item.is_active
                          ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {item.is_active ? "Live" : "Draft"}
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
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
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border w-full max-w-lg p-6 sm:p-8 shadow-2xl relative animate-fade-up">
            <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
              <h3 className="font-heading text-xl font-light text-foreground">
                {editingItem ? "Edit Clinic Service" : "Add New Clinic Service"}
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
                  Service Title *
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
                    {CATEGORY_OPTIONS.map((cat) => (
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

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                    Price (Optional)
                  </label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 3,500 ETB / Consultation"
                    className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                    Duration (Optional)
                  </label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g. 45 Mins"
                    className="w-full h-10 px-3 bg-muted/30 border border-border text-xs focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              {/* Cover Image Upload */}
              <div className="space-y-1.5 pt-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground block">
                  Cover Photo
                </label>
                <div className="flex items-center gap-3">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Preview"
                      className="w-16 h-16 object-cover border border-border shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-muted border border-border flex items-center justify-center text-muted-foreground shrink-0">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                  )}

                  <div className="flex-1 space-y-2">
                    <label className="inline-flex items-center gap-2 h-9 px-4 bg-muted hover:bg-muted/80 border border-border text-xs font-semibold text-foreground cursor-pointer transition-colors">
                      {isUploading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-3.5 h-3.5 text-accent" />
                          <span>Upload Image</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUploading}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Or enter direct image URL"
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
                  disabled={isSaving || isUploading}
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
