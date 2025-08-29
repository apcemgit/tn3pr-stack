import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Code, Database, Leaf, Server, Share2, Wind } from "lucide-react";

const technologies = [
  {
    name: "TypeScript",
    description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    icon: <Code className="h-12 w-12" />,
  },
  {
    name: "Next.js",
    description: "The React Framework for the Web. Used for building server-side rendered and static web applications.",
    icon: <Share2 className="h-12 w-12" />,
  },
  {
    name: "Nest.js",
    description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    icon: <Server className="h-12 w-12" />,
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable network applications.",
    icon: <Wind className="h-12 w-12" />,
  },
  {
    name: "Redis",
    description: "An in-memory data structure store, used as a database, cache, and message broker.",
    icon: <Database className="h-12 w-12" />,
  },
  {
    name: "Prisma",
    description: "A next-generation ORM for Node.js and TypeScript, it helps you build applications faster and more securely.",
    icon: <Leaf className="h-12 w-12" />,
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                The TN3PR Stack
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A modern, full-stack web development boilerplate featuring TypeScript, Next.js, Nest.js, Node.js, Redis, and Prisma.
              </p>
              <div className="space-x-4">
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech) => (
                <Card key={tech.name}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {tech.icon}
                      <CardTitle>{tech.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-muted-foreground">Built with the TN3PR Stack</p>
      </footer>
    </div>
  );
}