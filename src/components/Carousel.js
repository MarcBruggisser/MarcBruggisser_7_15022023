import React, {useState} from 'react'
import CarouselSlide from "./CarouselSlide"


export default function Carousel( props ) {

    // On importe les données du logement
    const logement = props.logement;

    // Le state pour gérer la diapo active dans le diapo
    const [active, setActive] = useState(1);

    const diapo = (e) => {
        if(e.target.classList.contains('suivant') && active < logement.pictures.length){ setActive(active + 1); }
        if(e.target.classList.contains('suivant') && active === logement.pictures.length){ setActive(1); }
        if(e.target.classList.contains('precedent') && active > 1) { setActive(active - 1); }
        if(e.target.classList.contains('precedent') && active === 1) { setActive(logement.pictures.length); }
        
        let carouselSlides = document.querySelectorAll('.carousel_slide');
        document.querySelector(".active").classList.remove("active");
        carouselSlides.forEach(slide => parseInt(slide.getAttribute("data")) === (active)? slide.classList.add("active") : null);
    }

    return (
        <div className="carousel_container">
            <div className="carousel_slides">
                { logement.pictures.map( (picture, index) => <CarouselSlide key={index} id={index + 1} srcPicture={picture} title={logement.title} /> )}
            </div>
            { logement.pictures.length > 1? <><span className="fleche precedent" onClick={diapo}></span><span className="fleche suivant" onClick={diapo}></span></> : null 
            }
        </div>
    )
}
