'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Download', href: '#download' },
  ]

  return (
    <header className="fixed top-0 w-full bg-swiss-50/95 backdrop-blur-md border-b border-swiss-300 z-50">
      <nav className="swiss-container">
        <div className="flex items-center justify-between h-18">
          {/* Swiss Logo Design */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/icon.png"
                alt="SunnAI Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              {/* Swiss geometric accent */}
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent-500" />
            </div>
            <div className="swiss-label">
              SUNNAI
            </div>
          </div>

          {/* Swiss Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-swiss-950 hover:text-accent-500 transition-colors duration-200 text-sm font-medium tracking-wide group"
              >
                {item.name}
                {/* Swiss underline accent */}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-accent-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-swiss-950 hover:bg-swiss-200 transition-colors duration-200 focus:outline-hidden focus:ring-1 focus:ring-swiss-950"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Swiss Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-swiss-300 bg-swiss-50">
            <div className="py-4 space-y-1">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-swiss-950 hover:bg-swiss-200 hover:text-accent-500 transition-colors duration-200 text-sm font-medium border-l-4 border-transparent hover:border-accent-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 