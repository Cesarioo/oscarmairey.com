"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Coins, Code, Lightbulb, Presentation, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const skills = [
  {
    name: "Software Development",
    icon: <Code className="h-10 w-10 text-primary" />,
    description:
      "Full-stack development with expertise in React, Next.js, and TypeScript. Building scalable applications with modern tech stacks and best practices in web3.",
    recognition: "Built Raizer App",
    url: "https://raizer.fi",
  },
  {
    name: "Blockchain Development",
    icon: <Users className="h-10 w-10 text-primary" />,
    description:
      "Developing smart contracts and DApps using Solidity and Web3.js. Experience with various blockchain protocols and DeFi implementations.",
    recognition: "Hackathon Winner",
    url: "https://www.linkedin.com/posts/chainraizer_this-year-the-chainraizer-team-flew-to-the-activity-7311027473746386945-hXx4?",
  },
  {
    name: "Machine Learning",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    description:
      "Implementing cutting-edge ML models and AI algorithms. Experience with PyTorch, TensorFlow, and large language models for practical applications.",
    recognition: "Automated ML Algorithms",
    url: "",
  },
  {
    name: "Public Speaking",
    icon: <Presentation className="h-10 w-10 text-primary" />,
    description:
      "Delivering keynotes and workshops on blockchain, AI, and innovation. Regular speaker at tech conferences and universities about emerging technologies.",
    recognition: "CES Speaker",
    url: "https://www.linkedin.com/posts/oscar-mairey_je-naurais-pas-du-%C3%AAtre-sur-cette-sc%C3%A8ne-activity-7018150681257639937-avYF?",
  },
  {
    name: "Communications",
    icon: <Coins className="h-10 w-10 text-primary" />,
    description:
      "Crafting compelling narratives and technical content. Experienced in technical writing, documentation, and bridging complex ideas to diverse audiences.",
    recognition: "Web3 Communication Manager Role",
    url: "",
  },
  {
    name: "Community Building",
    icon: <Trophy className="h-10 w-10 text-primary" />,
    description:
      "Growing and managing tech communities with thousands of members. Creating engaging environments for developers, entrepreneurs, and tech enthusiasts.",
    recognition: "Managed 500k Community",
    url: "https://ta-da.io",
  },
]

export default function Companies() {
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
    <section id="companies" className="py-24 relative overflow-hidden">
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
            Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Jack of All Trades</h2>
          <p className="text-foreground/70 text-lg">I&apos;ve developed diverse skill set built through passion and practice</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={skill.url} className="block h-full cursor-pointer">
                <Card className="group overflow-hidden border-none bg-background/50 backdrop-blur-sm shadow-md h-full flex flex-col relative hover:shadow-md transition-all duration-300">
                  <CardContent className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 relative overflow-hidden">
                        <div className="transition-opacity duration-300 group-hover:opacity-0">{skill.icon}</div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ChevronRight className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h3>
                        <span className="text-sm font-medium text-primary">{skill.recognition}</span>
                      </div>
                    </div>

                    <p className="text-foreground/70 flex-1">{skill.description}</p>

                    {/* Removed the bottom right chevron indicator */}
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

