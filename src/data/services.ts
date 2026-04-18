export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  images?: {
    before?: string;
    after?: string;
    gallery?: string[];
    videos?: string[];
  };
}

export const services: Service[] = [
  {
    slug: "acne",
    title: "Acne Treatment",
    description: "Targeted clinical treatments to reduce acne, prevent breakouts, and restore clear, healthy skin.",
    fullDescription: "Acne is one of the most common skin conditions, affecting people of all ages. Our clinical acne treatments are tailored to your skin type and severity, combining medical-grade procedures with expert guidance to reduce active breakouts, minimize scarring, and prevent future flare-ups. We address the root causes of acne for long-lasting results.",
    benefits: [
      "Reduces active breakouts",
      "Minimizes acne scarring",
      "Prevents future flare-ups",
      "Tailored to your skin type",
      "Medical-grade procedures",
      "Long-lasting results"
    ],
    images: {
      gallery: [
        new URL("../assets/Acne/photo_2026-03-25_21-35-51.jpg", import.meta.url).href,
        new URL("../assets/Acne/photo_2026-03-25_21-36-00.jpg", import.meta.url).href,
        new URL("../assets/Acne/photo_2026-03-25_21-36-22.jpg", import.meta.url).href,
      ],
      videos: [
        new URL("../assets/Acne/IMG_3029.MOV", import.meta.url).href,
        new URL("../assets/Acne/IMG_3030.MOV", import.meta.url).href,
        new URL("../assets/Acne/IMG_3031.MOV", import.meta.url).href,
      ],
    },
  },
  {
    slug: "dandruff-treatment",
    title: "Dandruff Treatment",
    description: "Professional scalp treatments to eliminate dandruff, reduce flaking, and restore a healthy scalp.",
    fullDescription: "Dandruff is a chronic scalp condition that causes flaking and itching. Our professional dandruff treatments go beyond over-the-counter solutions, targeting the underlying causes such as fungal overgrowth, seborrheic dermatitis, or dry scalp. We provide medically supervised protocols to restore scalp health and prevent recurrence.",
    benefits: [
      "Eliminates dandruff at the source",
      "Reduces scalp flaking and itching",
      "Treats seborrheic dermatitis",
      "Restores scalp microbiome balance",
      "Prevents recurrence",
      "Medically supervised protocol"
    ],
    images: {
      before: new URL("../assets/Dandruff treatment before and after/photo_2026-03-25_13-15-25.jpg", import.meta.url).href,
      after: new URL("../assets/Dandruff treatment before and after/photo_2026-03-25_13-15-34.jpg", import.meta.url).href,
    },
  },
  {
    slug: "fat-removal",
    title: "Fat Removal",
    description: "Non-surgical body contouring treatments to target stubborn fat deposits and reshape your silhouette.",
    fullDescription: "Our non-surgical fat removal treatments use advanced technology to break down and eliminate stubborn fat cells that resist diet and exercise. Using the G5 gyratory massage system and complementary body contouring techniques, we target specific areas to reduce fat deposits, improve circulation, and tone the skin — with no surgery and no downtime.",
    benefits: [
      "Non-surgical approach",
      "Targets stubborn fat deposits",
      "Reduces cellulite",
      "Improves circulation",
      "Skin toning and firming",
      "No downtime",
      "Slimming and body contouring"
    ],
    images: {
      videos: [
        new URL("../assets/Fat removal/IMG_4487.MOV", import.meta.url).href,
        new URL("../assets/Fat removal/IMG_4488.MOV", import.meta.url).href,
        new URL("../assets/Fat removal/IMG_4489.MOV", import.meta.url).href,
        new URL("../assets/Fat removal/IMG_4491.MOV", import.meta.url).href,
        new URL("../assets/Fat removal/IMG_4492.MOV", import.meta.url).href,
        new URL("../assets/Fat removal/IMG_4493.MOV", import.meta.url).href,
        new URL("../assets/Fat removal/IMG_4498.MOV", import.meta.url).href,
      ],
    },
  },
  {
    slug: "melasma",
    title: "Melasma Treatment",
    description: "Specialized treatments to reduce hyperpigmentation and even out skin tone caused by melasma.",
    fullDescription: "Melasma is a common skin condition that causes brown or grey-brown patches, typically on the face. It is often triggered by sun exposure, hormonal changes, or genetics. Our specialized melasma protocols combine clinical-grade treatments with targeted skincare to reduce hyperpigmentation, even out skin tone, and prevent recurrence with long-term management strategies.",
    benefits: [
      "Reduces brown and grey patches",
      "Evens out skin tone",
      "Targets hyperpigmentation",
      "Hormonal and sun-triggered melasma",
      "Prevents recurrence",
      "Personalized treatment protocol"
    ],
    images: {
      before: new URL("../assets/Melasma before & after/photo_2026-03-25_13-09-53.jpg", import.meta.url).href,
      after: new URL("../assets/Melasma before & after/photo_2026-03-25_13-10-10.jpg", import.meta.url).href,
    },
  },
  {
    slug: "microdermabrasion",
    title: "Microdermabrasion",
    description: "Gentle skin resurfacing using a minimally abrasive instrument for a refreshed appearance.",
    fullDescription: "Microdermabrasion uses a handheld minimally abrasive instrument to gently sand your skin, removing the thicker, uneven outer layer. This treatment can improve age spots and blackheads, improve hyperpigmentation, exfoliate your skin for a refreshed appearance, lessen the appearance of stretch marks, reduce fine lines and wrinkles, reduce or eliminate enlarged pores, and treat acne and acne scars.",
    benefits: [
      "Improve age spots and blackheads",
      "Improve hyperpigmentation",
      "Exfoliate for refreshed appearance",
      "Lessen stretch marks",
      "Reduce fine lines and wrinkles",
      "Reduce enlarged pores",
      "Treat acne and acne scars"
    ],
    images: {
      videos: [
        new URL("../assets/Microdermabrasion/IMG_5303.MOV", import.meta.url).href,
        new URL("../assets/Microdermabrasion/IMG_5304.MOV", import.meta.url).href,
        new URL("../assets/Microdermabrasion/IMG_5305.MOV", import.meta.url).href,
        new URL("../assets/Microdermabrasion/IMG_5306.MOV", import.meta.url).href,
        new URL("../assets/Microdermabrasion/IMG_5307.MOV", import.meta.url).href,
        new URL("../assets/Microdermabrasion/IMG_5308.MOV", import.meta.url).href,
        new URL("../assets/Microdermabrasion/IMG_5309.MOV", import.meta.url).href,
        new URL("../assets/Microdermabrasion/IMG_5310.MOV", import.meta.url).href,
        new URL("../assets/Microdermabrasion/IMG_5311.MOV", import.meta.url).href,
        new URL("../assets/Microdermabrasion/IMG_5312.MOV", import.meta.url).href,
      ],
    },
  },
  {
    slug: "microneedling",
    title: "Microneedling",
    description: "Cosmetic procedure using sterilized needles to generate new collagen and improve skin texture.",
    fullDescription: "Microneedling is a cosmetic procedure that uses small, sterilized needles to prick the skin. This treatment aims to generate new collagen and skin tissue to smooth, firm, and tone skin. Microneedling is mostly used on the face and may reduce the appearance of acne, scars, dark spots, wrinkles, and large pores, aids the absorption of topical skin care products & improves overall health of skin.",
    benefits: [
      "Generates new collagen",
      "Reduces acne scars",
      "Minimizes dark spots and wrinkles",
      "Shrinks large pores",
      "Enhances product absorption",
      "Improves overall skin health"
    ],
    images: {
      videos: [
        new URL("../assets/microneedling/IMG_4073.MOV", import.meta.url).href,
      ],
    },
  },
  {
    slug: "prp",
    title: "PRP Therapy",
    description: "Platelet-Rich Plasma injections to stimulate hair growth and rejuvenate skin naturally.",
    fullDescription: "Platelet-Rich Plasma (PRP) therapy uses your own blood's growth factors to stimulate natural healing and regeneration. PRP injections are effective for preventing and treating hair loss, promoting new hair growth on the head, eyebrows, and beard, and for facial rejuvenation. The procedure is safe, natural, and uses your body's own biology to deliver results.",
    benefits: [
      "Prevents and treats hair loss",
      "Promotes new hair growth",
      "Effective for head, eyebrows, and beard",
      "Aids post-transplant hair growth",
      "Uses your own blood",
      "Natural treatment approach"
    ],
    images: {
      videos: [
        new URL("../assets/prp/IMG_4516.MOV", import.meta.url).href,
        new URL("../assets/prp/IMG_4517.MOV", import.meta.url).href,
        new URL("../assets/prp/IMG_4518.MOV", import.meta.url).href,
        new URL("../assets/prp/IMG_4519.MOV", import.meta.url).href,
        new URL("../assets/prp/IMG_4520.MOV", import.meta.url).href,
        new URL("../assets/prp/IMG_4521.MOV", import.meta.url).href,
        new URL("../assets/prp/IMG_4522.MOV", import.meta.url).href,
      ],
    },
  },
  {
    slug: "skin-bacteria-infection",
    title: "Skin Bacteria Infection",
    description: "Clinical diagnosis and treatment of bacterial skin infections to restore healthy, clear skin.",
    fullDescription: "Bacterial skin infections can range from mild surface conditions to deeper tissue involvement. Our dermatologists provide accurate diagnosis and targeted treatment plans for a wide range of bacterial skin infections, including impetigo, folliculitis, cellulitis, and more. Early and precise treatment prevents complications and promotes rapid recovery.",
    benefits: [
      "Accurate clinical diagnosis",
      "Targeted antibiotic protocols",
      "Treats surface and deep infections",
      "Prevents complications",
      "Rapid recovery support",
      "Follow-up care included"
    ],
    images: {
      before: new URL("../assets/skinbacteria infection b and f/photo_2026-03-25_13-18-56.jpg", import.meta.url).href,
      after: new URL("../assets/skinbacteria infection b and f/photo_2026-03-25_13-19-08.jpg", import.meta.url).href,
    },
  },
  {
    slug: "tattoo-removal",
    title: "Tattoo Removal",
    description: "Advanced laser tattoo removal to safely and effectively fade or fully remove unwanted tattoos.",
    fullDescription: "Our tattoo removal treatments use advanced laser technology to break down tattoo ink particles beneath the skin, allowing the body to naturally eliminate them over time. The procedure is effective on a wide range of ink colors and skin types, with each session progressively fading the tattoo. A personalized treatment plan is created based on tattoo size, color, and skin type.",
    benefits: [
      "Effective on multiple ink colors",
      "Safe for various skin types",
      "Progressive fading with each session",
      "Personalized treatment plan",
      "Minimal scarring risk",
      "Full or partial removal options"
    ],
    images: {
      videos: [
        new URL("../assets/Tattoo removal/IMG_4374.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4376.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4377.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4378.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4379.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4380.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4383.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4384.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4385.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4386.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4388.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4389.MOV", import.meta.url).href,
        new URL("../assets/Tattoo removal/IMG_4390.MOV", import.meta.url).href,
      ],
    },
  },
  {
    slug: "vitiligo",
    title: "Vitiligo Treatment",
    description: "Specialized treatments to manage vitiligo and restore pigmentation to affected skin areas.",
    fullDescription: "Vitiligo is a long-term skin condition characterized by patches of skin losing their pigment. While there is no universal cure, our specialized vitiligo treatments aim to slow the progression, restore pigmentation where possible, and improve the overall appearance of affected areas. We offer a range of evidence-based therapies tailored to each patient's condition and goals.",
    benefits: [
      "Slows progression of pigment loss",
      "Restores pigmentation in affected areas",
      "Evidence-based treatment protocols",
      "Tailored to condition severity",
      "Improves skin appearance",
      "Ongoing management support"
    ],
    images: {
      before: new URL("../assets/Vitiligo/photo_2026-03-25_13-11-12.jpg", import.meta.url).href,
      after: new URL("../assets/Vitiligo/photo_2026-03-25_13-11-23.jpg", import.meta.url).href,
      gallery: [
        new URL("../assets/Vitiligo/photo_2026-03-25_13-11-28.jpg", import.meta.url).href,
      ],
      videos: [
        new URL("../assets/Vitiligo/IMG_6406.MOV", import.meta.url).href,
        new URL("../assets/Vitiligo/IMG_6408.MOV", import.meta.url).href,
        new URL("../assets/Vitiligo/IMG_6409.MOV", import.meta.url).href,
      ],
    },
  },
];

export const featuredServices = services.slice(0, 3);
