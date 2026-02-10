"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { generateLoveLetter } from "@/lib/ai/flows/generate-love-letter";
import { Mail, Sparkles, Loader2, Heart } from "lucide-react";

export default function LoveLetterPage() {
  const [messages, setMessages] = useState("");
  const [memories, setMemories] = useState("");
  const [tone, setTone] = useState("romantic");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!messages || !memories) return;
    setLoading(true);
    try {
      const output = await generateLoveLetter({
        previousMessages: messages,
        sharedMemories: memories,
        tone,
      });
      setResult(output.loveLetter);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen pb-32 pt-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-headline text-foreground mb-4 italic">Love Email</h1>
          <p className="text-lg text-muted-foreground font-body">Draft something heartfelt and personal for Chinju.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border-primary/20 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-headline italic flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-rose-500" />
                  Details for your message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="messages" className="font-body">What have we talked about lately?</Label>
                  <Textarea 
                    id="messages" 
                    placeholder="e.g. Our dream trip, the funny moment from earlier..."
                    className="h-24 bg-white/50 border-rose-100"
                    value={messages}
                    onChange={(e) => setMessages(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="memories" className="font-body">A specific memory to mention?</Label>
                  <Textarea 
                    id="memories" 
                    placeholder="e.g. The first time we met at Nenmara stand..."
                    className="h-24 bg-white/50 border-rose-100"
                    value={memories}
                    onChange={(e) => setMemories(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone" className="font-body">Tone of the letter</Label>
                  <Input 
                    id="tone" 
                    placeholder="Romantic, poetic, funny, short..."
                    className="bg-white/50 border-rose-100"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleGenerate} 
                  disabled={loading || !messages || !memories}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-body"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Mail className="w-4 h-4 mr-2" />}
                  Generate Love Email
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            {result ? (
              <Card className="border-accent/20 shadow-xl bg-white/80 animate-fade-in min-h-[400px] backdrop-blur-sm">
                <CardHeader className="text-center border-b border-muted">
                  <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" fill="currentColor" />
                  <CardTitle className="font-headline italic text-2xl">A Message for You</CardTitle>
                </CardHeader>
                <CardContent className="pt-8 px-8 whitespace-pre-wrap font-body text-foreground leading-relaxed italic">
                  {result}
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-rose-200 rounded-2xl text-muted-foreground bg-white/30 backdrop-blur-sm">
                <Mail className="w-12 h-12 mb-4 opacity-30 text-rose-400" />
                <p className="font-body italic text-lg">Fill in the details and generate an email to see it appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}