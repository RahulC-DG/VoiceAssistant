import { Download, FolderOpen, Mic } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Download & Extract",
    description: "Get the app in seconds. No installation wizards or complex setup required.",
    detail: "Simple ZIP file download",
  },
  {
    icon: FolderOpen,
    title: "Launch Application",
    description: "Double-click to open - no installation needed. Works immediately out of the box.",
    detail: "Portable executable",
  },
  {
    icon: Mic,
    title: "Start Speaking",
    description: "Your voice becomes your interface. Natural speech recognition starts working instantly.",
    detail: "Professional-grade AI",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0d1117] to-[#21262d]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f0f6fc]">How It Works</h2>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            Three simple steps to transform your voice into intelligent action
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#1f6feb] to-transparent transform -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#1f6feb] to-[#ff6b35] text-white font-bold rounded-full text-sm mb-4">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#21262d] border border-[#30363d] rounded-xl mb-6">
                  <step.icon className="w-8 h-8 text-[#1f6feb]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#f0f6fc] mb-3">{step.title}</h3>
                <p className="text-[#8b949e] mb-2 leading-relaxed">{step.description}</p>
                <p className="text-sm text-[#ff6b35] font-medium">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo video */}
        <div className="mt-16 text-center">
          <div className="bg-[#21262d] border border-[#30363d] rounded-xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-[#1f6feb]/10 to-[#ff6b35]/10 rounded-lg overflow-hidden">
              <div style={{ position: 'relative', paddingBottom: '64.98194945848375%', height: 0 }}>
                <iframe 
                  src="https://www.loom.com/embed/d0143b4d7fb44942906708b23c929fc7?sid=569b0ea2-26e9-4d50-9eda-af1b9f467b27" 
                  frameBorder={0}
                  allowFullScreen 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="AI Voice Assistant Demo"
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[#f0f6fc] text-lg font-medium">See the AI Voice Assistant in Action</p>
              <p className="text-[#8b949e] text-sm">Watch how easy it is to get started in under 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
