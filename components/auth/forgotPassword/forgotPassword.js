import FormWrapper from "../form/FormWrapper";
import useForm from "../../../hooks/useForm";
import {useCountdown, useStep} from "usehooks-ts";
import {useState} from "react";
import InputComponent from "../form/inputComponent/InputComponent";
import Button from "../../button/button";
import {validate} from "../form/validator";
import {sendPasswordResetEmail} from "firebase/auth";
import {auth} from "../../../firebase/initFirebase";
import ErrorMessage from "../../error/errorMessage";


const ForgotPasswordComponent = () => {

    const [error, setError] = useState(null)
    const [formErrors, setFormErrors] = useState({
        email: null,
    })

    const { formValues, handleChange } = useForm({
        email: '',
    }, setFormErrors)

    const { email } = formValues;

    const [currentStep, {
        goToNextStep,
    }
    ] = useStep(3);

    const [
        count, {
        startCountdown,
        resetCountdown
    }] = useCountdown({countStart: 30})

    const handleSendEmail = async () => {
        const errors = validate({email})

        if (
            !errors.nickname ||
            !errors.email
        ) {
           try {

               await sendPasswordResetEmail(auth, email)
               goToNextStep()
               startCountdown()
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
        <div className={'forgot-password'}>
            <FormWrapper
                className={'forgot-password-form'}
                onSubmit={() => {}}
                formTitle={'Forgot password'}
            >
                {currentStep === 1 && (
                    <>
                        <InputComponent
                            label="Email"
                            type="text"
                            name="email"
                            value={email}
                            error={formErrors.email}
                            onChange={handleChange}
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
                            onClick={handleSendEmail}
                            disabled={email === ""}
                        />
                    </>
                )}

                { currentStep === 2 && (
                    <div className={'forgot-password__sent-email'}>
                        <p>
                            To continue, please check your email for confirmation link. By clicking on it you will confirm your email.
                        </p>
                        <p>
                            If you didnt get the email, we can try to send another one {count === 0 ? 'now' : count}.
                        </p>

                        {count === 0 && (
                                <Button
                                    label={'Send Email'}
                                    onClick={ async () => {
                                        resetCountdown()
                                    }}
                                />
                        )}
                    </div>
                )}
            </FormWrapper>
        </div>
    );
};

export default ForgotPasswordComponent;