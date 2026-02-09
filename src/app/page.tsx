
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Heart } from "lucide-react";
import Image from "next/image";
import bg from './Picsart_26-02-08_16-30-35-686.jpg.jpeg';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const [stage, setStage] = useState<'intro' | 'message' | 'main'>('intro');

  const handleStart = () => {
    setStage('message');
    // Show the message for 3 seconds then go to main page
    setTimeout(() => {
      setStage('main');
    }, 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden select-none bg-black">
      
      {/* Intro Overlay Stage */}
      {stage !== 'main' && (
        <div className={cn(
          "fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-1000",
          stage === 'message' ? "bg-rose-950/90 backdrop-blur-md" : "bg-black"
        )}>
          {/* Floating Hearts for Intro */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <Heart
                key={i}
                className="absolute text-rose-500/40 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                  width: `${20 + Math.random() * 50}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 10}s`
                }}
                fill="currentColor"
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-6">
            {stage === 'intro' ? (
              <div className="animate-scale-in">
                <Button 
                  onClick={handleStart}
                  className="bg-transparent border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white text-2xl px-12 py-8 rounded-full font-headline tracking-widest transition-all duration-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                >
                  START
                </Button>
              </div>
            ) : (
              <div className="animate-fade-in space-y-6">
                <Heart className="w-20 h-20 text-rose-500 mx-auto animate-pulse" fill="currentColor" />
                <h2 className="text-4xl md:text-6xl font-names text-rose-100 drop-shadow-lg italic">
                  Happy Valentine's Day My dear Chinju
                </h2>
                <div className="flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <Heart key={i} className="w-6 h-6 text-rose-400 animate-bounce" style={{ animationDelay: `${i * 200}ms` }} fill="currentColor" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content (Loaded behind or after intro) */}
      <div className={cn(
        "min-h-screen flex flex-col items-center justify-center transition-opacity duration-1000",
        stage === 'main' ? "opacity-100" : "opacity-0"
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
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        </div>

        {/* Animated Floating Hearts Background for Main Page */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-400/30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${100 + Math.random() * 20}%`,
                width: `${20 + Math.random() * 40}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 15}s`
              }}
              fill="currentColor"
            />
          ))}
        </div>

        <main className="relative z-20 text-center space-y-3 px-4 max-w-full pt-20">
          {/* Names with elegant decent font style, black color, and pipe separator */}
          <h1 className="text-5xl md:text-8xl font-headline text-black drop-shadow-md leading-tight animate-slide-up [animation-delay:200ms] py-4 tracking-[0.3em] uppercase mt-20">
            MUTHU | ANISH
          </h1>
          
          <div className="h-px w-48 bg-rose-400/40 mx-auto animate-scale-in [animation-delay:400ms]" />
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Personalized Valentine message */}
            <p className="text-xl md:text-2xl font-headline text-rose-800 animate-slide-up [animation-delay:600ms] tracking-wide font-bold drop-shadow-sm">
              Happy Velantines Day My Dear Sweety | I Love You Di Chinju
            </p>
            
            {/* Nicknames list in a single line, black color, with letter spacing */}
            <div className="py-6 border-y border-rose-300/30 animate-slide-up [animation-delay:800ms] backdrop-blur-sm bg-white/10 rounded-lg">
              <p className="text-[10px] md:text-xs font-body font-bold text-black tracking-[0.4em] uppercase whitespace-nowrap overflow-x-auto no-scrollbar px-6">
                CHINJU | SWOTHTHU | MUWTHEY | BHARIYA | VAVOO | DARLING | MINION | AZHAGI | RAKSHASHI | MILMA
              </p>
            </div>
          </div>
        </main>

        <Navigation />
      </div>
    </div>
  );
}
