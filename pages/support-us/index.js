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
			{/*	<h1 className='h1'>{t('support-us')}</h1>*/}
			{/*	<p className='p'>{t('support-us-1-p')}</p>*/}
			{/*</section>*/}



		</article>
	);
};

export default Index;
