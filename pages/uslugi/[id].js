import MetaHead from "../../components/seo/metaHead";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import Link from "next/link";
import aiList from '../../aiList.json';
import Image from "next/legacy/image";

const ServicePage = () => {

    const router = useRouter()
    const { id } = router.query;

    const element = aiList.find(e => e.slug === id)
    const seoData = {
        title: element.title,
        description: element.description,
        ogImageText: element.name + '&bg=' + element.imageUrl,
        slug: '/uslugi/' + element.slug,
        jsonLd: {
            contents: ['WebApplication'],
            name: element.name,
            description: element.description,
            url: element.url,
            category: element.category,
            prices: element.price,
            image: 'https://aidude.info/img/ai/' + element.imageUrl
        }
    }

    // console.log(seoData)

    const myLoader = ({ src, width, quality }) => {
        return `/img/ai/${src}?w=${width}&q=${quality || 100}`
    }

    return (
        <article className='main-page'>

            <MetaHead pageSeoData={seoData}/>


            {/*<button type="button" onClick={() => router.back()}>*/}
            {/*    Go back to Ai full list*/}
            {/*</button>*/}

            <section className="section">

                {element.imageUrl && (
                    <section className={'cover__wrapper'}>
                        <Image
                            loader={myLoader}
                            src={element.imageUrl}
                            alt={element.name + ' обложка услуги'}
                            width={300}
                            height={225}
                            object-fit='contain'
                            className='cover'
                        />
                    </section>
                )}

                <h1 className='h1'>
                    {element.name}
                </h1>

                <p className='p'>
                    {element.description}
                </p>

                {element.url && (
                    <Link
                        href={element.url}
                        // as={e.slug}
                        className='button'
                        rel='nofollow'
                        target='_blank'
                    >
                     Try it out
                    </Link>
                )}



                <section>
                    <h2 className='h2'>Цены</h2>
                    <p className='p'>
                        {element.price.map(e => ( <span key={e.index} className='tagCloud'>{e} рублей</span>))}
                    </p>
                </section>

                <section>
                    <h2 className='h2'>О услуге "{element.name}"</h2>
                    {element.content.map(e => ( <p key={e.index} className='p'>{e}</p>))}
                </section>

                <section>
                    <h2 className='h2'>Ключевые слова</h2>
                    <p className='p'>
                        {element.tags.map(e => ( <span key={e.index} className='tagCloud'>{e}</span>))}
                    </p>
                </section>

            </section>

        </article>
    );
};

export default ServicePage;
