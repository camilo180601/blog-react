import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to="/index">Inicio</NavLink></li>
        <li><NavLink to="/articles">Articulos</NavLink></li>
        <li><NavLink to="/create-article">Crear Articulo</NavLink></li>
        <li><NavLink href="#">Contacto</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav