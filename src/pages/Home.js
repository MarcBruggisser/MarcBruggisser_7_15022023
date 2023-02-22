import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TuilesListe from '../components/TuilesListe'
import Banner from '../components/Banner'

export default function Home() {

  return (
    <>
      <Header />

      <section className="home">

        <h1>Kasa Locations</h1>

        <div className="wrapper">
          
          <Banner className="background_home" text="Chez vous, partout et ailleurs" />

          <TuilesListe />
          
        </div>
      </section>

      <Footer /> 
    </>
  )
}