
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Shield, Zap, Heart, Trophy, Sun } from "lucide-react";

const traits = [
  {
    title: "The Protector",
    description: "Always standing strong, making the world feel safe and secure for the ones he loves.",
    icon: Shield,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "A Golden Heart",
    description: "Kindness that knows no bounds and a soul that radiates warmth to everyone around him.",
    icon: Heart,
    color: "text-rose-500",
    bg: "bg-rose-50"
  },
  {
    title: "Pure Energy",
    description: "A spirit that never gives up, chasing dreams with passion and determination.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "The Sun",
    description: "A smile that brightens even the darkest days and a laugh that is contagious.",
    icon: Sun,
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    title: "True Champion",
    description: "Striving for greatness in everything he does, never settling for less than his best.",
    icon: Trophy,
    color: "text-purple-500",
    bg: "bg-purple-50"
  }
];

export default function UniqueManPage() {
  return (
    <div className="min-h-screen pb-40 pt-24 bg-gradient-to-br from-slate-50 to-rose-50">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary font-bold tracking-widest uppercase">
            ONE OF A KIND
          </Badge>
          <h1 className="text-6xl font-headline text-foreground mb-6 italic">The Unique Man</h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto italic">
            "Anish, you are more than just a person; you are a collection of extraordinary traits that make my world complete."
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white/80 backdrop-blur-sm rounded-[2rem]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${trait.bg} ${trait.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-headline italic mb-3 text-foreground">{trait.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{trait.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <section className="mt-20 p-12 bg-white/60 backdrop-blur-md rounded-[3rem] border border-rose-100 shadow-xl text-center animate-slide-up">
          <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
            <User className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-headline italic mb-6 text-primary">Uniquely Yours</h2>
          <p className="text-xl font-body text-foreground leading-relaxed max-w-2xl mx-auto italic">
            "In a world of billions, there is only one Anish. Your strength, your kindness, and the way you love are what make you the most unique man I've ever known."
          </p>
        </section>
      </div>
      <Navigation />
    </div>
  );
}
