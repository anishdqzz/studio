
import { Navigation } from "@/components/Navigation";
import { Music, Film, MapPin, Coffee, Utensils, Book } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const favoriteCategories = [
  {
    title: "Songs",
    icon: Music,
    items: ["Lover - Taylor Swift", "Yellow - Coldplay", "La Vie En Rose", "Perfect - Ed Sheeran"]
  },
  {
    title: "Movies",
    icon: Film,
    items: ["About Time", "Pride & Prejudice", "The Notebook", "Howl's Moving Castle"]
  },
  {
    title: "Places",
    icon: MapPin,
    items: ["The Botanical Gardens", "Our Rooftop", "The Coastline", "The Little Bakery"]
  },
  {
    title: "Drinks & Food",
    icon: Coffee,
    items: ["Matcha Latte", "Tiramisu", "Homemade Pasta", "Fresh Peaches"]
  }
];

export default function FavoritesPage() {
  return (
    <div className="min-h-screen pb-32 pt-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-headline text-foreground mb-4">Her Favorite Things</h1>
          <p className="text-lg text-muted-foreground italic">Little pieces of what makes her wonderful.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {favoriteCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Card key={index} className="bg-white/50 border-none shadow-sm animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-headline italic text-2xl">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground font-body">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <section className="mt-16 p-8 bg-accent/5 rounded-3xl text-center border border-accent/10">
          <h2 className="text-3xl font-headline italic mb-4 text-accent">Personal Note</h2>
          <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            These are just some of the things you love, but my favorite thing of all will always be you.
          </p>
        </section>
      </div>
      <Navigation />
    </div>
  );
}
