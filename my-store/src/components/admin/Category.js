import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Category(props) {
    const { category_name, category_id } = props.category
    const [toggle, setToggle] = useState(false)
    const { category_id: categoryId } = useParams()

    const click = () => {
        setToggle(!toggle)
    }
    const url = useMemo(() => {
        const focused = parseInt(categoryId) === category_id
        return`/adminDash/${focused ? "" : category_id}`
    }, [categoryId]) // eslint-disable-line

    // display a card for each cateogry
    // button for revealing products
    // focus effects greyscale background
    return (
        <NavLink className="categoryNames" to={url} onClick={click}>
            
                {category_name}
            
        </NavLink>
    );
}
