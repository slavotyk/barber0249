import aiList from "../../aiList.json";
import Link from "next/link";
import {useState} from "react";



const CardMarkup = ({e, rules}) => {
    return (
        <li className={'aiListCard aiListCard_' + e.promoted}>
            <section className='LinkElementCard'>
                <h3 className='h3 h3_noMar'>
                    <Link
                        className='linkExternal'
                        href={'uslugi/' + e.slug}
                        rel='nofollow'
                        target='_blank'
                    >
                        {e.name}
                    </Link>
                </h3>
                <p className='descriptor'>{e.description}</p>
                {(e.price[0] !== "?") && <span className={'priceTag'}>
                                                    <span className={'priceTag__icon'}> </span>
                    {(e.price.length > 1) ? (e.price[0] + ' and ' + (e.price.length - 1) + ' more') : (e.price[0] + ' руб')}
                                                </span>}

                <section className='links'>
                    <Link
                        className='link'
                        href={'uslugi/' + e.slug}
                        // as={e.slug}
                    >
                        Подробнее
                    </Link>
                    {/*<Link*/}
                    {/*    className='link linkExternal'*/}
                    {/*    href={e.url}*/}
                    {/*    rel='nofollow'*/}
                    {/*    target='_blank'*/}
                    {/*>*/}
                    {/*    Check AI*/}
                    {/*</Link>*/}
                </section>
            </section>
        </li>
    )
}
const CategoryFilter = ({category, rules}) => {

    return (
        <>
            {
                aiList
                    .filter(i => (i.category === category))
                    .filter(e => (rules.isPromoted ? (e.promoted === true) : (e)))
                    .filter(e => (rules.isFree ? (e.price[0] === 'Free') : (e)))
                    .map(e =>  <CardMarkup key={e.name + rules.category} e={e} rules={rules}/>)
            }
        </>
    )
}

const ServicesList = ({rulesDown}) => {


    const [rules, setRules] = useState(rulesDown ? rulesDown : {noRules: true, category: 'null', isFree: false, isPromoted: false})

    const categoriesMain = [
        "Стрижки",
        "Уход за бородой",
        "Productivity",
        "Images"
    ]

    return (
       <>
           <ul className='filter'>
               <li className={'filterItem filterItem_' + (rules.noRules && 'active')}
                   onClick={() => setRules({...rules, noRules: true, category: 'null'})}>Все услуги
               </li>
               <li className={'filterItem filterItem_' + (rules.category === 'Стрижка' && 'active')}
                   onClick={() => setRules({...rules, noRules: false, category: 'Стрижки'})}>
                   Стрижка
               </li>
               <li className={'filterItem filterItem_' + (rules.category === 'Уход за бородой' && 'active')}
                   onClick={() => setRules({...rules, noRules: false, category: 'Уход за бородой'})}>
                   Уход за бородой
               </li>
               <li className={'filterItem filterItem_' + (rules.category === 'Productivity' && 'active')}
                   onClick={() => setRules({...rules, noRules: false, category: 'Productivity'})}>
                   Productivity
               </li>
               <li className={'filterItem filterItem_' + (rules.category === 'Images' && 'active')}
                   onClick={() => setRules({...rules, noRules: false, category: 'Images'})}>
                   Images
               </li>
               {/*<li className={'filterItem filterItem_' + (rules.isFree && 'active')}*/}
               {/*    onClick={() => setRules({...rules, isFree: !rules.isFree})}>*/}
               {/*    Free only*/}
               {/*</li>*/}
               <li className={'filterItem filterItem_' + (rules.isPromoted && 'active')}
                   onClick={() => setRules({...rules, isPromoted: !rules.isPromoted})}>
                   Лучшие предложения
               </li>
           </ul>
           <ul className='aiList'>
               {
                   ((rules.noRules && rules.category==='null')
                           ? (
                               categoriesMain.map(e => (
                                   <li key={e} className='categorySection'>
                                       <h2 className='h2 h2_category'>{e}</h2>
                                       <ul className='aiList'>
                                           <CategoryFilter category={e} rules={rules}/>
                                       </ul>
                                   </li>
                               ))
                           )
                           : (aiList
                                   .filter(e => (e.category === rules.category))
                                   .filter(e => (rules.isPromoted ? (e.promoted === true) : (e)))
                                   .filter(e => (rules.isFree ? (e.price[0] === 'Free') : (e)))
                                   .map(e =>
                                       <CardMarkup key={aiList.indexOf(e)} e={e}/>
                                   )
                           )
                   )

               }
           </ul>
       </>
    );

}

export default ServicesList;
