import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Heart, Sparkles, Quote } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const malayalamQuotes = [
  {
    text: "പ്രണയം എന്നത് വാക്കുകൾക്ക് അതീതമാണ്.",
    translation: "Love is beyond words.",
  },
  {
    text: "നീ എന്റെ പ്രാണനാണ്, എന്റെ ലോകവും.",
    translation: "You are my soul, and my world.",
  },
  {
    text: "നമ്മുടെ സ്നേഹം എന്നും നിലനിൽക്കട്ടെ.",
    translation: "May our love last forever.",
  },
  {
    text: "നീ കൂടെയുള്ളപ്പോൾ ലോകം എത്ര മനോഹരം!",
    translation: "How beautiful the world is when you are with me!",
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-b from-secondary/50 to-background overflow-hidden relative">
      {/* Animated Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              width: `${20 + Math.random() * 50}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 10}s`
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
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>
        )}
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-fade-in space-y-6">
          <div className="bg-white/30 backdrop-blur-lg p-10 rounded-full border border-white/40 shadow-2xl scale-110">
            <Heart className="w-16 h-16 text-accent animate-pulse" fill="currentColor" />
          </div>
          <h1 className="text-7xl md:text-9xl font-headline text-white drop-shadow-2xl italic tracking-tighter">
            Muthu & Anish
          </h1>
          <div className="flex items-center gap-4 text-white font-body text-xl md:text-2xl bg-accent/40 px-8 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="font-bold tracking-wide">OUR ETERNAL LOVE STORY</span>
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 mt-20 space-y-32 relative z-10">
        <section className="text-center space-y-8 animate-fade-in">
          <h2 className="text-6xl font-headline text-foreground italic">Inseparable Hearts</h2>
          <p className="text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-body italic">
            "Every moment shared is a page in our beautiful book of life. This space is a vibrant tribute 
            to the laughter, the journeys, and the quiet promises that define Muthu and Anish."
          </p>
        </section>

        {/* Malayalam Quotes Section */}
        <section className="py-12">
          <div className="text-center mb-16">
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">
              Pranayam - പ്രണയം
            </span>
            <h2 className="text-5xl font-headline text-foreground italic">Words of the Heart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {malayalamQuotes.map((quote, idx) => (
              <Card key={idx} className="bg-white/60 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent" />
                <CardContent className="p-10 relative">
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  <div className="relative z-10 space-y-4">
                    <p className="text-3xl font-headline text-foreground leading-snug italic">
                      {quote.text}
                    </p>
                    <div className="h-px w-12 bg-accent/30" />
                    <p className="text-lg text-muted-foreground font-body">
                      {quote.translation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pb-20">
          <div className="space-y-10 animate-fade-in">
            <div className="inline-block px-6 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold tracking-widest uppercase shadow-sm">
              THE JOURNEY
            </div>
            <h3 className="text-6xl font-headline text-foreground leading-tight italic">
              "Two hearts, one soul, and a lifetime of adventures ahead."
            </h3>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              From the very first hello to the countless 'I love yous', our bond has grown into 
              something more beautiful than we ever imagined.
            </p>
            <div className="flex items-center gap-6 text-primary font-headline text-4xl italic">
              <span className="hover:text-accent transition-colors">Muthu</span>
              <Heart className="w-8 h-8 fill-current text-accent animate-bounce" />
              <span className="hover:text-accent transition-colors">Anish</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_30px_60px_rgba(255,100,150,0.4)] rotate-3 hover:rotate-0 transition-all duration-1000 group">
             <Image
                src="https://picsum.photos/seed/love-main/800/1000"
                alt="Love"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                data-ai-hint="couple hands"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-1000" />
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <p className="font-headline italic text-xl">"Forever isn't long enough when I'm with you."</p>
              </div>
          </div>
        </section>
      </main>

      <Navigation />
    </div>
  );
}
