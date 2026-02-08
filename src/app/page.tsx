
import { Navigation } from "@/components/Navigation";
import { Heart } from "lucide-react";
import Image from "next/image";
import bg from './Picsart_26-02-08_16-30-35-686.jpg.jpeg';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden select-none bg-rose-50">
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

      {/* Animated Floating Hearts Background */}
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

      <main className="relative z-20 text-center space-y-12 px-4 max-w-full">
        {/* Names with elegant decent font style and letter spacing */}
        <h1 className="text-5xl md:text-8xl font-headline text-rose-950 drop-shadow-md leading-tight animate-slide-up [animation-delay:200ms] py-4 tracking-[0.3em] uppercase">
          MUTHU & ANISH
        </h1>
        
        <div className="h-px w-48 bg-rose-400/40 mx-auto animate-scale-in [animation-delay:400ms]" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Personalized Valentine message */}
          <p className="text-xl md:text-2xl font-headline text-rose-800 animate-slide-up [animation-delay:600ms] tracking-wide font-bold drop-shadow-sm">
            happy velantines day my dear tiny bharii i love you dii chinjuu
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
  );
}
