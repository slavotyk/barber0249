import { useState} from "react";
import {useRouter} from "next/router";
import {getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, fetchSignInMethodsForEmail} from "firebase/auth";

import './registration.module.scss';
import FormWrapper from "../form/FormWrapper";
import InputComponent from "../form/inputComponent/InputComponent";
import Button from "../../button/button";
import axios from "axios";
import Recaptcha from "../form/recaptcha/Recaptcha";
import PasswordComponent from "../form/PasswordComponent/PasswordComponent";
import useForm from "../../../hooks/useForm";
import {validate} from "../form/validator";
import {auth} from "../../../firebase/initFirebase";
import {useCountdown, useStep} from "usehooks-ts";
import ErrorMessage from "../../error/errorMessage";
import TranslatedLink from '../../TranslatedLink';

const getRegistrationTitle = (step) => {
    switch (step) {
        case 1:
            return 'Create your profile'
        case 2:
            return 'Create password'
        case 3:
            return 'Email confirmation'
    }
}

const REGISTRATION_FORM_VALUES = {
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
}

const RegistrationComponent = () => {
    const router = useRouter();
    // It's api errors
    const [error, setError] = useState(null);
    //it's form errors
    const [formErrors, setFormErrors] = useState({
        email: null,
        password: null,
        confirmPassword: null,
        nickname: null,
    })

    const { formValues, handleChange } = useForm(REGISTRATION_FORM_VALUES, setFormErrors)

    const { email, password, confirmPassword, nickname } = formValues;

    const [currentStep, {goToNextStep}] = useStep(3);

    const [count, { startCountdown, resetCountdown }] =
        useCountdown({
            countStart: 30,
        })

    const [ token, setToken ] = useState(null)
    const [ isTokenFetching, setIsTokenFetching ] = useState(false)
    const setCaptchaToken = (
        isFetching,
        captchaToken
    ) => {
        if (captchaToken !== undefined) {
            setToken(captchaToken)
        }
        setIsTokenFetching(isFetching)
    }

    let resetCaptcha = () => {}
    const setResetCaptcha = (callback) => {
        resetCaptcha = callback
    }


    const checkCaptchaToken = async () => {
        try {
            const responce = await axios.post("/api/registration", {
                token
            })
            return responce.data.success
        } catch (error) {
            setError(error.response.data)
        }
    }

    const handleStepClick = async () => {
        const errors = validate({email, nickname})

        if (
            errors.nickname ||
            errors.email
        ) {
            setFormErrors(prevState => ({
                ...prevState,
                ...errors
            }))
            return;
        }

        const isEmailExist = await fetchSignInMethodsForEmail(getAuth(), email);

        if (isEmailExist.length > 0) {
            setError('This email already exists')
            return;
        }

        const tokenSucces = checkCaptchaToken();
        if (tokenSucces) {
            goToNextStep()
            startCountdown()
        }
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        const errors  = validate({password, confirmPassword})

        if (!errors.password && !errors.confirmPassword && !error) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        goToNextStep()
                        return updateProfile(auth.currentUser,{
                            displayName: nickname,
                        })

                    })

                await sendEmailVerification(auth.currentUser, {
                    url: "http://localhost:3000/"
                })

                let interval = setInterval(() => {
                    if (auth.currentUser.emailVerified) {
                        clearInterval(interval);
                        router.push('/')
                    }
                    auth.currentUser.reload();
                }, 2000);
            } catch (error) {
                setError(error.message)
            }

        } else {
            setFormErrors(prevState => ({
                ...prevState,
                ...errors
            }))
        }
    }

    return (
        <div className="registration">
            <div className="registration-wrapper-form">
                <FormWrapper
                    className={'registration-form'}
                    onSubmit={onSubmit}
                    step={true}
                    stepText={`${currentStep}/3`}
                    formTitle={getRegistrationTitle(currentStep)}
                >
                        {
                            currentStep === 1 && (
                                <>

                                    <InputComponent
                                        label="Nickname"
                                        type="text"
                                        name="nickname"
                                        value={nickname}
                                        onChange={handleChange}
                                        error={formErrors.nickname}
                                    />

                                    <InputComponent
                                        label="Email"
                                        type="text"
                                        name="email"
                                        value={email}
                                        error={formErrors.email}
                                        onChange={handleChange}
                                    />

                                    <Recaptcha
                                        setCaptchaToken={ setCaptchaToken }
                                        setResetCaptcha={ setResetCaptcha }
                                        isTokenFetching={ isTokenFetching }
                                        token={ token }
                                    />
                                    {
                                        error && (
                                            <ErrorMessage>
                                                {error || 'Something went wrong'}
                                            </ErrorMessage>
                                        )
                                    }


                                    <Button
                                        label={'Next'}
                                        className="registration__btn_submit"
                                        type='button'
                                        onClick={handleStepClick}
                                        disabled={email === "" || nickname === ""}
                                    />
                                </>
                            )
                        }

                        {
                            currentStep === 2 && (
                                <>
                                    <PasswordComponent
                                        label="Password"
                                        type="password"
                                        value={password}
                                        name="password"
                                        onChange={handleChange}
                                        error={formErrors.password}
                                        />

                                    <PasswordComponent
                                        label="Repeat password"
                                        type="password"
                                        value={confirmPassword}
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        error={formErrors.confirmPassword}
                                    />

                                    {
                                        error && (
                                            <>
                                                <ErrorMessage>
                                                    {error || 'Something went wrong'}
                                                </ErrorMessage>
                                            </>)
                                    }

                                    <Button
                                        label={'Finish'}
                                        className="registration__btn_submit"
                                        type='submit'
                                        disabled={password === "" || confirmPassword === ""}
                                    />
                                </>
                            )
                        }

                        {
                            currentStep === 3 && (
                                <div className='registration-email-confirmation'>
                                    <p>
                                        To continue, please check your email for confirmation link. By clicking on it you will confirm your email.
                                    </p>
                                    <p>
                                        If you didnt get the email, we can try to send another one {count === 0 ? 'now' : count}.
                                    </p>

                                    {
                                        count === 0 && (
                                            <Button
                                                label={'Send Email'}
                                                onClick={ async () => {
                                                   await sendEmailVerification(auth.currentUser, {
                                                        url: "https://127.0.0.1:3000/"
                                                    })
                                                    resetCountdown()
                                                }}
                                            />
                                        )
                                    }
                                </div>
                            )
                        }

                        {
                            currentStep !== 3 && (
                                <div className="registration-form-helper-text">
                                    By clicking “Next” button, you are <strong>agreing</strong>
                                    <br/>with ours Terms and Conditions
                                </div>
                            )
                        }

                        <div className="registration-form-helper-text">
                            Already got a profile?
                            <TranslatedLink href="login">
                                 Sign in
                            </TranslatedLink>
                        </div>
                </FormWrapper>
            </div>

            <div className="registration-wrapper-desc">
                <div className="registration-big-description">
                    <p>If you want to use our service with full power</p>
                    <p>and leave your feedback <br/>you may create your own profile</p>
                </div>
                <div className="registration-small-description">By signing up, you agree to our Terms of Use<br/>and Privacy Policy . You can read them here.</div>
            </div>
        </div>
    );
};

export default RegistrationComponent;
