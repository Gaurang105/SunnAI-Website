'use client'

import { Download as DownloadIcon, Apple, CheckCircle } from 'lucide-react'
import { downloadApp } from '@/lib/download'
import { useState } from 'react'

const features = [
  'OpenAI Whisper Integration',
  'AI Assistant with GPT-4o-mini',
  'Global Hotkey Support',
  'Universal Text Injection',
  'Privacy-First Design',
  'No Subscription Required'
]

export default function Download() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    const result = await downloadApp()
    
    if (!result.success) {
      alert('Download failed. Please try again or contact support.')
    }
    
    setIsDownloading(false)
  }

  return (
    <section id="download" className="swiss-section bg-swiss-950 text-swiss-50">
      <div className="swiss-container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Swiss Content Section */}
          <div className="lg:col-span-7 lg:order-1">
            <div className="swiss-overline bg-swiss-50/10 text-swiss-50 mb-8">
              READY TO DOWNLOAD
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-none">
              Start Your
              <br />
              <span className="text-accent-500">Voice-First</span>
              <br />
              Journey
            </h2>
            
            <div className="mb-12">
              <div className="w-16 h-1 bg-swiss-50 mb-6" />
              <p className="text-lg text-swiss-300 leading-relaxed max-w-lg">
                Join thousands of professionals who have revolutionized their workflow. 
                Download SunnAI today and experience the future of productivity.
              </p>
            </div>

            {/* Swiss Download Button */}
            <div className="mb-15">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="inline-flex items-center justify-center space-x-4 px-12 py-6 bg-swiss-50 text-swiss-950 font-bold text-lg tracking-wide border-2 border-swiss-50 transition-all duration-300 hover:bg-transparent hover:text-swiss-50 focus:outline-hidden focus:ring-2 focus:ring-swiss-50 focus:ring-offset-2 focus:ring-offset-swiss-950 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Apple className="w-6 h-6" />
                <span>{isDownloading ? 'DOWNLOADING...' : 'DOWNLOAD FOR MACOS'}</span>
                <DownloadIcon className="w-6 h-6" />
              </button>
              
              <p className="text-xs text-swiss-400 mt-6 tracking-wide">
                COMPATIBLE WITH MACOS ON APPLE SILICON (M1/M2/M3) • VERSION 1.0
              </p>
            </div>

            {/* Swiss Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={feature} className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-accent-500 mt-2 shrink-0" />
                  <span className="text-swiss-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Swiss Info Panels */}
          <div className="lg:col-span-5 lg:col-start-8 lg:order-2 space-y-8">
            {/* Version Info Panel */}
            <div className="bg-swiss-900 border-2 border-swiss-50/20 p-8">
              <div className="swiss-label text-swiss-50 mb-6">
                LATEST RELEASE
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-swiss-50/10 pb-2">
                  <span className="text-swiss-300 text-sm">Version</span>
                  <span className="font-mono text-swiss-50 font-bold">1.0.0</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-swiss-50/10 pb-2">
                  <span className="text-swiss-300 text-sm">Size</span>
                  <span className="font-mono text-swiss-50">~100 MB</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-swiss-50/10 pb-2">
                  <span className="text-swiss-300 text-sm">Architecture</span>
                  <span className="font-mono text-swiss-50">Apple Silicon</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-swiss-300 text-sm">License</span>
                  <span className="font-mono text-swiss-50">Proprietary</span>
                </div>
              </div>
            </div>

            {/* System Requirements Panel */}
            <div className="bg-swiss-900 border-2 border-swiss-50/20 p-8">
              <div className="swiss-label text-swiss-50 mb-6">
                REQUIREMENTS
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-accent-500 mt-2 shrink-0" />
                  <span className="text-swiss-300 text-sm">macOS 12.0 or later</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-accent-500 mt-2 shrink-0" />
                  <span className="text-swiss-300 text-sm">Apple Silicon (M1/M2/M3)</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-accent-500 mt-2 shrink-0" />
                  <span className="text-swiss-300 text-sm">OpenAI API Key</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-accent-500 mt-2 shrink-0" />
                  <span className="text-swiss-300 text-sm">Homebrew with sox</span>
                </div>
              </div>
            </div>

            {/* Support Panel */}
            <div className="bg-swiss-900 border-l-4 border-l-accent-500 p-8">
              <div className="swiss-label text-swiss-50 mb-4">
                NEED HELP?
              </div>
              <p className="text-swiss-300 mb-6 text-sm leading-relaxed">
                Our setup guide walks you through installation and configuration in under 5 minutes.
              </p>
              
              <div className="space-y-3">
                <a href="#how-it-works" className="block text-accent-500 hover:text-accent-400 transition-colors text-sm font-medium">
                  → VIEW SETUP GUIDE
                </a>
                <a href="mailto:gujratigaurang@gmail.com" className="block text-accent-500 hover:text-accent-400 transition-colors text-sm font-medium">
                  → CONTACT SUPPORT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 