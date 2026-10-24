// Clinic & Facility
const clinicInterior = new URL("../assets/clinic-interior.jpg", import.meta.url).href;
const heroClinic = new URL("../assets/hero-clinic.jpg", import.meta.url).href;
const heroBeauty = new URL("../assets/hero-beauty.jpg", import.meta.url).href;
const ambassadorImg = new URL("../assets/ambassador.jpg", import.meta.url).href;

// Clinical Procedure Photos (1 to 10)
const procPhoto1 = new URL("../assets/Images/photo_1_2026-03-25_21-38-08.jpg", import.meta.url).href;
const procPhoto2 = new URL("../assets/Images/photo_2_2026-03-25_21-38-08.jpg", import.meta.url).href;
const procPhoto3 = new URL("../assets/Images/photo_3_2026-03-25_21-38-08.jpg", import.meta.url).href;
const procPhoto4 = new URL("../assets/Images/photo_4_2026-03-25_21-38-08.jpg", import.meta.url).href;
const procPhoto5 = new URL("../assets/Images/photo_5_2026-03-25_21-38-08.jpg", import.meta.url).href;
const procPhoto6 = new URL("../assets/Images/photo_6_2026-03-25_21-38-08.jpg", import.meta.url).href;
const procPhoto7 = new URL("../assets/Images/photo_7_2026-03-25_21-38-08.jpg", import.meta.url).href;
const procPhoto8 = new URL("../assets/Images/photo_8_2026-03-25_21-38-08.jpg", import.meta.url).href;
const procPhoto9 = new URL("../assets/Images/photo_9_2026-03-25_21-38-08.jpg", import.meta.url).href;
const procPhoto10 = new URL("../assets/Images/photo_10_2026-03-25_21-38-08.jpg", import.meta.url).href;

// Before & After / Medical Case Studies Photos
const acnePhoto1 = new URL("../assets/Acne/photo_2026-03-25_21-35-51.jpg", import.meta.url).href;
const acnePhoto2 = new URL("../assets/Acne/photo_2026-03-25_21-36-00.jpg", import.meta.url).href;
const acnePhoto3 = new URL("../assets/Acne/photo_2026-03-25_21-36-22.jpg", import.meta.url).href;

const dandruffBefore = new URL("../assets/Dandruff treatment before and after/photo_2026-03-25_13-15-25.jpg", import.meta.url).href;
const dandruffAfter = new URL("../assets/Dandruff treatment before and after/photo_2026-03-25_13-15-34.jpg", import.meta.url).href;

const melasmaBefore = new URL("../assets/Melasma before & after/photo_2026-03-25_13-09-53.jpg", import.meta.url).href;
const melasmaAfter = new URL("../assets/Melasma before & after/photo_2026-03-25_13-10-10.jpg", import.meta.url).href;

const bacteriaBefore = new URL("../assets/skinbacteria infection b and f/photo_2026-03-25_13-18-56.jpg", import.meta.url).href;
const bacteriaAfter = new URL("../assets/skinbacteria infection b and f/photo_2026-03-25_13-19-08.jpg", import.meta.url).href;

const vitiligoBefore = new URL("../assets/Vitiligo/photo_2026-03-25_13-11-12.jpg", import.meta.url).href;
const vitiligoAfter = new URL("../assets/Vitiligo/photo_2026-03-25_13-11-23.jpg", import.meta.url).href;
const vitiligoGallery = new URL("../assets/Vitiligo/photo_2026-03-25_13-11-28.jpg", import.meta.url).href;

// Clinical Procedure Videos (.MOV)
const prpVideo1 = new URL("../assets/prp/IMG_4516.MOV", import.meta.url).href;
const prpVideo2 = new URL("../assets/prp/IMG_4517.MOV", import.meta.url).href;
const prpVideo3 = new URL("../assets/prp/IMG_4518.MOV", import.meta.url).href;
const prpVideo4 = new URL("../assets/prp/IMG_4519.MOV", import.meta.url).href;

const microneedlingVideo = new URL("../assets/microneedling/IMG_4073.MOV", import.meta.url).href;

const tattooVideo1 = new URL("../assets/Tattoo removal/IMG_4374.MOV", import.meta.url).href;
const tattooVideo2 = new URL("../assets/Tattoo removal/IMG_4376.MOV", import.meta.url).href;
const tattooVideo3 = new URL("../assets/Tattoo removal/IMG_4380.MOV", import.meta.url).href;
const tattooVideo4 = new URL("../assets/Tattoo removal/IMG_4384.MOV", import.meta.url).href;

const fatRemovalVideo1 = new URL("../assets/Fat removal/IMG_4487.MOV", import.meta.url).href;
const fatRemovalVideo2 = new URL("../assets/Fat removal/IMG_4488.MOV", import.meta.url).href;
const fatRemovalVideo3 = new URL("../assets/Fat removal/IMG_4491.MOV", import.meta.url).href;

const microdermVideo1 = new URL("../assets/Microdermabrasion/IMG_5303.MOV", import.meta.url).href;
const microdermVideo2 = new URL("../assets/Microdermabrasion/IMG_5304.MOV", import.meta.url).href;
const microdermVideo3 = new URL("../assets/Microdermabrasion/IMG_5306.MOV", import.meta.url).href;

const acneVideo1 = new URL("../assets/Acne/IMG_3029.MOV", import.meta.url).href;
const vitiligoVideo1 = new URL("../assets/Vitiligo/IMG_6406.MOV", import.meta.url).href;

export type GalleryCategory = "all" | "videos" | "results" | "procedures" | "clinic" | "ambassador";

export interface GalleryItem {
  id: string;
  type: "video" | "image";
  src: string;
  thumbnail?: string;
  title: string;
  category: "videos" | "results" | "procedures" | "clinic" | "ambassador";
  categoryLabel: string;
  description: string;
  tags?: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // ── Videos (Live Procedures) ──
  {
    id: "v-prp-1",
    type: "video",
    src: prpVideo1,
    title: "Platelet-Rich Plasma (PRP) Therapy",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Autologous growth factor injection session for hair follicle stimulation and tissue regeneration.",
    tags: ["PRP", "Hair Restoration", "Regenerative Medicine"],
  },
  {
    id: "v-microneedling-1",
    type: "video",
    src: microneedlingVideo,
    title: "Clinical Microneedling Protocol",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Sterile micro-point induction to stimulate collagen synthesis and refine skin texture.",
    tags: ["Microneedling", "Collagen Induction", "Skin Rejuvenation"],
  },
  {
    id: "v-tattoo-1",
    type: "video",
    src: tattooVideo1,
    title: "Laser Tattoo Removal In Action",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Targeted pigment photoacoustic disruption for safe, progressive ink clearance.",
    tags: ["Laser Therapy", "Tattoo Removal", "Pigment Clearance"],
  },
  {
    id: "v-microderm-1",
    type: "video",
    src: microdermVideo1,
    title: "Microdermabrasion Exfoliation",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Gentle mechanical resurfacing for pore refinement and surface clarity.",
    tags: ["Microdermabrasion", "Exfoliation", "Pore Refinement"],
  },
  {
    id: "v-fat-1",
    type: "video",
    src: fatRemovalVideo1,
    title: "G5 Non-Surgical Body Contouring",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "G5 mechanical gyratory therapy targeting localized subcutaneous fat deposits.",
    tags: ["Body Contouring", "Fat Reduction", "Circulation"],
  },
  {
    id: "v-prp-2",
    type: "video",
    src: prpVideo2,
    title: "PRP Scalp Infiltration Procedure",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Targeted micro-injections into thinning scalp zones to activate dormant follicles.",
    tags: ["PRP", "Scalp Protocol", "Hair Restoration"],
  },
  {
    id: "v-tattoo-2",
    type: "video",
    src: tattooVideo2,
    title: "Laser Precision Pulse Treatment",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "High-peak laser energy targeting stubborn multi-colored pigments.",
    tags: ["Laser", "Tattoo Clearance", "Dermatologic Laser"],
  },
  {
    id: "v-microderm-2",
    type: "video",
    src: microdermVideo2,
    title: "Deep Pore Vacuum & Exfoliation",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Controlled diamond-tip resurfacing and vacuum extraction.",
    tags: ["Microdermabrasion", "Clinical Resurfacing"],
  },
  {
    id: "v-acne-1",
    type: "video",
    src: acneVideo1,
    title: "Clinical Acne Extraction & Treatment",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Medical-grade extraction and anti-inflammatory application for severe acne.",
    tags: ["Acne Protocol", "Medical Dermatology"],
  },
  {
    id: "v-vitiligo-1",
    type: "video",
    src: vitiligoVideo1,
    title: "Vitiligo Targeted Repigmentation",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Specialized targeted procedural application for pigment restoration.",
    tags: ["Vitiligo", "Pigment Therapy"],
  },
  {
    id: "v-tattoo-3",
    type: "video",
    src: tattooVideo3,
    title: "Q-Switched Laser Session",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Advanced nanosecond pulse delivery for deep dermal pigment removal.",
    tags: ["Laser", "Tattoo Removal"],
  },
  {
    id: "v-fat-2",
    type: "video",
    src: fatRemovalVideo2,
    title: "Deep Tissue Lymphatic Stimulation",
    category: "videos",
    categoryLabel: "Live Video Procedure",
    description: "Stimulating vascular and lymphatic drainage following contouring therapy.",
    tags: ["Lymphatic Drainage", "Contouring"],
  },

  // ── Results / Before & After Photos ──
  {
    id: "r-melasma-after",
    type: "image",
    src: melasmaAfter,
    title: "Melasma Clearance — Clinical Outcome",
    category: "results",
    categoryLabel: "Before & After Results",
    description: "Significant hyperpigmentation reduction and skin tone normalization after targeted protocol.",
    tags: ["Melasma", "Hyperpigmentation", "Before & After"],
  },
  {
    id: "r-melasma-before",
    type: "image",
    src: melasmaBefore,
    title: "Melasma Baseline Presentation",
    category: "results",
    categoryLabel: "Clinical Case Study",
    description: "Pre-treatment bilateral facial hyperpigmentation presentation prior to combined protocol.",
    tags: ["Melasma", "Case Study"],
  },
  {
    id: "r-dandruff-after",
    type: "image",
    src: dandruffAfter,
    title: "Seborrheic Scalp Recovery",
    category: "results",
    categoryLabel: "Before & After Results",
    description: "Complete resolution of chronic erythema, flaking, and scalp barrier disruption.",
    tags: ["Scalp Health", "Dandruff Treatment", "Clinical Results"],
  },
  {
    id: "r-dandruff-before",
    type: "image",
    src: dandruffBefore,
    title: "Scalp Flaking Baseline",
    category: "results",
    categoryLabel: "Clinical Case Study",
    description: "Severe flaking and scalp microbiome imbalance before initiating clinical protocol.",
    tags: ["Scalp Health", "Baseline Case"],
  },
  {
    id: "r-bacteria-after",
    type: "image",
    src: bacteriaAfter,
    title: "Bacterial Dermatitis Resolution",
    category: "results",
    categoryLabel: "Before & After Results",
    description: "Clear skin recovery following targeted antibacterial dermatologic intervention.",
    tags: ["Medical Dermatology", "Bacterial Infection", "Recovery"],
  },
  {
    id: "r-bacteria-before",
    type: "image",
    src: bacteriaBefore,
    title: "Acute Bacterial Skin Infection Presentation",
    category: "results",
    categoryLabel: "Clinical Case Study",
    description: "Inflammatory superficial bacterial presentation prior to antibiotic therapy.",
    tags: ["Medical Dermatology", "Case Study"],
  },
  {
    id: "r-vitiligo-after",
    type: "image",
    src: vitiligoAfter,
    title: "Vitiligo Repigmentation Progress",
    category: "results",
    categoryLabel: "Before & After Results",
    description: "Documented follicular repigmentation islands across previously depigmented macules.",
    tags: ["Vitiligo", "Repigmentation", "Before & After"],
  },
  {
    id: "r-vitiligo-before",
    type: "image",
    src: vitiligoBefore,
    title: "Vitiligo Initial Presentation",
    category: "results",
    categoryLabel: "Clinical Case Study",
    description: "Initial clinical dermoscopy of well-demarcated depigmented patches.",
    tags: ["Vitiligo", "Baseline Presentation"],
  },
  {
    id: "r-acne-1",
    type: "image",
    src: acnePhoto1,
    title: "Acne Vulgaris Treatment Progress",
    category: "results",
    categoryLabel: "Clinical Results",
    description: "Substantial reduction in inflammatory papules, pustules, and erythema.",
    tags: ["Acne", "Medical Dermatology"],
  },
  {
    id: "r-acne-2",
    type: "image",
    src: acnePhoto2,
    title: "Post-Acne Texture Normalization",
    category: "results",
    categoryLabel: "Clinical Results",
    description: "Refined pore architecture and resolution of active inflammatory lesions.",
    tags: ["Acne", "Texture Refinement"],
  },

  // ── Clinical Procedures & Practice ──
  {
    id: "p-proc-1",
    type: "image",
    src: procPhoto1,
    title: "Dermatologic Examination & Treatment",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "Hands-on procedure in one of our private clinical suites at Hidmona Tower.",
    tags: ["Clinical Practice", "Specialist Care"],
  },
  {
    id: "p-proc-2",
    type: "image",
    src: procPhoto2,
    title: "Aesthetic Protocol Administration",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "Precise application of medical-grade dermatological formulation.",
    tags: ["Aesthetic Medicine", "Precision Treatment"],
  },
  {
    id: "p-proc-3",
    type: "image",
    src: procPhoto3,
    title: "Specialized Trichology & Scalp Session",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "High-precision delivery for hair density enhancement and follicular stimulation.",
    tags: ["Trichology", "Hair Therapy"],
  },
  {
    id: "p-proc-4",
    type: "image",
    src: procPhoto4,
    title: "Medical Consultation & Assessment",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "Thorough skin assessment and customized protocol planning.",
    tags: ["Consultation", "Diagnosis"],
  },
  {
    id: "p-proc-5",
    type: "image",
    src: procPhoto5,
    title: "Facial Rejuvenation & Resurfacing",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "Clinical skin resurfacing session for cellular renewal and hydration.",
    tags: ["Facial Rejuvenation", "Resurfacing"],
  },
  {
    id: "p-proc-6",
    type: "image",
    src: procPhoto6,
    title: "Body Contouring Session",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "Non-invasive body treatment administered by our certified medical team.",
    tags: ["Body Protocol", "Non-Surgical"],
  },
  {
    id: "p-proc-7",
    type: "image",
    src: procPhoto7,
    title: "Advanced Skincare Application",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "Targeted post-procedure barrier reinforcement and soothing protocol.",
    tags: ["Post-Procedure Care", "Skin Barrier"],
  },
  {
    id: "p-proc-8",
    type: "image",
    src: procPhoto8,
    title: "Laser Precision Setup",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "Calibrated dermatologic laser setup for precise wavelength targeting.",
    tags: ["Laser Technology", "Clinical Suite"],
  },
  {
    id: "p-proc-9",
    type: "image",
    src: procPhoto9,
    title: "Specialist In-Clinic Procedure",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "Specialist-directed procedural care upholding international hygiene standards.",
    tags: ["Specialist Care", "Clinical Safety"],
  },
  {
    id: "p-proc-10",
    type: "image",
    src: procPhoto10,
    title: "Follicular & Scalp Evaluation",
    category: "procedures",
    categoryLabel: "Clinical Practice",
    description: "Dermoscopic examination of hair shaft density and scalp vascularity.",
    tags: ["Trichoscopy", "Diagnosis"],
  },

  // ── Clinic Facility & Spaces ──
  {
    id: "c-interior",
    type: "image",
    src: clinicInterior,
    title: "Bosphorus Reception & Private Suites",
    category: "clinic",
    categoryLabel: "Facility & Clinic",
    description: "Our modern clinical reception and patient treatment suites at Hidmona Tower, Bole.",
    tags: ["Clinic Tour", "Addis Ababa", "Hidmona Tower"],
  },
  {
    id: "c-hero-clinic",
    type: "image",
    src: heroClinic,
    title: "Advanced Clinical Treatment Suite",
    category: "clinic",
    categoryLabel: "Facility & Clinic",
    description: "Equipped with state-of-the-art dermatological equipment, lighting, and sterilization.",
    tags: ["Treatment Suite", "Technology"],
  },
  {
    id: "c-hero-beauty",
    type: "image",
    src: heroBeauty,
    title: "The Bosphorus Aesthetic Standard",
    category: "clinic",
    categoryLabel: "Brand Identity",
    description: "Where medicine and aesthetic precision unite for natural, healthy skin.",
    tags: ["Editorial", "Brand Vision"],
  },

  // ── Brand Ambassador ──
  {
    id: "a-nebyou",
    type: "image",
    src: ambassadorImg,
    title: "Nebyou Indris — Official Brand Ambassador Signing",
    category: "ambassador",
    categoryLabel: "Brand Ambassador",
    description: "Official signing ceremony welcoming celebrated artist Nebyou Indris to Bosphorus Dermatology & Aesthetics Center.",
    tags: ["Nebyou Indris", "Ambassador", "Partnership"],
  },
];
