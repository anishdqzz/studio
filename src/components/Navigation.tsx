"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Image, History, Calendar, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Heart },
  { href: "/gallery", label: "Gallery", icon: Image },
  { href: "/timeline", label: "Our Story", icon: History },
  { href: "/dates", label: "Special Dates", icon: Calendar },
];

export function Navigation() {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={cn(
          "fixed bottom-24 right-6 z-50 p-4 bg-rose-500 text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-lg rounded-full",
          "flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Horizontal Navigation Bar at the Bottom Center */}
      <nav className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/70 backdrop-blur-xl border border-rose-200/50 rounded-full shadow-2xl flex items-center gap-2 sm:gap-6 transition-all duration-500 animate-fade-in"
      )}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center transition-all duration-500 group h-12 w-12 sm:h-14 sm:w-14",
                isActive ? "text-white" : "text-rose-400 hover:text-rose-600"
              )}
            >
              {/* Circular Background for Items */}
              <div 
                className={cn(
                  "absolute inset-0 transition-all duration-500 rounded-full",
                  isActive ? "bg-rose-500 scale-100" : "bg-rose-100/50 scale-0 group-hover:scale-90"
                )}
              />
              <Icon className={cn("w-5 h-5 z-10 transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
              
              {/* Tooltip-like label appearing above the icon on hover */}
              <span className={cn(
                "absolute bottom-full mb-4 px-3 py-1 bg-rose-600 text-white text-[10px] font-bold rounded-md opacity-0 pointer-events-none transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap",
                isActive && "opacity-0"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
