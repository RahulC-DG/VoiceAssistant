import { Card, CardContent } from "@/components/ui/card"
import { Brain, Mic, Shield, Zap } from "lucide-react"

export function TechStack() {
  return (
    <section className="py-24 px-4 bg-[#21262d]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f0f6fc]">Enterprise-Grade Technology</h2>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
            Built with the most advanced AI and speech recognition technology available
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-[#ff6b35]/10 to-[#ff6b35]/5 border-[#ff6b35]/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#ff6b35]/20 rounded-lg">
                  <Mic className="w-8 h-8 text-[#ff6b35]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#f0f6fc]">Deepgram Nova-3</h3>
                  <p className="text-[#ff6b35]">Speech Recognition</p>
                </div>
              </div>
              <p className="text-[#8b949e] leading-relaxed">
                Industry-leading speech-to-text accuracy with real-time processing. Handles accents, background noise,
                and natural speech patterns with professional-grade precision.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#1f6feb]/10 to-[#1f6feb]/5 border-[#1f6feb]/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#1f6feb]/20 rounded-lg">
                  <Brain className="w-8 h-8 text-[#1f6feb]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#f0f6fc]">OpenAI GPT-4</h3>
                  <p className="text-[#1f6feb]">AI Intelligence</p>
                </div>
              </div>
              <p className="text-[#8b949e] leading-relaxed">
                Advanced language understanding for natural conversations, creative brainstorming, and intelligent task
                interpretation. Responds like a professional assistant.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Privacy First", desc: "Local processing for sensitive data" },
            { icon: Zap, title: "Instant Response", desc: "Real-time speech recognition" },
            { icon: Brain, title: "Smart Learning", desc: "Adapts to your speech patterns" },
            { icon: Mic, title: "Multi-Speaker", desc: "Identifies different voices" },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-[#21262d] border border-[#30363d] rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1f6feb]/20 to-[#ff6b35]/20 rounded-lg mb-4">
                <item.icon className="w-6 h-6 text-[#1f6feb]" />
              </div>
              <h4 className="font-semibold text-[#f0f6fc] mb-2">{item.title}</h4>
              <p className="text-sm text-[#8b949e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
