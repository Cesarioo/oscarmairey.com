import React, { useEffect, useState } from 'react'
import type { NextraThemeLayoutProps } from 'nextra'
import { Inter } from 'next/font/google'
import { RelatedPosts } from './src/components/blog/RelatedPosts'
import './src/pages/main.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

// Author logo dictionary
const authorLogos: { [key: string]: string } = {
  'Raizer Team': '/android-chrome-512x512.png',
  'Gregory Saey': 'https://pub-44b2544c34a4482595a3ab438ff68918.r2.dev/gregory.png',
  'Oscar Mairey': 'https://pub-44b2544c34a4482595a3ab438ff68918.r2.dev/oscar.png',
  'Raizer': '/android-chrome-512x512.png',
  'default': '/android-chrome-512x512.png' // Default fallback logo
}

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, frontMatter } = pageOpts
  
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1300)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Get the author's logo or use default
  const authorLogo = frontMatter.author ? authorLogos[frontMatter.author] || authorLogos.default : authorLogos.default

  return (
    <div className={`flex flex-col min-h-screen w-full bg-background text-foreground ${inter.className}`}>
      <Head>
        <title>{title ? `${title} – Academic Trading` : 'Academic Trading Blog'}</title>
        <meta name="description" content={frontMatter.description} />
        {frontMatter.tags && (
          <meta name="keywords" content={frontMatter.tags.join(', ')} />
        )}
        <meta property="og:title" content={title ? `${title} – Academic Trading` : 'Academic Trading Blog'} />
        <meta property="og:description" content={frontMatter.description} />
        {frontMatter.headerImage && (
          <meta property="og:image" content={frontMatter.headerImage} />
        )}
      </Head>
      <div className="flex-1 mt-16">
        <main className={`w-full py-20 ${isMobile ? 'px-4' : 'ml-[calc(50%_-_24rem)]'}`}>
          <article className="prose prose-stone dark:prose-invert lg:prose-lg max-w-3xl">
            <div className="mb-8">
              {frontMatter.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {frontMatter.tags.map((tag: string) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {frontMatter.title && (
                <h1>{frontMatter.title}</h1>
              )}
              <div className="flex items-center gap-3">
                <img 
                  src={authorLogo}
                  alt={frontMatter.author || 'Author'} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all"
                />
                <div>
                  <div className="font-medium text-base text-foreground/90">Written by {frontMatter.author}</div>
                  <div className="text-sm text-muted-foreground">on {frontMatter.date}</div>
                </div>
              </div>
              {frontMatter.headerImage && (
                <div className="w-full h-[400px] relative mb-8 rounded-xl overflow-hidden">
                  <img 
                    src={frontMatter.headerImage} 
                    alt={frontMatter.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {frontMatter.description && (
                <div className="text-lg text-muted-foreground mt-2 mb-8 text-center italic border-b border-border/40 pb-6">
                  {frontMatter.description}
                </div>
              )}
            </div>
            {children}
          </article>
          {frontMatter.relatedPosts && (
            <div className="container mx-auto max-w-6xl px-4">
              <RelatedPosts posts={frontMatter.relatedPosts} pageOpts={pageOpts} />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

