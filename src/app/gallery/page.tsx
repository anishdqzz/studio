
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GalleryPage() {
  const galleryItems = PlaceHolderImages;

  return (
    <div className="min-h-screen pb-40 pt-24 bg-gradient-to-br from-rose-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-20 text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary font-bold">MEMORY VAULT</Badge>
          <h1 className="text-6xl font-headline text-foreground mb-6 italic">Our Captured Moments</h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            A collection of smiles, adventures, and the beautiful journey of Muthu and Anish.
          </p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => {
            // Helper to get the correct URL string whether it's an imported object or a string path
            const mediaUrl = typeof item.imageUrl === 'string' ? item.imageUrl : item.imageUrl?.src || '';

            return (
              <Card 
                key={item.id} 
                className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 break-inside-avoid bg-white/50 backdrop-blur-sm animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0 relative group">
                  {item.type === 'video' ? (
                    <div className="relative aspect-video bg-black flex items-center justify-center">
                      <video 
                        key={mediaUrl}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        preload="metadata"
                      >
                        <source src={mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.description}
                        width={800}
                        height={1000}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                        data-ai-hint={item.imageHint}
                      />
                    ) : (
                      <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Content coming soon</span>
                      </div>
                    )
                  )}
                  
                  {item.type === 'image' && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-white font-body italic text-lg leading-relaxed">{item.description}</p>
                    </div>
                  )}
                  
                  {item.type === 'video' && (
                    <div className="p-4 bg-white/10 backdrop-blur-md">
                      <p className="text-foreground font-body italic text-sm">{item.description}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <Navigation />
    </div>
  );
}
