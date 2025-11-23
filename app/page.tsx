"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Sparkles, Zap, Code2, Palette, Upload, Globe, CheckCircle2, Rocket, Star } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [url, setUrl] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const [focusedCard, setFocusedCard] = useState<number | null>(null)

  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.4]" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-accent/25 rounded-full blur-[130px] animate-float-delayed" />
        <div
          className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl transition-all duration-300 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between animate-in fade-in slide-in-from-top duration-1000">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-primary via-primary to-accent p-2 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Code2 className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              CloneForge
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium text-sm h-9"
            >
              Features
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-accent/20 hover:text-foreground transition-all duration-300 font-medium text-sm h-9"
            >
              Pricing
            </Button>
            <Button className="h-9 text-sm group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 ml-2">
              <span className="relative z-10 font-medium">Get Started</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] skew-x-12 transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border border-primary/30 text-foreground px-5 py-2.5 rounded-full text-sm font-semibold mb-6 animate-in fade-in slide-in-from-top duration-1000 delay-150 hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-primary/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-lg shadow-primary/50"></span>
            </span>
            <Sparkles className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-700" />
            <span>Under Development</span>
            <Star className="h-4 w-4 text-accent group-hover:scale-125 transition-transform duration-300" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-balance animate-in fade-in slide-in-from-bottom duration-1000 delay-200 leading-[1.1]">
            Clone Any Website,
            <br />
            <span className="relative inline-block mt-1">
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-40"></span>
              <span className="relative bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Rebrand Instantly
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-in fade-in slide-in-from-bottom duration-1000 delay-300 leading-relaxed font-normal">
            Transform any website design with AI. Enter a URL, upload your logo,{" "}
            <span className="text-foreground font-medium">and get production-ready code</span> with your branding in
            seconds.
          </p>

          {/* CTA Input */}
          <div
            className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-400"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className={`relative group transition-all duration-700 ${isHovering ? "scale-[1.03]" : "scale-100"}`}>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-gradient" />
              <div className="relative bg-card/80 backdrop-blur-2xl border-2 border-border/50 group-hover:border-primary/50 rounded-3xl p-4 shadow-2xl transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Globe className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground pointer-events-none transition-colors duration-300" />
                    <Input
                      type="url"
                      aria-label="Website URL to clone"
                      placeholder="Enter website URL (e.g., example.com)"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="pl-14 h-16 text-lg border-0 bg-background/50 focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300 rounded-2xl font-medium placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="h-16 px-10 text-lg font-semibold group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 rounded-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Generate Clone
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] skew-x-12 transition-transform duration-700" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Free to try</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Export in any format</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto mt-[50px] px-4 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Clone and rebrand websites in seconds with our AI-powered engine",
              gradient: "from-primary/20 via-primary/10 to-transparent",
              accentColor: "primary",
            },
            {
              icon: Palette,
              title: "Custom Branding",
              description: "Upload your logo and name - AI handles the perfect integration",
              gradient: "from-accent/20 via-accent/10 to-transparent",
              accentColor: "accent",
            },
            {
              icon: Code2,
              title: "Export Code",
              description: "Get clean, production-ready code in React, Next.js, or vanilla HTML",
              gradient: "from-primary/15 via-accent/15 to-transparent",
              accentColor: "primary",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${600 + index * 150}ms` }}
              onMouseEnter={() => setFocusedCard(index)}
              onMouseLeave={() => setFocusedCard(null)}
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
              />
              <div className="relative bg-card/50 backdrop-blur-xl border-2 border-border/50 rounded-3xl p-10 h-full hover:border-primary/40 transition-all duration-700 group-hover:translate-y-[-12px] shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20">
                <div className="relative inline-block mb-8">
                  <div
                    className={`absolute inset-0 bg-${feature.accentColor} opacity-30 blur-2xl group-hover:blur-3xl transition-all duration-700 group-hover:opacity-50`}
                  />
                  <div className="relative bg-gradient-to-br from-background to-background/50 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-xl">
                    <feature.icon className={`h-10 w-10 text-${feature.accentColor}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-4 pb-24 md:pb-40">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-block mb-6 animate-in fade-in duration-1000">
            <Rocket className="h-12 w-12 text-primary mx-auto animate-bounce-subtle" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 animate-in fade-in slide-in-from-bottom duration-1000 tracking-tighter">
            Three Simple Steps
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom duration-1000 delay-100 font-light max-w-2xl mx-auto">
            From URL to custom-branded code in <span className="text-foreground font-medium">under a minute</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          {/* Mobile Connector */}
          <div className="md:hidden absolute top-10 bottom-10 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2" />

          {[
            {
              step: "Step 01",
              title: "Enter URL",
              description: "Paste any website URL and our AI will analyze its design, layout, and structure instantly",
              icon: Globe,
              color: "primary",
            },
            {
              step: "Step 02",
              title: "Upload Branding",
              description: "Add your logo and company name - AI adapts the design to match your brand identity",
              icon: Upload,
              color: "accent",
            },
            {
              step: "Step 03",
              title: "Export Code",
              description: "Download production-ready code in your preferred framework and start building immediately",
              icon: Code2,
              color: "primary",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${700 + index * 200}ms` }}
            >
              <div className="relative group h-full">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative bg-card/60 backdrop-blur-2xl border-2 border-border/50 rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-700 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-primary/30 h-full flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-${step.color} to-${step.color}/70 rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl shadow-${step.color}/40`}
                  >
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-bold font-mono text-primary mb-3 tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">{step.step}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-4 pb-24 md:pb-40">
        <div className="max-w-5xl mx-auto relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-1000 animate-gradient" />
          <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-2xl border-2 border-primary/30 rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />
            <div className="relative">
              <div className="inline-block mb-8">
                <Sparkles className="h-16 w-16 text-primary mx-auto animate-bounce-subtle" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-balance tracking-tighter leading-tight">
                Ready to Transform
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Your Design?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance font-light leading-relaxed">
                Join <span className="text-foreground font-semibold">thousands of developers</span> and designers using
                CloneForge to accelerate their workflow
              </p>
              <Button
                size="lg"
                className="h-20 px-12 text-xl font-bold group shadow-2xl hover:shadow-primary/60 transition-all duration-500 bg-gradient-to-r from-primary to-accent rounded-2xl hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  Start Cloning Now
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 backdrop-blur-xl bg-card/30">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-muted-foreground font-light">
            Built with <span className="text-primary font-medium">Next.js</span> and{" "}
            <span className="text-accent font-medium">AI</span> • For educational and design inspiration purposes
          </p>
        </div>
      </footer>
    </main>
  )
}
