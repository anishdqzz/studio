import { Navigation } from "@/components/Navigation";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-accent/20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              width: `${20 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 15}s`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <main className="relative z-10 text-center space-y-8 animate-fade-in px-4">
        <div className="mb-8 flex justify-center">
          <Heart className="w-20 h-20 text-accent animate-pulse" fill="currentColor" />
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-headline text-foreground drop-shadow-sm italic tracking-tighter leading-none">
          Muthu & Anish
        </h1>
        
        <div className="h-px w-32 bg-accent/30 mx-auto" />
      </main>

      <Navigation />
    </div>
  );
}
