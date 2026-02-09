
"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import bg from './Picsart_26-02-08_16-30-35-686.jpg.jpeg';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const [stage, setStage] = useState<'intro' | 'message' | 'main'>('intro');

  const handleStart = () => {
    setStage('message');
    // Show the message for 4 seconds then go to main page
    setTimeout(() => {
      setStage('main');
    }, 4500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden select-none bg-black">
      
      {/* Intro Overlay Stage */}
      {stage !== 'main' && (
        <div className={cn(
          "fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-1000",
          stage === 'message' ? "bg-rose-950/95 backdrop-blur-xl" : "bg-black"
        )}>
          {/* Floating Hearts for Intro */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(stage === 'message' ? 50 : 30)].map((_, i) => (
              <Heart
                key={i}
                className={cn(
                  "absolute text-rose-500/40 animate-float",
                  stage === 'message' && "text-rose-400/60"
                )}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                  width: `${15 + Math.random() * 60}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${stage === 'message' ? 5 + Math.random() * 5 : 8 + Math.random() * 10}s`
                }}
                fill="currentColor"
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-6 max-w-2xl">
            {stage === 'intro' ? (
              <div className="animate-scale-in space-y-8">
                <div className="flex justify-center mb-4">
                   <Heart className="w-16 h-16 text-rose-600 animate-pulse" fill="currentColor" />
                </div>
                <Button 
                  onClick={handleStart}
                  className="bg-transparent border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white text-2xl px-16 py-10 rounded-full font-headline tracking-widest transition-all duration-700 shadow-[0_0_30px_rgba(244,63,94,0.4)] group"
                >
                  <span className="group-hover:scale-110 transition-transform block">CLICK CHEII BHARII</span>
                </Button>
              </div>
            ) : (
              <div className="animate-fade-in space-y-8">
                <div className="relative inline-block">
                  <Heart className="w-24 h-24 text-rose-500 mx-auto animate-pulse scale-110" fill="currentColor" />
                  <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-spin" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-7xl font-names text-white drop-shadow-[0_0_15px_rgba(244,63,94,0.8)] leading-relaxed">
                    Happy Valentine's Day
                  </h2>
                  <p className="text-3xl md:text-5xl font-names text-rose-200 drop-shadow-lg">
                    My dear <span className="text-rose-400 font-bold animate-pulse">Chinju</span>
                  </p>
                </div>
                <div className="flex justify-center gap-4 pt-6">
                  {[...Array(5)].map((_, i) => (
                    <Heart 
                      key={i} 
                      className="w-8 h-8 text-rose-400 animate-bounce" 
                      style={{ 
                        animationDelay: `${i * 200}ms`,
                        opacity: 1 - (i * 0.15)
                      }} 
                      fill="currentColor" 
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={cn(
        "min-h-screen flex flex-col items-center justify-center transition-opacity duration-1500",
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
          <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />
        </div>

        {/* Animated Floating Hearts Background for Main Page */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {[...Array(25)].map((_, i) => (
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

        <main className="relative z-20 text-center space-y-6 px-4 max-w-full pt-10">
          {/* Names with elegant tracking and uppercase style */}
          <h1 className="text-5xl md:text-8xl font-headline text-black drop-shadow-sm leading-tight animate-slide-up [animation-delay:200ms] py-4 tracking-[0.25em] uppercase mt-12">
            MUTHU | ANISH
          </h1>
          
          <div className="h-0.5 w-64 bg-rose-400/40 mx-auto animate-scale-in [animation-delay:400ms]" />
          
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Personalized Valentine message */}
            <p className="text-xl md:text-3xl font-headline text-rose-900 animate-slide-up [animation-delay:600ms] tracking-wide font-bold drop-shadow-sm">
              Happy Valentine's Day My Dear Sweety <br className="md:hidden" /> | I Love You Di Chinju
            </p>
            
            {/* Nicknames list */}
            <div className="py-8 border-y border-rose-300/40 animate-slide-up [animation-delay:800ms] backdrop-blur-md bg-white/15 rounded-2xl shadow-inner">
              <p className="text-[10px] md:text-sm font-body font-bold text-black tracking-[0.45em] uppercase whitespace-nowrap overflow-x-auto no-scrollbar px-10">
                CHINJU • SWOTHTHU • MUWTHEY • BHARIYA • VAVOO • DARLING • MINION • AZHAGI • RAKSHASHI • MILMA
              </p>
            </div>
          </div>
        </main>

        <Navigation />
      </div>
    </div>
  );
}
