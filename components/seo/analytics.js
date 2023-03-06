import Script from 'next/script';

const Analytics = () => {

    return (
        <>
{/*            <Script*/}
{/*                id='gtm-script'*/}
{/*                strategy="afterInteractive"*/}
{/*                dangerouslySetInnerHTML={{*/}
{/*                    __html: `*/}
{/*                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
{/*new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
{/*j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=*/}
{/*'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
{/*})(window,document,'script','dataLayer','GTM-NLJPJK5');*/}
{/*`*/}
{/*                }}*/}
{/*            />*/}

            <Script
                id='ga-script'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q14MMPLKGB', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />

        </>


    );
};

export default Analytics;