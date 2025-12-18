// TODO: Add a linting script/configuration (e.g. eslint) to package.json
// TODO: Add a formatting script/configuration (e.g. prettier) to package.json
// TODO: Add a test script/framework (e.g. jest, playwright) to package.json

const fs = require('fs');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  env: {
   // TODO: Review the `noflash` script injection method. Consider if `next/script` or a library like `next-themes` could handle this more natively to avoid fs usage in config.
   noflash: fs.readFileSync('./public/scripts/noflash.js').toString()
 },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
});
