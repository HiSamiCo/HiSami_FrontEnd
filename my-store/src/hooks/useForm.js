import { useState } from "react"

const useForm = (initialState) => {
    const [formState, setFormState] = useState(initialState)
    const inputChange = e => {
        const { name, value, type, checked } = e.target
        const newValue = type === "checked" ? checked : value
        setFormState({
            ...formState, 
            [name]: newValue
        })
    }
    const reset = () => setFormState(initialState)

    return [formState, inputChange, reset]
}

export default useForm