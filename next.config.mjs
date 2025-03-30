import nextra from 'nextra'
 
const withNextra = nextra({
  theme: './theme.tsx',
  themeConfig: './theme.config.jsx'
})
 
export default withNextra()
 
