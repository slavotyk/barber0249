import classNames from "classnames";
import {useEffect, useState} from "react";

import './inputComponent.module.scss';

const InputComponent = ({
    type = 'text',
    label,
    name,
    value = '',
    className = false,
    error = null,
    readOnly = false,
    onChange,
    CustomDescription = false,
    children
}) => {

    const [ inputState, setInputState ] = useState({
        isFocus: false,
        isErr: false,
        error,
        readOnly
    })



    const setState = (state) => {
        setInputState(prevState => ({ ...prevState, ...state }))
    }

    // Error after validation before submitting
    useEffect(() => {
        setState(
            {
                isErr: error,
                error
            }
        )
    }, [ error ])

    // useEffect(() => {
    //     setState({ value })
    // }, [ value ])

    return (
        <section className={classNames({
            "input__container": true,
            [className]: className
        })}>
            <label className={classNames({
                'input__wrapper': true,
                'input__wrapper_err': inputState.isErr,
                'input__wrapper_focus': inputState.isFocus
            })}
            >
                <span className={classNames({
                    'input__label': true,
                    'input__label_active': inputState.isFocus || value !== ''
                })}>
                    {label}
                 </span>
                <input
                    name={name}
                    className="input_tag input__field"
                    value={ value }
                    type={ type }
                    readOnly={ inputState.readonly }
                    autoComplete="off"

                    onFocus={ () => setState({ isFocus: true }) }
                    onBlur={ () => setState({ isFocus: false }) }
                    onChange={ onChange  }
                />

                { children }
            </label>

            {
                CustomDescription
                    ? <CustomDescription />
                    : (<section className={ classNames({
                        'input__descriptor': true,
                        'input__descriptor_err': inputState.isErr
                    }) }>
                        { inputState.error }
                    </section>)
            }
        </section>
    );
};

export default InputComponent;