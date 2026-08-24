import { useState, useEffect, useRef } from "react";

import LuxuryBackground from "./components/LuxuryBackground";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Collections from "./components/Collections";
import Capabilities from "./components/Capabilities";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import { Collection } from "./types";
import {
  X,
  Check,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { stories } from "./data/stories";

export default function App() {
  const [selectedCollection, setSelectedCollection] =
    useState<Collection | null>(null);

  const [prefilledProduct, setPrefilledProduct] = useState("");
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [currentStoryImage, setCurrentStoryImage] = useState(0);
  const [storyImageLoaded, setStoryImageLoaded] = useState(false);
  const touchStartX = useRef(0);

  const story = stories.find((s) => s.id === selectedStory) ?? null;
  const totalSlides =
    (story?.images.length ?? 0) +
    (story?.videos?.length ?? 0);
  useEffect(() => {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

useEffect(() => {
  if (selectedStory) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [selectedStory]);

const handleCollectionInquire = (title: string) => {
  setPrefilledProduct(`Báo giá sỉ bộ sản phẩm: ${title}`);
  setSelectedCollection(null);
  scrollToContact();
};

const closeStory = () => {
  setSelectedStory(null);
  setCurrentStoryImage(0);
};

const nextStoryImage = () => {
  if (!story) return;

  setCurrentStoryImage((prev) =>
    (prev + 1) % totalSlides
  );
};

const prevStoryImage = () => {
  if (!story) return;

  setCurrentStoryImage((prev) =>
    prev === 0
      ? totalSlides - 1
      : prev - 1
  );
};

const changeStoryImage = (index: number) => {
  if (index === currentStoryImage) return;
  setCurrentStoryImage(index);
};

const handleTouchStart = (e: React.TouchEvent) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchEnd = (e: React.TouchEvent) => {
  const distance =
    touchStartX.current - e.changedTouches[0].clientX;

  if (Math.abs(distance) < 50) return;

  if (distance > 0) {
    nextStoryImage();
  } else {
    prevStoryImage();
  }
};

useEffect(() => {
  if (!story || totalSlides <= 1) return;

  if (story.videos && currentStoryImage > 0) return;

  const timer = setTimeout(() => {
    nextStoryImage();
  }, 2000);

  return () => clearTimeout(timer);
}, [story, totalSlides, currentStoryImage]);

useEffect(() => {
  setStoryImageLoaded(false);
  const timer = window.setTimeout(() => {
    setStoryImageLoaded(true);
  }, 20);

  return () => window.clearTimeout(timer);
}, [currentStoryImage]);

  return (
    <div className="relative min-h-screen bg-cream-bg text-charcoal-text selection:bg-primary-brand selection:text-white">
      <LuxuryBackground />
      <Navbar onInquireClick={scrollToContact} />
      <Hero
        onDiscoverClick={() => {
          const section = document.getElementById("collections");
          if (section) {
            section.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        onConsultClick={scrollToContact}
      />

      <Collections onSelectCollection={setSelectedCollection} />

      <About />

      <Philosophy
        onOpenStory={(storyId) => {
          setSelectedStory(storyId);
          setCurrentStoryImage(0);
        }}
      />

      <Capabilities />

      <ContactForm
        prefilledProduct={prefilledProduct}
        onClearPrefill={() => setPrefilledProduct("")}
      />

      <Footer />
      {!selectedCollection && !story && <BackToTop />}
      {/* Collection Modal */}
      {selectedCollection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
          <div
            className="fixed inset-0 bg-charcoal-text/70 backdrop-blur-md"
            onClick={() => setSelectedCollection(null)}
          />

          <div
            className="
              relative
              z-10
              w-full
              max-w-3xl
              overflow-hidden
              rounded-2xl
              border
              border-[#B6522C]/15
              bg-white
              shadow-2xl
            "
          >
            <button
              onClick={() => setSelectedCollection(null)}
              className="
                absolute
                right-4
                top-4
                z-20
                rounded-full
                bg-white
                p-2
                transition-colors
                hover:bg-white
              "
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span
                  className="
                    mb-3
                    inline-block
                    rounded-full
                    bg-[#B6522C]
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                  "
                >
                  Bộ Sưu Tập Nổi Bật
                </span>

                <h3 className="font-serif text-3xl font-bold text-white">
                  {selectedCollection.title}
                </h3>
              </div>
            </div>

            <div className="space-y-6 p-8">
              <p className="text-sm leading-relaxed text-charcoal-text/75">
                {selectedCollection.description}
              </p>

              {selectedCollection.highlights && (
                <div>
                  <h4
                    className="
                      mb-4
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#B6522C]
                    "
                  >
                    Điểm Nổi Bật
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedCollection.highlights.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-charcoal-text/80
                          "
                        >
                          <Check className="h-4 w-4 text-[#B6522C]" />
                          {item}
                        </div>
                      )
                    )}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-charcoal-text/80
                      "
                    >
                      <ShieldCheck className="h-4 w-4 text-[#B6522C]" />
                      Kiểm soát chất lượng đầu ra
                    </div>
                  </div>
                </div>
              )}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-[#B6522C]/15
                  pt-6
                  sm:flex-row
                "
              >
                <button
                  onClick={() =>
                    handleCollectionInquire(
                      selectedCollection.title
                    )
                  }
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#b6522c]
                    px-6
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    transition-all
                    hover:-translate-y-1
                  "
                >
                  Yêu Cầu Báo Giá

                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={selectedCollection.url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#B6522C]/30
                    px-6
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-[#B6522C]
                    transition-all
                    hover:bg-[#B6522C]/5
                  "
                >
                  Xem Trang Sản Phẩm
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Story Modal */}
      {story && (
        <div
          className="fixed inset-0 z-[9999] overflow-y-auto bg-black/75 backdrop-blur-sm sm:p-6"
          onClick={closeStory}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-auto flex min-h-full w-full items-end justify-center sm:min-h-[calc(100vh-3rem)] sm:items-center"
          >
            {/* no max-height / internal scroll here — the overlay above scrolls the whole
                modal, so the image never gets stretched or cropped to match text length */}
            <div className="relative w-full overflow-hidden rounded-t-[28px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:max-w-2xl sm:rounded-[28px]">
              {/* ---------------- cover image ---------------- */}
              <div
                style={{
                  touchAction: "pan-y",
                  overscrollBehavior: "contain",
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#f7f1f1] sm:aspect-[16/9]"
              >
                {totalSlides > 0 ? (
                  <>
                    {/* fading media swap */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                        storyImageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {story.videos && story.videos.length > 0 ? (
                        currentStoryImage === 0 ? (
                          <img
                            src={story.images[0]}
                            alt={story.title}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <video
                            key={currentStoryImage}
                            src={story.videos[currentStoryImage - 1]}
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                            disablePictureInPicture
                            controlsList="nodownload nofullscreen noremoteplayback"
                            style={{ pointerEvents: "none" }}
                            onEnded={nextStoryImage}
                          />
                        )
                      ) : (
                        <img
                          src={story.images[currentStoryImage]}
                          alt={story.title}
                          className={`h-full w-full ${
                            story.imageFit === "contain"
                              ? "object-contain bg-[#f7f1f1]"
                              : "object-cover"
                          }`}
                        />
                      )}
                    </div>

                    {/* prev / next */}
                    {totalSlides > 1 && (
                      <>
                        <button
                          onClick={prevStoryImage}
                          aria-label="Trước"
                          className="absolute left-3 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-colors duration-300 hover:bg-black/55 sm:flex"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={nextStoryImage}
                          aria-label="Tiếp theo"
                          className="absolute right-3 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-colors duration-300 hover:bg-black/55 sm:flex"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-gray-400">Hình sẽ cập nhật</span>
                  </div>
                )}

                {/* editorial gradient so the title/tag sit directly on the image,
                    same visual language as the Philosophy story cards */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                {/* tag badge */}
                <div className="absolute left-4 top-4 z-20">
                  <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {story.tag}
                  </span>
                </div>

                {/* floating close button */}
                <button
                  onClick={closeStory}
                  aria-label="Đóng"
                  className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors duration-300 hover:bg-black/60"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* title (desktop only — mobile shows it below, in the white panel like before) + progress bar */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col gap-3 p-5 sm:p-6">
                  <h2 className="hidden font-serif text-2xl font-bold leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:block">
                    {story.title}
                  </h2>

                  {totalSlides > 1 && (
                    <div className="pointer-events-auto flex gap-1.5">
                      {Array.from({ length: totalSlides }).map((_, index) => {
                        const isPast = index < currentStoryImage;
                        const isActive = index === currentStoryImage;
                        const isActiveVideo =
                          isActive &&
                          !!story.videos &&
                          story.videos.length > 0 &&
                          currentStoryImage > 0;

                        return (
                          <button
                            key={index}
                            onClick={() => changeStoryImage(index)}
                            aria-label={`Xem ảnh ${index + 1}`}
                            className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/35"
                          >
                            {(isPast || isActiveVideo) && (
                              <span className="block h-full w-full rounded-full bg-white" />
                            )}
                            {isActive && !isActiveVideo && (
                              <span
                                key={currentStoryImage}
                                className="story-progress-fill block h-full rounded-full bg-white"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* keyframes for the story-progress sweep above */}
              <style>{`
                @keyframes story-progress-fill {
                  from { width: 0%; }
                  to { width: 100%; }
                }
                .story-progress-fill {
                  animation: story-progress-fill 2000ms linear forwards;
                }
              `}</style>

              {/* ---------------- description ---------------- */}
              <div className="p-6 sm:p-8">
                <div className="sm:hidden">
                  <h2 className="font-serif text-[1.7rem] font-bold leading-tight text-[#8F3516]">
                    {story.title}
                  </h2>
                  <div className="mt-4 h-px w-full bg-[#b6522c]/15" />
                </div>

                <p className="mt-4 text-[15px] leading-8 text-[#555] sm:mt-0 sm:text-[16px]">
                  {story.description}
                </p>

                <div className="mt-6">
                  <button
                    onClick={closeStory}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-[#b6522c]/25 py-2.5 text-xs font-bold uppercase tracking-widest text-[#b6522c] transition-all duration-300 hover:bg-[#b6522c]/5 active:scale-[0.98] sm:w-auto sm:px-6"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}