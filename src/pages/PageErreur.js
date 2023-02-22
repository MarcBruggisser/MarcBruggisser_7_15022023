import React, {useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {NavLink} from 'react-router-dom'

export default function PageErreur() {

  useEffect(() => {
    document.title = 'Kasa - 404'
  }, [])

  return (
      <>
        <Header />

        <section className="page_erreur">
          <h1 className='page_erreur_titre'>404</h1>
          <p className='page_erreur_paragraphe'>Oups ! La page que vous demandez n'existe pas.</p>
          <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
        </section>

        <Footer /> 
      </>
  )
}
