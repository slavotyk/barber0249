import FormWrapper from "../form/FormWrapper";
import PasswordComponent from "../form/PasswordComponent/PasswordComponent";
import {useState} from "react";
import useForm from "../../../hooks/useForm";
import Button from "../../button/button";
import ErrorMessage from "../../error/errorMessage";
import {confirmPasswordReset } from "firebase/auth";
import {validate} from "../form/validator";
import {useRouter} from "next/router";

const RESET_FORM_VALUES = {
    password: '',
    confirmPassword: '',
}

const ResetPassword = ({
  auth,
  actionCode
}) => {
    const router = useRouter();

    const [formErrors, setFormErrors] = useState({
        password: null,
        confirmPassword: null,
    })

    const [error, setError] = useState(null);


    const { formValues, handleChange } = useForm(RESET_FORM_VALUES, setFormErrors)

    const onSubmit = (e) => {
        e.preventDefault()

        const errors = validate({...formValues})

        if (!errors.password && !errors.confirmPassword) {
            confirmPasswordReset(auth, actionCode, formValues.password)
                .then(() => {
                    router.push('/')
                })
                .catch((error) => setError(error.message))
        } else {
            setFormErrors(prevState => ({
                ...prevState,
                ...errors
            }))
        }
    }
    return (
        <FormWrapper
            formTitle={"Reset Password"}
            onSubmit={onSubmit}
        >
            <PasswordComponent
                label="New password"
                type="password"
                value={formValues.password}
                name="password"
                onChange={handleChange}
                error={formErrors.password}
            />

            <PasswordComponent
                label="Repeat password"
                type="password"
                value={formValues.confirmPassword}
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
                label={'Set new password'}
                className=""
                type='submit'
                disabled={formValues.password === "" || formValues.confirmPassword === ""}
            />
        </FormWrapper>
    );
};

export default ResetPassword;