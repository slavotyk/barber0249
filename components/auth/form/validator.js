
export const RULES = {
    isEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    isPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
}

export const validate = (values) => {
    const { email, password, confirmPassword, nickname } = values;
    const { isEmail, isPassword } = RULES;
    const errors = {
        email: null,
        password: null,
        confirmPassword: null,
        nickname: null,
    };

    if (nickname) {
        if (nickname.trim().length === 0) {
            errors.nickname = 'Nickname required';
        } else if (!/^[A-Za-z]+/.test(nickname.trim())) {
            errors.nickname = 'Enter a valid nickname';
        } else if (nickname?.length < 4) {
            errors.nickname = 'Nickname should to be 4 characters or more'
        }
    }

    if (email) {
        if (email.trim().length === 0) {
            errors.email = 'Email required';
        } else if (!isEmail.test(email)) {
            errors.email = 'Email address is invalid';
        }
    }
    if (password) {
        if (password.trim().length === 0) {
            errors.password = 'Password is required';
        } else if (!isPassword.test(password)) {
            errors.password = 'Password must contain 6 characters to 20, must have one capital letter';
        }
    }
    if (confirmPassword) {
        if (confirmPassword.trim().length === 0) {
            errors.confirmPassword = 'Password is required';
        } else if (confirmPassword.trim() !== password.trim()) {
            errors.confirmPassword = 'Passwords do not match';
        }
    }
    return errors;
}