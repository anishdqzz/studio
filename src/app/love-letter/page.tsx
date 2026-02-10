
"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { generateLoveLetter } from "@/lib/ai/flows/generate-love-letter";
import { Mail, Sparkles, Loader2, Heart, Send, CheckCircle2, Settings, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// TIP: You can paste your Formspree URL here to save it permanently:
// Example: "https://formspree.io/f/your-unique-id"
const HARDCODED_FORMSPREE_URL = ""; 

export default function LoveLetterPage() {
  const { toast } = useToast();
  const [messages, setMessages] = useState("");
  const [memories, setMemories] = useState("");
  const [tone, setTone] = useState("romantic");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formspreeUrl, setFormspreeUrl] = useState(HARDCODED_FORMSPREE_URL);

  async function handleGenerate() {
    if (!messages || !memories) {
      toast({
        title: "Missing details",
        description: "Please fill in some conversations and memories first.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setSent(false);
    try {
      const output = await generateLoveLetter({
        previousMessages: messages,
        sharedMemories: memories,
        tone,
      });
      setResult(output.loveLetter);
    } catch (error) {
      console.error(error);
      toast({
        title: "Generation failed",
        description: "Something went wrong while writing the letter.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleSendEmail() {
    if (!result) return;
    if (!formspreeUrl) {
      toast({
        title: "URL Missing",
        description: "Please enter your Formspree Endpoint URL in the setup section below.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          message: result,
          subject: "A Special Love Letter for Chinju",
          from_name: "Anish",
          to_name: "Chinju"
        }),
      });

      if (response.ok) {
        setSent(true);
        toast({
          title: "Letter Sent!",
          description: "Your message has been successfully delivered via Formspree.",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Sending failed",
        description: "Could not send. Please verify your Formspree Endpoint URL is correct.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen pb-32 pt-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-headline text-foreground mb-4 italic">Love Email</h1>
          <p className="text-lg text-muted-foreground font-body">Write and send a beautiful message to Chinju's inbox.</p>
        </header>

        {/* Step 1: Formspree Setup */}
        <Card className="mb-12 border-rose-200 bg-white/60 backdrop-blur-md shadow-xl border-2 overflow-hidden">
          <div className="bg-rose-500 px-6 py-2">
            <p className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Settings className="w-3 h-3" /> Step 1: Mail Setup
            </p>
          </div>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-1 space-y-2 w-full">
                <div className="flex justify-between items-center">
                  <Label htmlFor="formspree" className="text-sm font-bold text-rose-700">Your Formspree Endpoint</Label>
                  <a 
                    href="https://formspree.io/forms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-rose-500 hover:underline flex items-center gap-1"
                  >
                    Get URL from Formspree <ExternalLink className="w-2 h-2" />
                  </a>
                </div>
                <Input 
                  id="formspree" 
                  placeholder="https://formspree.io/f/mqkazpoy"
                  value={formspreeUrl}
                  onChange={(e) => setFormspreeUrl(e.target.value)}
                  className="bg-white border-rose-200 focus-visible:ring-rose-400 h-12"
                />
                <p className="text-[10px] text-muted-foreground italic">
                  Paste the "Endpoint" URL from your Formspree dashboard here.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Step 2: Input Details */}
          <div className="space-y-6">
            <Card className="border-primary/20 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-headline italic flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-rose-500" />
                  Step 2: Personalize
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="messages" className="font-body font-bold">What's on your mind?</Label>
                  <Textarea 
                    id="messages" 
                    placeholder="e.g. Thinking of you, our morning coffee chat..."
                    className="h-24 bg-white/50 border-rose-100"
                    value={messages}
                    onChange={(e) => setMessages(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="memories" className="font-body font-bold">A Shared Memory</Label>
                  <Textarea 
                    id="memories" 
                    placeholder="e.g. That rainy walk in Palakkad..."
                    className="h-24 bg-white/50 border-rose-100"
                    value={memories}
                    onChange={(e) => setMemories(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone" className="font-body font-bold">Vibe</Label>
                  <Input 
                    id="tone" 
                    placeholder="Romantic, poetic, cute..."
                    className="bg-white/50 border-rose-100"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={handleGenerate} 
                  disabled={loading}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-body py-6"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Sparkles className="w-5 h-5 mr-2" />}
                  Create Heartfelt Letter
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Step 3: Result & Send */}
          <div className="space-y-6">
            {result ? (
              <div className="space-y-4 animate-fade-in">
                <Card className="border-accent/20 shadow-xl bg-white/80 min-h-[400px] backdrop-blur-sm overflow-hidden flex flex-col">
                  <CardHeader className="text-center border-b border-muted bg-rose-50/30">
                    <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" fill="currentColor" />
                    <CardTitle className="font-headline italic text-2xl">A Letter for Chinju</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-8 px-8 whitespace-pre-wrap font-body text-foreground leading-relaxed italic flex-1">
                    {result}
                  </CardContent>
                  <CardFooter className="bg-rose-50/30 border-t border-muted pt-6">
                    <Button 
                      onClick={handleSendEmail} 
                      disabled={sending || sent}
                      className={cn(
                        "w-full transition-all duration-500 py-6 text-lg",
                        sent ? "bg-green-500 hover:bg-green-600" : "bg-rose-600 hover:bg-rose-700"
                      )}
                    >
                      {sending ? (
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      ) : sent ? (
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {sent ? "Sent to Her Inbox!" : "Send to Chinju"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-rose-200 rounded-2xl text-muted-foreground bg-white/30 backdrop-blur-sm min-h-[480px]">
                <Mail className="w-16 h-16 mb-4 opacity-20 text-rose-400" />
                <h3 className="text-xl font-headline italic mb-2">Step 3: Preview & Send</h3>
                <p className="font-body text-sm max-w-[200px]">Once you generate a letter, it will appear here for you to review and email.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
