
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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Heart-shaped Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-24 right-6 z-50 p-4 bg-rose-500 text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-lg",
          "flex items-center justify-center",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        style={{
          clipPath: "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')",
          width: "60px",
          height: "60px"
        }}
      >
        <ChevronUp className="w-6 h-6 -translate-y-1" />
      </button>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3 bg-white/60 backdrop-blur-xl border border-rose-200/50 rounded-full shadow-2xl flex items-center gap-2 sm:gap-4 max-w-[95vw] overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center transition-all duration-500 group h-14 w-14 sm:h-16 sm:w-16",
                isActive ? "text-white" : "text-rose-400 hover:text-rose-600"
              )}
            >
              {/* Heart Shape Background for Items */}
              <div 
                className={cn(
                  "absolute inset-0 transition-all duration-500",
                  isActive ? "bg-rose-500 scale-100" : "bg-rose-100/50 scale-0 group-hover:scale-90"
                )}
                style={{
                  clipPath: "path('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')",
                  transformOrigin: "center center"
                }}
              />
              <Icon className={cn("w-5 h-5 z-10 transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
              <span className={cn(
                "text-[10px] font-bold z-10 mt-0.5 transition-opacity duration-300",
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
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
