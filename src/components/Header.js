import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <header>
        <div className="wrapper">
            <div className="logo_site">
                <NavLink to="/" className="lien_logo">Accueil</NavLink>
                <img src="../../img/kasa_logo.svg" alt="logo kasa" />
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/a_propos">A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}