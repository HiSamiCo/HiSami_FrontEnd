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
        return`/adminDash/${parseInt(categoryId) === category_id ? "" : category_id}`
    }, [categoryId])

    // display a card for each cateogry
    // button for revealing products
    // focus effects greyscale background
    return (
        <NavLink to={url} onClick={click}>
            <div>
                {category_name}
            </div>
        </NavLink>
    );
}
