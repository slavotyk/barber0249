import { useRouter } from 'next/router';
import { useLanguageSwitcher } from '../utils';
import DropdownWrapper from '../dropdownComponent/DropdownWrapper';
import { locales } from '../../i18n';
import useTranslation from 'next-translate/useTranslation';

export const getLocaleText = (locale) => {

    switch (locale) {
        case 'en':
            return 'EN'
        case 'de':
            return "DE"
        case 'es':
            return 'ES'
        case 'it':
            return 'IT'
        case 'ru':
            return 'RU'
        case 'fr':
            return 'FR'
        default:
            return 'localeText'
    }
}

export const LanguageSwitcher = () => {
    const router = useRouter()
    const { lang } = useTranslation()

    const handleChange = useLanguageSwitcher()

    return (
        <div className='language-switcher'>
                <DropdownWrapper
                    title={getLocaleText(router.locale)}
                    contentClassname={'language-switcher-dropdown-content'}
                >
                    <ul className="language-select">
                        {locales.map(l => {
                            // if (l === lang) return
                            return (
                                <li
                                    className={"language-select-item"}
                                    key={l}
                                    value={l}
                                    onClick={() => handleChange(l)}
                                >
                                    {getLocaleText(l)}
                                </li>
                            )
                        })}
                    </ul>
                </DropdownWrapper>
        </div>
    );
};