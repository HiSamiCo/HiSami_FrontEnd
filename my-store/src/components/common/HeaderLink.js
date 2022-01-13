import React from 'react'
import { NavLink } from 'react-router-dom'
export default function HeaderLink(props) {
    return (
        <NavLink {...props} className={({ active }) => active ? "active" : ""} >
            {props.children}
        </NavLink>
    )
}
