import React from 'react'
import useBackend from '../../../hooks/useBackend'
import '../../../css/Signup.css'
import Form from '../../common/Form'
import { useHistory } from "react-router-dom"

const initialFormValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
}

function Signup() {
    const api = useBackend()
    const { push } = useHistory()

    const formSubmit = async (formValues) =>{
        const newAccount = Object.keys(formValues).reduce((obj, key) => {
            obj[key] = formValues[key].trim()
            return obj
        }, {})

        try {
            // eslint-disable-next-line
            const res = await api.post("/api/users/create", newAccount)
            const { token } = res.data
            localStorage.setItem("token", token)
            push("/")
        } catch(err) {
            console.log(err)
        }
    }
    
    return (    
        <Form
        title="Sign Up:"
        initialState={initialFormValues}
        submit={formSubmit}
        />
    )
}


export default Signup

