import React, { useState } from 'react'
import axios from 'axios'
import { reach } from 'yup'
import schema from '../validation/formSchema'
import styled from 'styled-components'

const initialFormValues = {
    username: '',
    password: '',
    
}

const initialFormErrors = {
    username: '',
    password: '',
}

function Signup() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const postNewAccount = async (newAccount) =>{
    try {
         const response = await axios.post(' ', newAccount)
            console.log(response)
    }catch(err){
        console.log(err)
    }    
}

const validate = (name, value) => {
    
    reach(schema, name)
        .validate(value)
        .then(()=> setFormErrors({...formErrors, [name]: '' }))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}


const formSubmit = () =>{
    const newAccount = {
        username: formValues.username.trim(),
        password: formValues.password.trim(),
        
        
    }   
    console.log(newAccount)
    postNewAccount(newAccount)
}

const inputChange = (name, value) =>{
    validate(name, value)
    setFormValues({
        ...formValues, [name]: value
    })
}


    return (

         <FormStyle onSubmit={(evt)=>{
              evt.preventDefault()
              formSubmit()
          }}>
        <div>
            <h1>Welcome, please signup below!</h1>
            <div className='errors'>
                <div>{formErrors.username}</div>
                <div>{formErrors.password}</div>
            </div>
         
        <div className='username'>
            <label>Username:</label>
                 <input 
                type='text' 
                placeholder='Please enter a username'
                name='username' 
                value={username} 
                onChange={(evt)=>{
                    setUsername(evt.target.value)
                    inputChange(evt.target.name, evt.target.value)  
             }}></input>
            
        </div>   
        
        <div className='password'>  
            <label>Password:</label>
                 <input 
                type='password'
                placeholder='********'
                name='password' 
                value={password} 
                onChange={(evt)=> {
                    setPassword(evt.target.value)
                    inputChange(evt.target.name, evt.target.value)  
             }}></input>
            
        </div>
        
            <button id='button'>submit</button>

           
        </div>
      </FormStyle>   
    )
}


export default Signup


const FormStyle = styled.form`
    width:80%;
    max-width:40rem;
    margin: 2rem auto;
    padding: 2rem;

    & .username, .password {
        margin: 1rem 0;
        display:flex;
        align-items:stretch;
        flex-direction:column;
    }
    & label, h1 {
        font-weight:bold;
        flex:1;
        color: #464646;
        margin-bottom:1.0rem
    }
    & input {
        flex:3;
        font:inherit;
        padding:0.35rem 0.35rem;
        border-radius:6px;
        border: 1px solid #ccc;
    }
    & input:focus {
        outline: none;
        border-color: #4f005f;
        background: #f6dbfc;
      }
    .errors{
        margin: 8px;
        font-size: 0.7em;
        color: red;

 }
`



