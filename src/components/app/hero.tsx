"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Im <span className="text-primary">Oscar Mairey</span>
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl text-foreground/80 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <TypeAnimation
                  sequence={[
                    "Building innovative companies",
                    2000,
                    "Investing in the future",
                    2000,
                    "Sharing insights",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </motion.div>

              <motion.p
                className="text-lg text-foreground/70 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Welcome on my digital space! On this website, you will find every information
                about my personal journey, as well as thoughts & vision for the future of innovationa
                and their real-world applications.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button asChild size="lg" className="group relative overflow-hidden rounded-full">
                  <Link href="#story">
                    <span className="relative z-10">My Entrepreneurial Journey</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 group-hover:translate-x-full transition-transform duration-300 ease-in-out"></span>
                    <ArrowDown className="ml-2 h-4 w-4 relative z-10" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="flex space-x-5 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Link
                  href="https://github.com/oscarmairey"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/oscarmairey"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/oscarmairey"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-foreground/60 hover:text-primary transition-colors duration-300"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-4 border-primary/20 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/photo.png"
                      alt="Oscar Mairey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary/30 backdrop-blur-md"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-secondary/30 backdrop-blur-md"></div>
              <div className="absolute top-1/2 -right-10 w-8 h-8 rounded-full bg-accent/30 backdrop-blur-md"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <AnimatePresence>
          {!hasScrolled && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
              <motion.div
                className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

