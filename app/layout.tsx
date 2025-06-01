import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'SunnAI - AI-Powered Voice-to-Text Assistant',
  description: 'Transform your voice into text instantly with the power of AI. Seamlessly integrate speech-to-text into your macOS workflow.',
  keywords: 'speech-to-text, AI assistant, voice recognition, macOS, productivity, transcription',
  authors: [{ name: 'SunnAI Team' }],
  metadataBase: new URL('https://sunn-ai-five.vercel.app/'),
  openGraph: {
    title: 'SunnAI - AI-Powered Voice-to-Text Assistant',
    description: 'Transform your voice into text instantly with the power of AI',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'SunnAI Logo',
      }
    ],
    type: 'website',
    siteName: 'SunnAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SunnAI - AI-Powered Voice-to-Text Assistant',
    description: 'Transform your voice into text instantly with the power of AI',
    images: ['/icon.png'],
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
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
        <meta property="og:image" content="/icon.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/icon.png" />
      </head>
      <body className="font-sans antialiased bg-white text-swiss-900 selection:bg-accent-100 selection:text-accent-700">
        {children}
        <Analytics />
      </body>
    </html>
  )
} 