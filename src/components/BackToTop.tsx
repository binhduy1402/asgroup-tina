import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Về đầu trang"
      className={`fixed bottom-6 right-6 z-[99999] flex h-12 w-12 sm:h-13 sm:w-13 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#b6522c] text-white shadow-[0_10px_30px_rgba(124,20,43,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#661126] ${
        visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
    >
      <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  );
}