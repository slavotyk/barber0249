/**
 * @type {import('next').NextConfig}
 */
const path = require('path');
const nextTranslate = require('next-translate');
const rewrites = require('./translated-routes.json').reduce((rewrites, path) => {
  for (const [locale, pages] of Object.entries(path)) {
    for (const [destination, source] of Object.entries(pages)) {
      rewrites.push({
        source: `/${locale}${source}`,
        destination: `/${locale}${destination}`,
        locale: false,
      });
    }
  }
  return rewrites;
}, []);

module.exports = nextTranslate({
  reactStrictMode: true,
  sassOptions: {
    // additionalData: [
    //   `@import "src/styles/variables.scss";`,
    //   `@import "src/styles/mixins.scss";`
    // ].join('\r\n'),
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: {
    appDir: true
  },
  async rewrites() {
    return rewrites
  }
})
