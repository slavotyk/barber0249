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
    // additionalPaths: async (config) => {
    //     const result = []
    //
    //
    //
    //     result.push({loc: "/services/Business-Idea-Generator"})
    //     result.push({loc: "/services/ChatBotKit"})
    //     result.push({loc: "/services/Writesonic"})
    //     result.push({loc: "/services/Bookmark"})
    //     result.push({loc: "/services/Sitekick"})
    //     result.push({loc: "/services/Durable"})
    //     result.push({loc: "/services/Tome"})
    //     result.push({loc: "/services/Slidesai"})
    //     result.push({loc: "/services/Presentations-ai"})
    //     result.push({loc: "/services/Jasper"})
    //     result.push({loc: "/services/Aivo"})
    //     result.push({loc: "/services/Rocketium"})
    //     result.push({loc: "/services/Seventh-Sense"})
    //     result.push({loc: "/services/Phrasee"})
    //     result.push({loc: "/services/Human"})
    //     result.push({loc: "/services/Acrolinx"})
    //     result.push({loc: "/services/MarketMuse"})
    //     result.push({loc: "/services/LivePerson"})
    //     result.push({loc: "/services/Crayon"})
    //     result.push({loc: "/services/FeedHive"})
    //     result.push({loc: "/services/Copy-ai"})
    //     result.push({loc: "/services/Peppertype-ai"})
    //     result.push({loc: "/services/Markcopy"})
    //     result.push({loc: "/services/SciSpace"})
    //     result.push({loc: "/services/Semantic-Scholar"})
    //     result.push({loc: "/services/Scite"})
    //     result.push({loc: "/services/Perplexity"})
    //     result.push({loc: "/services/Gradescope"})
    //     result.push({loc: "/services/Ivy"})
    //     result.push({loc: "/services/Century"})
    //     result.push({loc: "/services/Fermat"})
    //     result.push({loc: "/services/Personal-ai"})
    //     result.push({loc: "/services/Resume-io"})
    //     result.push({loc: "/services/Artbreeder"})
    //     result.push({loc: "/services/Deep-Dream-Generator"})
    //     result.push({loc: "/services/Fotor"})
    //     result.push({loc: "/services/Artssy"})
    //     result.push({loc: "/services/Cre8tiveAI"})
    //     result.push({loc: "/services/DeepImage"})
    //     result.push({loc: "/services/Vance-AI"})
    //     result.push({loc: "/services/Let’s-Enhance"})
    //     result.push({loc: "/services/waifu2x"})
    //     result.push({loc: "/services/Upscale-media"})
    //     result.push({loc: "/services/Erase-bg"})
    //     result.push({loc: "/services/WatermarkRemover-io"})
    //
    //     return result
    // },
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