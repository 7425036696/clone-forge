import { Card } from "@/components/ui/card"
import { Zap, Shield, Palette, FileCode, Smartphone, Sparkles } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate complete website clones in seconds with our optimized AI engine",
    },
    {
      icon: Palette,
      title: "Full Customization",
      description: "Replace logos, colors, and branding while keeping the original design structure",
    },
    {
      icon: FileCode,
      title: "Multiple Formats",
      description: "Export as HTML/CSS/JS, React, Next.js, or TypeScript",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "All generated code is mobile-friendly and works across all devices",
    },
    {
      icon: Shield,
      title: "Clean Code",
      description: "Production-ready, well-structured code following best practices",
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Advanced AI understands design patterns and generates semantic code",
    },
  ]

  return (
    <section className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-muted-foreground text-lg">Everything you need to clone and customize websites</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
