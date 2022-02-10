import React from 'react'
import { connect } from "react-redux"
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import useForm from '../../hooks/useForm'
import { createProduct } from '../../state/actions'
import productSchema from '../../schemas/product'

const initialState = {
    product_name: "",
    details: "",
    image: "",
    price: 0,
    stock: 0
}

function CreateProduct(props) {
    const { createProduct } = props
    const { category_id } = useParams()
    const [toggle, setToggle] = useState(false)
    const [formState, handleChange] = useForm(initialState)

    const submit = async (e) => {
        e.preventDefault()
        const product = {...formState, category_id: parseInt(category_id)}
        await  productSchema.validate(product)
        console.log(product)
        createProduct(product)
    }
    const toggleForm = () => {
        setToggle(prevState => !prevState)
    }
    return (
        <div>
            <button onClick={toggleForm} >+</button>
            {toggle && (
                <form onSubmit={submit}>
                    <label for="product_nameInput">
                        Product Name:
                    </label>
                    <input 
                        id="product_nameInput" 
                        type="text" name="product_name" 
                        onChange={handleChange} 
                        value={formState.product_name}
                    />
                    <label for="detailsInput">
                        Details:
                    </label>
                    <input 
                        id="detailsInput" 
                        type="text" name="details" 
                        onChange={handleChange} 
                        value={formState.details}
                    />
                    <label for="imageInput">
                        Image Url:
                    </label>
                    <input 
                        id="imageInput" 
                        type="url" name="image" 
                        onChange={handleChange} 
                        value={formState.image}
                    />
                    <label for="priceInput">
                        Price:
                    </label>
                    <input 
                        id="priceInput" 
                        type="number" name="price" 
                        onChange={handleChange} 
                        value={formState.price}
                    />
                    <label for="stockInput">
                        Stock:
                    </label>
                    <input 
                        id="stockInput" 
                        type="number" name="stock" 
                        onChange={handleChange} 
                        value={formState.stock}
                    />
                    <button>Cancel</button>
                    <button>Add Product</button>
                </form>
            )}
        </div>
  )
}


export default connect(null, { createProduct })(CreateProduct);