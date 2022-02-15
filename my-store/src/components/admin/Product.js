import React, { useState } from 'react'
import { connect } from "react-redux"
import { deleteProduct } from "../../state/actions"

function Product(props) {
  const { deleteProduct } = props
  const { product_name: name, image, details, stock, price, product_id } = props.product
  const [deleted, setDeleted] = useState(false)
  const handleDelete = () => {
    deleteProduct(product_id)
    setDeleted(true)
  }
  if (deleted) return null
  return (
    <div>
      <div className='img-container'>
        <img src={image} alt={name}/>
      </div>
      <h3>Name: {name}</h3>
      <p>Details: {details}</p>
      <p>Price: {price}</p>
      <p>Stock: {stock}</p>
      
      <button onClick={handleDelete}>
        Delete
      </button>
      <button>Edit</button>
    </div>
  )
}

export default connect(null, { deleteProduct })(Product)