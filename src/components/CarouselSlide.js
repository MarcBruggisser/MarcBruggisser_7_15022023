import React from 'react'

export default function CarouselSlide( props ) {

    return (
        <div key={props.id} className={ props.id ===1 ? "carousel_slide active" : "carousel_slide" } data={props.id}>
            <img src={props.srcPicture} alt={props.title} />
        </div>
    )
}