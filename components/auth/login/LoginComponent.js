import {useState} from 'react';
import firebaseClient from "../../../firebase/initFirebase";
import {useRouter} from "next/router";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import "./login.module.scss"
import FormWrapper from "../form/FormWrapper";
import InputComponent from "../form/inputComponent/InputComponent";
import PasswordComponent from "../form/PasswordComponent/PasswordComponent";
import Button from "../../button/button";
import useForm from "../../../hooks/useForm";
import {validate} from "../form/validator";
import ErrorMessage from "../../error/errorMessage";
import TranslatedLink from '../../TranslatedLink';

const LOGIN_VALUES = {
    email: '',
    password: '',
}

const LoginComponent = () => {
    firebaseClient();
    const router = useRouter();

    // It's api errors
    const [error, setError] = useState(null);
    //it's form errors
    const [formErrors, setFormErrors] = useState({
        email: null,
        password: null,
    })

    const auth = getAuth();

    const { formValues: {email, password}, handleChange } = useForm(LOGIN_VALUES, setFormErrors)

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        const errors  = validate({email, password})

        if (!errors.password && !errors.email && !error) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    router.push('/')
                })
                .catch(error => {
                    setError(error.message)
                });
        } else {
            setFormErrors(prevState => ({
                ...prevState,
                ...errors
            }))
        }
    }

    return (
        <section className='login'>

            <div className="login-wrapper-form">
                <FormWrapper
                    className={'login-form'}
                    onSubmit={handleSubmit}
                    formTitle={'Sign In to preceed'}
                >
                    <InputComponent
                        label="Email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        error={formErrors.email}
                    />

                    <PasswordComponent
                        label="Password"
                        type="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        error={formErrors.password}
                        showForgotPassword={true}
                    />

                    {
                        error && (
                            <ErrorMessage>
                                {error || 'Something went wrong'}
                            </ErrorMessage>
                        )
                    }

                    <Button
                        label="Sign in"
                        className="login__btn_submit"
                        type='submit'
                        disabled={email === "" || password === ""}
                    />

                    <div className="signup__text">
                        <span>Want to join us? </span>
                        <TranslatedLink href={"/signup"} className={"signup__text_link"}>
                             Sign Up
                        </TranslatedLink>
                    </div>
                </FormWrapper>
            </div>

            <div className="login-wrapper-desc">
                <div className="login-big-description">
                    <p>Registering is quick, easy and private.</p>
                    <p>We&apos;ll never share your information <br/>with anyone else.</p>
                </div>
                <div className="login-small-description">By signing in, you agree to our Terms of Use and Privacy
                    Policy. You can read them here.
                </div>
            </div>
        </section>
    );
};

export default LoginComponent;
