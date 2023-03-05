import classNames from "classnames";

import "./form-wrapper.module.scss";

const FormWrapper = ({
    children,
    onSubmit,
    className,
    formTitle,
    step = false,
    stepText = ''
    }) => {
    return (
        <div className={classNames({
            "form-wrapper": true
        })}>
            <form
                className={classNames({
                    "form": true,
                    [className]: className
                })}
                onSubmit={onSubmit}
            >
                {formTitle && (
                        <div className="form__header">
                            <h3 className="form__title">{formTitle}</h3>
                            {step && <div className="form__steps">{stepText}</div>}
                        </div>
                    )}
                {children}
            </form>
        </div>
    );
};

export default FormWrapper;