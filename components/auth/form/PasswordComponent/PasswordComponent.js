import React, { useState } from "react"
import InputComponent from "../inputComponent/InputComponent";
import classNames from "classnames";

import "./passwordComponent.module.scss";
import Link from "next/link";

const PasswordComponent = ({
    name,
    label,
    value = '',
    error = '',
    onChange,
    showForgotPassword = false
}) => {
    // State for the password toggle
    const [ showPassword, setShowPassword ] = useState(false)

    const PasswordDescription = () => {
        return (
            <section className={classNames({
                'input__descriptor': true,
                'password__descriptor': true,
                'input__descriptor_err': error !== '',
                // TODO: stupid hack, we need props apiError = true|false
                'password__descriptor_err': error !== '' && /Wrong/.test(error)
            })}>
                <div className="password__descriptor-additional__info">
                    <div className={"password__descriptor-err"}>{error}</div>
                    <Link href={"/forgot_password"} className="password__description">
                        Forgot password?
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <>
            <InputComponent
                className={ classNames({
                    'password__container': true,
                }) }
                type={ showPassword ? 'text' : 'password' }
                name={ name }
                label={ label }
                value={ value }
                error={ error }
                CustomDescription={ showForgotPassword ? PasswordDescription : null}
                onChange={onChange}
            >
                <section
                    className={ classNames({
                        'password__eye': true,
                        'password__eye_show': showPassword
                    }) }
                    onClick={() => setShowPassword(!showPassword)}
                />
            </InputComponent>
        </>
    )
}

export default PasswordComponent