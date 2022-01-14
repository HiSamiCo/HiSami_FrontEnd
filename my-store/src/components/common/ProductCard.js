import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    const { product } = props
    const { image, product_name, stock, price, product_id } = product
    return (
        <li>
            <Link to={`/product/${product_id}`}>
                <div>
                    <img src={image} alt={product_name}/>
                </div>
                <h3>{product_name}</h3>
                <h4>Price: {price}</h4>
                <h4>In Stock: {stock}</h4>
            </Link>
        </li>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string,
        price: PropTypes.number,
        product_id: PropTypes.number,
        product_name: PropTypes.string,
        category_name: PropTypes.string,
        category_id: PropTypes.number,
        stock: PropTypes.number
    })
}