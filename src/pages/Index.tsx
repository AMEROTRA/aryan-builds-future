import Experience from "@/components/portfolio/Experience";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto max-w-5xl px-6 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Aryan Mehrotra — Software Developer</h1>
        <p className="mt-3 text-lg text-muted-foreground">Engineer. Optimizer. Creator of beautiful code and experiences.</p>
      </header>
      <Experience />
    </main>
  );
};

export default Index;
