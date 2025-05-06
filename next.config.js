const fs = require('fs');
const createMDX = require('@next/mdx')

// New MDX setup for Next.js 14+
const withMDX = createMDX({
  // Add experimental support for MDX-RS
  experimental: {
    mdxRs: true,
  },
  // Keep original extension handling
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [], // Add any remark plugins here
    rehypePlugins: [], // Add any rehype plugins here
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Preserve existing env configuration
  env: {
   noflash: fs.readFileSync('./public/scripts/noflash.js').toString()
 },
 // Preserve existing i18n configuration
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  // Ensure 'md' and 'mdx' are included
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Add other Next.js config options here if needed
};

// Apply the MDX configuration to the Next.js config
module.exports = withMDX(nextConfig);
