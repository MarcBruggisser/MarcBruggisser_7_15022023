import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function A_Propos() {

  

  const toggleCollapse = (e) => {
    // e.target.classList
    if( e.target.closest("li").classList.length === 0 ){
      e.target.closest("li").classList.add("open")
    } else {
      e.target.closest("li").classList.remove("open")
    }
    console.log(e.target.classList);
  }

  return (
    <>
      <Header />

      <section className="a_propos">
        <div className="wrapper">
          <h1>A propos</h1>
          <span className='background background_a_propos'>
          <span className="filtre_noir"></span>
          </span>
          <ul className='accordeon'>
            <li onClick={toggleCollapse}>
              <h2>Fiabilité</h2>
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </li>
            <li onClick={toggleCollapse}>
              <h2>Respect</h2>
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </li>
            <li onClick={toggleCollapse}>
              <h2>Service</h2>
              <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </li>
            <li onClick={toggleCollapse}>
              <h2>Sécurité</h2>
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </li>
          </ul>
        </div>
      </section>

      <Footer /> 
    </>
  )
}
