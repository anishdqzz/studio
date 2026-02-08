import { Navigation } from "@/components/Navigation";
import { Calendar, Cake, Star, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const specialDates = [
  {
    title: "Our Anniversary",
    date: "June 12",
    type: "Love",
    icon: Heart,
    description: "The day Muthu and Anish officially became a couple."
  },
  {
    title: "Anish's Birthday",
    date: "November 23",
    type: "Birthday",
    icon: Cake,
    description: "Celebrating the most amazing person in the world."
  },
  {
    title: "First Trip Anniversary",
    date: "December 28",
    type: "Travel",
    icon: Star,
    description: "When we saw the ocean together for the first time."
  },
  {
    title: "Proposal Anniversary",
    date: "Pending...",
    type: "Future",
    icon: Calendar,
    description: "A beautiful day still to come for us."
  }
];

export default function DatesPage() {
  return (
    <div className="min-h-screen pb-32 pt-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-headline text-foreground mb-4">Our Milestones</h1>
          <p className="text-lg text-muted-foreground">Every day for Muthu and Anish is a gift.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialDates.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="border-primary/10 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary-foreground">
                    {item.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-headline italic mb-1">{item.title}</h3>
                  <p className="text-accent font-bold mb-3">{item.date}</p>
                  <p className="text-muted-foreground text-sm font-body">{item.description}</p>
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
