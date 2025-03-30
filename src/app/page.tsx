import Hero from "@/components/app/hero"
import Story from "@/components/app/story"
import Journey from "@/components/app/journey"
import Companies from "@/components/app/companies"
import Thoughts from "@/components/app/thoughts"
import Connect from "@/components/app/connect"
import Footer from "@/components/app/footer"
import Navbar from "@/components/app/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/95 overflow-hidden">
      <Navbar />
      <Hero />
      <Story />
      <Journey />
      <Companies />
      <Thoughts />
      <Connect />
      <Footer />
    </main>
  )
}

