import React from 'react';
import { Link } from 'react-router-dom';

export default function Category(props) {
    const { category_name, category_id } = props.category
    // display a card for each cateogry
    // button for revealing products
    // focus effects greyscale background
    return (
        <Link to={`/adminDash/${category_id}`}>
            <div>
                {category_name}
            </div>
        </Link>
    );
}
