"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wand2, Sparkles, Code2, Eye } from "lucide-react"
import { CodePreview } from "@/components/code-preview"
import { SitePreview } from "@/components/site-preview"

export function CloneGenerator() {
  const [url, setUrl] = useState("")
  const [brandName, setBrandName] = useState("")
  const [logo, setLogo] = useState<File | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState<{
    html: string
    css: string
    js: string
    react: string
  } | null>(null)

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0])
    }
  }

  const handleGenerate = async () => {
    if (!url || !brandName) return

    setIsGenerating(true)

    // Simulate AI generation
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock generated code
    setGeneratedCode({
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${brandName}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="logo">${brandName}</div>
            <nav class="nav">
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>
    
    <section class="hero">
        <div class="container">
            <h1>Welcome to ${brandName}</h1>
            <p>Your trusted solution for modern web experiences</p>
            <button class="cta-button">Get Started</button>
        </div>
    </section>
    
    <script src="script.js"></script>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.header {
    background: white;
    padding: 20px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #6366f1;
}

.hero {
    padding: 100px 0;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.cta-button {
    padding: 15px 40px;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
}

.cta-button:hover {
    transform: translateY(-2px);
}`,
      js: `// Initialize ${brandName} website
document.addEventListener('DOMContentLoaded', function() {
    console.log('${brandName} website loaded');
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // CTA button interaction
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Welcome to ${brandName}!');
        });
    }
});`,
      react: `import { useState } from 'react'

export default function ${brandName.replace(/\s+/g, "")}() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-indigo-600">
              ${brandName}
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="hover:text-indigo-600">Features</a>
              <a href="#about" className="hover:text-indigo-600">About</a>
              <a href="#contact" className="hover:text-indigo-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to ${brandName}
          </h1>
          <p className="text-xl mb-8 text-indigo-100">
            Your trusted solution for modern web experiences
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
}`,
    })

    setIsGenerating(false)
  }

  return (
    <div className="space-y-8">
      <Card className="p-6 md:p-8 border-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="url" className="text-base font-medium">
              Website URL to Clone
            </Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="h-12 text-base"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="brand-name" className="text-base font-medium">
                New Brand Name
              </Label>
              <Input
                id="brand-name"
                type="text"
                placeholder="MyAwesomeBrand"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo" className="text-base font-medium">
                New Logo (Optional)
              </Label>
              <div className="relative">
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="h-12 cursor-pointer"
                />
                {logo && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    {logo.name}
                  </span>
                )}
              </div>
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!url || !brandName || isGenerating}
            className="w-full h-14 text-base font-semibold"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                Generating Your Clone...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Generate Clone
              </>
            )}
          </Button>
        </div>
      </Card>

      {generatedCode && (
        <Card className="p-6 border-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Your Generated Clone</h2>
            </div>

            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-12">
                <TabsTrigger value="preview" className="text-base">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="text-base">
                  <Code2 className="mr-2 h-4 w-4" />
                  Code
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="mt-6">
                <SitePreview html={generatedCode.html} css={generatedCode.css} js={generatedCode.js} />
              </TabsContent>

              <TabsContent value="code" className="mt-6">
                <CodePreview code={generatedCode} />
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      )}
    </div>
  )
}
