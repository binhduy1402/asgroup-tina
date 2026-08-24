import logo from "../assets/logo_as.png";
import { useState, useEffect } from "react";
import { BRAND_INFO, NAVIGATION_LINKS } from "../data";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onInquireClick: () => void;
}

export default function Navbar({ onInquireClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-bg/95 backdrop-blur-md shadow-sm border-b border-secondary-brand/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="flex items-center">
  <img
    src={logo}
    alt="Mars Group"
    className="h-10 sm:h-12 md:h-16 w-auto"
  />
</a>
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-wider text-charcoal-text/80 hover:text-primary-brand transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={onInquireClick}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-brand hover:bg-primary-brand-hover text-white text-xs font-bold tracking-widest rounded-sm transition-all shadow-md hover:shadow-lg uppercase gap-2 hover:translate-y-[-1px]"
              style={{ backgroundColor: "#b6522c" }}
            >
              Yêu Cầu Báo Giá
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-charcoal-text hover:text-primary-brand transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream-bg border-b border-secondary-brand/10 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-lg">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-semibold tracking-wide text-charcoal-text hover:text-primary-brand hover:bg-secondary-brand/5 rounded transition-all uppercase"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onInquireClick();
                setIsOpen(false);
              }}
              className="mt-2 w-full rounded-full bg-[#7c142b] px-4 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-[#701329]"
            >
              Yêu Cầu Báo Giá
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
