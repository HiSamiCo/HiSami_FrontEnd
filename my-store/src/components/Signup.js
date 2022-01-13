import React from 'react'
import axios from 'axios'
import useForm from '../hooks/useForm'
import '../css/Signup.css'


const initialFormValues = {
    username: '',
    password: '',
    
}

function Signup() {

    const [formValues, inputChange] = useForm(initialFormValues)

    const postNewAccount = async (newAccount) =>{
        try {
            const response = await axios.post(' ', newAccount)
            console.log(response)
        }catch(err){
            console.log(err)
        }    
    }

    const formSubmit = e =>{
        e.preventDefault()
        const newAccount = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
        }   
        console.log(newAccount)
        postNewAccount(newAccount)
    }
    
    return (

        <form onSubmit={formSubmit}>
            <div>
                <h1>Aloha! please signup below</h1>
                <div className='errors'>
                </div>
                <div className='username'>
                    <label>Username:</label>
                    <input 
                        type='text' 
                        placeholder='Please enter a username'
                        name='username' 
                        value={formValues.username} 
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
                <button id='button'>Submit</button> 
            </div>
        </form>   
    )
}


export default Signup

