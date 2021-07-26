const fs = require('fs');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  env: {
   noflash: fs.readFileSync('./public/scripts/noflash.js').toString()
 },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
});
