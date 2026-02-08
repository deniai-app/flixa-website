import {
  ArrowRight,
  Code2,
  Zap,
  Brain,
  Terminal,
  Download,
  Sparkles,
  Shield,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiGoogle, SiWindsurf } from "@icons-pack/react-simple-icons";
import Icon from "@/components/icon";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-colors hover:border-foreground/10 hover:bg-card/80">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-foreground mb-4">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function IDECard({
  name,
  description,
  href,
  icon,
}: {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-colors hover:border-foreground/10 hover:bg-card/80"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-base font-semibold mb-1">{name}</h3>
      <p className="text-muted-foreground text-xs mb-4">{description}</p>
      <span className="gap-2 inline-flex items-center text-sm font-medium text-foreground group-hover:underline">
        <Download className="w-4 h-4" />
        Install
      </span>
    </Link>
  );
}

export default function FlixaPage() {
  return (
    <main className="relative min-h-screen" id="main-content">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-foreground text-background font-bold text-sm">
              <Icon />
            </div>
            <span className="font-semibold text-sm">Flixa</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="#features"
              className="transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#platforms"
              className="transition-colors hover:text-foreground"
            >
              Platforms
            </Link>
            <Link
              href="#how-it-works"
              className="transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
          </nav>
          <Button size="sm" asChild>
            <Link
              href="https://marketplace.visualstudio.com/items?itemName=deniai.flixa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-3.5 h-3.5" />
              Install
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="absolute inset-0 glow-top pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
        <div className="relative mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="w-3 h-3" />
              AI-Powered Coding Agent
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.08] mb-5">
              Code faster with
              <br />
              <span className="text-muted-foreground">
                intelligent assistance
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              An AI coding extension that helps you write, refactor,
              and&nbsp;understand code directly in your editor. Available
              for&nbsp;VS Code, Cursor, Windsurf, and Antigravity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link
                  href="https://marketplace.visualstudio.com/items?itemName=deniai.flixa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Install for VS Code
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="#platforms">
                  View All Platforms
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Powered by Deni AI
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              Features
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Tools to help you write code faster and keep your projects
              consistent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <FeatureCard
              icon={Brain}
              title="Code Completion"
              description="Get inline suggestions based on the file you're editing and the surrounding context in your project."
            />
            <FeatureCard
              icon={Zap}
              title="Refactoring"
              description="Rename variables, extract functions, and restructure code with simple commands."
            />
            <FeatureCard
              icon={Terminal}
              title="Natural Language to Code"
              description="Describe what you want in plain English and get a code suggestion you can review and accept."
            />
            <FeatureCard
              icon={Shield}
              title="Local-First"
              description="Your code is processed securely. No telemetry or data collection beyond what's needed for completions."
            />
            <FeatureCard
              icon={Globe}
              title="Multi-Language"
              description="Works with TypeScript, Python, Rust, Go, Java, and many other languages out of the box."
            />
            <FeatureCard
              icon={Code2}
              title="Documentation & Tests"
              description="Generate docstrings, type annotations, and unit test scaffolding from your existing code."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative px-4 py-16 md:py-24">
        <div className="absolute inset-0 glow-center pointer-events-none" />
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              How it works
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Install the extension, open a project, and start writing code.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Install the extension",
                description:
                  "Get Flixa from the VS Code Marketplace or the Open VSX Registry for Cursor, Windsurf, and Antigravity.",
              },
              {
                step: "02",
                title: "Open your project",
                description:
                  "Flixa reads the files in your workspace to provide relevant suggestions as you type.",
              },
              {
                step: "03",
                title: "Write code",
                description:
                  "Accept inline completions, ask questions in natural language, or run refactoring commands.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 p-5 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-foreground font-mono text-sm font-medium">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="relative px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              Available everywhere you code
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Install Flixa on your favorite editor and start building smarter
              today.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <IDECard
              name="VS Code"
              description="Official Marketplace"
              href="https://marketplace.visualstudio.com/items?itemName=deniai.flixa"
              icon={
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Visual Studio Code</title>
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </svg>
              }
            />
            <IDECard
              name="Cursor"
              description="Open VSX Registry"
              href="https://open-vsx.org/extension/deniai/flixa"
              icon={
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Cursor</title>
                  <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
                </svg>
              }
            />
            <IDECard
              name="Windsurf"
              description="Open VSX Registry"
              href="https://open-vsx.org/extension/deniai/flixa"
              icon={<SiWindsurf className="w-8 h-8" />}
            />
            <IDECard
              name="Antigravity"
              description="Open VSX Registry"
              href="https://open-vsx.org/extension/deniai/flixa"
              icon={<SiGoogle className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 text-center">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
              Try Flixa
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm leading-relaxed">
              Free to install. Get AI-assisted coding in your editor in under a
              minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link
                  href="https://marketplace.visualstudio.com/items?itemName=deniai.flixa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Get Flixa for VS Code
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="https://deniai.app" target="_blank" rel="noopener noreferrer">
                  Try Deni AI
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded bg-foreground text-background font-bold text-[10px]">
              <Icon />
            </div>
            <span>Flixa by Deni AI</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#platforms"
              className="transition-colors hover:text-foreground"
            >
              Platforms
            </Link>
            <Link
              href="https://deniai.app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Deni AI
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
