import useTranslation from "next-translate/useTranslation";
import MetaHead from "../../components/seo/metaHead";



const Index = () => {
    const { t } = useTranslation();

    const seoData = {
        title: t('about-us') + ' | Game Dude',
        description: t('about-1-p'),
        ogImageText:  'https://gamedude.pro' + '/api/og?title=' + t('about-us') + ' | Game Dude'
    }

    return (
        <article className='main-page'>

            {/*<MetaHead pageSeoData={seoData}/>*/}

            {/*<section className="section">*/}
            {/*    <h1 className='h1'>{t('about-1-h')}</h1>*/}
            {/*    <p className='p'>{t('about-1-p')}</p>*/}
            {/*</section>*/}
            {/*<section className="section">*/}
            {/*    <h2 className='h2'>{t('about-2-h')}</h2>*/}
            {/*    <p className='p'>{t('about-2-p')}</p>*/}
            {/*</section>*/}
            {/*<section className="section">*/}
            {/*    <h2 className='h2'>{t('about-3-h')}</h2>*/}
            {/*    <p className='p'>{t('about-3-p-1')}</p>*/}
            {/*    <p className='p'>{t('about-3-p-2')}</p>*/}
            {/*    <p className='p'>{t('about-3-p-3')}</p>*/}
            {/*</section>*/}

        </article>
    );
};

export default Index;
