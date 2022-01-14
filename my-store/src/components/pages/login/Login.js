import React from 'react'
import useBackend from '../../../hooks/useBackend'
import Form from '../../common/Form'

const initialFormValues = {
    email: '',
    password: '',
}


export default function Login() {
    const api = useBackend()

    const submit = async (formValues) => {
        try {
            const newAccount = Object.keys(formValues).reduce((obj, key) => {
                obj[key] = formValues[key].trim()
                return obj
            }, {})
            const { data: token } = await api.post("/api/users/login", newAccount)
            localStorage.setItem("token", token)
        } catch(err) {
            console.log(err)
        }
    }
    
    return (
        <Form title="Login:" initialState={initialFormValues} submit={submit}/>
    )
}
