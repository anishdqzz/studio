import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Heart, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-b from-secondary/50 to-background overflow-hidden relative">
      {/* Animated Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              width: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <header className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover brightness-75 scale-105"
              priority
              data-ai-hint={heroImage.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
        )}
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-fade-in space-y-4">
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-full border border-white/30 shadow-2xl">
            <Heart className="w-16 h-16 text-accent animate-pulse" fill="currentColor" />
          </div>
          <h1 className="text-7xl md:text-9xl font-headline text-white drop-shadow-2xl italic tracking-tighter">
            Muthu & Anish
          </h1>
          <div className="flex items-center gap-3 text-white/90 font-body text-xl md:text-2xl bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-accent" />
            <span>Our Eternal Love Story</span>
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12 space-y-32 relative z-10">
        <section className="text-center space-y-6">
          <h2 className="text-5xl font-headline text-foreground italic">Inseparable Hearts</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-body">
            Every moment shared is a page in our beautiful book of life. This space is a vibrant tribute 
            to the laughter, the journeys, and the quiet promises that define Muthu and Anish.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-bold tracking-widest uppercase">
              The Journey
            </div>
            <h3 className="text-5xl font-headline text-foreground leading-tight italic">
              "Two hearts, one soul, and a lifetime of adventures ahead."
            </h3>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              From the very first hello to the countless 'I love yous', our bond has grown into 
              something more beautiful than we ever imagined.
            </p>
            <div className="flex items-center gap-4 text-primary font-headline text-2xl italic">
              <span>Muthu</span>
              <Heart className="w-5 h-5 fill-current" />
              <span>Anish</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(255,100,150,0.3)] rotate-2 hover:rotate-0 transition-transform duration-700 group">
             <Image
                src="https://picsum.photos/seed/love-main/800/1000"
                alt="Love"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                data-ai-hint="couple hands"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
          </div>
        </section>
      </main>

      <Navigation />
    </div>
  );
}
