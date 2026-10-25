export interface Course {
  id: number;
  title: string;
  sessionType: "Practical" | "Theory" | "Theoretical & Practical";
  category: "Foundations" | "Diagnostics" | "Clinical Procedures" | "Laser & Advanced";
  description: string;
  studentTip: string;
  aftercare: string;
  image: string;
  durationHours?: number;
}

export const SCHOOL_NAME = "Bosphorus Cosmetology & Skin Care School";
export const SCHOOL_TAGLINE = "Accredited Aesthetic & Skincare Education";
export const SCHOOL_PARENT_COMPANY = "Bosphorus Medical Solution PLC";

export const SCHOOL_ADDRESS = {
  building: "Kelela Tower, 3rd Floor",
  area: "Bole Atlas, next to Desalegn Hotel",
  line1: "Kelela Tower, 3rd Floor",
  line2: "Bole Atlas, next to Desalegn Hotel",
  city: "Addis Ababa, Ethiopia",
  full: "Bole Atlas next to Desalegn Hotel, Kelela Tower 3rd floor, Addis Ababa",
  mapsUrl: "https://www.google.com/maps/place/Kelela+Building+Atlas/@8.997211,38.7792512,17z",
  embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.727413083197!2d38.779251200000004!3d8.997211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850022626f67%3A0xb88a874c43bf54a0!2zS2VsZWxhIEJ1aWxkaW5nIEF0bGFzIHwg4Yqo4YiI4YiLIOGIheGKleGNgyDhiqDhibXhiIvhiLU!5e0!3m2!1sen!2set!4v1792932738688!5m2!1sen!2set",
};

export const SCHOOL_PHONE = "+251 934 72 8888";
export const SCHOOL_PHONE_HREF = "tel:+251934728888";

export const SCHOOL_CLINIC_PHONE = "+251 934 76 8888";
export const SCHOOL_CLINIC_PHONE_HREF = "tel:+251934768888";

export const SCHOOL_SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/share/1HpeJx17XM/", handle: "Bosphorus Skin Care School" },
  { name: "Instagram", href: "https://www.instagram.com/bosphorus_skin_care_school?exln=MTMzNG1uYW9wa3NlZQ==", handle: "@bosphorus_skin_care_school" },
  { name: "TikTok", href: "https://www.tiktok.com/@bosphorus.center?_r=1&_t=ZS-9AqrBkAud4X", handle: "@bosphorus.center" },
];

export const SCHOOL_SESSION_TYPE = "Regular";

export const REGISTERED_COURSES: Course[] = [
  {
    id: 1,
    title: "Facial Aesthetics",
    sessionType: "Theoretical & Practical",
    category: "Foundations",
    description: "Mixes art and science to balance facial symmetry and enhance natural features safely.",
    studentTip: "Explain procedure to client, wear gloves, and never over-correct features.",
    aftercare: "Keep skin clean, avoid makeup for 24 hours, and apply sunscreen.",
    image: "/school/course-002.png",
    durationHours: 30,
  },
  {
    id: 2,
    title: "Skin Structure & Function",
    sessionType: "Theory",
    category: "Foundations",
    description: "Anatomy of the epidermis, dermis, and subcutaneous layers as the foundation of skincare.",
    studentTip: "The skin barrier is delicate. Avoid harsh products and match treatments to skin type.",
    aftercare: "Use mild cleansers, daily moisturizers, and protect with SPF.",
    image: "/school/course-003.png",
    durationHours: 25,
  },
  {
    id: 3,
    title: "Skin Typing",
    sessionType: "Theoretical & Practical",
    category: "Foundations",
    description: "Assessment of normal, dry, oily, combination, and sensitive skin types for customized care.",
    studentTip: "Carefully diagnose skin type before treatment to prevent barrier irritation.",
    aftercare: "Stick to recommended skincare plan; avoid switching products frequently.",
    image: "/school/course-004.png",
    durationHours: 20,
  },
  {
    id: 4,
    title: "Face & Skin Analyzer",
    sessionType: "Practical",
    category: "Diagnostics",
    description: "Digital 3D imaging, UV light, and AI diagnostics assessing pores, wrinkles, and hydration.",
    studentTip: "Disinfect all probes before and after each client. Skin must be clean and makeup-free.",
    aftercare: "Arrive with clean skin, avoid heavy creams prior to analysis.",
    image: "/school/course-005.png",
    durationHours: 20,
  },
  {
    id: 5,
    title: "Common Skin Conditions",
    sessionType: "Theory",
    category: "Foundations",
    description: "Recognizing acne, melasma, dark spots, eczema, rosacea, and skin infections.",
    studentTip: "Never treat active infections, severe acne, or eczema—refer clients to a dermatologist.",
    aftercare: "Inform practitioner immediately if you notice unusual redness or pain.",
    image: "/school/course-006.png",
    durationHours: 25,
  },
  {
    id: 6,
    title: "Hair & Nail Structure",
    sessionType: "Theory",
    category: "Foundations",
    description: "Keratin biology, hair growth cycles (growth, rest, shed), and nail plate health.",
    studentTip: "Handle hair and nails gently. Always sterilize scissors, clippers, and files.",
    aftercare: "Keep nails and scalp clean and moisturized. Do not bite nails or pull cuticles.",
    image: "/school/course-007.png",
    durationHours: 20,
  },
  {
    id: 7,
    title: "Skin Cosmetics",
    sessionType: "Theory",
    category: "Foundations",
    description: "Cleansers, moisturizers, active serums, and sunscreens matched to skin biology.",
    studentTip: "Always patch-test new products. Never use expired or contaminated cosmetics.",
    aftercare: "Do not share personal makeup. Replace cosmetics regularly.",
    image: "/school/course-009.png",
    durationHours: 20,
  },
  {
    id: 8,
    title: "Hair Cosmetics",
    sessionType: "Theory",
    category: "Foundations",
    description: "Therapeutic shampoos, conditioners, hair oils, and scalp health formulations.",
    studentTip: "Wear protective gloves when handling dyes or chemical relaxers.",
    aftercare: "Do not wash or heat-style hair for 24 hours after treatment.",
    image: "/school/course-010.png",
    durationHours: 20,
  },
  {
    id: 9,
    title: "Hair Analyzer",
    sessionType: "Practical",
    category: "Diagnostics",
    description: "Microscopic scalp evaluation checking hair thickness, strength, density, and follicle health.",
    studentTip: "Sanitize probes and avoid applying excessive pressure on the scalp.",
    aftercare: "Wash hair the day before analysis; avoid heavy oil products.",
    image: "/school/course-012.png",
    durationHours: 20,
  },
  {
    id: 10,
    title: "HydraFacial",
    sessionType: "Practical",
    category: "Clinical Procedures",
    description: "Vortex technology to deep-cleanse, gently exfoliate, extract impurities, and infuse hydration.",
    studentTip: "Adjust vacuum suction and serums to client skin sensitivity.",
    aftercare: "No makeup for 24 hours. Avoid sun and apply daily sunscreen.",
    image: "/school/course-013.png",
    durationHours: 25,
  },
  {
    id: 11,
    title: "Micro-Needling",
    sessionType: "Practical",
    category: "Clinical Procedures",
    description: "Motorized micro-punctures stimulating collagen repair to reduce scars, lines, and spots.",
    studentTip: "Use only single-use sterile needles. Never treat clients with blood disorders or keloids.",
    aftercare: "Avoid touching face, makeup, or sun for 48 hours. Apply soothing aloe vera.",
    image: "/school/course-015.png",
    durationHours: 30,
  },
  {
    id: 12,
    title: "Platelet-Rich Plasma (PRP)",
    sessionType: "Practical",
    category: "Clinical Procedures",
    description: "Autologous blood centrifugation separating healing platelets for skin glow and hair growth.",
    studentTip: "Strict medical hygiene and sterile protocol under clinical supervision.",
    aftercare: "Avoid alcohol, smoking, and exercise for 24 hours. Use doctor-approved cream.",
    image: "/school/course-017.png",
    durationHours: 35,
  },
  {
    id: 13,
    title: "Chemical Peel",
    sessionType: "Practical",
    category: "Clinical Procedures",
    description: "Safe acid solutions removing damaged outer skin layers to reveal smoother, lighter skin.",
    studentTip: "Protect eye and lip areas. Monitor frosting and neutralize immediately if needed.",
    aftercare: "Expect mild peeling—do not scratch. Avoid sun for 1 week and use SPF daily.",
    image: "/school/course-019.png",
    durationHours: 25,
  },
  {
    id: 14,
    title: "Radio Frequency (RF)",
    sessionType: "Practical",
    category: "Clinical Procedures",
    description: "Radio waves warming deep dermis layers to tighten skin, lift sagging, and reduce wrinkles.",
    studentTip: "Do not treat clients with pacemakers or metal implants. Monitor heat comfort.",
    aftercare: "Drink plenty of water. Avoid hot baths and direct sun for 24 hours.",
    image: "/school/course-020.png",
    durationHours: 25,
  },
  {
    id: 15,
    title: "DPN Removal",
    sessionType: "Practical",
    category: "Clinical Procedures",
    description: "Cosmetic removal of harmless dark facial papules using precision heat or plasma spark.",
    studentTip: "Use sterilized tools and avoid aggressive removal to prevent scarring.",
    aftercare: "Keep area clean and dry. Apply healing ointment; never pick scabs.",
    image: "/school/course-022.png",
    durationHours: 25,
  },
  {
    id: 16,
    title: "Laser Hair Removal",
    sessionType: "Practical",
    category: "Laser & Advanced",
    description: "Concentrated light energy absorbed by hair melanin to disable follicles and halt growth.",
    studentTip: "Always wear safety goggles and provide eye protection for client. Patch-test first.",
    aftercare: "Avoid sun for 2 weeks. Shaving only—no waxing. Avoid hot gyms for 24 hours.",
    image: "/school/course-023.png",
    durationHours: 35,
  },
  {
    id: 17,
    title: "Laser Tattoo Removal",
    sessionType: "Practical",
    category: "Laser & Advanced",
    description: "Q-switched laser shattering ink pigments into micro-particles for natural body clearance.",
    studentTip: "Ensure protective eyewear. Titrate laser settings based on skin type and ink depth.",
    aftercare: "Keep dry and clean. Avoid swimming and sun for 1 week. Let scabs heal naturally.",
    image: "/school/course-025.png",
    durationHours: 25,
  },
  {
    id: 18,
    title: "Carbon Laser Peel",
    sessionType: "Practical",
    category: "Laser & Advanced",
    description: "Hollywood peel using carbon lotion and Q-switched laser to cleanse pores, reduce oil, and tone skin.",
    studentTip: "Apply carbon evenly to clean, dry skin. Use small passes and ensure protective goggles.",
    aftercare: "Avoid sun for 24–48 hours, apply sunscreen, and avoid harsh scrubs for 5 days.",
    image: "/school/course-026.png",
    durationHours: 25,
  },
];

