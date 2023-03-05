import useTranslation from "next-translate/useTranslation";
import MetaHead from "../../components/seo/metaHead";
import { useSearchParams } from 'next/navigation';
import ServicesList from "../../components/services/servicesList";


const Index = () => {
	const { t } = useTranslation();

	const seoData = {
		title: 'AI Services | AI Dude - Your One-Stop place for Artificial Intelligence Services',
		description: 'Discover the power of AI with AI Dude. Our comprehensive range of artificial intelligence services includes machine learning, natural language processing, predictive analytics, robotic process automation, chatbots, and more. Contact us today to learn how we can help your business thrive.',
		ogImageText: 'https://aidude.info' + '/api/og?title=' + 'AI Services | AI Dude'
	}

	const rulesDown = {
		noRules: true,
		category: 'null',
		isFree: false,
		isPromoted: false
	}

	const search = useSearchParams();
	const { slug } = search;
	return (
		<article className='main-page  main-page_full' >

			<MetaHead pageSeoData={seoData}/>

			<section className="section">
				<h1 className='h1'>{!rulesDown.noRules ? rulesDown.category : ''}AI services available
					<span> by AI dude</span></h1>
			</section>

			<section className='section'>
				<ServicesList rulesDown={rulesDown}/>
			</section>





		</article>
	);
};

export default Index;
