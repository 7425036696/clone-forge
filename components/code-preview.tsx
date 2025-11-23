"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Copy } from "lucide-react"

interface CodePreviewProps {
  code: {
    html: string
    css: string
    js: string
    react: string
  }
}

export function CodePreview({ code }: CodePreviewProps) {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)

  const copyToClipboard = async (text: string, tab: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedTab(tab)
    setTimeout(() => setCopiedTab(null), 2000)
  }

  return (
    <Tabs defaultValue="html" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="html">HTML</TabsTrigger>
        <TabsTrigger value="css">CSS</TabsTrigger>
        <TabsTrigger value="js">JavaScript</TabsTrigger>
        <TabsTrigger value="react">React</TabsTrigger>
      </TabsList>

      <TabsContent value="html" className="relative">
        <Button
          size="sm"
          variant="outline"
          className="absolute right-2 top-2 z-10 bg-transparent"
          onClick={() => copyToClipboard(code.html, "html")}
        >
          {copiedTab === "html" ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </>
          )}
        </Button>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-[500px]">
          <code>{code.html}</code>
        </pre>
      </TabsContent>

      <TabsContent value="css" className="relative">
        <Button
          size="sm"
          variant="outline"
          className="absolute right-2 top-2 z-10 bg-transparent"
          onClick={() => copyToClipboard(code.css, "css")}
        >
          {copiedTab === "css" ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </>
          )}
        </Button>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-[500px]">
          <code>{code.css}</code>
        </pre>
      </TabsContent>

      <TabsContent value="js" className="relative">
        <Button
          size="sm"
          variant="outline"
          className="absolute right-2 top-2 z-10 bg-transparent"
          onClick={() => copyToClipboard(code.js, "js")}
        >
          {copiedTab === "js" ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </>
          )}
        </Button>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-[500px]">
          <code>{code.js}</code>
        </pre>
      </TabsContent>

      <TabsContent value="react" className="relative">
        <Button
          size="sm"
          variant="outline"
          className="absolute right-2 top-2 z-10 bg-transparent"
          onClick={() => copyToClipboard(code.react, "react")}
        >
          {copiedTab === "react" ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </>
          )}
        </Button>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-[500px]">
          <code>{code.react}</code>
        </pre>
      </TabsContent>
    </Tabs>
  )
}
