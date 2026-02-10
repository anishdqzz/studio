import { Navigation } from "@/components/Navigation";
import { Calendar, Cake, Star, Heart, Music, Sparkles, Gift, Diamond } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const specialDates = [
  {
    title: "Our Love Anniversary",
    date: "April 28",
    type: "The Big Day",
    icon: Heart,
    color: "bg-red-100 text-red-600",
    description: "We officially started their journey together. The beginning of forever."
  },
  {
    title: "Our First Meet",
    date: "Sep 16",
    type: "The Big Day",
    icon: Diamond,
    color: "bg-red-100 text-red-600",
    description: "We First Time Meet together at Nenmare Stand You Give a wonderfull Ring for Me."
  },
  {
    title: "Chinju's Birthday",
    date: "September 12",
    type: "Celebration",
    icon: Gift,
    color: "bg-blue-100 text-blue-600",
    description: "The day the world became a more beautiful place."
  },
  {
    title: "Anish's Birthday",
    date: "July 05",
    type: "Celebration",
    icon: Cake,
    color: "bg-pink-100 text-pink-600",
    description: "Celebrating the person who brought light and laughter into Muthu's life."
  },
  {
    title: "Forever & Always",
    date: "Every Day",
    type: "Eternal",
    icon: Sparkles,
    color: "bg-yellow-100 text-yellow-600",
    description: "Every single sunrise shared is a milestone in the beautiful of our love story."
  }
];

export default function DatesPage() {
  return (
    <div className="min-h-screen pb-32 pt-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-20 text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary font-bold">CALENDAR OF LOVE</Badge>
          <h1 className="text-6xl font-headline text-foreground mb-6 italic">Our Precious Moments</h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto font-body">
            Marking the days that changed our lives forever. Every date is a treasure of telling our love story.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialDates.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="group border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm">
                <div className={`h-2 w-full ${item.color.split(' ')[0]}`} />
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {item.type}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-headline italic mb-1 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                    <p className="text-2xl text-primary font-bold">{item.date}</p>
                  </div>
                  <p className="text-muted-foreground text-lg font-body leading-relaxed">{item.description}</p>
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
