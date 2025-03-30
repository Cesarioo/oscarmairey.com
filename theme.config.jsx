export default {
  footer: {
    component: () => (
      <div className="mt-8 border-t py-4">
        <p>© {new Date().getFullYear()} Raizer. All rights reserved.</p>
      </div>
    )
  },
  head: ({ title, meta }) => (
    <>
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  darkMode: true,
  navs: [
    {
      url: 'https://github.com/yourusername/Raizer',
      name: 'GitHub'
    }
  ]
} 