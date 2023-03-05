const SchemaOrg = ({data}) => {

    const jsonLd = data ? data : {};

    const pricesJson = jsonLd.prices
        ? jsonLd.prices.map((price) => {
            return `
          {
          
    "@type": "Offer",
    "price": "${price}",
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock",
    "url": "${jsonLd.url}"
 
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
               (
                    <script
                        defer
                        key={jsonLd.name}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `
                               {
  "@context": "http://schema.org",
  "@type": "HairSalon",
  "name": "Барбершоп 0249",
  "description": "Барбершоп 0249 в г. Обнинск предлагает широкий спектр услуг для джентельменов.",
  "url": "https://barbershop0249.ru/",
  "image": "https://sun9-43.userapi.com/impg/dSRL054iuz1tfwhYt4U8l2hYxrcM1XKI6ozqOQ/AO8Qwg8UuJc.jpg?size=1280x1280&quality=95&sign=a9607420f653e4fdf8ff60a6fe2f26cb&c_uniq_tag=xxo8eLYo64soooMBo_KuOmAJMl8mZN0ljtBDzkHPbaM&type=album",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Курчатова, 25/3",
    "addressLocality": "Обнинск",
    "postalCode": "249031",
    "addressCountry": "RU"
  },
  "telephone": "+7-996-955-02-49",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Monday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    }
  ],
  "paymentAccepted": "Cash, Credit Card",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "55.107608",
    "longitude": "36.618389"
  }
}
                                    `,
                        }}
                    />
                )
            } {
                jsonLd.contents && jsonLd.contents.includes('usluga') && (
                    <script
                        defer
                        key={jsonLd.name}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `
                               {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "${jsonLd.name}",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Barbershop 0249",
    "address": "ул. Курчатова, 25/3, Обнинск (3)",
    "telephone": "+7 (996) 955-02-49",
    "image": "https://sun9-43.userapi.com/impg/dSRL054iuz1tfwhYt4U8l2hYxrcM1XKI6ozqOQ/AO8Qwg8UuJc.jpg?size=1280x1280&quality=95&sign=a9607420f653e4fdf8ff60a6fe2f26cb&c_uniq_tag=xxo8eLYo64soooMBo_KuOmAJMl8mZN0ljtBDzkHPbaM&type=album",
    "priceRange": "$$",
    "url": "https://barbershop0249.ru/"
  },
  "areaServed": {
    "@type": "City",
    "name": "Обнинск"
  },
  "offers": [${pricesJson}]
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
