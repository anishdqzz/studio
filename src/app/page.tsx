import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Heart } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

  return (
    <div className="min-h-screen pb-24">
      <header className="relative h-[80vh] w-full overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover brightness-90"
              priority
              data-ai-hint={heroImage.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
          </div>
        )}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 animate-fade-in">
          <Heart className="w-12 h-12 text-accent mb-6 animate-pulse" fill="currentColor" />
          <h1 className="text-6xl md:text-8xl font-headline text-foreground mb-4 italic">
            Muthu & Anish
          </h1>
          <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-2xl mx-auto">
            A celebration of our love, our journey, and every beautiful moment we've shared together.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-24">
        <section className="text-center">
          <h2 className="text-4xl font-headline text-foreground mb-6">Our Eternal Flame</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is our space. A digital sanctuary where Muthu and Anish can revisit their favorite memories,
            celebrate special milestones, and keep their love growing stronger every day.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h3 className="text-3xl font-headline text-accent italic">"In all the world, there is no heart for me like yours."</h3>
            <p className="text-muted-foreground">— Muthu & Anish</p>
          </div>
          <div className="order-1 md:order-2 relative aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3">
             <Image
                src="https://picsum.photos/seed/love-main/600/600"
                alt="Love"
                fill
                className="object-cover"
                data-ai-hint="couple hands"
              />
          </div>
        </section>
      </main>

      <Navigation />
    </div>
  );
}
