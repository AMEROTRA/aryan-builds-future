import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message queued",
        description: "Thanks for reaching out! I’ll get back to you soon.",
      });
    }, 700);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 id="contact-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Let’s Collaborate</h2>
            <p className="mt-2 text-muted-foreground">Open to roles, collaborations, and interesting problems in web performance, design systems, and emerging tech.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="mailto:aryan@example.com" aria-label="Email">
                <Button variant="outline" size="icon"><Mail className="h-4 w-4" /></Button>
              </a>
              <a href="https://github.com/aryan" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Button variant="outline" size="icon"><Github className="h-4 w-4" /></Button>
              </a>
              <a href="https://www.linkedin.com/in/aryan" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Button variant="outline" size="icon"><Linkedin className="h-4 w-4" /></Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={onSubmit} className="grid gap-3 bg-card p-4 rounded-lg border">
              <div className="grid gap-2">
                <label className="text-sm" htmlFor="name">Name</label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm" htmlFor="email">Email</label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm" htmlFor="message">Message</label>
                <Textarea id="message" name="message" required placeholder="Tell me about your project or role" className="min-h-32" />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={loading}>{loading ? "Sending…" : "Send Message"}</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
