
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
        {/* Names with decent font style and wide letter spacing */}
        <h1 className="text-5xl md:text-8xl font-headline text-rose-950 drop-shadow-sm leading-tight animate-slide-up [animation-delay:200ms] py-4 tracking-[0.3em] uppercase">
          MUTHU | ANISH
        </h1>
        
        <div className="h-px w-48 bg-rose-300/60 mx-auto animate-scale-in [animation-delay:400ms]" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Personalized Valentine message */}
          <p className="text-xl md:text-2xl font-headline text-rose-700 animate-slide-up [animation-delay:600ms] tracking-wide">
            HAPPY VALENTINES DAY MY SWEET HEART
          </p>
          
          {/* Nicknames list in a single line, black color, with letter spacing */}
          <div className="py-6 border-y border-rose-200/50 animate-slide-up [animation-delay:800ms]">
            <p className="text-[10px] md:text-xs font-body font-bold text-black tracking-[0.5em] uppercase whitespace-nowrap overflow-x-auto no-scrollbar px-4">
              CHINJU | SWOTHTHU | MUWTHEY | BHARIYA | VAVOO | DARLING | MINION | AZHAGI | RAKSHASHI | MILMA | THANGO | CHELLOM 
            </p>
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
