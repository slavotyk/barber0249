import { useState} from "react";

const UseForm = (values, setFormErrors) => {
    const [formValues, setFormValues] = useState(values)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
        setFormErrors(prevState => ({
            ...prevState,
            [name]: null
        }))
    };

    return {formValues, handleChange};
};

export default UseForm;