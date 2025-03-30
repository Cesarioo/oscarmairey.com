"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function Connect() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    {
      name: "LinkedIn",
      description: "Connect professionally and follow my business updates",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/oscar-mairey",
      color: "bg-[#0077B5]/10 text-[#0077B5]",
    },
    {
      name: "Twitter",
      description: "Join the conversation and get my latest thoughts",
      icon: <Twitter className="h-6 w-6" />,
      url: "https://twitter.com/cesarioo__",
      color: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
    },
    {
      name: "GitHub",
      description: "Explore my open source contributions and projects",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/cesarioo",
      color: "bg-gray-800/10 text-gray-800 dark:bg-gray-200/10 dark:text-gray-200",
    },
    {
      name: "Email",
      description: "Reach out directly for business inquiries",
      icon: <Mail className="h-6 w-6" />,
      url: "mailto:o@mairey.net",
      color: "bg-primary/10 text-primary",
    },
  ]

  return (
    <section id="connect" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]"></div>
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
            Lets Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Follow My Journey</h2>
          <p className="text-foreground/70 text-lg">Stay updated with my latest ventures and insights</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  <Card className="border-none bg-background/50 backdrop-blur-sm shadow-md overflow-hidden group hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-full ${link.color} flex items-center justify-center flex-shrink-0 relative overflow-hidden`}
                      >
                        <div className="transition-opacity duration-300 group-hover:opacity-0">{link.icon}</div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowUpRight className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 flex items-center">
                          {link.name}
                        </h3>
                        <p className="text-foreground/70 text-sm">{link.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

