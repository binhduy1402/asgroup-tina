import { stories } from "../data/stories";

interface PhilosophyProps {
  onOpenStory: (storyId: number) => void;
}

export default function Philosophy({ onOpenStory }: PhilosophyProps) {
  return (
    <section id="philosophy" className="relative bg-white py-20 sm:py-24 overflow-hidden">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#35557A]/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#C66A3F]/8 blur-3xl" />

      {/* hides the native scrollbar on the mobile snap-track without hiding it everywhere */}
      <style>{`
        .philosophy-scrollbar-hide::-webkit-scrollbar { display: none; }
        .philosophy-scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
        <div className="max-w-4xl mx-auto text-center reveal delay-150">
          <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-[#B6522C]">
            <span className="h-px w-6 bg-[#B6522C]/40" />
            CÂU CHUYỆN THƯƠNG HIỆU
            <span className="h-px w-6 bg-[#B6522C]/40" />
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] text-[#2c2c2c]">
            Mỗi Món Quà
            <span className="block bg-gradient-to-r from-[#5c2258] to-[#b6522c] bg-clip-text text-transparent">
              Là Một Trải Nghiệm
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-charcoal-text/70">
            AS Group không chỉ cung cấp quà tặng doanh nghiệp. Chúng tôi
            giúp doanh nghiệp truyền tải giá trị thương hiệu thông qua những
            sản phẩm được thiết kế riêng, chỉn chu và phù hợp với từng đối
            tượng nhận quà.
          </p>
        </div>

        {/* ---------------- cards ----------------
            Mobile: horizontal snap-scroll, one card ~80% viewport wide so the next one peeks in.
            sm and up: collapses into a normal grid, scroll behaviour switches off automatically. */}
        <div
          className="
            philosophy-scrollbar-hide
            mt-12 reveal delay-300
            -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2
            sm:mx-0 sm:grid sm:snap-none sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0
            sm:grid-cols-2 xl:grid-cols-4
          "
        >
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onOpenStory(story.id)}
              className="
                group relative flex shrink-0 snap-start flex-col overflow-hidden
                rounded-2xl text-left shadow-md ring-1 ring-black/5
                transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-[#35557A]/30
                w-[80%] xs:w-[72%] sm:w-auto sm:shrink sm:snap-align-none
              "
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
                <img
                  src={story.cardImage}
                  alt={story.cardTitle}
                  className="h-full w-full object-cover object-center transition-transform duration-[3000ms] ease-out group-hover:scale-110"
                />

                {/* editorial gradient so the copy sits directly on the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/0" />

                {/* tag badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {story.tag}
                  </span>
                </div>

                {/* title + CTA, overlaid at the bottom of the image */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5">
                  <h3 className="text-lg sm:text-xl font-bold leading-snug text-white line-clamp-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                    {story.cardTitle}
                  </h3>

                  <div className="flex items-center justify-between border-t border-white/20 pt-3">
                    <span className="text-sm font-medium text-white/85 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                      Xem câu chuyện
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-inset ring-white/25 backdrop-blur-md transition-all duration-300 group-hover:bg-[#B6522C] group-hover:translate-x-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* swipe hint, mobile only */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A8987F] sm:hidden">
          Vuốt để xem thêm
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
          >
            <path d="M8 3L4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4" />
          </svg>
        </div>
      </div>
    </section>
  );
}