import { Mail, Shield, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#0d1117] border-t border-[#21262d]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-[#f0f6fc] mb-4">AI Voice Assistant</h3>
            <p className="text-[#8b949e] leading-relaxed">
              Transform your voice into intelligent action with professional-grade AI technology.
            </p>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-semibold text-[#f0f6fc] mb-4">Powered By</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff6b35] rounded-full" />
                <span className="text-[#8b949e]">Deepgram Nova-3 Speech Recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1f6feb] rounded-full" />
                <span className="text-[#8b949e]">OpenAI GPT-4 Intelligence</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-[#f0f6fc] mb-4">Support</h4>
            <div className="space-y-3">
              <a
                href="mailto:support@aivoiceassistant.com"
                className="flex items-center gap-2 text-[#8b949e] hover:text-[#1f6feb] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>support@aivoiceassistant.com</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-[#8b949e] hover:text-[#1f6feb] transition-colors">
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-[#8b949e] hover:text-[#1f6feb] transition-colors">
                <FileText className="w-4 h-4" />
                <span>Terms of Service</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#21262d] text-center">
          <p className="text-[#8b949e]">
            © 2024 AI Voice Assistant. Professional desktop software for voice-powered productivity.
          </p>
        </div>
      </div>
    </footer>
  )
}
