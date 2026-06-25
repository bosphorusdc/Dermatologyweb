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
  {
    slug: "acne-scars",
    title: "Acne Scar Treatment",
    description: "Subcision and laser treatments to reduce residual scarring from inflammatory acne.",
    fullDescription: "Beyond active acne management, we offer comprehensive care for residual scarring. Using subcision, laser resurfacing, and other evidence-based modalities, our dermatologists target atrophic and hypertrophic scars to improve skin texture, tone, and overall appearance for long-term confidence.",
    benefits: [
      "Treats atrophic and hypertrophic scars",
      "Subcision for deep scar release",
      "Laser resurfacing options",
      "Improves skin texture and tone",
      "Personalized scar protocol",
      "Builds on active acne care"
    ],
  },
  {
    slug: "bullous-impetigo",
    title: "Bullous Impetigo Treatment",
    description: "Targeted treatment for large, painless fluid-filled blisters caused by Staphylococcus aureus.",
    fullDescription: "Bullous impetigo is a bacterial skin infection characterized by the sudden appearance of large, painless, fluid-filled blisters (bullae). Our dermatologists provide accurate diagnosis and targeted antibiotic protocols to clear the infection, prevent spread, and support rapid healing with appropriate follow-up care.",
    benefits: [
      "Accurate clinical diagnosis",
      "Targeted antibiotic treatment",
      "Prevents infection spread",
      "Rapid blister resolution",
      "Pediatric and adult care",
      "Follow-up monitoring included"
    ],
  },
  {
    slug: "pigmented-pityriasis-alba-tinea-faciei",
    title: "Pigmented Pityriasis Alba & Tinea Faciei",
    description: "Management of facial hyperpigmentation and superficial fungal facial infections.",
    fullDescription: "We treat pigmented pityriasis alba—a condition marked by central bluish or brown hyperpigmentation primarily on the face—as well as tinea faciei, a superficial fungal facial infection. Our protocols combine antifungal therapy, topical treatments, and skin barrier support to restore an even, healthy complexion.",
    benefits: [
      "Treats facial hyperpigmentation",
      "Antifungal protocols for tinea faciei",
      "Restores even skin tone",
      "Addresses underlying causes",
      "Medical-grade topical care",
      "Long-term management support"
    ],
  },
  {
    slug: "molluscum-contagiosum",
    title: "Molluscum Contagiosum Treatment",
    description: "Clinical treatment for this common viral skin infection causing small pearly bumps.",
    fullDescription: "Molluscum contagiosum is a common, generally harmless viral skin infection caused by a poxvirus, producing small, pearly bumps with a central dimple. Our dermatologists offer safe, effective removal and management options tailored to age, location, and severity to clear lesions and reduce transmission.",
    benefits: [
      "Safe lesion removal options",
      "Reduces spread to others",
      "Pediatric and adult protocols",
      "Minimally invasive approaches",
      "Prevents recurrence",
      "Expert viral skin care"
    ],
  },
  {
    slug: "plantar-keratoderma",
    title: "Plantar Keratoderma Treatment",
    description: "Care for painful thickening of skin on the soles of the feet and palms.",
    fullDescription: "Plantar keratoderma encompasses skin disorders characterized by significant, often painful thickening of the skin on the soles of the feet and palms. We provide medical evaluation, keratolytic therapies, and long-term management plans to relieve discomfort, improve mobility, and maintain healthier skin.",
    benefits: [
      "Relieves painful thickening",
      "Medical-grade keratolytic care",
      "Improves foot and palm comfort",
      "Identifies underlying causes",
      "Long-term management plans",
      "Restores skin function"
    ],
  },
  {
    slug: "nairobi-fly-dermatitis",
    title: "Nairobi Fly Dermatitis",
    description: "Specialized care for contact dermatitis caused by Paederus insect secretions.",
    fullDescription: "Nairobi fly dermatitis is an unusual form of contact dermatitis caused by pederin secretions from Paederus insects. Our team provides prompt diagnosis, anti-inflammatory treatment, and wound care to reduce blistering, prevent secondary infection, and promote healing of affected skin.",
    benefits: [
      "Prompt accurate diagnosis",
      "Anti-inflammatory treatment",
      "Prevents secondary infection",
      "Reduces blistering and pain",
      "Expert wound care guidance",
      "Recovery monitoring"
    ],
  },
  {
    slug: "pemphigus-vulgaris",
    title: "Pemphigus Vulgaris Management",
    description: "Medical management of this chronic, severe autoimmune bullous skin disease.",
    fullDescription: "Pemphigus vulgaris is a chronic, severe autoimmune bullous skin disease that causes painful blisters and erosions on the skin and mucous membranes. Our dermatologists provide specialized immunosuppressive and supportive therapies, close monitoring, and coordinated care to control disease activity and improve quality of life.",
    benefits: [
      "Specialized autoimmune protocols",
      "Immunosuppressive therapy management",
      "Mucosal and skin lesion care",
      "Close disease monitoring",
      "Pain and wound management",
      "Long-term coordinated care"
    ],
  },
  {
    slug: "pustular-psoriasis",
    title: "Pustular Psoriasis Treatment",
    description: "Treatment for severe psoriasis variants with sterile pus-filled blisters.",
    fullDescription: "Pustular psoriasis is a severe psoriasis variant presenting sterile, pus-filled blisters (pustules) surrounded by inflamed skin. We offer evidence-based systemic and topical protocols tailored to disease severity, with ongoing monitoring to control flares, reduce inflammation, and protect long-term skin health.",
    benefits: [
      "Targets pustular psoriasis flares",
      "Systemic and topical protocols",
      "Reduces inflammation and pustules",
      "Severity-tailored treatment",
      "Ongoing flare monitoring",
      "Evidence-based dermatologic care"
    ],
  },
  {
    slug: "venous-ulcers",
    title: "Venous Ulcer Treatment",
    description: "Treatment for chronic leg ulcers caused by venous insufficiency and blood pooling.",
    fullDescription: "Venous ulcers are chronic leg ulcers caused by venous insufficiency, where improperly functioning valves cause blood pooling in the lower legs. Our wound care protocols address compression therapy, infection control, and underlying venous disease to promote healing, reduce recurrence, and restore leg health.",
    benefits: [
      "Compression therapy protocols",
      "Chronic wound management",
      "Infection prevention and treatment",
      "Addresses venous insufficiency",
      "Promotes ulcer healing",
      "Reduces recurrence risk"
    ],
  },
  {
    slug: "acanthosis-nigricans",
    title: "Acanthosis Nigricans Care",
    description: "Care for dark, thick, velvety patches in body folds and creases.",
    fullDescription: "Acanthosis nigricans causes dark, thick, velvety patches in body folds and creases such as the armpits, groin, and neck. Our dermatologists investigate underlying causes—including metabolic and hormonal factors—and provide targeted topical and systemic treatments to improve skin appearance and address root contributors.",
    benefits: [
      "Investigates underlying causes",
      "Improves velvety hyperpigmentation",
      "Targets body fold involvement",
      "Metabolic factor assessment",
      "Topical and systemic options",
      "Personalized care plan"
    ],
  },
  {
    slug: "alopecia",
    title: "Alopecia Treatment",
    description: "Expert diagnosis of hair loss types with targeted restoration therapies.",
    fullDescription: "Hair loss has many causes, including alopecia areata and androgenetic alopecia. Our dermatologists provide expert diagnosis through clinical examination and, when needed, additional testing, then deliver targeted medical and procedural therapies to slow loss, stimulate regrowth, and support long-term scalp health.",
    benefits: [
      "Expert hair loss diagnosis",
      "Alopecia areata protocols",
      "Androgenetic alopecia care",
      "Medical restoration therapies",
      "Scalp health optimization",
      "Long-term management support"
    ],
  },
  {
    slug: "onychomycosis",
    title: "Onychomycosis Treatment",
    description: "Specialized clinical treatment for fungal infections of the nails.",
    fullDescription: "Onychomycosis is a fungal infection of the nails that causes thickening, discoloration, and brittleness. We offer specialized clinical diagnosis and antifungal treatment plans—including topical and systemic options—to clear infection, improve nail appearance, and prevent recurrence.",
    benefits: [
      "Accurate fungal nail diagnosis",
      "Topical antifungal protocols",
      "Systemic treatment when indicated",
      "Improves nail appearance",
      "Prevents recurrence",
      "Medically supervised care"
    ],
  },
  {
    slug: "seborrheic-dermatitis",
    title: "Seborrheic Dermatitis",
    description: "Managing chronic flaking that mainly affects oily areas of the body.",
    fullDescription: "Seborrheic dermatitis is a very common, chronic flaking condition that mainly affects oily areas of the body, including the scalp (dandruff), face, and chest. Our protocols combine antifungal, anti-inflammatory, and barrier-repair therapies to control flares, reduce scaling, and maintain long-term comfort.",
    benefits: [
      "Controls chronic flaking",
      "Treats scalp, face, and body",
      "Antifungal and anti-inflammatory care",
      "Reduces scaling and redness",
      "Flare prevention strategies",
      "Long-term maintenance plans"
    ],
  },
  {
    slug: "nevus-comedonicus",
    title: "Nevus Comedonicus Management",
    description: "Management of non-cancerous clusters of open, dark, keratin-filled pores.",
    fullDescription: "Nevus comedonicus is a non-cancerous skin condition marked by clusters of open, dark, keratin-filled pores. Our dermatologists provide careful evaluation and individualized treatment—including topical therapies and procedural options—to improve appearance and monitor for any changes over time.",
    benefits: [
      "Thorough clinical evaluation",
      "Non-cancerous condition management",
      "Topical treatment options",
      "Procedural care when needed",
      "Appearance improvement",
      "Ongoing lesion monitoring"
    ],
  },
  {
    slug: "psoriasis-eczema",
    title: "Psoriasis & Eczema Care",
    description: "Managing chronic inflammation to restore the skin barrier and reduce discomfort.",
    fullDescription: "Psoriasis and eczema (atopic dermatitis) are chronic inflammatory skin conditions that disrupt the skin barrier and cause significant discomfort. We provide specialized protocols—including topical, phototherapy, and systemic options—to control inflammation, restore barrier function, and improve daily quality of life.",
    benefits: [
      "Chronic inflammation management",
      "Skin barrier restoration",
      "Psoriasis-specific protocols",
      "Eczema (atopic dermatitis) care",
      "Topical and systemic options",
      "Reduces patient discomfort"
    ],
  },
  {
    slug: "rosacea",
    title: "Rosacea Treatment",
    description: "Targeted clinical treatment of persistent facial redness and visible blood vessels.",
    fullDescription: "Rosacea is a chronic condition characterized by persistent facial redness, visible blood vessels, and periodic flares. Our targeted clinical treatments address inflammation, vascular changes, and trigger factors through medical-grade topicals, laser options, and personalized lifestyle guidance for lasting improvement.",
    benefits: [
      "Reduces facial redness",
      "Treats visible blood vessels",
      "Controls inflammatory flares",
      "Medical-grade topical protocols",
      "Laser treatment options",
      "Trigger management guidance"
    ],
  },
  {
    slug: "lichen-planus",
    title: "Lichen Planus Care",
    description: "Specialized care for this chronic autoimmune mucosal and skin disorder.",
    fullDescription: "Lichen planus is a chronic autoimmune condition affecting the skin and mucous membranes, causing itchy, flat-topped papules and erosions. Our dermatologists deliver specialized anti-inflammatory and immunomodulatory therapies with close follow-up to control symptoms, heal lesions, and monitor mucosal involvement.",
    benefits: [
      "Skin and mucosal expertise",
      "Anti-inflammatory protocols",
      "Immunomodulatory therapies",
      "Itch and lesion control",
      "Mucosal involvement monitoring",
      "Long-term follow-up care"
    ],
  },
  {
    slug: "skin-biopsy",
    title: "Skin Biopsy",
    description: "Precise tissue sampling for accurate evaluation of rashes and potential malignancies.",
    fullDescription: "Skin biopsy is a crucial diagnostic step where a small tissue sample is taken for laboratory analysis (histopathology). Our dermatologists perform precise biopsies to ensure accurate evaluation of rashes, suspicious lesions, and potential malignancies, guiding the most appropriate treatment plan.",
    benefits: [
      "Accurate histopathology diagnosis",
      "Evaluates rashes and lesions",
      "Detects potential malignancies",
      "Precise sampling technique",
      "Guides treatment decisions",
      "Performed by dermatology experts"
    ],
  },
  {
    slug: "nail-surgery",
    title: "Nail Surgery & Nail Disorders",
    description: "Treatment for ingrown nails, fungal infections, and nail bed deformities.",
    fullDescription: "Our nail surgery and disorder services address ingrown nails, persistent fungal infections, and surgical correction of nail bed deformities. Procedures are performed with a focus on pain relief, functional recovery, and aesthetic outcomes under expert dermatologic supervision.",
    benefits: [
      "Ingrown nail correction",
      "Fungal nail management",
      "Nail bed deformity surgery",
      "Pain relief and functional recovery",
      "Local anesthesia procedures",
      "Expert dermatologic supervision"
    ],
  },
  {
    slug: "skin-cancer-screening",
    title: "Skin Cancer Screening",
    description: "Thorough clinical examinations using dermoscopy to identify suspicious lesions early.",
    fullDescription: "Early detection saves lives. Our skin cancer screening includes thorough full-body clinical examinations using dermoscopy for high-magnification assessment of moles and lesions. Suspicious findings are documented and managed promptly with biopsy or referral as clinically indicated.",
    benefits: [
      "Full-body clinical examination",
      "High-magnification dermoscopy",
      "Early lesion detection",
      "Mole and growth assessment",
      "Prompt biopsy when indicated",
      "Preventive dermatologic care"
    ],
  },
  {
    slug: "cyst-lesion-removal",
    title: "Cyst & Lesion Removal",
    description: "Minor surgical excision of skin growths, cysts, or moles under local anesthesia.",
    fullDescription: "We perform minor surgical excision of skin growths, cysts, and moles under local anesthesia with a focus on complete removal and aesthetic suturing. Each procedure is planned to minimize scarring while ensuring thorough evaluation of removed tissue when pathology is required.",
    benefits: [
      "Local anesthesia procedures",
      "Cyst and mole excision",
      "Aesthetic suturing focus",
      "Complete lesion removal",
      "Pathology when indicated",
      "Minimal scarring approach"
    ],
  },
  {
    slug: "keloid-management",
    title: "Keloid Management",
    description: "Specialized excision and therapeutic injections to treat and prevent keloid recurrence.",
    fullDescription: "Keloids are thick, raised scars that extend beyond the original wound. Our keloid management combines specialized surgical excision with therapeutic injections and adjunct therapies to flatten scars, relieve symptoms, and reduce the risk of recurrence for improved cosmetic and functional outcomes.",
    benefits: [
      "Specialized keloid excision",
      "Therapeutic injection protocols",
      "Reduces scar thickness",
      "Prevents recurrence",
      "Improves cosmetic appearance",
      "Symptom relief"
    ],
  },
  {
    slug: "hydrafacial",
    title: "HydraFacial",
    description: "Multi-step facial treatment to cleanse, exfoliate, and hydrate without abrasion.",
    fullDescription: "HydraFacial is a multi-step facial treatment performed using a patented device to cleanse, exfoliate, and hydrate the skin simultaneously without being abrasive. It delivers immediate glow, refined pores, and improved hydration with no downtime, making it ideal for regular skin maintenance.",
    benefits: [
      "Deep cleanse and exfoliation",
      "Simultaneous hydration",
      "Non-abrasive technology",
      "Refined pores and even tone",
      "Immediate visible glow",
      "No downtime required"
    ],
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    description: "Controlled exfoliation using medical-grade solutions to improve texture and tone.",
    fullDescription: "Chemical peels use medical-grade solutions for controlled exfoliation of the skin's outer layers. We tailor peel depth and formulation to your concerns—whether pigmentation, acne, fine lines, or dullness—to improve texture, tone, and overall radiance with professionally supervised recovery.",
    benefits: [
      "Medical-grade peel solutions",
      "Improves skin texture and tone",
      "Targets pigmentation and acne",
      "Reduces fine lines",
      "Customized peel depth",
      "Professionally supervised care"
    ],
  },
  {
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    description: "Injectable treatments to restore volume, smooth lines, and enhance facial contours.",
    fullDescription: "Dermal fillers are injectable treatments used to restore volume, smooth deep lines, and enhance facial contours such as the lips or cheeks. Our aesthetic specialists use precise placement techniques to achieve natural-looking results that complement your facial anatomy and aesthetic goals.",
    benefits: [
      "Restores facial volume",
      "Smooths deep lines",
      "Lip and cheek enhancement",
      "Natural-looking results",
      "Precise injection technique",
      "Personalized aesthetic plan"
    ],
  },
  {
    slug: "dermaplaning",
    title: "Dermaplaning",
    description: "Gentle removal of dead skin cells and vellus hair for a smoother complexion.",
    fullDescription: "Dermaplaning is a process where a trained professional uses a sterile surgical scalpel held at a 45-degree angle to gently scrape off dead skin cells and vellus hair. The result is instantly smoother skin, improved product absorption, and a brighter complexion with minimal downtime.",
    benefits: [
      "Removes dead skin cells",
      "Eliminates vellus facial hair",
      "Instantly smoother skin",
      "Improves product absorption",
      "Brighter complexion",
      "Minimal downtime"
    ],
  },
  {
    slug: "botox",
    title: "Botulinum Toxin (Botox)",
    description: "Injections that temporarily relax facial muscles to reduce dynamic wrinkles.",
    fullDescription: "Botulinum toxin injections (Botox) temporarily relax targeted facial muscles to reduce the appearance of dynamic wrinkles on the forehead, between the brows, and around the eyes. Treatments are quick, precise, and deliver natural-looking softening of expression lines with results that develop over several days.",
    benefits: [
      "Reduces dynamic wrinkles",
      "Forehead and crow's feet treatment",
      "Quick, precise injections",
      "Natural-looking results",
      "Temporary muscle relaxation",
      "Preventive anti-aging option"
    ],
  },
  {
    slug: "prf-therapy",
    title: "PRF Therapy",
    description: "Second-generation platelet therapy using a slow-release fibrin scaffold for regeneration.",
    fullDescription: "Platelet-Rich Fibrin (PRF) is a second-generation autologous therapy processed at lower speeds to keep white cells and stem cells intact on a slow-release fibrin scaffold. PRF supports collagen stimulation, tissue regeneration, and hair growth with sustained release of growth factors from your own blood.",
    benefits: [
      "Slow-release growth factors",
      "Preserves white cells and stem cells",
      "Stimulates collagen production",
      "Supports tissue regeneration",
      "Hair growth applications",
      "Uses your own biology"
    ],
  },
  {
    slug: "mesotherapy",
    title: "Mesotherapy",
    description: "Ultra-fine injections of vitamins and hyaluronic acid to hydrate and tighten skin.",
    fullDescription: "Mesotherapy delivers ultra-fine injections into the middle layer (mesoderm) containing vitamins, minerals, amino acids, and hyaluronic acid. This targeted approach hydrates, nourishes, and tightens skin from within, improving elasticity, radiance, and overall skin quality over a course of treatments.",
    benefits: [
      "Deep skin hydration",
      "Vitamin and mineral infusion",
      "Improves skin elasticity",
      "Enhances radiance",
      "Targets mesoderm layer",
      "Customized nutrient cocktails"
    ],
  },
  {
    slug: "cryolipolysis",
    title: "Cryolipolysis (Fat Freezing)",
    description: "Non-invasive body contouring that eliminates stubborn fat using cold temperatures.",
    fullDescription: "Cryolipolysis is a non-invasive body contouring treatment that safely targets and eliminates stubborn fat cells using controlled cold temperatures. Fat freezing selectively destroys adipocytes while sparing surrounding tissue, allowing the body to naturally clear treated fat for a slimmer, more contoured silhouette.",
    benefits: [
      "Non-invasive fat reduction",
      "Targets stubborn fat deposits",
      "No surgery required",
      "Controlled cooling technology",
      "Natural fat clearance",
      "Body contouring results"
    ],
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    description: "Target-focused light energy for long-term reduction of unwanted hair growth.",
    fullDescription: "Laser hair removal utilizes target-focused light energy absorbed by melanin in the hair follicle to safely inhibit future growth. Our protocols are tailored to skin type and treatment area for effective, long-term hair reduction on the face and body with progressively smoother results across sessions.",
    benefits: [
      "Long-term hair reduction",
      "Safe for face and body",
      "Melanin-targeted light energy",
      "Tailored to skin type",
      "Progressive results per session",
      "Reduces ingrown hairs"
    ],
  },
  {
    slug: "hair-restoration",
    title: "Hair Restoration (FUE/FUT)",
    description: "Advanced surgical hair loss treatment using FUE or FUT for a natural hairline.",
    fullDescription: "Hair restoration offers advanced surgical options for hair loss using Follicular Unit Extraction (FUE) or Follicular Unit Transplantation (FUT) to build a natural hairline. Our surgeons plan graft placement for density, direction, and aesthetic harmony, with comprehensive pre- and post-operative care.",
    benefits: [
      "FUE and FUT surgical options",
      "Natural hairline design",
      "Permanent graft results",
      "Density and direction planning",
      "Pre- and post-operative care",
      "Treats pattern hair loss"
    ],
  },
  {
    slug: "eyebrow-beard-transplants",
    title: "Eyebrow & Beard Transplants",
    description: "Precision relocation of donor follicles to enhance thinning facial hair lines.",
    fullDescription: "Eyebrow and beard transplants involve the precision relocation of donor follicles to enhance, reshape, or correct thinning facial and eyebrow hair lines. Each graft is placed at the correct angle and density for natural-looking results that frame the face and restore confidence.",
    benefits: [
      "Eyebrow reshaping and restoration",
      "Beard density enhancement",
      "Precision follicle placement",
      "Natural angle and density",
      "Corrects patchy facial hair",
      "Permanent aesthetic results"
    ],
  },
];

export const featuredServices = services.slice(0, 3);
