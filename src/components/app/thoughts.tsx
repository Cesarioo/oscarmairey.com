"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

const thoughts = [
  {
    title: "AI: Ideas matter more than execution",
    excerpt:
      "In the age of AI, the quality of your ideas becomes paramount. With tools like GPT-4 and automated development, the barrier to execution is lower than ever, shifting the competitive advantage to innovative thinking.",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*-DAj8QPi-tgAM52wKozk1A.jpeg",
    date: "March 2025",
    url: "#article-1",
  },
  {
    title: "Blockchain has no Product Market Fit (yet)",
    excerpt:
      "Despite the hype and investment in blockchain technology, we haven't found its killer application. Analyzing current use cases, limitations, and what it would take to achieve true product-market fit.",
    image: "https://i.redd.it/fr6f38nwswla1.jpg",
    date: "March 2025",
    url: "#article-2",
  },
  {
    title: "Thoughts on user-centric design, and why it matters",
    excerpt:
      "The importance of putting users first in product development. How empathy-driven design leads to better products, higher retention, and sustainable growth in modern software development.",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*-g2E8Q0pyILA7_Nu5x11vw.jpeg",
    date: "February 2025",
    url: "#article-3",
  },
]

export default function Thoughts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="thoughts" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-muted/30 dark:bg-muted/10">
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
            Insights & Perspectives
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Thought Leadership</h2>
          <p className="text-foreground/70 text-lg">Ideas and insights on entrepreneurship, innovation, and business</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {thoughts.map((thought, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={thought.url} className="block h-full cursor-pointer">
                <Card className="group overflow-hidden border-none bg-background/50 backdrop-blur-sm shadow-md hover:shadow-md transition-all duration-300 h-full flex flex-col relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={thought.image || "/placeholder.svg"}
                      alt={thought.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="flex-1 p-6 flex flex-col">
                    <div className="mb-2 flex justify-between items-center">
                      <span className="text-sm text-foreground/60">{thought.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {thought.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 flex-1">{thought.excerpt}</p>

                    {/* Clickable indicator */}
                    <div className="self-end w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild className="rounded-full border-primary/20 hover:bg-primary/10 px-6">
            <Link href="/" className="flex items-center gap-2">
              Read More
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

