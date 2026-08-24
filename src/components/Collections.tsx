import { useEffect, useRef, useState } from "react";
import { COLLECTIONS } from "../data";
import { Collection } from "../types";

import {
  ArrowRight,
  ArrowLeft,
  Check,
  Users,
  CalendarDays,
  Crown,
  UsersRound,
  MoveHorizontal,
} from "lucide-react";

interface CollectionsProps {
  onSelectCollection: (collection: Collection) => void;
}

const STACK_DEPTH = 2;
const SWIPE_THRESHOLD = 80;
const DRAG_DEADZONE = 6; 

const LUX_EASE = "cubic-bezier(0.19, 1, 0.22, 1)";

export default function Collections({ onSelectCollection }: CollectionsProps) {
  const total = COLLECTIONS.length;

  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startXRef = useRef(0);

  const current = COLLECTIONS[index];

  const getIcon = (icon?: string) => {
    switch (icon) {
      case "Users":
        return <Users className="h-[18px] w-[18px]" strokeWidth={1.75} />;
      case "CalendarDays":
        return <CalendarDays className="h-[18px] w-[18px]" strokeWidth={1.75} />;
      case "Crown":
        return <Crown className="h-[18px] w-[18px]" strokeWidth={1.75} />;
      case "UsersRound":
        return <UsersRound className="h-[18px] w-[18px]" strokeWidth={1.75} />;
      default:
        return <Users className="h-[18px] w-[18px]" strokeWidth={1.75} />;
    }
  };

  const getForwardPos = (i: number) => (i - index + total) % total;

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + total) % total);
    setDragX(0);
  };

  const goNext = () => go(1);
  const goPrev = () => go(-1);

  const dragDir: "left" | "right" | null =
    dragging && Math.abs(dragX) > DRAG_DEADZONE
      ? dragX < 0
        ? "left"
        : "right"
      : null;

  const revealIndex =
    dragDir === "left"
      ? (index + 1) % total
      : dragDir === "right"
      ? (index - 1 + total) % total
      : null;

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e: PointerEvent) => {
      setDragX(e.clientX - startXRef.current);
    };

    const handleUp = (e: PointerEvent) => {
      const finalDragX = e.clientX - startXRef.current;
      setDragging(false);

      if (finalDragX <= -SWIPE_THRESHOLD) {
        go(1);
      } else if (finalDragX >= SWIPE_THRESHOLD) {
        go(-1);
      } else {
        setDragX(0);
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };

  }, [dragging]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    startXRef.current = e.clientX;
    setDragging(true);
  };

  const getIdleStackStyle = (pos: number): React.CSSProperties => {
    const capped = Math.min(pos, STACK_DEPTH + 1);
    const translateX = capped * 16;
    const translateY = capped * 11;
    const rotate = capped * 3.5;
    const scale = 1 - capped * 0.04;
    const opacity = pos <= STACK_DEPTH ? 1 - pos * 0.18 : 0;

    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      opacity,
      zIndex: total - pos,
      boxShadow:
        pos === 0
          ? "0 4px 10px rgba(120,58,26,.06), 0 18px 40px -8px rgba(120,58,26,.22), 0 40px 70px -20px rgba(44,28,18,.28)"
          : "0 10px 24px -6px rgba(44,28,18,.14)",
      transition: `transform 560ms ${LUX_EASE}, opacity 560ms ${LUX_EASE}, box-shadow 560ms ${LUX_EASE}`,
    };
  };

  const revealStyle: React.CSSProperties = {
    transform: "translateX(16px) translateY(11px) rotate(3.5deg) scale(0.96)",
    opacity: 1,
    zIndex: total - 1,
    boxShadow: "0 14px 30px -8px rgba(44,28,18,.20)",
    transition: "opacity 220ms ease-out",
  };

  const hiddenStyle: React.CSSProperties = {
    transform: "translateX(16px) translateY(11px) rotate(3.5deg) scale(0.94)",
    opacity: 0,
    zIndex: 0,
    boxShadow: "0 10px 24px -6px rgba(44,28,18,.14)",
    transition: "opacity 220ms ease-out",
  };

  const renderNav = () => (
    <>
      <button
        onClick={goPrev}
        aria-label="Bộ sưu tập trước"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E7D2C2] bg-white text-[#B6522C] shadow-[0_2px_8px_rgba(120,58,26,0.08)] transition-all duration-300 hover:border-[#B6522C] hover:bg-[#B6522C] hover:text-white hover:shadow-[0_6px_18px_rgba(182,82,44,0.28)] active:scale-95"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
      </button>
      <button
        onClick={goNext}
        aria-label="Bộ sưu tập tiếp theo"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E7D2C2] bg-white text-[#B6522C] shadow-[0_2px_8px_rgba(120,58,26,0.08)] transition-all duration-300 hover:border-[#B6522C] hover:bg-[#B6522C] hover:text-white hover:shadow-[0_6px_18px_rgba(182,82,44,0.28)] active:scale-95"
      >
        <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
      </button>
        <span className="text-xs font-semibold tracking-widest text-[#8a7c6d]">
          <span className="text-[#B6522C]">
            {String(index + 1).padStart(2, "0")}
          </span>{" "}
          /{" "}
          {String(total).padStart(2, "0")}
        </span>
    </>
  );

  return (
    <section
      id="collections"
      className="luxury-section reveal relative overflow-hidden bg-white py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full opacity-[0.55] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217,183,124,0.28) 0%, rgba(182,82,44,0.10) 45%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 flex items-center gap-2.5 text-[11px] font-bold tracking-[0.3em] uppercase text-[#B6522C]">
              <span aria-hidden="true" className="inline-block h-px w-6 bg-[#D7B98C]" />
              4 Nhóm Sản Phẩm
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2d1f3d] sm:text-4xl">
              Giải Pháp Quà Tặng Theo Từng Mục Tiêu
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:gap-10 md:grid-cols-2 md:items-center">
          <div className="order-3 flex flex-col md:order-1">
            <div className="mb-5 flex items-start gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#EAD9C4] bg-gradient-to-br from-[#FBF1E9] to-[#F5E4D6] text-[#B6522C] shadow-[0_3px_10px_rgba(182,82,44,0.10)]">
                {getIcon(current.icon)}
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#241C16]">
                  {current.title}
                </h3>
                <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B18443]">
                  {current.tagline}
                </p>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed text-[#5F5850]">
              {current.description}
            </p>

            {current.highlights && (
              <ul className="mt-5 space-y-3">
                {current.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-[#4A443D]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F8ECE6] text-[#B6522C] ring-1 ring-inset ring-[#EAD3C1]">
                      <Check className="h-3 w-3" strokeWidth={2.25} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => onSelectCollection(current)}
              className="group mt-9 flex w-fit flex-col items-start gap-2"
            >
              <span className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#B6522C] uppercase transition-colors duration-300 group-hover:text-[#8a3f1e] group-active:text-[#712f16]">
                Khám Phá Bộ Sưu Tập
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-active:translate-x-1.5" />
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-[#B6522C] to-[#D7B98C] transition-all duration-500 ease-out group-hover:w-full" />
            </button>

            <div className="mt-10 hidden items-center gap-3 md:flex">
              {renderNav()}
            </div>
          </div>

          <div className="order-2 flex items-center gap-3 md:hidden">
            {renderNav()}
          </div>

          <div className="order-1 relative flex justify-center pr-10 pb-6 md:order-2 md:justify-end md:pr-12">
            <div className="absolute -top-8 right-2 flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#A8987F] uppercase">
              Trượt Để Xem
              <MoveHorizontal className="h-3.5 w-3.5 animate-pulse" strokeWidth={1.75} />
            </div>

            <div className="relative h-[360px] w-full max-w-[280px] select-none overflow-visible">
              {COLLECTIONS.map((collection, i) => {
                const isFront = i === index;
                const isDraggingFront = isFront && dragging;
                const isRevealCard = dragging && i === revealIndex;

                let style: React.CSSProperties;

                if (isDraggingFront) {
                  style = {
                    transform: `translateX(${dragX}px) rotate(${dragX / 24}deg)`,
                    opacity: 1,
                    zIndex: total + 1,
                    boxShadow: "0 24px 50px -10px rgba(182,82,44,.20)",
                    transition: "none",
                  };
                } else if (isFront) {
                  style = getIdleStackStyle(0);
                } else if (dragging) {
                  style = isRevealCard ? revealStyle : hiddenStyle;
                } else {
                  const pos = getForwardPos(i);
                  style = getIdleStackStyle(pos);
                }

                return (
                  <div
                    key={collection.id ?? i}
                    onPointerDown={isFront ? handlePointerDown : undefined}
                    className={`absolute inset-0 overflow-hidden overscroll-contain rounded-[28px] border border-[#EFE2D2] bg-white ring-1 ring-white/60 ${
                      isFront
                        ? "cursor-grab touch-none active:cursor-grabbing"
                        : "pointer-events-none"
                    }`}
                    style={{
                      ...style,
                      touchAction: "none",
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                  >
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="h-full w-full object-cover"
                      draggable={false}
                      referrerPolicy="no-referrer"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2C1A0F]/55 via-[#2C1A0F]/5 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/15" />

                    {isFront && collection.badge && (
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-[#E9D5C8] bg-white/95 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-[#B6522C] shadow-[0_4px_12px_rgba(0,0,0,0.10)] backdrop-blur-sm">
                          {collection.badge}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
