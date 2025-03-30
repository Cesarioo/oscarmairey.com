"use client"

import { useRef } from "react"
import { BookOpen, MapPin, Lightbulb, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

// Update the journeyPoints array to reflect entrepreneurial journey
const journeyPoints = [
  {
    icon: <BookOpen className="h-5 w-5 text-primary-foreground" />,
    title: "The Spark",
    location: "Early Days",
    period: "2020 - 2022",
    description:
      "I discovered crypto and blockchain through its lucrative aspect. I discovered there a true, vibrant community that accept each other as they are. This is why I stayed in this ecosystem for so long.",
    image: "/eiffeil.png",
  },
  {
    icon: <MapPin className="h-5 w-5 text-primary-foreground" />,
    title: "First Ventures",
    location: "Discovery Phase",
    period: "2022 - 2024",
    description:
      "A great social inteligence was the only thing I had. I used this sense to join my first company, to fund what is now the largest francophone media - Le Crypto Daily. I've also worked on software, by the launch of a SocialFi application for which we raised 1.5m$, and launched a world premiere at CES Las Vegas!",
    image: "/ces.jpeg",
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-primary-foreground" />,
    title: "Scaling Impact",
    location: "Growth Focus",
    period: "2024 - 2025",
    description:
      "During this period, I joined an AI company creating dataset backed by blockchain. As a core team member of the company, I've flown and lived in Dubai to occupy my position.",
    image: "/maya.png",
  },
  {
    icon: <Heart className="h-5 w-5 text-primary-foreground" />,
    title: "The Game",
    location: "Current Chapter",
    period: "2025 - Present",
    description:
      "Having learnt a lot besides my co-founders, I've decided to take an Operational role at Chainraizer, to apply a core blockchain concept to Traditional finance: private equity tokenization.",
    image: "/chainraizer.png",
  },
]

export default function Journey() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  return (
    <section id="journey" className="py-24 relative" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Chapters of Life</h2>
          <p className="text-foreground/70 text-lg">Moments and experiences that have shaped who I am today</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div
            ref={timelineRef}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
          >
            {/* No floating icon that follows the timeline */}
          </div>

          <div className="space-y-12">
            {journeyPoints.map((point, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative grid md:grid-cols-2 gap-8"
                >
                  {/* Text Content - Left on even, right on odd */}
                  <div className={`${isEven ? "order-1" : "order-2"}`}>
                    <div className="p-6 md:p-8">
                      <div className={`flex flex-col gap-1 mb-4 ${isEven ? "md:items-end md:text-right" : ""}`}>
                        <span className="text-sm text-foreground/60">{point.period}</span>
                        <h3 className="text-xl font-bold">{point.title}</h3>
                        <p className="text-primary">{point.location}</p>
                      </div>
                      <p className={`text-foreground/80 ${isEven ? "md:text-right" : ""}`}>{point.description}</p>
                    </div>
                  </div>

                  {/* Image - Right on even, left on odd */}
                  <div className={`hidden md:block ${isEven ? "order-2" : "order-1"}`}>
                    <div className="p-6 md:p-8 h-full flex items-center justify-center">
                      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-primary/20">
                        <Image
                          src={point.image || "/placeholder.svg"}
                          alt={point.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Static icons for all view sizes */}
                  <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                      {point.icon}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

