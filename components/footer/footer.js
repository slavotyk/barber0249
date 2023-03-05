import './footer.module.scss';
import classNames from "classnames";
import useTranslation from 'next-translate/useTranslation';
import TranslatedLink from '../TranslatedLink';
import {SOCIAL_MEDIA} from "../../constants";

const MENU_ITEMS = [
    {
        label: 'about-us',
        to: '/about'
    },
    {
        label: 'roadmap',
        to: '/roadmap'
    },
    {
        label: 'our-team',
        to: '/our-team'
    },
    {
        label: 'support-us',
        to: '/support'
    },
    {
        label: 'terms',
        to: '/terms'
    },
]

const Footer = () => {
    const { t } = useTranslation();
    return (
        <header className={classNames({
            "footer": true,
            "content-wrapper": true
        })}>
                <section className="footer__items">
                    <h2 className="h2">Присоединяйтесь к нам в социальных сетях, чтобы быть в курсе последних новостей и специальных предложений. </h2>

                    <section className='footer_wrapper'>
                        <nav className="nav">
                            <h3 className='h3'>Барбершоп 0249 в городе Обнинск</h3>

                            <ul className='sm_list'>
                                {
                                    SOCIAL_MEDIA.map(({link, name}, index) => (
                                        <li className="sm_item" key={index}>
                                            <a
                                                href={link}
                                                target='_blank'
                                                className={`sm_icon sm_icon__${name}`}
                                                rel='nofollow'
                                            />
                                        </li>
                                    ))
                                }
                                {/*<li className="sm_item"><a target='_blank' href="https://twitter.com/gamedude_pro" className='sm_icon sm_icon__twitter' rel="noreferrer"> </a></li>*/}
                                {/*<li className="sm_item"><a target='_blank' href="https://discord.gg/whz3n8AAzJ" className='sm_icon sm_icon__discord' rel="noreferrer"> </a></li>*/}
                                {/*<li className="sm_item"><a target='_blank' href="https://www.instagram.com/gamedude_pro/" className='sm_icon sm_icon__instagram' rel="noreferrer"> </a></li>*/}
                                {/*<li className="sm_item"><a target='_blank' href="https://www.youtube.com/@gamedude_pro" className='sm_icon sm_icon__youtube' rel="noreferrer"> </a></li>*/}
                                {/*<li className="sm_item"><a target='_blank' href="https://t.me/gamedude_pro" className='sm_icon sm_icon__telegram' rel="noreferrer"> </a></li>*/}
                            </ul>
                        </nav>
                    </section>
                </section>
        </header>
    );
};

export default Footer;
