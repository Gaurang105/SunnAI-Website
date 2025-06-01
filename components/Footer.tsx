import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-swiss-50 border-t-2 border-swiss-950">
      <div className="swiss-container py-22">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Swiss Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <Image
                  src="/icon.png"
                  alt="SunnAI Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                {/* Swiss geometric accent */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent-500" />
              </div>
              <div className="swiss-label text-xl">
                SUNNAI
              </div>
            </div>
            
            <div className="mb-8">
              <div className="w-16 h-1 bg-swiss-950 mb-6" />
              <p className="text-swiss-700 leading-relaxed max-w-md">
                Transform your voice into text instantly with the power of AI. 
                Built for macOS.
              </p>
            </div>
            
            <div className="text-xs text-swiss-600 tracking-wide">
              © {currentYear} SUNNAI. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Swiss Navigation Grid */}
          <div className="lg:col-span-3 lg:col-start-7">
            <div className="swiss-label mb-8">
              PRODUCT
            </div>
            
            <div className="space-y-4">
              <a href="#features" className="block text-swiss-950 hover:text-accent-500 transition-colors duration-200 text-sm font-medium">
                Features
              </a>
              <a href="#use-cases" className="block text-swiss-950 hover:text-accent-500 transition-colors duration-200 text-sm font-medium">
                Use Cases
              </a>
              <a href="#how-it-works" className="block text-swiss-950 hover:text-accent-500 transition-colors duration-200 text-sm font-medium">
                How It Works
              </a>
              <a href="#download" className="block text-swiss-950 hover:text-accent-500 transition-colors duration-200 text-sm font-medium">
                Download
              </a>
            </div>
          </div>

          {/* Swiss Contact Section */}
          <div className="lg:col-span-4 lg:col-start-10">
            <div className="swiss-label mb-8">
              CONTACT & SUPPORT
            </div>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:gujratigaurang@gmail.com" className="block text-swiss-950 hover:text-accent-500 transition-colors duration-200 text-sm font-medium">
                Email Support
              </a>
              <a href="#how-it-works" className="block text-swiss-950 hover:text-accent-500 transition-colors duration-200 text-sm font-medium">
                Setup Guide
              </a>
              <a href="mailto:gujratigaurang@gmail.com" className="block text-swiss-950 hover:text-accent-500 transition-colors duration-200 text-sm font-medium">
                Send Feedback
              </a>
            </div>

            {/* Swiss Social Links */}
            <div className="mb-8">
              <div className="swiss-label mb-4">
                CONNECT
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a href="https://gaurang.blog/" target="_blank" rel="noopener noreferrer" className="text-swiss-950 hover:text-accent-500 transition-colors duration-200 font-medium">
                  → WEBSITE
                </a>
                <a href="https://www.linkedin.com/in/gaurang-gujrati-088a931b8/" target="_blank" rel="noopener noreferrer" className="text-swiss-950 hover:text-accent-500 transition-colors duration-200 font-medium">
                  → LINKEDIN
                </a>
                <a href="https://github.com/Gaurang105" target="_blank" rel="noopener noreferrer" className="text-swiss-950 hover:text-accent-500 transition-colors duration-200 font-medium">
                  → GITHUB
                </a>
                <a href="https://x.com/GaurangGujrati" target="_blank" rel="noopener noreferrer" className="text-swiss-950 hover:text-accent-500 transition-colors duration-200 font-medium">
                  → X (TWITTER)
                </a>
              </div>
            </div>
            
            {/* Swiss Info Card */}
            <div className="bg-swiss-200 border-l-4 border-l-swiss-950 p-6">
              <div className="swiss-label mb-3">
                SYSTEM REQUIREMENTS
              </div>
              <p className="text-xs text-swiss-700 leading-relaxed">
                macOS 12.0+ on Apple Silicon
                <br />
                OpenAI API Key Required
              </p>
            </div>
          </div>
        </div>

        {/* Swiss Bottom Section */}
        <div className="mt-22 pt-8 border-t border-swiss-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-xs text-swiss-600 tracking-wide">
              MADE BY GAURANG GUJRATI
            </div>
            
            <div className="flex items-center justify-end space-x-6">
              <span className="text-xs text-swiss-600 tracking-wide">MADE WITH ❤️</span>
              {/* Swiss geometric elements */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-swiss-950" />
                <div className="w-3 h-3 border border-swiss-950" />
                <div className="w-3 h-3 bg-accent-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 