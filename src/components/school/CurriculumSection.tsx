import { useState } from "react";
import { REGISTERED_COURSES } from "@/data/school";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CurriculumSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Practical" | "Theory" | "Theoretical & Practical">("All");

  const filteredCourses = REGISTERED_COURSES.filter((c) => {
    if (activeFilter === "All") return true;
    return c.sessionType === activeFilter;
  });

  return (
    <section id="courses" className="py-24 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header with Controls */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-black tracking-[0.3em] text-accent uppercase">
                Curriculum Topics
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-light tracking-tight text-foreground mb-3">
              18 Course Topics
            </h2>

            <p className="text-muted-foreground font-light text-sm max-w-lg leading-relaxed">
              Scroll through the course modules. Theory and practical device training accredited under Bosphorus Medical Solution PLC.
            </p>
          </div>

          {/* Filters & Scroll Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {(["All", "Practical", "Theory", "Theoretical & Practical"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-all border ${
                    activeFilter === filter
                      ? "bg-accent text-white border-accent shadow-sm"
                      : "bg-background text-muted-foreground border-border hover:border-accent hover:text-foreground"
                  }`}
                >
                  {filter} {filter === "All" ? `(${REGISTERED_COURSES.length})` : ""}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Horizontal Scrollable Carousel */}
        <div className="max-w-7xl mx-auto relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            {/* Top-right Navigation Arrows */}
            <div className="flex justify-end gap-2 mb-4">
              <CarouselPrevious className="relative inset-auto translate-y-0 h-9 w-9 rounded-none border border-border bg-background hover:bg-muted text-foreground hover:text-accent shadow-none transition-all active:scale-[0.95]" />
              <CarouselNext className="relative inset-auto translate-y-0 h-9 w-9 rounded-none border border-border bg-background hover:bg-muted text-foreground hover:text-accent shadow-none transition-all active:scale-[0.95]" />
            </div>

            <CarouselContent className="-ml-6">
              {filteredCourses.map((course) => (
                <CarouselItem
                  key={course.id}
                  className="pl-6 basis-[280px] sm:basis-[320px] lg:basis-[360px]"
                >
                  <div className="border border-accent/20 bg-accent text-white overflow-hidden flex flex-col h-full justify-between hover:border-accent hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group shadow-md">
                    {/* Course Image Container - Pure white to display real PDF diagrams crisply */}
                    <div className="relative aspect-[16/11] bg-white overflow-hidden border-b border-white/15">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 font-mono text-[10px] font-bold px-2 py-0.5 bg-slate-900 text-white shadow-sm">
                        #{String(course.id).padStart(2, "0")}
                      </span>
                      <span
                        className={`absolute top-2.5 right-2.5 text-[9px] font-black tracking-wider uppercase px-2 py-0.5 shadow-sm border ${
                          course.sessionType === "Practical"
                            ? "bg-accent text-white border-accent"
                            : course.sessionType === "Theory"
                            ? "bg-slate-100 text-slate-800 border-slate-300"
                            : "bg-slate-900 text-white border-slate-900"
                        }`}
                      >
                        {course.sessionType}
                      </span>
                    </div>

                    {/* Course Info in Signature Teal */}
                    <div className="p-5 flex-1 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="font-heading text-lg font-medium tracking-tight text-white mb-2">
                          {course.title}
                        </h3>

                        <p className="text-white/80 text-xs font-light leading-relaxed line-clamp-3">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
}
