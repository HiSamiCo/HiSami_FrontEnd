import React from 'react'
import CreateProduct from './CreateProduct'
import Product from './Product'

export default function ManageProducts(props) {
    const { products } = props
    return (
        <div>
            <CreateProduct/>
            {products.map(p => 
                <Product product={p} key={p.product_id}/>
            )} 
        </div>
    )
}
