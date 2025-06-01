import { 
  PenTool, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Heart,
  Users
} from 'lucide-react'

const useCases = [
  {
    icon: PenTool,
    title: 'Content Creators',
    description: 'Draft scripts, captions, and blog posts by speaking naturally. Perfect for YouTubers, podcasters, and writers who want to capture ideas faster than typing allows.',
    benefits: ['150+ WPM transcription', 'AI writing assistance', 'Creative flow preservation']
  },
  {
    icon: Code,
    title: 'Developers',
    description: 'Dictate code comments, documentation, and commit messages. Use AI assistance for explaining complex concepts and generating technical documentation.',
    benefits: ['Code documentation', 'Commit messages', 'Technical explanations']
  },
  {
    icon: Briefcase,
    title: 'Business Professionals',
    description: 'Quickly compose emails, meeting notes, and reports during busy schedules. Transform meeting recordings into actionable summaries.',
    benefits: ['Email composition', 'Meeting transcription', 'Report generation']
  },
  {
    icon: GraduationCap,
    title: 'Students & Researchers',
    description: 'Capture lecture notes, transcribe interviews, and draft research papers. Perfect for academic work where speed and accuracy matter.',
    benefits: ['Lecture notes', 'Interview transcription', 'Research documentation']
  },
  {
    icon: Heart,
    title: 'Accessibility',
    description: 'Alternative input method for users with repetitive strain injuries or those who prefer voice over keyboard input for health reasons.',
    benefits: ['RSI prevention', 'Hands-free operation', 'Voice preference support']
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Generate meeting minutes, brainstorm ideas vocally, and create shared documentation faster than traditional typing methods.',
    benefits: ['Meeting minutes', 'Brainstorming capture', 'Team documentation']
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="swiss-section">
      <div className="swiss-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-swiss-100 text-swiss-700 text-sm font-medium tracking-wide mb-6">
            USE CASES
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Perfect for
            <br />
            <span className="text-accent-600">Every</span> Workflow
          </h2>
          
          <p className="text-xl text-swiss-600 leading-relaxed">
            From creative professionals to accessibility needs, SunnAI adapts to your unique requirements 
            and transforms how you work with text on macOS.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.title}
              className="bg-white border border-swiss-200 p-8 group hover:border-swiss-900 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-swiss-100 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                  <useCase.icon className="w-7 h-7" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-accent-600 transition-colors duration-300">
                {useCase.title}
              </h3>
              
              <p className="text-swiss-600 leading-relaxed mb-6">
                {useCase.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2">
                {useCase.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-accent-600 rounded-full" />
                    <span className="text-sm text-swiss-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-swiss-900 text-white p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Real-World Impact
              </h3>
              <p className="text-lg text-swiss-300 leading-relaxed">
                Join thousands of professionals who have revolutionized their workflow 
                with voice-powered productivity. Experience the difference that Swiss-engineered 
                precision makes in your daily work.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">60%</div>
                <div className="text-sm text-swiss-400 tracking-wide">FASTER INPUT</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">40h</div>
                <div className="text-sm text-swiss-400 tracking-wide">SAVED/MONTH</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
                <div className="text-sm text-swiss-400 tracking-wide">USER SATISFACTION</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">0</div>
                <div className="text-sm text-swiss-400 tracking-wide">LEARNING CURVE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 