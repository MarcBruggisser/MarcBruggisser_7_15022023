import React from 'react'
import CarouselSlide from "./CarouselSlide"


export default function Carousel( props ) {

    // On importe les données du logement
    const logement = props.logement;

    const diapo = (e) => {
        let carouselSlides = document.querySelectorAll(".carousel_slide");
        let active = document.querySelector(".active");
        let compteurSlide = document.querySelector(".slide_active");
        active.classList.remove("active");

        if( e.target.classList.contains('suivant') ){
            if(active.nextElementSibling){
                active.nextElementSibling.classList.add("active");
                compteurSlide.textContent = parseInt(compteurSlide.textContent) + 1;
            } 
            else{
                carouselSlides[0].classList.add("active");
                compteurSlide.textContent = 1;
            } 
        }
        else{
            if(active.previousElementSibling){
                active.previousElementSibling.classList.add("active");
                compteurSlide.textContent = parseInt(compteurSlide.textContent) - 1;
            } 
            else{
                carouselSlides[carouselSlides.length-1].classList.add("active");
                compteurSlide.textContent = logement.pictures.length;
            } 
        }
    }

    return (
        <div className="carousel_container">
            <div className="carousel_slides">
                { logement.pictures.map( (picture, index) => <CarouselSlide key={index} id={index} srcPicture={picture} title={logement.title} /> )}
            </div>
            {
                logement.pictures.length > 1? 
                    <>
                        <span className="fleche precedent" onClick={diapo}></span><span className="fleche suivant" onClick={diapo}></span>
                        <div className="compteur_slide">
                            <span className="slide_active">1</span>/{logement.pictures.length}
                        </div>
                    </>
                : null 
            }
        </div>
    )
}
