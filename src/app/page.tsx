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

      <main className="relative z-10 text-center space-y-6 animate-fade-in px-4">
        <div className="mb-4 flex justify-center">
          <Heart className="w-16 h-16 text-accent animate-pulse" fill="currentColor" />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-headline text-foreground drop-shadow-sm italic tracking-tighter leading-none">
          Muthu & Anish
        </h1>
        
        <div className="h-px w-24 bg-accent/30 mx-auto my-4" />
        
        <div className="max-w-lg mx-auto">
          <p className="text-2xl md:text-3xl font-headline italic text-accent animate-fade-in [animation-delay:400ms]">
            happy velantines day my dear tiny bharii
          </p>
          <p className="text-xl md:text-2xl font-body mt-2 text-muted-foreground animate-fade-in [animation-delay:600ms]">
            i love you dii chinjuu
          </p>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
