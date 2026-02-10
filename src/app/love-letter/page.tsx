"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { generateLoveLetter } from "@/lib/ai/flows/generate-love-letter";
import { Mail, Sparkles, Loader2, Heart, Send, CheckCircle2, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function LoveLetterPage() {
  const { toast } = useToast();
  const [messages, setMessages] = useState("");
  const [memories, setMemories] = useState("");
  const [tone, setTone] = useState("romantic");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [formspreeUrl, setFormspreeUrl] = useState("");

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
        title: "Configuration Required",
        description: "Please enter your Formspree Endpoint URL in the settings above.",
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
        description: "Could not send the email. Please check your Formspree URL.",
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
          <p className="text-lg text-muted-foreground font-body">Draft and send something heartfelt for Chinju.</p>
        </header>

        {/* Formspree Configuration */}
        <Card className="mb-8 border-rose-100 bg-white/50 backdrop-blur-sm">
          <CardHeader className="py-4">
            <CardTitle className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
              <Settings className="w-4 h-4" />
              Formspree Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-4 pt-0">
            <div className="flex gap-4 items-end">
              <div className="flex-1 space-y-1">
                <Label htmlFor="formspree" className="text-xs">Formspree Endpoint URL</Label>
                <Input 
                  id="formspree" 
                  placeholder="https://formspree.io/f/your-id"
                  value={formspreeUrl}
                  onChange={(e) => setFormspreeUrl(e.target.value)}
                  className="bg-white/80 border-rose-100 text-xs"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border-primary/20 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-headline italic flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-rose-500" />
                  Personalize it
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="messages" className="font-body">Recent Conversations</Label>
                  <Textarea 
                    id="messages" 
                    placeholder="e.g. Our talk about the future, the funny joke today..."
                    className="h-24 bg-white/50 border-rose-100"
                    value={messages}
                    onChange={(e) => setMessages(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="memories" className="font-body">A Special Memory</Label>
                  <Textarea 
                    id="memories" 
                    placeholder="e.g. Our first walk at the park..."
                    className="h-24 bg-white/50 border-rose-100"
                    value={memories}
                    onChange={(e) => setMemories(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone" className="font-body">Tone of Voice</Label>
                  <Input 
                    id="tone" 
                    placeholder="Romantic, poetic, short..."
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
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-body"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Mail className="w-4 h-4 mr-2" />}
                  Generate Letter
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="space-y-6">
            {result ? (
              <div className="space-y-4 animate-fade-in">
                <Card className="border-accent/20 shadow-xl bg-white/80 min-h-[400px] backdrop-blur-sm overflow-hidden">
                  <CardHeader className="text-center border-b border-muted bg-rose-50/30">
                    <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" fill="currentColor" />
                    <CardTitle className="font-headline italic text-2xl">Generated for Chinju</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-8 px-8 whitespace-pre-wrap font-body text-foreground leading-relaxed italic">
                    {result}
                  </CardContent>
                  <CardFooter className="bg-rose-50/30 border-t border-muted pt-6">
                    <Button 
                      onClick={handleSendEmail} 
                      disabled={sending || sent}
                      className={cn(
                        "w-full transition-all duration-500",
                        sent ? "bg-green-500 hover:bg-green-600" : "bg-rose-600 hover:bg-rose-700"
                      )}
                    >
                      {sending ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : sent ? (
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {sent ? "Sent to Chinju!" : "Send via Formspree"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-rose-200 rounded-2xl text-muted-foreground bg-white/30 backdrop-blur-sm min-h-[400px]">
                <Mail className="w-12 h-12 mb-4 opacity-30 text-rose-400" />
                <p className="font-body italic text-lg">Your generated letter will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
