import useTranslation from "next-translate/useTranslation";
import MetaHead from "../../components/seo/metaHead";



const Index = () => {
	const { t } = useTranslation();

	const seoData = {
		title: t('our-team-1-h'),
		description: t('our-team-1-p'),
		ogImageText:  'https://gamedude.pro' + '/api/og?title=' + t('our-team')
	}

	return (
		<article className='main-page'>

			{/*<MetaHead pageSeoData={seoData}/>*/}

			{/*<section className="section">*/}
			{/*	<h1 className='h1'>{t('our-team-1-h')}</h1>*/}
			{/*	<p className='p'>{t('our-team-1-p')}</p>*/}
			{/*	<p className='p'>{t('our-team-2-p')}</p>*/}
			{/*	<p className='p'>{t('our-team-3-p')}</p>*/}
			{/*	<p className='p'>{t('our-team-4-p')}</p>*/}
			{/*	<p className='p'>{t('our-team-5-p')}</p>*/}

			{/*	<h2 className='h2'>{t('our-team-2-h')}</h2>*/}
			{/*	<p className='p'>{t('our-team-6-p')}</p>*/}
			{/*</section>*/}


		</article>
	);
};

export default Index;
