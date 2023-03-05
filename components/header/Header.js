import Link from "next/link";
import Image from "next/legacy/image";
import {useAuth} from "../auth/auth";
import Button from "../button/button";
import {useRouter} from "next/router";
import logo from "../../public/logo.svg";

import './header.module.scss';
import classNames from "classnames";
import { LanguageSwitcher } from '../languageSwither/LanguageSwitcher';
import useTranslation from 'next-translate/useTranslation';
import UserInfoSection from '../account/userInfoSection';
import TranslatedLink from '../TranslatedLink';

const MENU_ITEMS = [
    {
        label: 'Услуги',
        to: '/uslugi'
    },
    // {
    //     label: 'about-us',
    //     to: '/about'
    // },
    // {
    //     label: 'roadmap',
    //     to: '/roadmap'
    // },
    // {
    //     label: 'our-team',
    //     to: '/our-team'
    // },
    // {
    //     label: 'support-us',
    //     to: '/support-us'
    // },
]

const Header = () => {
    const { user } = useAuth();
    // const auth = getAuth();
    const router = useRouter();
    const { t } = useTranslation();
    // console.log(user)
    return (
        <header className={classNames({
            "header": true,
            "content-wrapper": true
        })}>
                <div className="header__items">
                    <nav className="nav">
                        <ul className="nav-menu">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        src={logo}
                                        alt="Барбершоп 0249 логотип"
                                        width={100}
                                        height={50}
                                    />
                                </Link>
                            </div>
                            {
                                MENU_ITEMS.map(({label, to}, key) => (
                                    <li key={key}>
                                        <TranslatedLink href={to} className="nav-menu__item">
                                            {t(label)}
                                        </TranslatedLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <div className="auth-section">
                        {/*<LanguageSwitcher/>*/}
                        {/*{*/}
                        {/*    user?.emailVerified*/}
                        {/*        ? (*/}
                        {/*            <>*/}
                        {/*                <div className="auth-section__user">*/}
                        {/*                    <UserInfoSection/>*/}
                        {/*                </div>*/}
                        {/*            </>*/}
                        {/*        ) : <>*/}
                        {/*            <div className="auth-section__no-user">*/}
                        {/*                <Button*/}
                        {/*                    onClick={() => router.push('/login')}*/}
                        {/*                    label={t('login')}*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </>*/}
                        {/*}*/}
                    </div>
                </div>
                <div className="header__items__mobile">
                    <Link href="/" className="logo">
                        <Image
                            src={logo}
                            alt="Game Dude"
                            width={51}
                            height={30}
                        />
                    </Link>
                    <div className="burgerMenu_button">

                    </div>
                </div>
        </header>
    );
};

export default Header;
