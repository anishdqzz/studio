import { Navigation } from "@/components/Navigation";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 flex flex-col items-center justify-center relative overflow-hidden select-none">
      {/* Animated Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-300/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              width: `${20 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <main className="relative z-10 text-center space-y-12 px-4 max-w-full">
        {/* Simplified Header - Only names as requested */}
        <h1 className="text-7xl md:text-9xl font-headline text-rose-950 drop-shadow-sm italic tracking-tighter leading-none animate-slide-up [animation-delay:200ms]">
          Muthu & Anish
        </h1>
        
        <div className="h-px w-32 bg-rose-300 mx-auto animate-scale-in [animation-delay:400ms]" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Personalized Valentine message in a single line */}
          <p className="text-xl md:text-2xl font-headline italic text-rose-700 animate-slide-up [animation-delay:600ms] whitespace-nowrap">
            happy velantines day my dear tiny bharii i love you dii chinjuu
          </p>
          
          {/* Nicknames list in a single line, black color, with letter spacing */}
          <div className="py-4 border-y border-rose-200/50 animate-slide-up [animation-delay:800ms]">
            <p className="text-[10px] md:text-sm font-body font-bold text-black tracking-[0.4em] uppercase whitespace-nowrap overflow-x-auto no-scrollbar px-4">
              CHINJU | SWOTHTHU | MUWTHEY | BHARIYA | VAVOO | DARLING | MINION | AZHAGI | RAKSHASHI | MILMA 
            </p>
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
