
"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Send, Loader2, CheckCircle2, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// Formspree Endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgwgenw"; 

export default function LoveLetterPage() {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

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
          from_name: "Chinju",
          to_name: "Anish"
        }),
      });

      if (response.ok) {
        setSent(true);
        toast({
          title: "Letter Sent!",
          description: "Your message has been successfully delivered to Anish.",
        });
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
    <div className="min-h-screen pb-32 pt-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-2xl mx-auto px-6">
        <header className="mb-12 text-center animate-fade-in">
          <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" fill="currentColor" />
          <h1 className="text-5xl font-headline text-foreground mb-4 italic">Love Email</h1>
          <p className="text-lg text-muted-foreground font-body">Swoththuu ma Jujujujuuuuu.</p>
        </header>

        <Card className="border-primary/20 shadow-2xl bg-white/80 backdrop-blur-md overflow-hidden animate-scale-in">
          <CardHeader className="bg-rose-50/50 border-b border-rose-100">
            <CardTitle className="font-headline italic text-2xl text-rose-700 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              Your Message
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <Textarea 
              placeholder="Start writing your heartfelt letter here..."
              className="min-h-[300px] text-lg font-body leading-relaxed bg-white/50 border-rose-100 focus:border-rose-300 focus:ring-rose-200 resize-none italic"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            
            <Button 
              onClick={handleSendEmail} 
              disabled={sending || sent || !message}
              className={cn(
                "w-full py-8 text-xl font-body transition-all duration-500 shadow-lg",
                sent ? "bg-green-500 hover:bg-green-600" : "bg-rose-600 hover:bg-rose-700"
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
      </div>
      <Navigation />
    </div>
  );
}
