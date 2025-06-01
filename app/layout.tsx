import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SunnAI - AI-Powered Voice-to-Text Assistant',
  description: 'Transform your voice into text instantly with the power of AI. Seamlessly integrate speech-to-text into your macOS workflow.',
  keywords: 'speech-to-text, AI assistant, voice recognition, macOS, productivity, transcription',
  authors: [{ name: 'SunnAI Team' }],
  openGraph: {
    title: 'SunnAI - AI-Powered Voice-to-Text Assistant',
    description: 'Transform your voice into text instantly with the power of AI',
    images: ['/preview.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SunnAI - AI-Powered Voice-to-Text Assistant',
    description: 'Transform your voice into text instantly with the power of AI',
    images: ['/preview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="font-sans antialiased bg-white text-swiss-900 selection:bg-accent-100 selection:text-accent-700">
        {children}
      </body>
    </html>
  )
} 