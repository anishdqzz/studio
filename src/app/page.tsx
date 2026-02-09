
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Heart } from "lucide-react";
import Image from "next/image";
import bg from './Picsart_26-02-08_16-30-35-686.jpg.jpeg';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeartData {
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
}

export default function Home() {
  const [stage, setStage] = useState<'intro' | 'main'>('intro');
  const [introHearts, setIntroHearts] = useState<HeartData[]>([]);
  const [mainHearts, setMainHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    // Generate random properties for hearts after mounting to avoid hydration mismatch
    const generateHearts = (count: number, isIntro: boolean) => {
      return [...Array(count)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${100 + Math.random() * 20}%`,
        size: `${15 + Math.random() * 60}px`,
        delay: `${Math.random() * 5}s`,
        duration: isIntro ? `${5 + Math.random() * 5}s` : `${12 + Math.random() * 15}s`
      }));
    };

    setIntroHearts(generateHearts(20, true));
    setMainHearts(generateHearts(25, false));
  }, []);

  const handleStart = () => {
    setStage('main');
  };

  return (
    <div className="min-h-screen relative overflow-hidden select-none bg-black">
      
      {/* Intro Stage */}
      {stage === 'intro' && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
          {/* Floating Hearts for Intro */}
          <div className="absolute inset-0 pointer-events-none">
            {introHearts.map((heart, i) => (
              <Heart
                key={i}
                className="absolute text-rose-500/20 animate-float"
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

          <div className="relative z-10 text-center px-6">
            <Button 
              onClick={handleStart}
              className="bg-transparent border-4 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white text-4xl md:text-6xl px-20 py-14 md:px-32 md:py-20 rounded-full font-headline tracking-[0.2em] transition-all duration-700 shadow-[0_0_50px_rgba(225,29,72,0.3)] hover:shadow-[0_0_80px_rgba(225,29,72,0.6)] group"
            >
              <span className="group-hover:scale-110 transition-transform block">BHARII</span>
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={cn(
        "min-h-screen flex flex-col items-center justify-center transition-opacity duration-1000",
        stage === 'main' ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
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

        {/* Animated Floating Hearts Background for Main Page */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {mainHearts.map((heart, i) => (
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

        <main className="relative z-20 text-center space-y-12 px-4 max-w-full pt-10 animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-headline text-black leading-tight tracking-[0.25em] uppercase mt-12 drop-shadow-md">
            MUTHU | ANISH
          </h1>
          
          <div className="h-0.5 w-64 bg-rose-500/40 mx-auto" />
          
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-2xl md:text-4xl font-headline text-rose-900 tracking-wide font-bold">
              Happy Valentine's Day My Dear Sweety <br className="md:hidden" /> | I Love You Di Chinju
            </p>
            
            <div className="py-8 border-y border-rose-300/40 backdrop-blur-md bg-white/10 rounded-2xl shadow-sm">
              <p className="text-[12px] md:text-lg font-body font-bold text-black tracking-[0.3em] uppercase whitespace-nowrap overflow-x-auto no-scrollbar px-10">
                BHARIYA • CHINJU • SWOTHTHU • MUWTHEY • VAVOO • DARLING
              </p>
            </div>
          </div>
        </main>

        <Navigation />
      </div>
    </div>
  );
}
