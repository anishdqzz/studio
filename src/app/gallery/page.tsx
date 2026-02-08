
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages;

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
          {galleryImages.map((img, index) => (
            <Card 
              key={img.id} 
              className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 break-inside-avoid bg-white/50 backdrop-blur-sm animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative group">
                {img.imageUrl ? (
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    data-ai-hint={img.imageHint}
                  />
                ) : (
                  <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Image coming soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-body italic text-lg leading-relaxed">{img.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
}
