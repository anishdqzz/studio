import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Sun, Moon, Cloud, Star, Heart } from "lucide-react";

const lifeAspects = [
  {
    title: "Our Shared Dreams",
    description: "Building a world where we wake up together every day, exploring new places and creating a home filled with laughter.",
    icon: Cloud,
    color: "bg-blue-50 text-blue-500",
  },
  {
    title: "Simple Joys",
    description: "The little things that make life beautiful: long talks, rainy afternoon snacks, and the way your hand fits perfectly in mine.",
    icon: Sun,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Strength Together",
    description: "Facing every challenge as a team, knowing that no matter how dark the night gets, we have each other's light.",
    icon: Moon,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Our Values",
    description: "Honesty, loyalty, and an endless amount of love. These are the foundations of the life we are building.",
    icon: Star,
    color: "bg-rose-50 text-rose-500",
  }
];

export default function LifePage() {
  return (
    <div className="min-h-screen pb-40 pt-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-20 text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary font-bold">THE BEAUTY OF US</Badge>
          <h1 className="text-6xl font-headline text-foreground mb-6 italic">Life with You</h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto italic">
            "Life isn't about the breaths we take, but the moments that take our breath away."
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifeAspects.map((aspect, index) => {
            const Icon = aspect.icon;
            return (
              <Card key={index} className="border-none shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-3 rounded-2xl ${aspect.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-headline italic text-2xl">{aspect.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {aspect.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <section className="mt-20 p-12 bg-rose-500 text-white rounded-[3rem] text-center shadow-2xl animate-slide-up">
          <Heart className="w-12 h-12 mx-auto mb-6 animate-pulse" fill="white" />
          <h2 className="text-4xl font-headline italic mb-4">The Best Is Yet To Come</h2>
          <p className="text-rose-100 font-body text-lg max-w-xl mx-auto">
            Every day with you, Chinju, is a new chapter in the most beautiful book ever written. I'm so lucky to share this life with you.
          </p>
        </section>
      </div>
      <Navigation />
    </div>
  );
}
