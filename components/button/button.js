import React from 'react';
import classNames from "classnames";

import './button.module.scss'

const Button = (
    {
        label,
        onClick,
        className,
        modificator = 'primary',
        disabled,
        ...props
    }) => {
    return (
        <button
            onClick={onClick}
            className={classNames({
                'btn': true,
                'btn__primary': modificator === 'primary',
                'btn__secondary': modificator === 'secondary',
                [className]: className,
                'btn__disabled': disabled
            })}
            disabled={disabled}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;