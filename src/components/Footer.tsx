import { useState } from "react";
import logo from "../assets/logo_as.png";
import { Globe, ShieldCheck, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const linkGroups = [
  {
    title: "Về AS Group",
    links: [
      { label: "Câu chuyện thương hiệu", href: "#our-story" },
      { label: "Bộ sưu tập", href: "#collections" },
      { label: "Dự án tiêu biểu", href: "#capabilities" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Liên hệ", href: "#contact" },
      { label: "Chính sách", href: "#contact" },
      { label: "Vận chuyển", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#20100E] pt-14 pb-8 text-left text-white/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c66a3f]/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* ---------------- Brand column ---------------- */}
          <div className="space-y-4 md:col-span-4">
            <div className="flex items-center gap-3">
              <a
                href="#"
                onClick={scrollToTop}
                className="inline-flex items-center transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={logo}
                  alt="AS Group"
                  className="h-14 w-auto brightness-110 contrast-115 saturate-110 drop-shadow-[0_2px_8px_rgba(255,255,255,0.08)]"
                />
              </a>
            </div>

            <p className="max-w-sm text-xs font-light leading-relaxed text-white/55">
              AS Group đồng hành cùng doanh nghiệp kiến tạo những giải pháp quà tặng chuyên nghiệp, góp phần nâng tầm thương hiệu và tạo dấu ấn bền vững.
            </p>

            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/45">
              <ShieldCheck className="h-4 w-4 text-muted-gold" />
              Nâng tầm trải nghiệm quà tặng
            </span>
          </div>

          {/* ---------------- Nav groups: accordion on mobile, plain columns on desktop ---------------- */}
          <div className="md:col-span-5 md:grid md:grid-cols-2 md:border-l md:border-white/10 md:pl-8">
            {linkGroups.map((group, i) => (
              <div
                key={group.title}
                className={`border-b border-dashed border-white/10 last:border-b-0 md:border-none ${
                  i === 1 ? "md:border-l md:border-solid md:border-white/10 md:pl-8" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenGroup((cur) => (cur === i ? null : i))}
                  className="flex w-full items-center justify-between py-4 text-xs font-bold uppercase tracking-widest text-white md:pointer-events-none md:py-0 md:mb-4"
                >
                  {group.title}
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-white/40 transition-transform md:hidden ${
                      openGroup === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <ul
                  className={`space-y-2.5 overflow-hidden text-xs transition-all duration-300 md:!max-h-none md:pb-0 md:opacity-100 ${
                    openGroup === i ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0 md:opacity-100"
                  }`}
                >
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center text-white/60 transition-colors hover:text-white"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#c66a3f] transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ---------------- Contact column: always visible, not collapsed ---------------- */}
          <div className="md:col-span-3 md:border-l md:border-white/10 md:pl-8">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">
              Liên hệ
            </h4>

            <div className="space-y-3.5 text-xs">
              <a href="mailto:tina@asgroup.vn" className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Mail className="h-3 w-3 text-muted-gold" />
                </span>
                <div>
                  <p className="mb-0.5 uppercase tracking-wider text-white/40">Email</p>
                  <p className="text-white/80">tina@asgroup.vn</p>
                </div>
              </a>

              <a href="https://www.asgroup.com.vn" target="_blank" rel="noreferrer" className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Globe className="h-3 w-3 text-muted-gold" />
                </span>
                <div>
                  <p className="mb-0.5 uppercase tracking-wider text-white/40">Website</p>
                  <p className="text-white/80">www.asgroup.com.vn</p>
                </div>
              </a>

              <a href="tel:0903731769" className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Phone className="h-3 w-3 text-muted-gold" />
                </span>
                <div>
                  <p className="mb-0.5 uppercase tracking-wider text-white/40">Hotline</p>
                  <p className="text-white/80">0903 731 769</p>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <MapPin className="h-3 w-3 text-muted-gold" />
                </span>
                <div>
                  <p className="mb-0.5 uppercase tracking-wider text-white/40">Văn phòng</p>
                  <p className="text-white/80">District 2, Ho Chi Minh City</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Bottom bar ---------------- */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-dashed border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {currentYear} AS Group. All Rights Reserved.</p>

          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Globe className="h-3.5 w-3.5 text-muted-gold" />
              Tiếng Việt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}