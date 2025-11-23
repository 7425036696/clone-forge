import { Card } from "@/components/ui/card"
import { Globe, Cpu, Code2, Download } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Globe,
      title: "Enter URL",
      description: "Paste the website URL you want to clone",
    },
    {
      icon: Cpu,
      title: "AI Analysis",
      description: "Our AI analyzes the design and structure",
    },
    {
      icon: Code2,
      title: "Generate Code",
      description: "Get clean, production-ready code with your branding",
    },
    {
      icon: Download,
      title: "Export & Deploy",
      description: "Download code or deploy directly to production",
    },
  ]

  return (
    <section className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground text-lg">Four simple steps to clone and customize any website</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
            <div className="absolute top-2 right-2 text-6xl font-bold text-muted/20">{index + 1}</div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
