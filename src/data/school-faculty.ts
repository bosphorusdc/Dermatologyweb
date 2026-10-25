export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  specialty: string;
  photo: string;
}

export const SCHOOL_FACULTY: FacultyMember[] = [
  {
    id: "dr-michael-tadesse",
    name: "Dr. Michael Tadesse, MD",
    role: "Dean of Academics & Clinical Instructor",
    credentials: "Board-Certified Dermatologist",
    specialty: "Cutaneous Anatomy, Pathology & Clinical Safety",
    photo: "/school-faculty/dr-michael.jpg",
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova, CIDESCO",
    role: "Director of Clinical Practice & Laser Labs",
    credentials: "International CIDESCO Diplomate",
    specialty: "Laser & IPL Physics, Micro-Needling & Energy Devices",
    photo: "/school-faculty/elena-rostova.jpg",
  },
  {
    id: "hanna-kassa",
    name: "Hanna Kassa, BSc",
    role: "Senior Aesthetics & Chemical Peel Instructor",
    credentials: "Clinical Dermal Science Specialist",
    specialty: "Medical Peels, HydraFacial & Diagnostic AI Skin Analysis",
    photo: "/school-faculty/hanna-kassa.jpg",
  },
  {
    id: "tigist-haile",
    name: "Tigist Haile, RN",
    role: "Sterile Protocol & Practical Lab Coordinator",
    credentials: "Registered Clinical Nurse",
    specialty: "Aseptic Technique, PRP Centrifugation & Safety Compliance",
    photo: "/school-faculty/tigist-haile.jpg",
  },
];
