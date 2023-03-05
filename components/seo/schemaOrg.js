const SchemaOrg = ({data}) => {

    const jsonLd = data ? data : {};

    const pricesJson = jsonLd.prices
        ? jsonLd.prices.map((price) => {
            return `
          {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "${price}"
          }
        `;
        })
        : '';

    const faqJson = jsonLd.faq
        ? jsonLd.faq.map((e) => {
            return `
          {
      "@type": "Question",
      "name": "${e.question}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "${e.answer}"
      }
    }
        `;
        })
        : '';


    return (
        <>
            {
                jsonLd.contents && jsonLd.contents.includes('WebApplication') && (
                    <script
                        defer
                        key={jsonLd.name}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `
                               {
                                        "@context": "http://schema.org",
                                        "@type": "WebApplication",
                                        "name": "${jsonLd.name}",
                                        "description": "${jsonLd.description}",
                                        "url": "${jsonLd.url}",
                                        "applicationCategory": "${jsonLd.category}",
                                        "operatingSystem": ["Windows", "MacOS", "Linux"],
                                        "offers": [${pricesJson}],
                                         "image": {
                                                        "@type": "ImageObject",
                                                        "url": "${jsonLd.image}",
                                                        "height": "225",
                                                        "width": "300"
                                                   }
                                      }
                                    `,
                        }}
                    />
                )
            }
            {
                jsonLd.contents && jsonLd.contents.includes('faq') && (
                    <script

                        defer
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `
                                      {
                                          "@context": "https://schema.org",
                                          "@type": "FAQPage",
                                          "mainEntity": [${faqJson}]
                                        }
                                    `,
                        }}
                    />
                )
            }


        </>
    );

}

export default SchemaOrg;
