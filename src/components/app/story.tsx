"use client"
import Image from "next/image"
import { BookOpen, Heart, Compass } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Story() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="story" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-muted/30 dark:bg-muted/10">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              My Story
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-4">
            The Journey So Far
          </motion.h2>
          <motion.p variants={itemVariants} className="text-foreground/70 text-lg">
            A glimpse into who I am and what shapes my perspective
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[600px] w-full">
              {/* Secondary image - behind and to the left */}
              <div className="absolute top-[10%] left-[5%] w-[70%] h-[60%] rounded-2xl border border-primary/20 overflow-hidden z-10 transform -rotate-6">
                <Image
                  src="/people.png"
                  alt="Entrepreneurial moment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-30"></div>
              </div>

              {/* Main image - in front */}
              <div className="absolute top-[15%] left-[15%] w-[80%] h-[70%] rounded-2xl border border-primary/20 overflow-hidden z-20">
                <Image src="/conference.jpeg" alt="Oscar Mairey" fill className="object-cover" />
                {/* No hover overlay */}
              </div>

              {/* Third image - smaller, to the right */}
              <div className="absolute bottom-[10%] right-[5%] w-[50%] h-[40%] rounded-2xl border border-primary/20 overflow-hidden z-30">
                <Image
                  src="/burj.png"
                  alt="Innovation process"
                  fill
                  className="object-cover"
                />
                {/* No hover overlay */}
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-2xl"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full -z-10 blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed text-lg">
                I discovered stoicism early in my youth, which layered my worldview. As we will leave this world one day or the other, the game is to last as long as possible - even after our living. Thus making the most of our living, by impacting humanity to be remembered as most.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                When I think about technology, I see a new form of art, questioning moral principles in its application. The best philosophers were also engineers - from Archimedes to Wittgenstein. I bet theses guys would have a blast discussing about AI consciousness! 
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Ive fell in love with crypto around 2020, fascinated by its potential to reshape financial systems and social structures. The combination of cryptography, game theory, and economic incentives opened my eyes to new possibilities for organizing human cooperation. 
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Now embracing deep tech as a whole, from crypto to artificial intelligence. These transformative technologies are not just tools - they're extensions of human capability that will fundamentally alter our relationship with reality. 
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-24"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="p-8">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Technology Litteracy</h3>
            <p className="text-foreground/70">
              I believe every fouder must know how it works technically to create the best lasting product.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Market Innovation</h3>
            <p className="text-foreground/70">
              Apple is only outperforming because they find the right market to position their innovations.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Compass className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">One thing</h3>
            <p className="text-foreground/70">
              The hardest principle I have to stay by, is to focus my product on the one and only purpose they serve.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

