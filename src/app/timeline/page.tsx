
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const timelineEvents = [
  {
    date: "August 15, 2022",
    title: "The Day We Met",
    description: "It felt like the stars aligned. We talked for hours at that little coffee shop, and I knew right then you were special.",
    imageId: "memory1"
  },
  {
    date: "December 24, 2022",
    title: "Our First Christmas",
    description: "Cold weather, warm hearts. We spent the whole day laughing and exchanging small but meaningful gifts.",
    imageId: "memory2"
  },
  {
    date: "June 12, 2023",
    title: "Our First Anniversary",
    description: "A beautiful dinner by the lake. One year of growth, love, and building our future together.",
    imageId: "memory3"
  }
];

export default function TimelinePage() {
  return (
    <div className="min-h-screen pb-32 pt-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 text-center animate-fade-in">
          <h1 className="text-5xl font-headline text-foreground mb-4">Our Journey</h1>
          <p className="text-lg text-muted-foreground italic">Walking hand in hand through life.</p>
        </header>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-primary/30 hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const memoryImg = PlaceHolderImages.find(img => img.id === event.imageId);
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                      {memoryImg && (
                        <Image
                          src={memoryImg.imageUrl}
                          alt={event.title}
                          fill
                          className="object-cover"
                          data-ai-hint={memoryImg.imageHint}
                        />
                      )}
                    </div>
                  </div>

                  <div className="relative flex flex-col items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-background z-10 hidden md:block" />
                  </div>

                  <div className="flex-1 w-full space-y-2 text-center md:text-left">
                    <span className="text-accent font-body font-bold text-sm tracking-widest uppercase">{event.date}</span>
                    <h3 className="text-3xl font-headline text-foreground italic">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
