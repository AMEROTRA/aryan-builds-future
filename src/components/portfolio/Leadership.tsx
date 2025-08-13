import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-heading" className="border-t">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-16">
        <h2 id="leadership-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Leadership & Hackathons</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>CentuRITon Hackathon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Built a prototype under 24 hours; focused on UX clarity and performance-first architecture.</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Badge>Rapid Prototyping</Badge>
                <Badge variant="secondary">Performance</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>eSports Club</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Organized events and streamlined operations with tools and dashboards.</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <Badge>Teamwork</Badge>
                <Badge variant="secondary">Tooling</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
