import React from 'react'
import useForm from '../../../hooks/useForm'
import useBackend from '../../../hooks/useBackend'
import '../../../css/Signup.css'


const initialFormValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
}

function Signup() {
    const api = useBackend()
    const [formValues, inputChange] = useForm(initialFormValues)

    const postNewAccount = async (newAccount) =>{
        try {
            const response = await api.post("/api/users/create", newAccount)
            console.log(response)
        } catch(err){
            console.log(err)
        }    
    }

    const formSubmit = e =>{
        e.preventDefault()
        const newAccount = Object.keys(formValues).reduce((obj, key) => {
            obj[key] = formValues[key].trim()
            return obj
        }, {})

        console.log(newAccount)
        postNewAccount(newAccount)
    }
    
    return (

        <form onSubmit={formSubmit}>
            <div>
                <h1>Aloha! please signup below</h1>
                <div className='errors'>
                </div>
                <div className='email'>
                    <label>Email:</label>
                    <input 
                        type='email' 
                        placeholder='Please enter an email'
                        name='email' 
                        value={formValues.email} 
                        onChange={inputChange}
                    />
                </div>   
                <div className='password'>  
                    <label>Password:</label>
                    <input 
                        type='password'
                        placeholder='********'
                        name='password' 
                        value={formValues.password} 
                        onChange={inputChange}
                    />
                </div>
                <div className='first_name'>  
                    <label>First Name:</label>
                    <input 
                        type='text'
                        placeholder='first name'
                        name='first_name' 
                        value={formValues.first_name} 
                        onChange={inputChange}
                    />
                </div>
                <div className='last_name'>  
                    <label>Last Name:</label>
                    <input 
                        type='text'
                        placeholder='last name'
                        name='last_name' 
                        value={formValues.last_name} 
                        onChange={inputChange}
                    />
                </div>
                <button id='button'>Submit</button> 
            </div>
        </form>   
    )
}


export default Signup

