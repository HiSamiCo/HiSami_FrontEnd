import React from 'react'
import PropTypes from "prop-types"

export default function ProductCard(props) {
    return (
        <li>
            
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