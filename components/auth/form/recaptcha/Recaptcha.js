import { useEffect } from 'react'
import {RECAPTCHA_ID} from "../../../../hooks/useCaptcha"
import './recaptcha.module.scss'

const RECAPTCHA_ONLOAD_CALLBACK = 'recaptchaOnloadCallback'

const RecaptchaView = ({
    setCaptchaToken,
    setResetCaptcha,
    isTokenFetching,
    token,
}) => {

    const recaptchaOnloadCallback = () => {
        if (!window.grecaptcha) {
            return
        }
        window.grecaptcha.render(RECAPTCHA_ID, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            callback: (captchaToken) => {
                setCaptchaToken(false, captchaToken)
            },
            theme: 'dark'
        })
    }

    const fetchToken = () => {
        if (!window.grecaptcha) return
        setCaptchaToken(true, null)
    }

    const resetCaptcha = () => {
        window.grecaptcha.reset()
        setCaptchaToken(false)
    }

    useEffect(() => {

        if (setResetCaptcha) {
            setResetCaptcha(resetCaptcha)
        }

        if (!window.grecaptcha && !window[RECAPTCHA_ONLOAD_CALLBACK]) {
            const script = document.createElement('script')
            window[RECAPTCHA_ONLOAD_CALLBACK] = recaptchaOnloadCallback
            script.src = `https://www.google.com/recaptcha/api.js?onload=${RECAPTCHA_ONLOAD_CALLBACK}&render=explicit`
            script.async = true
            script.defer = true
            document.getElementsByTagName('head')[0].appendChild(script)
        } else {
            recaptchaOnloadCallback()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!token && !isTokenFetching) {
            fetchToken()
        }
    })

    return (
        <div
            id={ RECAPTCHA_ID }
            className="recaptcha"
        />
    )
}

export default RecaptchaView