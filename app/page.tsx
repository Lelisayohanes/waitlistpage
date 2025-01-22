import Header from "@/components/Header"
import Hero from "@/components/Hero"
import KeyFeatures from "@/components/KeyFeatures"
import TargetAudience from "@/components/TargetAudience"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <KeyFeatures />
        <TargetAudience />
      </main>
      <Footer />
    </div>
  )
}

