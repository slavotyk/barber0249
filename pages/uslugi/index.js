import useTranslation from "next-translate/useTranslation";
import MetaHead from "../../components/seo/metaHead";
import { useSearchParams } from 'next/navigation';
import ServicesList from "../../components/services/servicesList";


const Index = () => {
	const { t } = useTranslation();

	const seoData = {
		title: 'Услуги барбершопа 0249 в Обнинске | Стрижки, бритье, уход за волосами и бородой',
		description: 'Барбершоп 0249 в Обнинске предлагает профессиональные услуги для мужчин: стрижки, бритье головы и лица, уход за волосами и бородой. Опытные мастера и качественные средства для ухода гарантируют безупречный результат. Записывайтесь на услуги прямо сейчас!',
		// ogImageText: 'https://aidude.info' + '/api/og?title=' + 'AI Services | AI Dude'
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
				<h1 className='h1'>{!rulesDown.noRules ? rulesDown.category : ''}Перечень услуг
					<span> Барбершоп 0249 в г. Обнинск</span></h1>
			</section>

			<section className='section'>
				<ServicesList rulesDown={rulesDown}/>
			</section>





		</article>
	);
};

export default Index;
