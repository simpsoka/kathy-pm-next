const { createMDX } = require('@next/mdx')
const fs = require('fs'); // Keep for now

/** @type {import('@next/mdx').MDXOptions} */
const mdxOptions = {
  extension: /\.mdx?$/,
  // Add other MDX options if needed, like remark/rehype plugins
}

const withMDX = createMDX(mdxOptions)

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { // Keep for now
    noflash: fs.readFileSync('./public/scripts/noflash.js').toString()
  },
  i18n: { // Keep
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'], // Add ts/tsx just in case, keep mdx
  // Add other Next.js config options here if needed
}

module.exports = withMDX(nextConfig)
