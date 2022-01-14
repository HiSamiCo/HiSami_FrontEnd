import React from 'react'
import useForm from '../../hooks/useForm';
import Input from './Input';
// import Error from './Error';

export default function Form(props) {
    const { initialState, title, submit } = props

    const [formState, handleChange, reset] = useForm(initialState)

    const onSubmit = (e) => {
        e.preventDefault();
        submit(formState);
    };

    return (
        <form onSubmit={onSubmit}>
            <fieldset>

                <legend>{title}</legend>
                {Object.keys(formState).map((value) => (
                    <Input
                    key={`${value}input`}
                    name={value}
                    value={formState[value]}
                    handleChange={handleChange}
                    />
                    ))}
                {/* {Object.keys(errors).map((value) => (
                    <Error
                    key={`${value}error`}
                    errorType={value}
                    error={errors[value]}
                    />
                ))} */}
                <div>
                    <button type="reset" onClick={reset}>
                        Reset
                    </button>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </fieldset>
        </form>
    );
}
