import React from 'react'
import { useParams } from 'react-router-dom'
import jsonData from '../logements.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'

export default function FicheLogement() {

  // Trouver l'id de l'élément correspondant à l'url
  const idLogement = useParams().id;
  const logement = jsonData.filter( logement => logement.id === idLogement)[0];

return (
  <>
    <Header />

    <section className="fiche_logement">  
      <div className="wrapper">

        <Carousel logement={logement} />
        
        <div className="infos_principales">
          <div>
            <h1>{logement.title}</h1>
            <strong>{logement.location}</strong>
            <ul className="tags">
              {logement.tags.map( (tag, index) => <li key={index}>{tag}</li> ) }
            </ul>
          </div>
          <div className="hote_et_rating">
            <div className="rating">
              {
                logement.rating
              }
              <span className="etoile"></span>
              <span className="etoile etoile_rouge"></span>
            </div>
            <div className="hote">
              <div>{logement.host.name}</div>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
        </div>

        <ul className="infos_secondaires collapse">

          <Collapse title="Description" description={logement.description} />
          
          <Collapse 
            title="Equipements" 
            description={<ul>{logement.equipments.map(equipment => <li>{equipment}</li>)}</ul>} 
          />
      
        </ul>
      </div>      
    </section>

    <Footer /> 
  </>
)
}