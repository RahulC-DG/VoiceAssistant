import { Button } from "@/components/ui/button"
import { Download, Mic, Zap } from "lucide-react"
import { VoiceWave } from "@/components/voice-wave"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f6feb]/10 via-transparent to-[#ff6b35]/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1f6feb]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ff6b35]/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Voice wave animation */}
        <div className="mb-8">
          <VoiceWave />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#f0f6fc] via-[#1f6feb] to-[#ff6b35] bg-clip-text text-transparent">
          Transform Your Voice
          <br />
          Into Intelligent Action
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#8b949e] mb-8 max-w-4xl mx-auto leading-relaxed">
          The AI-powered desktop assistant that turns natural speech into productivity. Manage calendars, brainstorm
          ideas, and control your workflow with just your voice.
        </p>

        {/* Trust badges */}
        <div className="flex items-center justify-center gap-4 mb-8 text-sm text-[#8b949e]">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#ff6b35]" />
            <span>Powered by Deepgram & OpenAI</span>
          </div>
          <div className="w-1 h-1 bg-[#8b949e] rounded-full" />
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 text-[#1f6feb]" />
            <span>Zero Setup Required</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#1f6feb] to-[#ff6b35] hover:from-[#1f6feb]/80 hover:to-[#ff6b35]/80 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Free - 2 Minutes Setup
        </Button>

        <p className="text-sm text-[#8b949e] mt-4">No installation required • Works on Windows, Mac & Linux</p>
      </div>
    </section>
  )
}
