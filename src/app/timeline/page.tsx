import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// Local photo imports
import photo1 from "./birthday.jpeg";
import photo2 from "./kummattii.jpeg";
import photo3 from "./brown shirt.jpeg";
import photo4 from "./first meet.jpeg";
import photo5 from "./meroon tshirt.jpeg";
import photo6 from "./white tshirt.jpeg";
import photo7 from "./park.jpeg";

const timelineEvents = [
  {
    date: "16/09/24",
    title: "The Day We Met",
    description: "The first time I came to meet you was at the Nenmara stand. That day, you appeared as an angel...",
    image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=480983602474545"
  },
  {
    date: "10/09/2025",
    title: "2nd Meet at kunissery kummatti",
    description: "Cold weather, warm hearts. i saw you with my mama and your chechi, you wear white t-shirt and blue baggy pant HaHaHaHa kannil oru Kannadayum Indayirinnu pookiee Eeee .",
    image: photo2
  },
  {
    date: "12/11/2025",
    title: "3rd Meet at 1st Palakkad Fort meet",
    description: "A beautiful day. We share more conversation, and i nervoused to talk with you .",
    image: photo4
  },
  {
    date: "12/11/2025",
    title: "4th Meet at Palakkad Fort meet",
    description: "This day is an unforgettable day in my life, your birthday. We took a lot of photos of us. I gave you my first kiss.",
    image: photo1
  },
  {
    date: "23/11/2025",
    title: "5th Meet at Palakkad Fort Park",
    description: "You came wearing a red dress. You were still sleepy-eyed. The chapati you made was delicious.",
    image: photo7
  },
  {
    date: "03/12/2025",
    title: "6th Meet at Palakkad Fort meet",
    description: "This day you came in a white dress with black dots. You slapped me on the cheek with your flower-like hands.",
    image: photo5
  },
  {
    date: "02/01/2026",
    title: "7th Meet at Palakkad Fort meet",
    description: "We went to the Yakara temple in Palakkad because I wanted to go to the temple on the first day of the year and I wanted to go with you. You were so beautiful, first time we together travelled on auto riksha.",
    image: photo3
  },
  {
    date: "16/01/2026",
    title: "8th Meet at Palakkad Fort meet",
    description: "On this day you came wearing a white T-shirt, blue baggy pant with specs. We took a lot of photos. I hugged you. The radish sambar you made is delicious.",
    image: photo6
  },
  {
    date: "06/02/2026",
    title: "9th Meet at Palakkad Fort meet",
    description: "Every minute you were with me was a moment I forgot about myself. We went to eat mandhi for the first time.",
    image: "https://images.unsplash.com/photo-1573728303123-6d984b991947?q=80&w=1080"
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
              const isEven = index % 2 === 0;
              const displayImage = event.image;

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