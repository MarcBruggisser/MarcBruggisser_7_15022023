import React from 'react'

export default function Banner( props ) {
  return (
    <span className={'background ' + props.className}>
        <span className="filtre_noir"></span>
        {props.text ? <em>{props.text}</em> : null}
    </span>
  )
}
