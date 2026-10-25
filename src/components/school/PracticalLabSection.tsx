import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const practicalDevices = [
  {
    title: "Clinical Laser Platforms",
    subtitle: "Diode & Nd:YAG",
    description: "Laser hair removal, wavelength selection, fluence titration, and cooling safety for diverse skin types.",
    image: "/school/course-023.png",
  },
  {
    title: "PRP Centrifugation Lab",
    subtitle: "Autologous Platelets",
    description: "Centrifuge calibration, sterile buffy coat extraction, and micro-infusions for skin and scalp regeneration.",
    image: "/school/course-017.png",
  },
  {
    title: "HydraFacial 14-in-1",
    subtitle: "Vortex Cleansing",
    description: "Vacuum suction regulation, deep pore extraction, and customized antioxidant serum infusion.",
    image: "/school/course-013.png",
  },
  {
    title: "Radio Frequency (RF)",
    subtitle: "Tissue Tightening",
    description: "Multipolar RF thermal heating, temperature monitoring, and non-ablative dermal contouring.",
    image: "/school/course-020.png",
  },
  {
    title: "3D Face Scanner",
    subtitle: "Multispectral AI",
    description: "Diagnostic examination of pores, UV sun damage, sebum levels, wrinkles, and skin hydration.",
    image: "/school/course-005.png",
  },
  {
    title: "Digital Hair Analyzer",
    subtitle: "Trichoscopy System",
    description: "High-magnification scalp imaging evaluating follicle strength, hair density, and scalp health.",
    image: "/school/course-012.png",
  },
  {
    title: "Micro-Needling Device",
    subtitle: "Dr. Pen CIT",
    description: "Automated motorized micro-punctures, sterile depth control (0.25mm - 2.5mm), and active serum pairing.",
    image: "/school/course-015.png",
  },
  {
    title: "Q-Switched Laser",
    subtitle: "Tattoo & Carbon Peel",
    description: "Short-pulse laser shattering ink pigments and performing deep-pore Hollywood carbon laser peels.",
    image: "/school/course-025.png",
  },
];

export function PracticalLabSection() {
  return (
    <section className="py-24 bg-muted/30 border-b border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          {/* Section Header with Carousel Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-accent" />
                <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
                  Clinical Lab
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-light tracking-tight text-foreground mb-3">
                Medical Equipment Lab
              </h2>

              <p className="text-muted-foreground font-light text-sm max-w-lg leading-relaxed">
                Scroll through the medical-grade aesthetic devices students practice with during practical sessions.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <CarouselPrevious className="relative inset-auto translate-y-0 h-9 w-9 rounded-none border border-border bg-background hover:bg-muted text-foreground hover:text-accent shadow-none transition-all active:scale-[0.95]" />
              <CarouselNext className="relative inset-auto translate-y-0 h-9 w-9 rounded-none border border-border bg-background hover:bg-muted text-foreground hover:text-accent shadow-none transition-all active:scale-[0.95]" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {practicalDevices.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-[280px] sm:basis-[320px] lg:basis-[340px]"
              >
                <div className="border border-accent/20 bg-accent text-white overflow-hidden flex flex-col h-full justify-between hover:border-accent hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group shadow-md">
                  {/* Device Image Container - Crisp clean white to showcase hardware cleanly */}
                  <div className="aspect-[16/11] bg-white overflow-hidden border-b border-white/15 p-3 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Device Details in Signature Brand Accent */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[9px] font-black tracking-widest uppercase text-white/70 mb-1.5">
                        {item.subtitle}
                      </p>

                      <h3 className="font-heading text-lg font-medium text-white tracking-tight mb-2">
                        {item.title}
                      </h3>

                      <p className="text-white/80 text-xs font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
