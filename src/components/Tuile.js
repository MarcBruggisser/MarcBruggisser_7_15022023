import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Tuile( props ) {

    return (
        <li className='tuile'>
            <NavLink to={`/fiche_logement/${props.id}`} className="lien_logement">{props.id}</NavLink>
            <img src={props.cover} alt={props.title} />
            <strong className='titre_tuile'>{props.title}</strong>
        </li>
    )
}
