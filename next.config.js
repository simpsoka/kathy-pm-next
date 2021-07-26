const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
});
