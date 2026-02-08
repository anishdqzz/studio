
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
      {/* Standard Circular Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-24 right-6 z-50 p-4 bg-rose-500 text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-lg rounded-full",
          "flex items-center justify-center h-14 w-14",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ChevronUp className="w-6 h-6" />
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
              {/* Circular Background for Items */}
              <div 
                className={cn(
                  "absolute inset-0 transition-all duration-500 rounded-full",
                  isActive ? "bg-rose-500 scale-100" : "bg-rose-100/50 scale-0 group-hover:scale-90"
                )}
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
