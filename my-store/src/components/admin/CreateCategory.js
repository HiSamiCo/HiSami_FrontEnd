import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createCategory } from "../../state/actions"
import useForm from '../../hooks/useForm'

const initialState = {category_name: "",}

function CreateCategory(props) {
    const {createCategory} = props
    const [toggle, setToggle] = useState(false)
    const [formState, handleChange] = useForm(initialState)

    const submit = (e) => {
        e.preventDefault()
        createCategory(formState)
    }

    const toggleForm = () => {
        setToggle(prevState => !prevState)
    }
    return (
        <div>
            <button onClick={toggleForm}>
                Create New Category
            </button>
            {toggle && (
                <form onSubmit={submit}>
                    <label htmlFor='nameInput'>
                        Name:
                    </label>
                    <input 
                        type="text" 
                        id="nameInput" 
                        name='category_name'
                        value={formState.category_name}
                        onChange={handleChange} 
                    />
                    <button type='submit'>Submit</button>
                </form>
            )}
        </div>
    )
}

export default connect(null, { createCategory })(CreateCategory)
