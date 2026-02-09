
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Heart } from "lucide-react";
import Image from "next/image";
import bg from './Picsart_26-02-08_16-30-35-686.jpg.jpeg';
import { cn } from "@/lib/utils";

interface HeartData {
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
}

export default function Home() {
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    const generateHearts = (count: number) => {
      return [...Array(count)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${100 + Math.random() * 20}%`,
        size: `${15 + Math.random() * 60}px`,
        delay: `${Math.random() * 5}s`,
        duration: `${12 + Math.random() * 15}s`
      }));
    };

    setHearts(generateHearts(30));
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden select-none bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </div>

      {/* Animated Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {hearts.map((heart, i) => (
          <Heart
            key={i}
            className="absolute text-rose-400/30 animate-float"
            style={{
              left: heart.left,
              top: heart.top,
              width: heart.size,
              animationDelay: heart.delay,
              animationDuration: heart.duration
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center space-y-12 px-4 max-w-full animate-fade-in">
        <h1 className="text-5xl md:text-8xl font-headline text-black leading-tight tracking-[0.25em] uppercase drop-shadow-md">
          MUTHU | ANISH
        </h1>
        
        <div className="h-0.5 w-64 bg-rose-500/40 mx-auto" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="py-8 border-y border-rose-300/40 backdrop-blur-md bg-white/10 rounded-2xl shadow-sm">
            <p className="text-[12px] md:text-lg font-body font-bold text-black tracking-[0.3em] uppercase whitespace-nowrap overflow-x-auto no-scrollbar px-10">
              BHARIYA • CHINJU • SWOTHTHU • MUWTHEY • VAVOO • DARLING
            </p>
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
