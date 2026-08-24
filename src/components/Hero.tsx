import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import hero1 from "../assets/hero01.jpg";
import hero2 from "../assets/hero02.avif";
import hero3 from "../assets/hero03.jpg";
import hero4 from "../assets/hero04.jpg";

import zaloQR from "../assets/zalo-qr.png";

const heroImages = [hero1, hero2, hero3, hero4];

const features = [
  "Thiết kế theo thương hiệu",
  "Sản xuất theo yêu cầu",
  "Kiểm soát chất lượng",
  "Giao hàng đúng hẹn",
];

const slotStyles = [
  { transform: "translate(0%, 0%) rotate(0deg) scale(1)", zIndex: 30, opacity: 1 },
  { transform: "translate(18%, -14%) rotate(7deg) scale(0.88)", zIndex: 20, opacity: 0.95 },
  { transform: "translate(-14%, 10%) rotate(-8deg) scale(0.8)", zIndex: 10, opacity: 0.85 },
  { transform: "translate(-14%, 22%) rotate(-8deg) scale(0.68)", zIndex: 0, opacity: 0 },
];

const swipeSlotStyles = [
  { transform: "translate(0%, 0%) rotate(0deg) scale(1)", zIndex: 40, opacity: 1 },
  { transform: "translate(0%, 3.5%) rotate(-2deg) scale(0.965)", zIndex: 30, opacity: 1 },
  { transform: "translate(0%, 7%) rotate(2deg) scale(0.93)", zIndex: 20, opacity: 0.9 },
  { transform: "translate(-55%, -5%) rotate(-12deg) scale(0.95)", zIndex: 50, opacity: 0 },
];
interface HeroProps {
  onDiscoverClick: () => void;
  onConsultClick: () => void;
}

export default function Hero({ onDiscoverClick, onConsultClick }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [order, setOrder] = useState<number[]>(heroImages.map((_, i) => i));

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
      setOrder((prev) => prev.map((slot) => (slot + 3) % 4)); // front -> hidden, others move up
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="gold-pattern relative isolate w-full max-w-[100vw] overflow-x-hidden overflow-y-visible bg-gradient-to-b from-[#f2e4de] via-[#f2e4de] to-white pt-24 pb-20 md:pt-28 md:pb-28">
      <style>{`
        @keyframes hero-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero-marquee-track {
          animation: hero-marquee-scroll 22s linear infinite;
        }
        .hero-marquee-mask {
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        @keyframes hero-floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hero-floaty {
          animation: hero-floaty 6s ease-in-out infinite;
        }
        .hero-stack-card {
          transition: transform 1.1s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.9s ease-in-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-marquee-track, .hero-floaty { animation: none; }
          .hero-stack-card { transition: opacity 0.3s ease-in-out; transform: none; }
        }
      `}</style>

      <div className="pointer-events-none absolute left-[-10%] top-1/2 h-[35rem] w-[35rem] -translate-y-1/2 rounded-full bg-[#5c2258]/5 blur-[170px]" />
      <div className="pointer-events-none absolute right-[-5%] top-0 h-[30rem] w-[30rem] rounded-full bg-[#c66a3f]/8 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* ---------------- LEFT: copy ---------------- */}
          <div className="min-w-0 lg:col-span-7 relative z-20">
            <div className="mb-6 flex w-full items-center justify-between rounded-2xl border border-[#5c2258]/12 bg-white/60 px-4 py-2.5 shadow-[0_4px_16px_rgba(92,34,88,0.05)] lg:hidden">
              <div className="flex flex-1 flex-col">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#5c2258]/60">
                  Hotline tư vấn
                </span>
                <a
                  href="tel:0903731769"
                  className="mt-0.5 text-[1.1rem] font-bold leading-none text-[#2d1f3d] hover:text-[#c45b2f] transition-colors"
                >
                  0903 731 769
                </a>
              </div>
              <a
                href="https://zalo.me/2446504417439174890"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 shrink-0"
              >
                <img
                  src={zaloQR}
                  alt="QR Zalo"
                  className="h-11 w-11 rounded-lg border border-[#5c2258]/10 bg-white p-0.5"
                />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="h-px w-8 bg-gradient-to-r from-[#5c2258] to-[#c66a3f]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b6522c]">
                AS Group
              </span>
              <span className="text-[11px] text-[#b6522c]">•</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8d8d8d]">
                Quà tặng doanh nghiệp
              </span>
            </div>

            <h1 className="mt-4 relative">
              <span className="block whitespace-nowrap font-['Lora'] font-bold text-[#2d1f3d] leading-[0.95] tracking-[-0.015em] text-[1.85rem] xs:text-[2.15rem] sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5.2rem] lg:whitespace-normal">
                Giải Pháp
                <span className="hidden lg:inline">
                  <br />
                </span>
                <span className="lg:hidden"> </span>
                Quà Tặng
              </span>

              <span className="mt-2 block font-['Lora'] italic font-semibold leading-[1.2] tracking-[-0.01em] text-[2rem] pt-1 xs:text-[2.3rem] sm:text-[2.9rem] md:text-[3.5rem] lg:text-[4.2rem] bg-gradient-to-r from-[#b6522c] via-[#c66a3f] to-[#8a3f1e] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(138,63,30,0.15)] lg:-mr-16 lg:pr-4">
                Trao Dấu Ấn
                <br />
                Vững Thương Hiệu
              </span>
            </h1>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#5c4a58]">
              Mỗi món quà là một con dấu thương hiệu — được thiết kế, sản xuất
              và kiểm soát chất lượng riêng cho từng doanh nghiệp.
            </p>

            <div className="mt-8">
              <button
                onClick={onConsultClick}
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full border border-[#cf8450] bg-gradient-to-r from-[#b6522c] via-[#c77443] to-[#b6522c] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(182,82,44,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(182,82,44,0.22)]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-black/5" />
                <span className="absolute -left-1/3 top-0 h-full w-1/4 -skew-x-12 bg-white/12 blur-md transition-all duration-700 group-hover:left-[120%]" />
                <span className="relative z-10">Nhận Báo Giá Ngay</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* ---------------- marquee strip ---------------- */}
            <div className="hero-marquee-mask mt-8 w-full min-w-0 overflow-hidden border-y border-[#5c2258]/12 py-3">
              <div className="hero-marquee-track flex w-max items-center gap-10 whitespace-nowrap">
                {[...features, ...features].map((f, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#5c2258]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b6522c]" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT: image ---------------- */}
          <div className="min-w-0 lg:col-span-5 relative mt-2 lg:mt-0">
            {/* ===== MOBILE (< lg): full-size card, subtle peek stack + gentle slide-off ===== */}
            <div className="lg:hidden pb-8">
              <div className="hero-floaty relative">
                <div className="relative aspect-[4/3] w-full">
                  {heroImages.map((image, i) => {
                    const slot = order[i];
                    const style = swipeSlotStyles[slot];

                    return (
                      <div
                        key={image}
                        className="hero-stack-card absolute inset-0 overflow-hidden rounded-2xl border border-[#c66a3f]/40 bg-white p-1.5 shadow-[0_18px_40px_-15px_rgba(92,34,88,0.3)]"
                        style={style}
                      >
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                          <div className="pointer-events-none absolute inset-0 z-20 rounded-xl bg-gradient-to-t from-[#5c2258]/25 via-transparent to-white/15" />
                          <img
                            src={image}
                            alt={`Hero ${i + 1}`}
                            className="h-full w-full rounded-xl object-cover"
                          />
                          {/* dot indicators removed */}
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
          </div>


            <div className="hidden lg:block lg:-mt-21 lg:origin-top-right lg:scale-[1.14]">
              <div className="hero-floaty relative">
                <div className="relative aspect-[4/3] w-full">
                  {heroImages.map((image, i) => {
                    const slot = order[i];
                    const style = slotStyles[slot];

                    return (
                      <div
                        key={image}
                        className="hero-stack-card absolute inset-0 overflow-hidden rounded-2xl border border-[#c66a3f]/40 bg-white p-2 shadow-[0_24px_50px_-15px_rgba(92,34,88,0.28)]"
                        style={style}
                      >
                        <div className="relative h-full w-full overflow-hidden rounded-xl">
                          <div className="pointer-events-none absolute inset-0 z-20 rounded-xl bg-gradient-to-t from-[#5c2258]/25 via-transparent to-white/15" />
                          <img
                            src={image}
                            alt={`Hero ${i + 1}`}
                            className="h-full w-full rounded-xl object-cover"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute -bottom-8 -left-8 z-40 flex items-center gap-3 rounded-2xl border border-[#5c2258]/12 bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-[0_16px_34px_rgba(92,34,88,0.22)]">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#5c2258]/60">
                      Hotline
                    </span>
                    <a
                      href="tel:0903731769"
                      className="text-[1.05rem] font-bold leading-none text-[#2d1f3d] hover:text-[#c45b2f] transition-colors"
                    >
                      0903 731 769
                    </a>
                  </div>
                  <a
                    href="https://zalo.me/2446504417439174890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <img
                      src={zaloQR}
                      alt="QR Zalo"
                      className="h-10 w-10 rounded-lg border border-[#5c2258]/10 bg-white p-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}