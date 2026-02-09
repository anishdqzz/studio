import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, ShieldCheck, Star } from "lucide-react";

export default function LifePage() {
  return (
    <div className="min-h-screen pb-40 pt-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 text-center animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary font-bold tracking-widest uppercase">
            Life Chapter
          </Badge>
          <h1 className="text-6xl font-headline text-foreground mb-6 italic">Futur Goals</h1>
          <div className="h-px w-24 bg-rose-300 mx-auto" />
        </header>

        <section className="mb-20 animate-slide-up [animation-delay:200ms]">
          <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-md overflow-hidden rounded-[3rem]">
            <CardContent className="p-12 md:p-16 text-center">
              <Heart className="w-12 h-12 text-rose-500 mx-auto mb-8 animate-pulse" fill="currentColor" />
              <p className="text-2xl md:text-3xl font-headline italic leading-relaxed text-foreground">
                "The moment I click the 'Life' button and step into a new page with you, my world will change forever. 
                In that new chapter, I promise to look after you with the tenderness and innocence one shows a little baby. 
                I will be your safe haven, your comfort, and your constant protector."
              </p>
              <p className="mt-8 text-2xl md:text-3xl font-headline italic leading-relaxed text-foreground">
                "But my love isn't just about keeping you safe; it’s about helping you fly. 
                I will stand right beside you through every struggle and every triumph, dedicated to helping you achieve all your dreams."
              </p>
              <p className="mt-8 text-2xl md:text-3xl font-headline italic leading-relaxed text-foreground">
                "Whatever you've wished for, we will reach for it together. I won't just be a witness to your success—I will be the hand you hold as you make every one of those dreams a reality."
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="border-none shadow-lg bg-white/60 backdrop-blur-sm group hover:-translate-y-2 transition-all duration-500">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-headline italic text-xl mb-2">Safe Haven</h3>
              <p className="text-muted-foreground text-sm font-body">Thande Koode Irikkumbo Njn Sworgathil Ulla Pole Indavudo Koche.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white/60 backdrop-blur-sm group hover:-translate-y-2 transition-all duration-500">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-headline italic text-xl mb-2">I Support You Fly</h3>
              <p className="text-muted-foreground text-sm font-body">Nee Ninde Dream And Achivement Complete Aakkan Njn Ennum Support Cheiyum Vavoo.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white/60 backdrop-blur-sm group hover:-translate-y-2 transition-all duration-500">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-headline italic text-xl mb-2">Our Dreams</h3>
              <p className="text-muted-foreground text-sm font-body">Oru Kunj Family Athil Njn Nammande Makkal Thats Enough For Me.</p>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center animate-fade-in [animation-delay:800ms]">
          <p className="font-names text-4xl text-rose-500">Anish | Chinju</p>
          <p className="text-muted-foreground mt-2 uppercase tracking-[0.3em] text-xs">Forever & Always</p>
        </footer>
      </div>
      <Navigation />
    </div>
  );
}
