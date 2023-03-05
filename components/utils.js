import { useCallback } from 'react';
import Cookies from "js-cookie";
import { useRouter } from 'next/router';
import pathTranslations from '../translated-routes.json';

const translatePath = (path, lang) => {
	const translations = pathTranslations.reduce((acc, route) => ({ ...acc, ...route }), {});
	return translations[lang]?.[path] ?? path;
};

export const useLanguageSwitcher = () => {
	const router = useRouter()

	return useCallback(async (selectedLang) => {
		const { pathname, query } = router
		const asPath = translatePath(pathname, selectedLang);
		await router.push({ pathname, query }, asPath, { locale: selectedLang })
		Cookies.set('NEXT_LOCALE', selectedLang, {
			expires: 100,
		})
	}, [ router ])
}
