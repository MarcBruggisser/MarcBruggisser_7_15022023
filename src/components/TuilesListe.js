import React from 'react'
import Tuile from './Tuile'
import jsonData from '../logements.json'

export default function TuilesListe() {    
    return (
        <ul className='liste_tuiles'>
            { 
                jsonData.map( (props) => <Tuile key={props.id} id={props.id} title={props.title} cover={props.cover} />)
            }
        </ul>
    )
}
