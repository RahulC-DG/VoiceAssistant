import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { TechStack } from "@/components/tech-stack"
import { Download } from "@/components/download"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#f0f6fc]">
      <Hero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Download />
      <Footer />
    </main>
  )
}
