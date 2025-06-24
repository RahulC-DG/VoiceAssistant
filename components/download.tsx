"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DownloadIcon, Monitor, HardDrive, Wifi, Mic, CheckCircle } from "lucide-react"

export function Download() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#21262d]/30 to-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f0f6fc]">Ready to Transform Your Voice?</h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Download section */}
          <div id="download-section" className="text-center lg:text-left">
            <Card className="bg-gradient-to-br from-[#1f6feb]/10 to-[#ff6b35]/10 border-[#1f6feb]/30 p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#f0f6fc] mb-2">AI Voice Assistant</h3>
                  <p className="text-[#8b949e]">Professional desktop application • Version 1.0</p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "Zero installation required",
                    "Works immediately out of the box",
                    "Complete privacy - your data stays local",
                    "Professional-grade AI technology",
                    "Cross-platform compatibility",
                    "Unlimited voice commands",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#3fb950] flex-shrink-0" />
                      <span className="text-[#8b949e]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  asChild
                  className="w-full bg-gradient-to-r from-[#1f6feb] to-[#ff6b35] hover:from-[#1f6feb]/80 hover:to-[#ff6b35]/80 text-white font-semibold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="https://github.com/RahulC-DG/AI-Voice-Assistant/releases/latest/download/AI-Voice-Assistant-v1.0.0.zip">
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download Free (50-80MB)
                  </a>
                </Button>

                <p className="text-sm text-[#8b949e] mt-4 text-center">
                  No subscription • No registration • No installation
                </p>
              </CardContent>
            </Card>
          </div>

          {/* System requirements */}
          <div>
            <h3 className="text-2xl font-bold text-[#f0f6fc] mb-6">System Requirements</h3>

            <div className="space-y-4">
              <Card className="bg-[#21262d] border-[#30363d]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-[#1f6feb]" />
                    <div>
                      <h4 className="font-semibold text-[#f0f6fc]">Platforms</h4>
                      <p className="text-sm text-[#8b949e]">Windows 10+, macOS 10.14+, Ubuntu 18.04+</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#21262d] border-[#30363d]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-5 h-5 text-[#1f6feb]" />
                    <div>
                      <h4 className="font-semibold text-[#f0f6fc]">Memory & Storage</h4>
                      <p className="text-sm text-[#8b949e]">4GB RAM minimum, 200MB free space</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#21262d] border-[#30363d]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Mic className="w-5 h-5 text-[#1f6feb]" />
                    <div>
                      <h4 className="font-semibold text-[#f0f6fc]">Audio</h4>
                      <p className="text-sm text-[#8b949e]">Built-in or external microphone required</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#21262d] border-[#30363d]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Wifi className="w-5 h-5 text-[#1f6feb]" />
                    <div>
                      <h4 className="font-semibold text-[#f0f6fc]">Network</h4>
                      <p className="text-sm text-[#8b949e]">Internet connection for AI features</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
