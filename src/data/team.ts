export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  photo: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-selamawit-bekele",
    name: "Dr. Selamawit Bekele, MD",
    role: "Lead Dermatologist & Medical Director",
    specialty: "Clinical Dermatology & Dermato-Oncology",
    photo: "/placeholder.svg",
  },
  {
    id: "dr-marcus-vance",
    name: "Dr. Marcus Vance, MD",
    role: "Aesthetic & Laser Specialist",
    specialty: "Advanced Laser Therapies & Rejuvenation",
    photo: "/placeholder.svg",
  },
  {
    id: "dr-leyla-demir",
    name: "Dr. Leyla Demir, MD",
    role: "Trichology & Hair Restoration",
    specialty: "PRP / PRF & Scalp Therapeutics",
    photo: "/placeholder.svg",
  },
  {
    id: "sarah-alemayehu",
    name: "Sarah Alemayehu, BSc",
    role: "Senior Clinical Aesthetician",
    specialty: "AI Skin Diagnostics & Medical Peels",
    photo: "/placeholder.svg",
  },
];
