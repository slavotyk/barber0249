/** @type {import('next-sitemap').IConfig} */


module.exports = {
    siteUrl: process.env.SITE_URL || 'https://barbershop0249.ru/',
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    // exclude: ['/protected-page', '/awesome/secret-page'],
    // alternateRefs: [
    //     {
    //         href: 'https://es.example.com',
    //         hreflang: 'es',
    //     },
    //     {
    //         href: 'https://fr.example.com',
    //         hreflang: 'fr',
    //     },
    // ],
    // Default transformation function
    // transform: async (config, path) => {
    //     return {
    //         loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
    //         changefreq: config.changefreq,
    //         priority: config.priority,
    //         lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    //         alternateRefs: config.alternateRefs ?? [],
    //     }
    // },
    additionalPaths: async (config) => {
        const result = []

            result.push({loc: "/uslugi/papa-sin"})
            result.push({loc: "/uslugi/muzhskaya-strizhka"})
            result.push({loc: "/uslugi/strizhka-mashinkoy"})
            result.push({loc: "/uslugi/detskaya-strizhka"})
            result.push({loc: "/uslugi/strizhka-nozhnicami"})
            result.push({loc: "/uslugi/usluga-kompleks"})
            result.push({loc: "/uslugi/strizhka-borody"})
            result.push({loc: "/uslugi/modelirovaniya-borody"})
            result.push({loc: "/uslugi/kamuflazh-borody"})
            result.push({loc: "/uslugi/kamuflazh-volos"})
            result.push({loc: "/uslugi/vosk"})
            result.push({loc: "/uslugi/chernaya-maska"})
            result.push({loc: "/uslugi/patchi"})
            result.push({loc: "/uslugi/brite-golovy"})
            result.push({loc: "/uslugi/brite-lica"})


        return result
    },
    // robotsTxtOptions: {
    //     policies: [
    //         {
    //             userAgent: '*',
    //             allow: '/',
    //         },
    //         {
    //             userAgent: 'test-bot',
    //             allow: ['/path', '/path-2'],
    //         },
    //         {
    //             userAgent: 'black-listed-bot',
    //             disallow: ['/sub-path-1', '/path-2'],
    //         },
    //     ],
    //     additionalSitemaps: [
    //         'https://example.com/my-custom-sitemap-1.xml',
    //         'https://example.com/my-custom-sitemap-2.xml',
    //         'https://example.com/my-custom-sitemap-3.xml',
    //     ],
    // },
}