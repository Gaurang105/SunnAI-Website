import { 
  Mic, 
  Zap, 
  Target, 
  Keyboard, 
  Globe, 
  Shield,
  Clock,
  Cpu
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Instant Speech-to-Text',
    description: 'Powered by OpenAI Whisper for industry-leading accuracy and real-time transcription.',
  },
  {
    icon: Cpu,
    title: 'AI Assistant Integration',
    description: 'Activate with "Hey Sun" for intelligent content generation and writing assistance.',
  },
  {
    icon: Target,
    title: 'Seamless Text Injection',
    description: 'Text appears directly at your cursor location in any application without copy-pasting.',
  },
  {
    icon: Globe,
    title: 'Floating Overlay Interface',
    description: 'Unobtrusive design that works with any application while staying out of your way.',
  },
  {
    icon: Keyboard,
    title: 'Global Hotkey Access',
    description: 'Quick activation with Cmd+H from anywhere in your macOS workflow.',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'No lag, no delays - speak and see results instantly with minimal system impact.',
  },
  {
    icon: Shield,
    title: 'Privacy-First Design',
    description: 'Your audio is processed securely through OpenAI\'s encrypted API with no data storage.',
  },
  {
    icon: Clock,
    title: 'No Subscriptions',
    description: 'One-time setup with your own OpenAI API key. Pay only for what you use.',
  },
]

export default function Features() {
  return (
    <section id="features" className="swiss-section bg-swiss-100">
      <div className="swiss-container">
        {/* Swiss Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-22">
          <div className="lg:col-span-7">
            <div className="swiss-overline mb-8">
              CORE FEATURES
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-none">
              Built for
              <br />
              <span className="text-accent-500">Maximum</span>
              <br />
              Productivity
            </h2>
          </div>
          
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <div>
              <div className="w-24 h-1 bg-swiss-950 mb-6" />
              <p className="text-lg text-swiss-700 leading-relaxed">
                Every feature designed with Swiss precision to enhance your workflow 
                and transform how you interact with text on macOS.
              </p>
            </div>
          </div>
        </div>

        {/* Swiss Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-22">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-swiss-50 border border-swiss-300 p-8 transition-all duration-300 hover:border-swiss-950 hover:bg-swiss-50"
              style={{
                transform: `translateY(${(index % 2) * 8}px)` // Swiss staggered layout
              }}
            >
              {/* Swiss Icon Design */}
              <div className="mb-8">
                <div className="relative inline-flex">
                  <div className="w-12 h-12 bg-swiss-950 flex items-center justify-center text-swiss-50 group-hover:bg-accent-500 transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  {/* Swiss geometric accent */}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border border-swiss-950 bg-swiss-50" />
                </div>
              </div>

              {/* Swiss Typography */}
              <h3 className="text-lg font-bold mb-4 text-swiss-950 group-hover:text-accent-500 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-swiss-700 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Swiss Technical Excellence Section */}
        <div className="border-t border-swiss-300 pt-22">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-swiss-950">
                Technical Excellence
              </h3>
              <p className="text-lg text-swiss-700 mb-12 leading-relaxed">
                Built specifically for Apple Silicon Macs with optimized performance, 
                minimal system impact, and seamless integration with macOS accessibility features.
              </p>
              
              {/* Swiss List Design */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 bg-swiss-950 mt-3 shrink-0" />
                  <span className="text-swiss-950 font-medium">Apple Silicon Optimized</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 bg-swiss-950 mt-3 shrink-0" />
                  <span className="text-swiss-950 font-medium">Universal Application Compatibility</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 bg-swiss-950 mt-3 shrink-0" />
                  <span className="text-swiss-950 font-medium">Enterprise-Grade Security</span>
                </div>
              </div>
            </div>
            
            {/* Swiss Data Visualization */}
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="relative">
                {/* Swiss geometric elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-swiss-300" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-accent-500" />
                
                <div className="bg-swiss-50 border-2 border-swiss-950 p-12 text-center">
                  <div className="text-6xl font-bold text-swiss-950 mb-4">99.9%</div>
                  <div className="swiss-label mb-6">ACCURACY RATE</div>
                  <div className="w-24 h-1 bg-accent-500 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 