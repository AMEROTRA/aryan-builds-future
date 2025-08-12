import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Thanks! I'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="container mx-auto py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">Let's Collaborate</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="glass-surface p-6 md:p-8">
          <div className="grid gap-4">
            <label className="text-sm font-medium">Name
              <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-2 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="text-sm font-medium">Email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-2 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="text-sm font-medium">Message
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-2 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <Button type="submit" variant="hero">Send</Button>
          </div>
        </form>
        <div className="glass-surface p-6 md:p-8 flex flex-col gap-4">
          <p className="text-muted-foreground">Prefer email or socials? Reach me here:</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline"><a href="https://github.com/aryanmehrotra" className="flex items-center gap-2"><Github className="h-4 w-4"/> GitHub</a></Button>
            <Button asChild variant="outline"><a href="https://www.linkedin.com/in/aryan-mehrotra" className="flex items-center gap-2"><Linkedin className="h-4 w-4"/> LinkedIn</a></Button>
            <Button asChild variant="outline"><a href="mailto:hello@aryan-mehrotra.dev" className="flex items-center gap-2"><Mail className="h-4 w-4"/> Email</a></Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">I care about fast, accessible experiences. Ask me about cutting bundle size, lazy‑loading strategies, and design systems.</p>
        </div>
      </div>
    </section>
  );
};
