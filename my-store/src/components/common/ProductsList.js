import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsList(props) {
    const { products } = props
    return (
        <div>
            {products.map(p => 
                <ProductCard product={p} key={p.product_id}/>
            )}
        </div>
    )
}
