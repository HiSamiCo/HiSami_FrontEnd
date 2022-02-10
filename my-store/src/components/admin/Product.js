import React from 'react'

export default function Product(props) {
  const { product_name: name, image, details, stock, price } = props.product
  return (
    <div>
      <div className='img-container'>
        <img src={image} alt={name}/>
      </div>
      <h3>Name: {name}</h3>
      <p>Details: {details}</p>
      <p>Price: {price}</p>
      <p>Stock: {stock}</p>
      
      <button>Delete</button>
      <button>Edit</button>
    </div>
  )
}
