import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import jsonData from '../logements.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'

export default function FicheLogement() {

  useEffect(() => {
    document.title = 'Kasa - Réserver un logement'
  }, [])

  // Trouver l'id de l'élément correspondant à l'url
  const idLogement = useParams().id;
  const logement = jsonData.filter( logement => logement.id === idLogement)[0];

  if( logement === undefined ) window.location= '/erreur';

  // Pour afficher les bonnes étoiles
  let tableauNombreEtoiles = [];
  let resteEtoile = 5 - parseInt(logement.rating);
  let tableauResteEtoiles = [1,2,3,4,5];

  function afficherEtoiles () {
    for (let i = 1; i <= parseInt(logement.rating); i++) {
      tableauNombreEtoiles.push(i);
    }
    
    tableauResteEtoiles = tableauResteEtoiles.slice(0, resteEtoile);
  }
  afficherEtoiles();
  

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
              {logement.tags.map( (tag) => <li key={tag}>{tag}</li> ) }
            </ul>
          </div>
          <div className="hote_et_rating">
            <div className="rating">
              { tableauNombreEtoiles.map( (num) => <span key={num} className="etoile etoile_rouge"></span>)}
              { tableauResteEtoiles.map( (num) => <span key={num} className="etoile"></span>)}
            </div>
            <div className="hote">
              <div>{logement.host.name}</div>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
        </div>

        <ul className="infos_secondaires collapse">

          <Collapse title="Description" description={<p>{logement.description}</p>} />
          
          <Collapse 
            title="Equipements"
            description={<ul>{logement.equipments.map( (equipment, index) => <li key={index}>{equipment}</li>)}</ul>} 
          />
      
        </ul>
      </div>      
    </section>

    <Footer /> 
  </>
)
}