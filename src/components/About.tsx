import { COMPANY_STATS } from "../data";
import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import { MapPin, Building2, Gift, Award, Sparkles } from "lucide-react";

const getStatIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("tỉnh") || l.includes("thành")) return MapPin;
  if (l.includes("doanh nghiệp")) return Building2;
  if (l.includes("quà")) return Gift;
  if (l.includes("năm") || l.includes("kinh nghiệm")) return Award;
  return Sparkles;
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="reveal relative overflow-hidden bg-[#f7f1f1] py-20 sm:py-24"
    >
      <svg
        className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 opacity-[0.05] md:block"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 60 H340 L375 15 L410 105 L445 60 H1200"
          stroke="#1F3652"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14">
          <span className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase text-[#b6522c]">
            <span className="h-px w-6 bg-[#b6522c]/40" />
            Năng Lực Thực Tế
            <span className="h-px w-6 bg-[#b6522c]/40" />
          </span>

          <h2 className="text-charcoal-text mt-3 font-serif text-3xl font-bold sm:text-4xl">
            AS Group Qua Những Con Số
          </h2>

          <p className="text-charcoal-text/70 mx-auto mt-4 max-w-2xl text-sm leading-relaxed">
            Những con số tiêu biểu phản ánh năng lực triển khai, kinh nghiệm
            vận hành và mức độ tin tưởng của khách hàng doanh nghiệp trên
            toàn quốc.
          </p>
        </div>

        {/* ---------------- stat wall ----------------
            Same 2x2 / 4-col grid on every breakpoint, just restyled: gradient rule on top,
            gradient-ring icon badges, and thin gold-tinted divider lines instead of plain gray. */}
        <div className="reveal relative overflow-hidden rounded-[28px] border border-[#5c2258]/15 bg-white shadow-[0_30px_70px_rgba(92,34,88,0.08)]">
          <div
            className="h-1"
            style={{
              background:
                "linear-gradient(90deg, #1F3652 0%, #C66A3F 30%, #D4AF37 50%, #C66A3F 70%, #1F3652 100%)",
            }}
          />

          <div className="grid grid-cols-2 divide-x divide-y divide-[#5c2258]/10 lg:grid-cols-4 lg:divide-y-0">
            {COMPANY_STATS.map((item, index) => {
              const Icon = getStatIcon(item.label);

              return (
                <div
                  key={item.label}
                  style={{ transitionDelay: `${index * 120}ms` }}
                  className="group relative flex flex-col items-center px-4 py-8 text-center transition-colors duration-300 hover:bg-[#1F3652]/[0.03] sm:px-6 sm:py-10"
                >
                  {/* icon in a gradient-ring badge */}
                  <div
                    className="mb-3 flex h-12 w-12 items-center justify-center rounded-full p-[1.5px] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:mb-4 sm:h-14 sm:w-14"
                    style={{
                      background:
                        "linear-gradient(135deg, #1F3652, #C66A3F 55%, #D4AF37)",
                    }}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#35557A] transition-colors duration-300 group-hover:text-[#C66A3F]" strokeWidth={1.75} />
                    </div>
                  </div>

                  <div
                    className={`font-['Cormorant_Garamond'] font-bold leading-none tracking-tight text-[#8F3516] drop-shadow-[0_1px_2px_rgba(182,82,44,0.18)] ${
                      item.value.length >= 9
                        ? "text-3xl xl:text-4xl"
                        : "text-4xl xl:text-5xl"
                    }`}
                  >
                    <CountUp value={item.value} start={startCount} />
                  </div>

                  <div className="text-charcoal-text/70 mt-3 text-xs font-medium leading-snug sm:text-sm">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}