import classNames from "classnames";

import "./errorMessage.module.scss"

const ErrorMessage = ({children, className}) => {
    return (
        <div className={classNames({
            "error-message": true,
            [className]: className,
        })}>
            {children}
        </div>
    );
};

export default ErrorMessage;