import React from 'react'

export default function CarouselSlide( props ) {

    return (
        <div key={props.id} className={ props.id ===0 ? "carousel_slide active" : "carousel_slide" }>
            <img src={props.srcPicture} alt={props.title} />
        </div>
    )
}