import { useRouter } from 'next/router';
import Link from 'next/link';
import pathTranslations from '../translated-routes.json';

const TranslatedLink = ({ href, children, className }) => {
	const { locale } = useRouter();
	// Get translated route for non-default locales
	const translatedPath = pathTranslations.reduce((acc, route) => {
		return {
			...acc,
			...route
		}
	}, {})[locale]?.[href];
	// Set `as` prop to change displayed URL in browser
	const as = translatedPath ? `/${locale}${translatedPath}` : null;

	return (
		<Link
			href={href}
			as={as}
			className={className}
		>
			{children}
		</Link>
	);
};

export default TranslatedLink;
