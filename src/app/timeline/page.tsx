import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const timelineEvents = [
  {
    date: "16/09/24",
    title: "The Day We Met",
    description: "The first time I came to meet you was at the Nenmara stand. That day, you appeared as an angel...",
    imageUrl: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=480983602474545"
  },
  {
    date: "10/09/2025",
    title: "2nd Meet at Palakkad Fort",
    description: "Cold weather, warm hearts. We spent the half day laughing and exchanging small but meaningful gifts.",
    imageId: "gallery1"
  },
  {
    date: "12/11/2025",
    title: "3rd Meet at Palakkad Fort",
    description: "A beautiful day and your birthday. We took a lot of photos, and it was the first time I gave you a little kiss on your cheek.",
    imageId: "gallery2"
  }
];

export default function TimelinePage() {
  return (
    <div className="min-h-screen pb-32 pt-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-20 text-center animate-fade-in">
          <h1 className="text-6xl font-headline text-foreground mb-6 italic">Our Journey</h1>
          <p className="text-xl text-muted-foreground italic font-body max-w-2xl mx-auto">
            Walking hand in hand through the beautiful story of Muthu and Anish.
          </p>
        </header>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-primary/20 hidden md:block" />
          
          <div className="space-y-16 md:space-y-32">
            {timelineEvents.map((event, index) => {
              const galleryImg = event.imageId ? PlaceHolderImages.find(img => img.id === event.imageId) : null;
              const displayImage = event.imageUrl || (galleryImg?.imageUrl);
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                      {displayImage ? (
                        <Image
                          src={displayImage}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground italic">Capture of a memory</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  <div className="relative flex flex-col items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_rgba(255,100,120,0.5)] border-4 border-background hidden md:block" />
                  </div>

                  <div className="flex-1 w-full space-y-4 text-center md:text-left">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-4xl font-headline text-foreground italic">{event.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed font-body">{event.description}</p>
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
