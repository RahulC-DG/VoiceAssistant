import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Brain, Mic2, Users, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Speak Your Schedule",
    description:
      "Natural calendar management through voice commands. Create meetings, check availability, and reschedule events with simple speech.",
    benefits: ["Instant schedule overview", "Natural event creation", "Effortless rescheduling"],
  },
  {
    icon: Brain,
    title: "AI Creative Partner",
    description:
      "Voice brainstorming sessions with intelligent AI responses. Turn conversations into actionable insights and creative solutions.",
    benefits: ["Interactive idea development", "Real-time session summaries", "Creative thinking support"],
  },
  {
    icon: Zap,
    title: "Zero Setup Required",
    description:
      "Download, extract, and start speaking immediately. No installation wizards, no complex configuration, no technical knowledge needed.",
    benefits: ["Works in under 2 minutes", "Portable executable", "Cross-platform compatibility"],
  },
  {
    icon: Users,
    title: "Speaker Recognition",
    description:
      "Intelligent speaker diarization focuses on your voice in busy environments. Custom commands adapt to your speech patterns.",
    benefits: ["Multi-user environments", "Accent recognition", "Continuous learning"],
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays local for sensitive tasks. Professional-grade security with enterprise-level reliability.",
    benefits: ["Offline capability", "Local data processing", "Enterprise security"],
  },
  {
    icon: Mic2,
    title: "Professional Grade",
    description:
      "Powered by Deepgram's Nova-3 speech recognition and OpenAI GPT-4 intelligence for unmatched accuracy.",
    benefits: ["Enterprise accuracy", "Advanced AI responses", "Professional reliability"],
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#f0f6fc] to-[#1f6feb] bg-clip-text text-transparent">
            Powerful Features, Simple Experience
          </h2>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Everything you need to transform your voice into intelligent productivity actions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#21262d] border-[#30363d] hover:border-[#1f6feb]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#1f6feb]/10"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#1f6feb]/20 to-[#ff6b35]/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-[#1f6feb]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#f0f6fc]">{feature.title}</h3>
                </div>

                <p className="text-[#8b949e] mb-4 leading-relaxed">{feature.description}</p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-[#8b949e]">
                      <div className="w-1.5 h-1.5 bg-[#3fb950] rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
