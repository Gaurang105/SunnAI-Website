import { Command, Mic, Type, Sparkles } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Command,
    title: 'Press Cmd+H',
    description: 'Activate SunnAI from anywhere in macOS with the global hotkey shortcut.'
  },
  {
    number: '02',
    icon: Mic,
    title: 'Speak Naturally',
    description: 'Your words are transcribed in real-time using OpenAI Whisper technology.'
  },
  {
    number: '03',
    icon: Type,
    title: 'Text Appears Instantly',
    description: 'Transcribed text appears directly at your cursor location in any application.'
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Use "Hey Sun" for AI',
    description: 'Activate AI assistant for content generation and intelligent writing assistance.'
  }
]

const requirements = [
  {
    title: 'macOS with Apple Silicon',
    description: 'M1/M2/M3 processors for optimal performance',
    required: true
  },
  {
    title: 'OpenAI API Key',
    description: 'For Whisper and GPT-4o-mini access',
    required: true
  },
  {
    title: 'Microphone Access',
    description: 'System permission for voice input',
    required: true
  },
  {
    title: 'Accessibility Permissions',
    description: 'Required for text injection functionality',
    required: true
  },
  {
    title: 'Homebrew with sox',
    description: 'Install with `brew install sox`',
    required: true
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="swiss-section bg-swiss-50">
      <div className="swiss-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white text-swiss-700 text-sm font-medium tracking-wide mb-6">
            HOW IT WORKS
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Simple.
            <br />
            <span className="text-accent-600">Powerful.</span>
            <br />
            Effortless.
          </h2>
          
          <p className="text-xl text-swiss-600 leading-relaxed">
            Four simple steps to transform your voice into text. 
            No complex setup, no learning curve—just pure productivity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-32">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-swiss-300 z-0" />
              )}
              
              <div className="relative z-10 bg-white border border-swiss-200 p-8 text-center group hover:border-swiss-900 transition-all duration-300">
                {/* Step Number */}
                <div className="text-6xl font-bold text-swiss-200 group-hover:text-accent-600 transition-colors duration-300 mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-swiss-900 text-white group-hover:bg-accent-600 transition-colors duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent-600 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-swiss-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* System Requirements */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-bold mb-8">
              System Requirements
            </h3>
            
            <div className="space-y-6">
              {requirements.map((req) => (
                <div key={req.title} className="flex items-start space-x-4">
                  <div className="shrink-0 w-6 h-6 mt-1 bg-swiss-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-swiss-900 mb-1">
                      {req.title}
                    </h4>
                    <p className="text-swiss-600">
                      {req.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-accent-50 border border-accent-200">
              <p className="text-sm text-accent-700">
                <strong>Note:</strong> Currently optimized for ARM-based Macs (Apple Silicon). 
                Intel Mac and cross-platform support coming soon.
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-swiss-200 p-8">
            <h3 className="text-2xl font-bold mb-6">
              Quick Setup Guide
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-swiss-100 rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <span>Download and install SunnAI.dmg</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-swiss-100 rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <span>Grant microphone and accessibility permissions</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-swiss-100 rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <span>Add your OpenAI API key in settings</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-swiss-100 rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </div>
                <span>Press Cmd+H and start speaking!</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-swiss-200">
              <p className="text-xs text-swiss-500">
                Setup takes less than 5 minutes. No technical expertise required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 