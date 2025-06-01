'use client'

import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import { downloadApp } from '@/lib/download'
import { useState } from 'react'

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    const result = await downloadApp()
    
    if (!result.success) {
      alert('Download failed. Please try again.')
    }
    
    setIsDownloading(false)
  }

  return (
    <section className="relative min-h-screen flex items-center bg-swiss-50">
      {/* Swiss Design Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem'
        }} />
      </div>
      
      <div className="swiss-container relative z-10">
        <div className="grid lg:grid-cols-14 gap-8 lg:gap-12 items-center min-h-screen py-22">
          {/* Content - Swiss asymmetrical layout */}
          <div className="lg:col-span-8 lg:col-start-1">
            <div className="max-w-4xl">
              {/* Swiss Overline */}
              <div className="swiss-overline mb-8">
                AI-POWERED VOICE-TO-TEXT
              </div>

              {/* Swiss Typography Hierarchy */}
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-none">
                Transform
                <br />
                <span className="text-accent-500">Voice</span> into
                <br />
                Text Instantly
              </h1>

              {/* Swiss Design Subhead */}
              <div className="mb-12">
                <div className="w-16 h-1 bg-swiss-950 mb-6" />
                <p className="text-xl lg:text-2xl text-swiss-700 leading-relaxed max-w-2xl">
                Seamlessly integrate speech-to-text into your macOS workflow. 
                Simply speak, and watch your words appear exactly where you need them.
              </p>
              </div>

              {/* Swiss Button System */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="swiss-button inline-flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-5 h-5" />
                  <span>{isDownloading ? 'Downloading...' : 'Download for macOS'}</span>
                </button>
                
                <a href="#how-it-works" className="swiss-button-outline inline-flex items-center justify-center space-x-3">
                  <span>See How It Works</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Swiss Data Visualization */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="swiss-card-minimal">
                  <div className="text-4xl font-bold text-swiss-950 mb-2">150+</div>
                  <div className="swiss-label">WPM SPEED</div>
                </div>
                <div className="swiss-card-minimal">
                  <div className="text-4xl font-bold text-swiss-950 mb-2">60%</div>
                  <div className="swiss-label">TIME SAVED</div>
                </div>
                <div className="swiss-card-minimal">
                  <div className="text-4xl font-bold text-swiss-950 mb-2">ZERO</div>
                  <div className="swiss-label">SUBSCRIPTIONS</div>
                </div>
              </div>
            </div>
          </div>

          {/* App Preview - Swiss Asymmetrical Placement */}
          <div className="lg:col-span-6 lg:col-start-9">
            <div className="relative">
              {/* Swiss Geometric Accent */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-swiss-950 hidden lg:block" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent-500 hidden lg:block" />
              
              {/* Swiss Card Design */}
              <div className="relative bg-swiss-50 border-2 border-swiss-950 p-2 transform transition-transform duration-500 hover:scale-105">
                <div className="bg-swiss-200 p-1">
                <Image
                  src="/preview.png"
                  alt="SunnAI Application Preview"
                  width={600}
                  height={400}
                    className="w-full h-auto border border-swiss-300"
                  priority
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiss Geometric Elements */}
      <div className="absolute top-1/3 right-8 hidden xl:block">
        <div className="space-y-4">
          <div className="w-8 h-8 bg-swiss-950" />
          <div className="w-6 h-6 border-2 border-swiss-950" />
          <div className="w-4 h-4 bg-accent-500" />
        </div>
      </div>
      
      <div className="absolute bottom-1/4 left-8 hidden xl:block">
        <div className="flex space-x-4">
          <div className="w-1 h-16 bg-swiss-950" />
          <div className="w-1 h-12 bg-swiss-600" />
          <div className="w-1 h-8 bg-swiss-300" />
        </div>
      </div>
    </section>
  )
} 