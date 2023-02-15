import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import jsonData from '../logements.json'

export default function Home() {

  useEffect(() => {
    jsonData.map( (item) => {

    })
  }, [])


  return (
    <>
      <Header />

      <section className="home">
        <h1>Kasa Locations</h1>
        <div className="wrapper">
          <span className="background background_home">
            <span className="filtre_noir"></span>
            <em>Chez vous, partout et ailleurs</em>
          </span>
          <ul>

          </ul>
        </div>
      </section>

      <Footer /> 
    </>
  )
}