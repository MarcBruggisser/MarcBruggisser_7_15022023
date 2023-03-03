import React from 'react'
import CarouselSlide from "./CarouselSlide"


export default function Carousel( props ) {

    // On importe les données du logement
    const logement = props.logement;

    const diapo = (e) => {
        let carouselSlides = document.querySelectorAll(".carousel_slide");
        let active = document.querySelector(".active");
        active.classList.remove("active");

        if( e.target.classList.contains('suivant') ){
            if(active.nextElementSibling) active.nextElementSibling.classList.add("active");
            else carouselSlides[0].classList.add("active");
        }
        else{
            if(active.previousElementSibling) active.previousElementSibling.classList.add("active");
            else carouselSlides[carouselSlides.length-1].classList.add("active");
        }
    }

    return (
        <div className="carousel_container">
            <div className="carousel_slides">
                { logement.pictures.map( (picture, index) => <CarouselSlide key={index} id={index} srcPicture={picture} title={logement.title} /> )}
            </div>
            { logement.pictures.length > 1? <><span className="fleche precedent" onClick={diapo}></span><span className="fleche suivant" onClick={diapo}></span></> : null 
            }
        </div>
    )
}
