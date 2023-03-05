import Head from 'next/head';
import Favicon from "./favicon";
import { useRouter } from 'next/router';
import SchemaOrg from "./schemaOrg";


const MetaHead = ({pageSeoData}) => {


    const { pathname } = useRouter();
    const { locale } = useRouter();
    const locales = ['ru'];

    const replaceSpaces = (inputString) => {
        return inputString.replace(/ /g, '%20');
    }

    const siteUrl = process.env.SITE_URL ? process.env.SITE_URL : 'https://barbershop0249.ru'

    const seoData = {
        title: pageSeoData.title ? pageSeoData.title : ( 'AiDude'),
        description: pageSeoData.description ? pageSeoData.description : ('AiDude'),
        ogImageText:  pageSeoData.ogImageText ? (process.env.SITE_URL + '/api/og?title=' + replaceSpaces(pageSeoData.ogImageText)) : ('AI%20Dude'),
        slug: pageSeoData.slug ? pageSeoData.slug : pathname,
        jsonLd: pageSeoData.jsonLd ? pageSeoData.jsonLd : {}
    };

    const pathForCanonical = (locale === 'ru') && (siteUrl + seoData.slug);

    return (
        <Head>
            <Favicon/>
            <title>{seoData.title}</title>
            <meta name="description" content={seoData.description}/>
            <meta property="og:title" content={seoData.title}/>
            <meta property="og:description" content={seoData.description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={pathForCanonical}/>

            <meta property="og:image" content={seoData.ogImageText}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="600"/>
            <meta property="og:image:alt" content={seoData.title}/>
            <meta property="og:image:type" content="image/jpg"/>
            <meta property="og:image:secure_url" content={seoData.ogImageText}/>
            <meta property="og:image:alt:type" content="text/plain"/>
            <meta property="og:image:sizes" content="(min-width: 1200px) 1200px, 100vw"/>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={seoData.ogImageText} />

            <link rel="canonical" href={pathForCanonical}/>
            <SchemaOrg data={seoData.jsonLd}/>


            {locales.map(locale => {
                if (locale === 'ru') {
                    const pathForHreflang = siteUrl + seoData.slug
                    return (
                        <>
                            <link key={locale + 'default'} rel="alternate" href={pathForHreflang} hrefLang="x-default"/>
                            <link key={locale + 'ru'} rel="alternate" href={pathForHreflang} hrefLang={locale}/>
                        </>
                    )
                }
            })}
        </Head>
    );

}

export default MetaHead;
