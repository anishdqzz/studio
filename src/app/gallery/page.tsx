
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter((img) => img.id.startsWith("gallery") || img.id.startsWith("memory"));

  return (
    <div className="min-h-screen pb-32 pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-headline text-foreground mb-4">Our Photo Gallery</h1>
          <p className="text-lg text-muted-foreground">Freezing our favorite moments in time.</p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <Card key={img.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-500 break-inside-avoid">
              <CardContent className="p-0 relative group">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint={img.imageHint}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-body italic text-sm">{img.description}</p>
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
