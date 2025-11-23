"use client"

import { useEffect, useRef } from "react"

interface SitePreviewProps {
  html: string
  css: string
  js: string
}

export function SitePreview({ html, css, js }: SitePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current
      const document = iframe.contentDocument
      if (document) {
        const fullHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>${css}</style>
            </head>
            <body>
              ${html.replace(/<head>[\s\S]*?<\/head>/, "").replace("</body>", "")}
              <script>${js}</script>
            </body>
          </html>
        `
        document.open()
        document.write(fullHtml)
        document.close()
      }
    }
  }, [html, css, js])

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center text-sm text-muted-foreground">Preview</div>
      </div>
      <iframe ref={iframeRef} className="w-full h-[600px] bg-white" title="Site Preview" sandbox="allow-scripts" />
    </div>
  )
}
