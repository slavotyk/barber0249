import { useCallback, useEffect, useState } from 'react';


const RECAPTCHA_ONLOAD_CALLBACK = 'onloadCallback';

export const RECAPTCHA_ID = 'recaptcha';
const { NEXT_GOOGLE_SITE_KEY } = process.env;

export const useCaptcha = () => {
    const [token, setToken] = useState(null);
    const [isTokenFetching, setIsTokenFetching] = useState(false);

    const captchaFetchToken = useCallback(() => {
        if (!window.grecaptcha) return;
        window.grecaptcha?.execute();
        setIsTokenFetching(true);
    }, [setIsTokenFetching]);

    const captchaReset = useCallback(() => {
        if (window !== null && typeof window !== undefined) {
            window.grecaptcha.reset();
            setToken(null);
            setIsTokenFetching(false);
        }
    }, [setToken, setIsTokenFetching]);

    const captchaOnloadCallback = useCallback(() => {
        if (window.grecaptcha !== null && typeof window.grecaptcha !== undefined) {
            window.grecaptcha.render(RECAPTCHA_ID, {
                sitekey: NEXT_GOOGLE_SITE_KEY,
                callback: (token) => {
                    setIsTokenFetching(false);
                    setToken(token);
                },
            });
        }
    }, [setToken, setIsTokenFetching]);

    useEffect(() => {
        if (!window.grecaptcha && !window[RECAPTCHA_ONLOAD_CALLBACK]) {
            const script = document.createElement('script');
            window[RECAPTCHA_ONLOAD_CALLBACK] = captchaOnloadCallback;
            script.src = `https://www.google.com/recaptcha/api.js?onload=${RECAPTCHA_ONLOAD_CALLBACK}&render=explicit`;
            script.async = true;
            script.defer = true;
            document.getElementsByTagName('head')[0].appendChild(script);
        } else {
            captchaOnloadCallback();
        }
    }, [captchaOnloadCallback]);

    return {
        token,
        isTokenFetching,
        captchaFetchToken,
        captchaReset,
    };
};