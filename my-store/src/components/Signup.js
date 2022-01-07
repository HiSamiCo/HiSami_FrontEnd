import React, { useState } from 'react'
import axios from 'axios'
import useForm from '../hooks/useForm'

import styled from 'styled-components'

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

        <FormStyle onSubmit={formSubmit}>
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
        </FormStyle>   
    )
}


export default Signup


const FormStyle = styled.form`
    width:80%;
    max-width:40rem;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #0b132b;

    & .username, .password {
        margin: 1rem 0;
        display:flex;
        align-items:stretch;
        flex-direction:column;
    }
    & label  {
        font-weight:bold;
        flex:1;
        color: #5bc0be;
        margin-bottom:1.0rem
    }
    & h1 {
        font-weight:bold;
        flex:1;
        color: white;
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
        border-color: #5bc0be;
        background: #3a506b;
        color: white;
      }
    .errors{
        margin: 8px;
        font-size: 0.7em;
        color: red;
 }
    button{
        color: #0b132b;
        text-decoration: none;
        font-weight: bold;
        background: #8ac2cf;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        border-color:#8ac2cf;
  }
  & button:hover {
    
    background: #41acc4;
  }
`



