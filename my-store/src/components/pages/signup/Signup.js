import React from 'react'
import useBackend from '../../../hooks/useBackend'
import '../../../css/Signup.css'
import Form from '../../common/Form'

const initialFormValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
}

function Signup() {
    const api = useBackend()


    const formSubmit = async (formValues) =>{
        const newAccount = Object.keys(formValues).reduce((obj, key) => {
            obj[key] = formValues[key].trim()
            return obj
        }, {})

        console.log(newAccount)
        try {
            // eslint-disable-next-line
            const response = await api.post("/api/users/create", newAccount)
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

