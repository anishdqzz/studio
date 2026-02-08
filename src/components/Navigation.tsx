
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Image, History, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Heart },
  { href: "/gallery", label: "Gallery", icon: Image },
  { href: "/timeline", label: "Our Story", icon: History },
  { href: "/dates", label: "Special Dates", icon: Calendar },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/70 backdrop-blur-md border border-primary/20 rounded-full shadow-lg flex items-center gap-2 sm:gap-6 max-w-[95vw] overflow-x-auto no-scrollbar">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 whitespace-nowrap",
              isActive 
                ? "bg-primary text-primary-foreground shadow-sm" 
                : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
