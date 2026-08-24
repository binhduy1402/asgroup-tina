import { useState } from "react";
import { ChevronDown, ChevronUp, Check, Gift, CalendarDays, Award } from "lucide-react";
import caseStudy01 from "../assets/casestudy01.jpg";

const stats = [
  { value: "10K+", label: "Bộ quà tặng", icon: Gift },
  { value: "35", label: "Ngày triển khai", icon: CalendarDays },
  { value: "100%", label: "Đúng tiến độ", icon: Award },
];

const highlights = [
  "Thiết kế riêng theo thương hiệu",
  "Sản xuất số lượng lớn",
  "Giao hàng toàn quốc",
  "Hoàn thành đúng tiến độ",
];

const processSteps = [
  "Tiếp nhận nhu cầu & tư vấn",
  "Thiết kế theo nhận diện thương hiệu",
  "Sản xuất & kiểm soát chất lượng",
  "Đóng gói & giao hàng",
];

const values = [
  "Giải pháp phù hợp nhu cầu",
  "Đồng bộ hình ảnh thương hiệu",
  "Chất lượng thành phẩm ổn định",
  "Hoàn thành đúng tiến độ cam kết",
];

export default function Capabilities() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="capabilities"
      className="reveal relative overflow-hidden bg-[#faf6f6] py-20 sm:py-24"
    >
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#35557A]/5 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#c66a3f]/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#b6522c]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* section header, kept consistent with the other sections on the page */}
        <div className="mb-12 text-center sm:mb-14">
          <span className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase text-[#b6522c]">
            <span className="h-px w-6 bg-[#b6522c]/40" />
            Dự Án Tiêu Biểu
            <span className="h-px w-6 bg-[#b6522c]/40" />
          </span>
          <h2 className="text-charcoal-text mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Từ Ý Tưởng Đến Thành Phẩm
          </h2>
        </div>

        <div className="group premium-card overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(53,85,122,0.08)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(53,85,122,0.12)]">
          {/* ---------------- cover image ----------------
              The source photo (casestudy01.jpg) is natively 4:3 (1600x1200). Using that
              same ratio for the container means object-cover never has to crop anything —
              the full image shows on every breakpoint instead of losing the top/bottom
              on wider desktop banners. */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={caseStudy01}
              alt="Case Study"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute left-5 top-5">
              <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Dự Án Nổi Bật
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">
                Case Study Tiêu Biểu
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] sm:text-3xl">
                Dự Án Quà Tặng Tết Doanh Nghiệp
              </h3>
            </div>
          </div>

          {/* ---------------- summary ---------------- */}
          <div className="p-6 sm:p-10">
            <p className="text-gray-600 leading-relaxed">
              Triển khai hơn 10.000 bộ quà tặng được thiết kế riêng theo
              nhận diện thương hiệu cho chương trình tri ân khách hàng cuối
              năm.
            </p>

            {/* stats — same gradient-ring icon badge as the About numbers */}
            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#B6522C]/15 bg-[#B6522C]/[0.03] px-2 py-5 text-center sm:py-6"
                  >
                    <div
                      className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full p-[1.5px] sm:h-10 sm:w-10"
                      style={{
                        background:
                          "linear-gradient(135deg, #1F3652, #C66A3F 55%, #D4AF37)",
                      }}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <Icon className="h-4 w-4 text-[#35557A] sm:h-5 sm:w-5" strokeWidth={1.75} />
                      </div>
                    </div>
                    <div className="font-['Lora'] text-xl font-bold text-[#8F3516] sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 text-[10px] leading-tight text-gray-500 sm:text-[11px]">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* highlights */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B6522C]/10 text-[#B6522C]">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            {!isExpanded && (
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-[#B6522C]/25 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#B6522C] transition-all duration-300 hover:bg-[#B6522C]/5"
              >
                Khám Phá Dự Án
                <ChevronDown className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* ---------------- expandable process / value detail ---------------- */}
          <div
            className={`grid overflow-hidden transition-all duration-500 ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-[#B6522C]/15">
                <div
                  className="h-1"
                  style={{
                    background:
                      "linear-gradient(90deg, #1F3652 0%, #C66A3F 30%, #D4AF37 50%, #C66A3F 70%, #1F3652 100%)",
                  }}
                />

                <div className="px-6 py-8 sm:px-10 sm:py-10">
                  <h4 className="mb-6 text-center font-serif text-xl font-bold text-[#2a1424] sm:text-2xl">
                    Từ Yêu Cầu Đến Thành Phẩm
                  </h4>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex h-full flex-col rounded-2xl border border-[#B6522C]/15 bg-[#faf6f6]/60 p-5 sm:p-6">
                      <h5 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#B6522C]">
                        Quy Trình
                      </h5>
                      <div className="relative">
                        <div className="absolute left-[13px] top-1 bottom-1 w-px bg-[#B6522C]/15" />
                        <ul className="space-y-5">
                          {processSteps.map((step, index) => (
                            <li key={step} className="relative flex items-start gap-3.5">
                              <span className="relative z-10 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#B6522C] text-[11px] font-bold text-white">
                                {index + 1}
                              </span>
                              <span className="mt-1 text-sm leading-6 text-gray-700">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex h-full flex-col rounded-2xl border border-[#c66a3f]/30 bg-gradient-to-br from-[#faf6f6] to-[#f5ddd0]/40 p-5 sm:p-6">
                      <h5 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#B6522C]">
                        Giá Trị Mang Lại
                      </h5>
                      <ul className="space-y-3.5 text-sm leading-7 text-gray-700">
                        {values.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span className="mt-[0.15rem] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B6522C] text-white">
                              <Check className="h-3 w-3" strokeWidth={2.5} />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#B6522C]/15 pt-5">
                    <button
                      type="button"
                      onClick={() => setIsExpanded(false)}
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-[#B6522C]/25 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#B6522C] transition-all duration-300 hover:bg-[#B6522C]/5"
                    >
                      <ChevronUp className="h-4 w-4" />
                      Thu Gọn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}