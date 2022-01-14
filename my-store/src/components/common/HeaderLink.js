import React from 'react'
import { NavLink } from 'react-router-dom'
export default function HeaderLink(props) {
    return (
        <NavLink {...props} className={({ isActive }) => isActive ? "active" : ""} >
            {props.children}
        </NavLink>
    )
}
