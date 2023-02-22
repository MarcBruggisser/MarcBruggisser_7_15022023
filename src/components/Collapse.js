import React from 'react'

export default function Collapse(props) {

    const toggleCollapse = (e) => {
        if( e.target.closest("li").classList.length === 0 ){
          e.target.closest("li").classList.add("open")
        } else {
          e.target.closest("li").classList.remove("open")
        }
    }

    return (
        <li onClick={toggleCollapse}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    )
}