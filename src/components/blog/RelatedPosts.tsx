import Link from 'next/link'
import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import type { NextraThemeLayoutProps } from 'nextra'

interface BlogPost {
  slug: string
  title: string
  description: string
  headerImage: string
}

interface PageItem {
  name: string
  route: string
  frontMatter?: {
    title?: string
    description?: string
    headerImage?: string
  }
  children?: PageItem[]
}

interface RelatedPostsProps {
  posts: string[]
  pageOpts: NextraThemeLayoutProps['pageOpts']
}

function isBlogPost(page: PageItem): page is PageItem {
  return page.route.startsWith('/blog/')
}

export function RelatedPosts({ posts, pageOpts }: RelatedPostsProps) {
  // Find all blog posts from pageMap
  const allPosts = useMemo(() => {
    const blogPosts: BlogPost[] = []
    const traverse = (pages: PageItem[]) => {
      for (const page of pages) {
        if (isBlogPost(page)) {
          blogPosts.push({
            slug: page.name,
            title: page.frontMatter?.title || '',
            description: page.frontMatter?.description || '',
            headerImage: page.frontMatter?.headerImage || ''
          })
        }
        if (page.children) {
          traverse(page.children)
        }
      }
    }
    
    // Find the blog directory
    const blogDir = pageOpts.pageMap.find(item => 
      'name' in item && item.name === 'blog' && 'children' in item
    ) as PageItem | undefined
    
    if (blogDir?.children) {
      traverse(blogDir.children)
    }
    
    return blogPosts
  }, [pageOpts.pageMap])

  // Filter and map the related posts
  const relatedPosts = useMemo(() => 
    posts
      .map(slug => allPosts.find(post => post.slug === slug))
      .filter((post): post is BlogPost => Boolean(post))
  , [posts, allPosts])

  if (!relatedPosts.length) return null

  return (
    <div className="mt-32">
      <div className="text-center mb-16">
        <span className="text-sm text-blue-600 uppercase tracking-wider font-medium">
          CONTINUE READING
        </span>
        <h2 className="text-3xl md:text-4xl text-gray-900  mt-2">
          Related Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <Link 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block h-full no-underline"
          >
            <article className="relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1 h-full flex flex-col">
              <div className="aspect-[4/3] overflow-hidden flex-shrink-0">
                <img
                  src={post.headerImage}
                  alt={post.title}
                  className="w-full mt-0 h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl text-gray-900 font-medium mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 no-underline">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3 no-underline">
                  {post.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium mt-auto no-underline hover:text-blue-700 transition-colors">
                  Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
} 