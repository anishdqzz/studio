"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Send, Loader2, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgwgenw"; 

export default function LoveLetterPage() {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSendEmail() {
    if (!message) {
      toast({
        title: "Empty Message",
        description: "Please write something for Anish first.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          message: message,
          subject: "A Special Love Letter From Chinju",
        }),
      });

      if (response.ok) {
        setSent(true);
        toast({
          title: "Letter Sent!",
          description: "Your message has been successfully delivered to Anish.",
        });

        setTimeout(() => {
          setSent(false);
          setMessage("");
        }, 3000);

      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Sending failed",
        description: "Could not send the email. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen pb-32 pt-24 bg-gradient-to-br from-rose-50 via-white to-rose-100 relative overflow-hidden">
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-300/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${110 + Math.random() * 20}%`,
                width: `${15 + Math.random() * 30}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 15}s`
              }}
              fill="currentColor"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <Sparkles
              key={`sparkle-${i}`}
              className="absolute text-amber-200/30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${10 + Math.random() * 20}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <header className="mb-12 text-center animate-fade-in">
          <div className="relative inline-block">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-4 animate-pulse" fill="currentColor" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-amber-400 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-6xl font-headline text-foreground mb-4 italic tracking-tight">
            Love Email
          </h1>
          <p className="text-xl text-muted-foreground font-body italic">
            Swoththuu ma Jujujujuuuuu...
          </p>
        </header>

        <Card className="border-rose-200/50 shadow-[0_20px_50px_rgba(255,182,193,0.3)] bg-white/70 backdrop-blur-lg overflow-hidden animate-scale-in border-2">
          <CardHeader className="bg-rose-50/80 border-b border-rose-100 py-6">
            <CardTitle className="font-headline italic text-2xl text-rose-700 flex items-center justify-center gap-3">
              <Mail className="w-6 h-6" />
              Your Special Message
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="relative group">
              <Textarea 
                placeholder="Ninakk Endh Parayaan Thonuno Parayii Vavoo..."
                className="min-h-[350px] text-lg font-body leading-relaxed bg-white/40 border-rose-200 focus:border-rose-400 focus:ring-rose-300/50 resize-none italic shadow-inner rounded-2xl transition-all duration-300"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={sending || sent}
              />
              <div className="absolute top-4 right-4 text-rose-300/50 group-hover:text-rose-400 transition-colors">
                <Heart className="w-6 h-6" />
              </div>
            </div>
            
            <Button 
              onClick={handleSendEmail} 
              disabled={sending || sent || !message}
              className={cn(
                "w-full py-8 text-xl font-body transition-all duration-700 shadow-xl rounded-2xl transform hover:scale-[1.02] active:scale-95",
                sent 
                  ? "bg-green-500 hover:bg-green-600 text-white" 
                  : "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white border-b-4 border-rose-800/20"
              )}
            >
              {sending ? (
                <Loader2 className="w-6 h-6 animate-spin mr-3" />
              ) : sent ? (
                <CheckCircle2 className="w-6 h-6 mr-3" />
              ) : (
                <Send className="w-6 h-6 mr-3" />
              )}
              {sent ? "Sent to Anish!" : "Send to Anish"}
            </Button>
          </CardContent>
        </Card>

        <footer className="mt-12 text-center animate-fade-in [animation-delay:400ms]">
          <p className="text-rose-400 font-names text-3xl">Forever Together</p>
        </footer>
      </div>
      <Navigation />
    </div>
  );
}
